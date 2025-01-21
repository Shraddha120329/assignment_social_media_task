import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log("Error connection to MongoDB: ", error.message);
		process.exit(1);
    }
};

export default connectDb;