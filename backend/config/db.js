import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://waterclear01:waterclear@cluster0.3hn7s8i.mongodb.net/YumVi').then(()=>console.log("DB Connected"))

}