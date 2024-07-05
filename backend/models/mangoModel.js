import mongoose from "mongoose";

const mangoSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:String, required:true}
})

const mangoModel = mongoose.models.mango || mongoose.model("mango",mangoSchema);

export default mangoModel;