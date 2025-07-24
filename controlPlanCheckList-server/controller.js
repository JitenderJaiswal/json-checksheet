const ControlPlanCheckListDND = require('./model');
const createError = require('http-errors');
const { isValid } = require('../../utils/isValid');

const createModule = async (req, res, next) => {
  try {
    const doc = new ControlPlanCheckListDND(req.body);
    let result = await doc.save();
    if (!result) {
      throw createError(400, 'ControlPlanCheckList not created');
    }
    res.status(200).send({
      status: 'success',
      msg: 'new ControlPlanCheckList created successfully',
    });
  } catch (err) {
    next(err);
  }
};

const getByMonth = async (req, res, next) => {
  const { page = 1 } = req.query;
  const perPage = isValid(req.query.perPage) ? Number(req.query.perPage) : 10;

  const date = new Date(req.params.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  let nextMonth = month;
  let nextYear = year;
  if (month == 12) {
    nextMonth = 1;
    nextYear += 1;
  } else {
    nextMonth += 1;
  }

  const queryExpression = {
    $and: [
      {
        module_date: {
          $gte: new Date(year, month, 1, 0, 0, 0), // Start of the day
          $lt: new Date(nextYear, nextMonth, 1, 0, 0, 0), // Start of the next day
        },
      },
    ],
  };

  try {
    const result = await ControlPlanCheckListDND.find(queryExpression)
      .populate('part_id', 'part_name part_number')
      .select({ module_date: 1, part_id: 1 })
      .sort({ module_date: -1 })
      .limit(perPage)
      .skip(perPage * (page - 1));
    if (!result) {
      throw createError(404, 'ControlPlanCheckList not exits');
    }

    const totalCount = await ControlPlanCheckListDND.countDocuments(queryExpression);
    res.status(200).json({
      results: result,
      pages: Math.ceil(totalCount / perPage),
      page,
      perPage,
    });
  } catch (error) {
    next(error);
  }
};

const getModuleById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ControlPlanCheckListDND.findById(id).populate({
      path: 'part_id',
      select: 'part_name part_number customer_id model_id',
      populate: {
        path: 'customer_id model_id',
        select: 'customer_name model_name',
      },
    });
    if (!result) {
      throw createError(404, 'ControlPlanCheckList not found');
    }
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

const updateModule = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ControlPlanCheckListDND.findByIdAndUpdate(id, req.body);
    if (!result) {
      throw createError(400, 'ControlPlanCheckList unable to update');
    }
    res.status(200).send({
      status: 'success',
      msg: 'ControlPlanCheckList updated successfully',
    });
  } catch (err) {
    next(err);
  }
};

const deleteModule = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ControlPlanCheckListDND.findByIdAndDelete(id);
    if (!result) {
      res.status(400).send({
        status: 'failed',
        msg: 'ControlPlanCheckList not deleted ',
      });
    }
    res.status(200).send({
      status: 'success',
      msg: 'ControlPlanCheckList deleted',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createModule,
  getByMonth,
  getModuleById,
  updateModule,
  deleteModule,
};
