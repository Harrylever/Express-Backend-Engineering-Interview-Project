const express = require('express');
const { CreateNewUserRecordController } = require('../controllers/user.controller');

const router = express.Router();

/**
 * Create new user route
 */
router.route('/create').post(CreateNewUserRecordController);

module.exports = router;
