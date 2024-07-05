import mongoose from 'mongoose'


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MangoMartDB:mangoMart1@cluster0.l3hjmz1.mongodb.net/MangoMart').then(()=>console.log("DB connected"));

}