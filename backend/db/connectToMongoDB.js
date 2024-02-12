import mongoose from 'mongoose'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log('Connected to MongoDB')
    } catch (err) {
        console.log('Error connection to MongoDB', err.message)
    }
}

export default connectToMongoDB