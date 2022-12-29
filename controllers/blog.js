const Blog = require('../models/blog')
const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middleware/async')
const {schema} = require('../middleware/validate')

const getAllBlogs = asyncWrapper( async (req, res) => {
        const posts = await Blog.find({})

        res.status(200).json({ posts })   
})

const createBlog = asyncWrapper( async (req, res, next) => {
        const { error } = await schema.validate(req.body)

        if(error){
            return next(createCustomError('Post should not exceed 400 characters and title should not exceed 100 characters', 403))
        } 

        const { title, content } = req.body;

        const post = await Blog.create({ title, content });

        res.status(200).json({ message: "Post succesfully created"});
})

const editBlog = asyncWrapper( async (req, res, next) => {
        const { error } = await schema.validate(req.body)

        if(error) return next(createCustomError('Post should not exceed 400 characters and title should not exceed 100 characters', 403))

        const id = req.params.id

        const post = await Blog.findOneAndUpdate({ _id: id}, req.body, { new: true, runValidators: true})

        if(!post){
            return next(createCustomError(`No such post with id: ${id}`), 404)
        }
        res.status(200).json({ post })
})

const findBlog = asyncWrapper( async (req, res, next) => {
        const id = req.params.id

        const post = await Blog.findOne({ _id: id})
    
        if(!post){
            return next(createCustomError(`No such post with id: ${id}`, 404))
        }

        res.status(200).json({ post })
})

const deleteBlog = asyncWrapper( async (req, res, next) => {
        const id = req.params.id

        const post = await Blog.findOneAndDelete({ _id: id})
    
        if(!post){
            return next(createCustomError(`No such post with id: ${id}`, 404))
        }
        res.status(200).json({ message: "Deleted the post"})
})

module.exports = {
    deleteBlog, findBlog, getAllBlogs, createBlog, editBlog
}