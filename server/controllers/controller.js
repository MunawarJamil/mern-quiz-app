import questionModel from "../models/questions.model.js";
import resultModel from "../models/result.model.js";
import questions, { answers } from "../db/data.js";

export async function getQuestions(req, res) {
  // res.json("this is questions request");
  const storedQuestions = await questionModel.find();
  try {
    res.json(storedQuestions);
  } catch (error) {
    console.log("cannot find any question in the database", error);
  }
}

//post request
export async function insertQuestions(req, res) {
  try {
    const data = await questionModel.insertMany([
      { questions, answers }, // Ensure the data matches your schema
    ]);
    res.json({ message: "Data inserted successfully.", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while inserting data." });
  }
}

//delet all questions
export async function dropQuestions(req, res) {
  // res.json("drop  questions request to delete");
  try {
    await questionModel.deleteMany();
    res.json({ message: "all questions are deleted successfully..." });
  } catch (error) {
    res.json({ error });
  }
}

/** get all result */
export async function getResult(req, res) {
  try {
    const r = await resultModel.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function insertResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");
    const createResult = await resultModel.create({
      username,
      result,
      attempts,
      points,
      achived,
    });

    res.json({ msg: "Result Saved Successfully...!" ,data: createResult}, );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await resultModel.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
