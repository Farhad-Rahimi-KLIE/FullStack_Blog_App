const Blog = require('../Models/blog.model')
class BlogController {
 static addBlg =  async (req, res)=>{
    const {title, category, description} = req.body;
    try {
        if (title, category, description) {
            const addblog = await Blog.create({
                title : title,
                category : category,
                description : description,
                thumbnail : req.file.filename,
                user : req.user._id
            });
            if (addblog) {
            return res.status(200).json({message : "Blog added Successfully."})
            }
        } else {
            return res.status(400).json({message : "All Fields Required."})
        }
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
 }
 static getlog =  async (req, res)=>{
    try {
        const gtblog = await Blog.find({user : req.user._id});
        return res.status(200).json({message : "Blog Geted.", gtblog})
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
 }
 static getSingleBlog =  async (req, res)=>{
    const {id} = req.params;
    try {
        if (id) {
            const getsingl = await Blog.findById(id);
        return res.status(200).json({message : "Single Blog Geted.", getsingl})
        }else{
        return res.status(400).json({message : "Invalid ID"})
        }
    } catch (error) {
        return res.status(400).json({message : error.message})
    }
 }
}

module.exports = BlogController;