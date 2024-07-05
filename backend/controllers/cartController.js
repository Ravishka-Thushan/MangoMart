import userModel from '../models/userModel.js'


// add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById({_id:req.body.userId});
        let cartData = userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message:"Mango Added To Basket"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message:"Mango Removed From Basket"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

//fetch user cert data
const getCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;
        res.json({success:true, cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

export {addToCart,removeFromCart,getCart}