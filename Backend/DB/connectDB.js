import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("Errot connecting to MongoDB",error.message);
    }
}
export default connectToMongo;