import process from 'process';

import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use("/helloworld", (req: Request, res: Response) => {
    
const {n1: numberOne,n2: numberTow} = req.query
const sum = Number(numberOne) + Number(numberTow);

res.status(200).send(`la somme de ${numberOne} et ${numberTow} est ${sum}`);

});
app.listen(port, () => {
console.log(`server listening on ${port}`);
});