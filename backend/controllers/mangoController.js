import mangoModel from "../models/mangoModel.js";
import fs from 'fs'


// add mango item

const addMango = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const mango = new mangoModel({
        name: req.body.name,
        price: req.body.price,
        image: image_filename
    })
    try {
        await mango.save();
        res.json({success:true,message: "Mango Added successfully" })
    }catch (error) {
        console.log(error)
        res.json({success:false,message: "Error" })
    }
}

// all mango varieties list
const listMango = async (req,res) => {
    try {
        const mango = await mangoModel.find({});
        res.json({success:true, data:mango})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error" });
    }
}

// remove mangoes
const removeMango = async (req, res) => {
    try {
        const mango = await mangoModel.findById(req.body.id);
        fs.unlink(`uploads/${mango.image}`,() => {})

        await mangoModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Mango Removed successfully" })
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error" });
    }
}

export {addMango,listMango,removeMango}
