//
// author: Maha Waris Khan & Shayan M Hussain 


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var VoucherSchema = new mongoose.Schema(
  {
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    date: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    account: {
      type: Array,
      required: true,
      unique: false,
      default: "",
    },
    transNo: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    remarks: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    status: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    approvedBy: {
      type: String,
      required: false,
      unique: false,
      default: "",
    },
    type: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("vouchers",VoucherSchema);
