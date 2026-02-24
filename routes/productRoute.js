import {addProduct, showProducts, deleteProduct} from "../controllers/productController.js";

import express from 'express'
const productRouter = express.Router()

productRouter.get("/", showProducts);
productRouter.post("/addProduct", addProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;