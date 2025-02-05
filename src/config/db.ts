import mongoose from "mongoose";
const uri = process.env.URI;


async function DbConnect() {
    try {
        if (!uri) {
            throw new URIError('Couldn\'t connect with DB. Problem with uri')
        }

        await mongoose.connect(uri)
        console.log('Connection with DB is successful');
    } catch (error) {
        console.error(error)
    }
}


export default DbConnect