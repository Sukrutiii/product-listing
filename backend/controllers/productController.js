const Product = require('../models/productModel')

const noteCtrl = {
    getProducts: async (req, res) => {
        try {
            const Products = await Product.find({})
            res.json({products:Products,success:'true'})
        } catch (error) {
            return res.status(500).json({ msg: error.message,success:'false' })
        }
    },
    createProduct: async (req, res) => {
        try {
            const { name,description,tag } = req.body;
            const newProduct = new Product({
                name,
                description,
                tag,
                user_id:req.user.id,
            })
            await newProduct.save()
            res.json({Product:newProduct,success:'true'})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted Succesfully",success:'true'})
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateProduct: async (req, res) => {
        try {
            const { name,description,tag } = req.body;
            await Product.findOneAndUpdate({ _id: req.params.id }, {
                name,description,tag
            })
            res.json({ msg: "Updated Succesfully",success:"true" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    commentProduct: async (req, res) => {
        try {
            const { comment,id } = req.body;
            const product = await  Product.findOne({ _id: id })
            product.comments.push(comment);
            await product.save();
            res.json({ msg: "Comment Added Succesfully",success:"true" })
        } catch (error) {
            return res.status(500).json({ msg: error.message , success:"false"})
        }
    },
    upvoteProduct: async (req, res) => {
        try {
            const { id } = req.body;
            const product = await  Product.findOne({ _id: id })
            if(product.upVotes_id.includes(req.user.id)){
                const temp = product.upVotes_id.filter((ele)=>ele!=req.user.id);
                console.log(temp);
                product.upVotes_id = temp;
                await product.save();
                res.json({ msg: "Upvote Removed Succesfully",success:"true" })
            }else{
                product.upVotes_id.push(req.user.id);
                await product.save();
                res.json({ msg: "Upvote Added Succesfully",success:"true" })
            }
        } catch (error) {
            return res.status(500).json({ msg: error.message , success:"false"})
        }
    },
}

module.exports = noteCtrl