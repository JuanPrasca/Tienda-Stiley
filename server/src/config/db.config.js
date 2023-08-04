import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://stiley:stileystore20@juanprasca.8hh5soz.mongodb.net/stileyBD");
        console.log("DB-Connect")
    } catch (error) {
        console.log(error)
    }
}