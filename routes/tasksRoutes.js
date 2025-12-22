const express = require('express');
const { getTasks, postTask } = require('../controllers/taskControllers');
const router = express.Router();

router.get('/' ,getTasks);
router.post('/', postTask);
module.exports = router;