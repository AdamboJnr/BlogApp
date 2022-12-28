const Blog = require('../models/blog')

const getAllBlogs = async (req, res) => {
    try {
        const posts = await Blog.find({});

        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later" })
    }    
}

const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await Blog.create({ title, content });

        res.status(200).json({ message: "Post succesfully created"});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later" })
    }
}

const editBlog = async (req, res) => {
    try {
        const id = req.params.id

        const post = await Blog.findOneAndUpdate({ _id: id}, req.body, { new: true, runValidators: true})

        if(!post){
            return res.status(404).json({ message: "No post Found"})
        }
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later" })
    }
}

const findBlog = async (req, res) => {
    try {
        const id = req.params.id

        const post = await Blog.findOne({ _id: id})
    
        if(!post){
            return res.status(404).json({ message: "Post Not Found"})
        }

        res.status(200).json({ post })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later" })
    }

}

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id

        const post = await Blog.findOneAndDelete({ _id: id})
    
        if(!post){
            return res.status(404).json({ message: "Post Not Found"})
        }
        res.status(200).json({ message: "Deleted the post"})

    } catch (error) {
        res.status(500).json({ message: "Something went wrong. Please try again later" })
    }

}

module.exports = {
    deleteBlog, findBlog, getAllBlogs, createBlog, editBlog
}