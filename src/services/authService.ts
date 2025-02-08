import User from "../models/user-model.js";
import UserData from "../types/user-type.js";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";
import { Types } from "mongoose";

const JWT_SECRET: Secret = process.env.JWT_SECRET!;

export async function register(data: UserData) {
  if (!data) return;

  const counts = await User.countDocuments({ email: data.email });
  if (counts > 0) {
    throw new Error("Email is already taken.");
  }

  const user = await User.create(data);
  return tokenGenerator(user._id, user.email);
}

export async function login(email: string, password: string) {
  if (!email || !password) return;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email or Password don't match!");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Email or Password don't match!");
  }

  return tokenGenerator(user._id, user.email);
}

export function tokenGenerator(id: Types.ObjectId, email: string) {
  const payload = { id, email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

  return token;
}
