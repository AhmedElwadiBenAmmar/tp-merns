import express, { Request, Response } from "express";

const app = express();

app.use("/wadi",(req:Request,res:Response)=> {

    const {numberOne: n1,numberTow: n2} = req.query
    console.log(req.query.numberOne)
    console.log(req.query.numberTow)
    const sum = Number(n1) + Number(n2);
    res.status(200).send(`la somme de ${n1} et ${n2} est ${sum}`);
});

app.listen(6002, () => {
    console.log("server listening on 6002");
  });