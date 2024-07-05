import express from 'express'
import { addMango, listMango, removeMango } from '../controllers/mangoController.js'
import multer from 'multer'

const mangoRuter = express.Router();

// Image Store in upload folder

const storage = multer.diskStorage({
    destination: 'uploads',
    filename : (req, file, cb)=> {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage})

mangoRuter.post('/add',upload.single('image'),addMango)
mangoRuter.get('/list',listMango)
mangoRuter.post('/remove',removeMango)


export default mangoRuter;