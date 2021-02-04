import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Review = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    sort: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Review`, Review, `Review`);
