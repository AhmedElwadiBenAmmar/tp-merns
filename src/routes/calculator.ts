import express, { NextFunction, Request, Response } from "express";
import { verify } from "../Middleware/validateparams";
import { CalculatorController } from "../controllers/MathController";

const calculatorRouter = express.Router();
const controller = new CalculatorController();

calculatorRouter.get("/:op/:a/:b", verify, controller.calculate);

export default calculatorRouter;
