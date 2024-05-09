const Category = require('../Models/category.model')
class CategoryContoller {
    static addCategory = async (req, res)=>{
        const {title} = req.body;
        try {
            if (title) {
                const addcetgory = await Category.create({
                    title : title,
                })
                if (addcetgory) {
            return res.status(200).json({message : "Category Added fk."})               
                }
            }else{
            return res.status(400).json({message : "All fields are Required."})               
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
    static getCategory = async (req, res)=>{
        try {
            const getCategory = await Category.find({})
            if (getCategory) {
            return res.status(200).json({message : "Category Finded", getCategory})               
                }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
    }
}

module.exports = CategoryContoller;