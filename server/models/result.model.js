import mongoose from "mongoose";
const resultSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    result: { type: Array, default: [] },
    attempts: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    achieved: { type: String, default: "" },
  },
  { timestamps: true }
);

const resultModel = mongoose.model("Result", resultSchema);
export default resultModel;
