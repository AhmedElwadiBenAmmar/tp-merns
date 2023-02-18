import { NextFunction, Request, Response } from "express";

export const verify = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { op, a, b },
  } = req;
  var x: number = +a;
  var y: number = +b;

  if (!Number.isNaN(x) && !Number.isNaN(y)) {
    if (op === "sum" || op === "sous" || op === "mult" || op === "div")
      next();
    else {
      res.send("Error: you must choose sum or sous or mult ou div");
    }
  } else {
    res.send("Error: a ou b not number");
  }
};
