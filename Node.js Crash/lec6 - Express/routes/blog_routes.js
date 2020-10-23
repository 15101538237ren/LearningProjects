const express = require('express');
const blog_controller = require('../controllers/blog_controller');

const router = express.Router();

router.get('/create', blog_controller.blog_create_get);
router.get('/', blog_controller.blog_index);
router.post('/', blog_controller.blog_create_post);
router.get('/:id', blog_controller.blog_details);
router.delete('/:id', blog_controller.blog_delete);

module.exports = router;