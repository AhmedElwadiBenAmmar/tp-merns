//console.log("hello world"); (test de typescript)
/*import express from 'express'

const app = express()

app.use('/handcheck', (req,res)=>{
    console.log('incoming request ...');
    res.status(200).send('hello from app');
});
*****************wa2l******************************************
app.listen(process.env.PORT, ()=> {
    console.log(`app listing on port ${process.env.PORT} `);
})*/
/*import express, {
    Request,
    Response,
  } from "express";
  const app = express();
  
  app.use(
    "/handCheck/:a/:b",
    (req: Request, res: Response) => {
      const {
        params: { a=5,b=6},
      } = req;
      console.log("Variable a ",5)
      console.log("Variable b ",6)
      const sum  = Number(a) + Number(b)
      res.status(200).send(`la somme de ${a} et ${b} est ${sum}`);
    }
  );
  
  app.listen(3000, () => {
    console.log(
      "Server listening on port 3000"
    );
  });*/
  //**************************abdallah********************** */
/*  import express, { Request, Response } from 'express';

const app = express();

app.use('/handCheck/:a/:b', (req: Request, res: Response) => {
    console.log(req);
    const { params: { a, b } } = req;
    const sum =Number(a)+Number(b);

    console.log('variable a : ',a);
    console.log('variable b : ',b);

    res.status(200).send(`La somme de ${a} et ${b} egale a ${sum}`);
});

app.listen(6002, () => {
    console.log("server listenning on 6002");
});*/
//***************wael fraj *************** 
/*
import express, {
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();

const verif = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { op, a, b },
  } = req;
  var x: number = +a;
  var y: number = +b;

  if (
    !Number.isNaN(x) &&
    !Number.isNaN(y)
  ) {
    if (
      op === "sum" ||
      op === "sous" ||
      op === "mult" ||
      op === "div"
    )
      next();
    else {
      res.send(
        "Error: you must choose sum or sous or mult ou div"
      );
    }
  } else {
    res.send(
      "Error: a ou b not number"
    );
  }
};

const calcul = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { op, a, b },
  } = req;
  var x: number = +a;
  var y: number = +b;
  var s;

  switch (op) {
    case "sum":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x+y}`
      );
      break;
    case "sous":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x-y}`
      );  
    break;
    case "mult":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x*y}`
      ); 
    break;
    case "div":
      res
      .status(200)
      .send(
        `la resultat de l'operation ${op} de ${a} et ${b} est egale a ${x/y}`
      );   
    break;
      default:
        break;
      }
    
};

app.get("/:op/:a/:b",verif,calcul);

app.listen(3000, () => {
  console.log(
    "Server listening on port 3000"
  );
});

/*

   
    
  }
);
*/

/*


*/

import express, { Request, Response } from 'express';

const app = express();

function faireCalcic(operation: string, nombre1: number, nombre2: number): string {
  let resultat: number;

  switch(operation) {
    case "+":
      resultat = nombre1 + nombre2;
      break;
    case "-":
      resultat = nombre1 - nombre2;
      break;
    case "*":
      resultat = nombre1 * nombre2;
      break;
    case "/":
      if (nombre2 === 0) {
        return "Erreur: Division par zéro est impossible.";
      }
      resultat = nombre1 / nombre2;
      break;
    default:
      return "Erreur: Opérateur invalide.";
  }

  return `{ operation: ${operation}, nombre 1: ${nombre1}, nombre 2: ${nombre2}, resultat: ${resultat}}`;
}

app.use('/calculator/:operation/:nombre1/:nombre2', (req: Request, res: Response) => {
  const { operation, nombre1, nombre2 } = req.params;
  const resultat = faireCalcic(operation, Number(nombre1), Number(nombre2));

  res.status(200).send(resultat);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
