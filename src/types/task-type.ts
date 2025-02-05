import { Types } from "mongoose"

export default interface TaskInterface {
    title: string,
    description?: string,
    completed: boolean,
    createdAt: Date,
    userId: Types.ObjectId
}