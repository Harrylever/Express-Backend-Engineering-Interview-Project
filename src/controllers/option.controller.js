const httpStatus = require('http-status');
const { catchAsync } = require('../utils');
const {
  GetSingleOption,
  CreateNewOption,
  GetAllOptions,
  CreateMultipleOptions,
} = require('../services/option.service');

const CreateNewOptionController = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await CreateNewOption(data);
  return res.status(httpStatus.CREATED).send(result);
});

const CreateMultipleOptionsController = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await CreateMultipleOptions(data);
  return res.status(httpStatus.CREATED).send(result);
});

const GetSingleOptionController = catchAsync(async (req, res) => {
  const optionId = req.params;
  const result = await GetSingleOption(optionId);
  return res.status(httpStatus.OK).send(result);
});

const GetAllOptionsController = catchAsync(async (req, res) => {
  const result = await GetAllOptions();
  return res.status(httpStatus.OK).send(result);
});

module.exports = {
  CreateNewOptionController,
  CreateMultipleOptionsController,
  GetSingleOptionController,
  GetAllOptionsController,
};
