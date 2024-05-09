const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/Image");
const checkuserauthecated = require('../Middlewares/authMiddlewares')
const Authentecation = require("../Controller/AuthController");
const CategoryContoller = require("../Controller/CategoeryController");
const BlogController = require("../Controller/BlogController");

// Authentication Routes
router.post('/register', Authentecation.Register)
router.post('/login', Authentecation.Login)

// Category Routes
router.post('/addCategory',checkuserauthecated, CategoryContoller.addCategory)
router.get('/getCategory',checkuserauthecated, CategoryContoller.getCategory)

// Blogs Routes
router.post('/addblog',upload.single('thumbnail'),checkuserauthecated, BlogController.addBlg)
router.get('/getBlog',checkuserauthecated, BlogController.getlog)
router.get('/getsingleblog/:id',checkuserauthecated, BlogController.getSingleBlog)


module.exports = router;