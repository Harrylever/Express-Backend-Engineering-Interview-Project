const { UserModel } = require('../models');

async function createNewUserRecord(data) {
  try {
    const userDocExists = await UserModel.findOne({ name: data.name });

    if (userDocExists) {
      return {
        success: true,
        message: 'User name exists',
      };
    }

    const userDoc = await UserModel.create({
      name: data.name,
      mainOption: data.mainOptions,
      subOption: data.subOptions,
      childOption: data.childOptions,
      subChildOption: data.subChildOptions,
    });

    const { _doc } = userDoc;

    return {
      success: true,
      message: 'Record created successfully',
      ..._doc,
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  createNewUserRecord,
};
