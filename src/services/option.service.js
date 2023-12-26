const { OptionModel } = require('../models');

async function CreateNewOption(data) {
  try {
    const optionExists = await OptionModel
      .findOne({ value: data.value });

    if (optionExists) {
      return {
        success: false,
        message: 'Option with name or value exists',
      };
    }

    const newOption = await OptionModel.create({
      name: data.name,
      value: data.value,
      type: data.type,
      index: data.index,
    });

    const { _doc } = newOption;

    return {
      success: true,
      message: 'Doc added successfully',
      data: {
        ..._doc,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

async function CreateMultipleOptions(data) {
  try {
    await OptionModel.insertMany(data)
      .then(() => {
        console.log('Document inserted');
      })
      .catch((err) => console.log(err));

    return {
      success: true,
      message: 'Docs added successfully',
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

async function GetSingleOption(optionId) {
  try {
    const option = await OptionModel.findById(optionId);

    if (!option) {
      return {
        success: false,
        message: 'Option does not exists',
      };
    }

    return {
      success: true,
      message: 'Option retrieved',
      data: {
        ...option,
      },
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

async function GetAllOptions() {
  try {
    const options = await OptionModel.find({}).sort('index');

    if (!options) {
      return {
        success: false,
        message: 'Options not found',
      };
    }

    return {
      success: true,
      message: 'Options retrieved',
      data: options,
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  CreateNewOption,
  CreateMultipleOptions,
  GetSingleOption,
  GetAllOptions,
};
