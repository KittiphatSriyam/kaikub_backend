const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  district: String,
  amphoe: String,
  province: String,
  zipcode: Number,
  district_code: Number,
  amphoe_code: Number,
  province_code: Number,
});

module.exports = {
  ProvinceSchema,
};
