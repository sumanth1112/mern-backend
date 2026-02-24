import productModel from "../models/productModel.js"

const addProduct = async (req, res) => {
    const result = await productModel.create(req.body);
    res.json(result)
};

const showProducts = async (req, res) => {
    const result = await productModel.find();
    res.json(result);
}

const deleteProduct = async (req, res) => {
    const result = await productModel.findByIdAndDelete(req.params.id);
    res.json(result);
}

export {addProduct, showProducts, deleteProduct};