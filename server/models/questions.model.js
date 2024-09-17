import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
  {
    questions: { type: Array, default: [] },
    answers: { type: Array, default: [] },
  },
  { timestamps: true }
);

const questionModel = mongoose.model("Question", questionSchema);
export default questionModel;
