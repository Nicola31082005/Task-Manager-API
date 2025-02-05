import User from "../models/user-model.js"
import UserData from "../types/user-type.js"


export async function register(data: UserData){
    try {
        if (!data) return
        await User.create(data)
    } catch (error) {
        console.error(error)
    }
    
    
    
} 

