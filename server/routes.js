import { Router } from "express";
// import { getQuestions } from "./controllers/controller.js";
import * as controller from "./controllers/controller.js";
const router = Router();
export default router;

// router.get("/questions", (req, res) => {
//   res.json("this is question request ");
// });

// //=====================================================
// router.get("/questions", controller.getQuestions);
// router.post("/questions", controller.insertQuestions);
//=====================================================

//instead do chainning here

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions)
//Result routes
  router
  .route("/result")
  .get(controller.getResult)
  .post(controller.insertResult)
  .delete(controller.dropResult)
