import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {

        console.log("URL is ", process.env.MONGODB_URL)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongodb connected . DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("db Connection error", error)
        process.exit(1)
    }
}


export default connectDB