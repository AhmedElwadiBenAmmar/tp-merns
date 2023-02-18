import express from "express";
import calculatorRouter from "../routes/calculator";

const app = express();

app.use("/", calculatorRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
