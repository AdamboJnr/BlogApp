const express = require('express');
const router = express.Router();
const notFound = require('../middleware/not-found');
const logger = require('../middleware/logger')
const { getAllBlogs, createBlog, editBlog, findBlog, deleteBlog } = require('../controllers/blog')

router.route('/').get(logger,getAllBlogs);
router.route('/blog').post(logger,createBlog);
router.route('/blog/:id').get(logger,findBlog).patch(logger,editBlog).delete(logger,deleteBlog);
router.use(logger,notFound);

module.exports = router;