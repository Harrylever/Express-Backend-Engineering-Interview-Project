const { ActiveRecordModel } = require('../models');
const { compareArrays } = require('../utils');

async function CreateNewActiveRecord(data) {
  try {
    if (data.currentRecordId !== '') {
      const currentRecord = await ActiveRecordModel.findById(data.currentRecordId);

      const currentRecordMute = {
        name: currentRecord.name,
        sectors: currentRecord.sectors.map((sector) => sector.value).sort(),
      };

      if (currentRecordMute.name === data.name) {
        if (!compareArrays(currentRecordMute.sectors, data.sectors)) {
          return {
            success: false,
            message: 'Record already exists',
          };
        }
      }

      await currentRecord.deleteOne();
    }

    const newActiveRecord = await ActiveRecordModel.create({
      name: data.name,
      sectors: data.sectors,
      checked: true,
    });

    const { _doc } = newActiveRecord;

    return {
      success: true,
      message: 'Record added successfully',
      data: _doc,
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

async function GetActiveRecord(recordId) {
  try {
    const record = await ActiveRecordModel.findById(recordId);

    if (!record) {
      return {
        success: false,
        message: 'Record does not exists',
      };
    }

    return {
      success: true,
      message: 'Record retrieved successfully',
      data: record,
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  CreateNewActiveRecord,
  GetActiveRecord,
};
