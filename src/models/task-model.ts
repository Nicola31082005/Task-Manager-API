import { Schema, model, Types } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})


const Task = model('Task', taskSchema);

export default Task