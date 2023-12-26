const httpStatus = require('http-status');
const { catchAsync } = require('../utils');
const { CreateNewActiveRecord, GetActiveRecord } = require('../services/activerecord.service');

const CreateNewActiveRecordController = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await CreateNewActiveRecord(data);
  return res.status(httpStatus.CREATED).send(result);
});

const GetActiveRecordController = catchAsync(async (req, res) => {
  const { recordId } = req.params;
  const result = await GetActiveRecord(recordId);
  return res.status(httpStatus.OK).send(result);
});

module.exports = {
  CreateNewActiveRecordController,
  GetActiveRecordController,
};
