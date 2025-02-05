import User from "../models/user-model.js"
import UserData from "../types/user-type.js"
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import 'dotenv/config'

const JWT_SECRET: Secret = process.env.JWT_SECRET!;

export async function register(data: UserData){
    if (!data) return

    const counts = await User.countDocuments({ email: data.email })        
    if (counts > 0) {
        throw new Error('Email is already taken.')
    }

    return await User.create(data)    
} 

export async function login(email: string, password: string){
    if (!email || !password) return

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Email or Password don\'t match!');
    }

    const isValid = bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Email or Password don\'t match!')
    }
    
    const payload = { id: user._id, email: user.email }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

    return token;    
} 


