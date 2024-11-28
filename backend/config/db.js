import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/Food-Delivery').then(()=>console.log('DB connected'));
}
