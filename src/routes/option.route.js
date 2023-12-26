const express = require('express');

const router = express.Router();

const {
  CreateNewOptionController,
  GetSingleOptionController,
  GetAllOptionsController,
  CreateMultipleOptionsController,
} = require('../controllers/option.controller');

//
router.route('/create').post(CreateNewOptionController);

//
router.route('/createmultiple').post(CreateMultipleOptionsController);

//
router.route('/getsingle/:optionId').get(GetSingleOptionController);

//
router.route('/getmultiple').get(GetAllOptionsController);

module.exports = router;
