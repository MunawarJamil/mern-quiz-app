import express from "express";
import morgan from "morgan"; // it will display requested response in console
import cors from "cors";
import { config } from "dotenv";
import router from "./routes.js";
import { db_connection } from "./db/conn.js";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

//==========if database connected then start the server=======//
db_connection()
  .then(() => {
    app.listen(port, () => {
      console.log("app is listening on localhost");
    });
  })
  .catch((error) => {
    console.log("failed to connect", error);
  });
// PORT variable
const port = process.env.PORT;
// console.log(port);

// routes
app.use("/api", router);
app.get("/", (req, res) => {
  res.json("get request");
});
