const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    rgscId: {
      type: Number,
      required: true,
      unique: true,
    },
    position: {
      required: true,
      default: {},
    },
    identification: {
      type: Object,
      required: true,
      default: {
        idCard: "Undefined_ID",
        firstName: "Undefined_First",
        lastName: "Undefined_Last",
        date: "Undefined_Date",
        sex: "Undefined_Sex",
      },
    },
    account: {
      type: Object,
      required: true,
      default: {
        cash: 0,
        bank: 0,
      },
    },
    stats: {
      type: Object,
      required: true,
      default: {
        health: 100,
        armor: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;
