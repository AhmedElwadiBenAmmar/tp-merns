import { NextFunction, Request, Response } from "express";

export class CalculatorController {
  calculate = (req: Request, res: Response, next: NextFunction) => {
    const {
      params: { op, a, b },
    } = req;
    var x: number = +a;
    var y: number = +b;
    var s;

    switch (op) {
      case "sum":
        res.status(200).send(
          `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x + y}`
        );
        break;
      case "sous":
        res.status(200).send(
          `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x - y}`
        );
        break;
      case "mult":
        res.status(200).send(
          `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x * y}`
        );
        break;
      case "div":
        res.status(200).send(
          `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x / y}`
        );
        break;
      default:
        break;
    }
  };
}
