const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Map the list page
router.get('/', jobController.getAllJobs);

// Map the detail page
router.get('/:id', jobController.getJobById);

module.exports = router;