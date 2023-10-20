import mongoose from "mongoose";

const MONGODB_URI = 'mongodb://localhost:27017/zoneadmin'

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected')
    }catch(e){
        console.log("Error connecting Database", e)
    }
}

export default connectDB