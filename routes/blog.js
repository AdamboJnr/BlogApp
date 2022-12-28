const express = require('express');
const router = express.Router();
const notFound = require('../middleware/not-found');
const { getAllBlogs, createBlog, editBlog, findBlog, deleteBlog } = require('../controllers/blog')

router.route('/').get(getAllBlogs);
router.route('/blog').post(createBlog);
router.route('/blog/:id').get(findBlog).patch(editBlog).delete(deleteBlog);
router.use(notFound);

module.exports = router;