import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

// placing user order for frontend
const placeOrder = async (req,res) => {
    try {
        const newOrder = new orderModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            country: req.body.country,
            phone: req.body.phone,
            items: req.body.order,
            amount: req.body.total,
            userId: req.body.userId
        });
         newOrder.save();
        //await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        
        res.json({ success: true, message: "Order placed successfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// users orders for frontend
const userOrders = async (req,res) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.json({ success: false, message: "No token provided" });
        }

        const decoded = jwt.verify(token, 'random#secret');
        const userId = decoded.id;

        const orders = await orderModel.find({ userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//for get all orders for admin pannel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true, data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//update order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Order status updated successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder, userOrders, listOrders,updateStatus}