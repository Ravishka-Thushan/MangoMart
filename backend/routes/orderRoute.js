import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder , userOrders , listOrders } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.get("/userorders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)


export default orderRouter;