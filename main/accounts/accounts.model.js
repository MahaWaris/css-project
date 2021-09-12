//
// author: Maha Waris Khan & Shayan M Hussain 


const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Accounts = new mongoose.Schema(
  {
    company: [
      {
        type: Schema.Types.ObjectId,
        ref: "companies"
      }
    ],
    code: {
      type: Number,
      required: true,
      unique: false,
      default: "",
    },
    type: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    class: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    group: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    name: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    statement: {
      type: String,
      required: true,
      unique: false,
      default: "",
    },
    description: {
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

module.exports = mongoose.model("accounts", Accounts);
