export default interface Task {
    title: string,
    description?: string,
    completed: boolean,
    createdAt: Date,
    userId: string
}