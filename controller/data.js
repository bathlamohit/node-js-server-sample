const Data = require("../model/data");

exports.getData = async (req, res, next) => {
  try {

    const data = await Data.find();
    if (!data) {
      return res.status(400).send({ message: "No data found." });
    }
    res.send(data);
  } catch (err) {
    return next(err);
  }
};

exports.postData = async (req, res, next) => {
  try {
    if (req.body.input1 === 'NaN' && req.body.input1 === 'NaN' && req.body.input1 === 'NaN') {
      throw 'can not save null or string in number'
    } else {
      const data = await Data({
        input1: req.body.input1,
        input2: req.body.input2,
        result: req.body.result
      });
      await data.save(data);
      res.send(data);
    }

  } catch (err) {
    return next(err);
  }
};
