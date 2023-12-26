const express = require('express');
const { CreateNewActiveRecordController, GetActiveRecordController } = require('../controllers/activerecord.controller');

const router = express.Router();

//
router.route('/create').post(CreateNewActiveRecordController);

//
router.route('/getrecord/:recordId').get(GetActiveRecordController);

// router.route('/delete').post(DeleteActiveRecordController);

module.exports = router;
