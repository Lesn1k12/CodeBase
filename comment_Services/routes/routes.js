const express = require('express');
const router = express.Router();
const {
    createComment,
    getCommentsByProject,
    getSingleComment,
    deleteComment
} = require('../controllers/controllers');

router.post('/create', createComment);

router.get('/project/:project', getCommentsByProject);

router.get('/:id', getSingleComment);

router.delete('/:id', deleteComment);

module.exports = router;
