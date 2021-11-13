const mongoose = require("mongoose");

const blipSchema = new mongoose.Schema(
  {
    rgscId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    sprite: {
      type: Number,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      required: true,
    },
    color: {
      type: Number,
      required: true,
    },
    shortRange: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blip = mongoose.model("Blip", blipSchema);
module.exports = Blip;
