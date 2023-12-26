const httpStatus = require('http-status');
const { catchAsync } = require('../utils');
const { createNewUserRecord } = require('../services/user.service');

const CreateNewUserRecordController = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await createNewUserRecord(data);
  return res.status(httpStatus.CREATED).send(result);
});

module.exports = {
  CreateNewUserRecordController,
};
