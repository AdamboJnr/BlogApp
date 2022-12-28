
const getAllBlogs = async (req, res) =>{
    res.status(200).json({ message: "Getting all posts.. "})
}

const createBlog = async (req, res) => {
    res.status(200).json({ message: "Creating a blog..."})
}

const editBlog = async (req, res) => {
    res.status(200).json({ message: "Editing the blog"})
}

const findBlog = async (req, res) => {
    res.status(200).json({ message: "Finding the specific blog..."})
}

const deleteBlog = async (req, res) => {
    res.status(200).json({ message: "Deleting the blog..."})
}

module.exports = {
    deleteBlog, findBlog, getAllBlogs, createBlog, editBlog
}