import User from "../models/user-model.js"
import UserData from "../types/user-type.js"


export async function register(data: UserData){
        if (!data) return

        const counts = await User.countDocuments({ email: data.email })        
        if (counts > 0) {
            throw new Error('Email is already taken.')
        }

        return await User.create(data)    
} 

