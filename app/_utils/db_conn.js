import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: process.env.MONGODB_USERNAME,
            pass: process.env.MONGODB_PASSWORD,
            authSource: 'admin'
        })
        console.log('Database connected')
    }catch(e){
        console.log("Error connecting Database", e)
    }
}

export default connectDB