const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    languageProgram: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    viewsCount: {
      type: Number,
      default: 0, // default value
    },
    likeCount: {
      type: Number,
      default: 0, // default value
    },
  },
  {
    timestamps: true, // new unique date create
  }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
