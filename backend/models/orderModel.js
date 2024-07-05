import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    items:{type:Array, required:true},
    amount:{type:Number, required:true},
    status:{type:String, default:"Mango Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:String,default:"COD"},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    street:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    zipcode:{type:String, required:true},
    country:{type:String, required:true},
    phone:{type:String, required:true}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)
export default orderModel;