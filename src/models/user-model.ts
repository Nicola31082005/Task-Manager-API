import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name: { 
      type: String, 
      required: true
    },
    email: { 
      type: String,
      required: true
    },
    password: { 
      type: String,
      required: true,
      minlength: [6, "The password should be more than 6 characters."],
      maxlength: [14, "The password should be less than 14 characters."],
    }
})

userSchema.virtual('confirmPassword')
    .set(function(confirmPassword: string) {
        if (this.password !== confirmPassword) {
            throw new Error('Passwords missmatch!')
        }
    })

userSchema.pre('save', async function () {
    try {
        this.password = await bcrypt.hash(this.password, 10)
    } catch (error) {
        console.error(error)
    }
})

const User = model('User', userSchema)

export default User