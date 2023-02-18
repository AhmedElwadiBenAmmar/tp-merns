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
//***************BELGACEM***************/
import process from 'process';

import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 3000;
/**claddes typr class object <t>
 * {}
 */
app.use("/helloworld", (req: Request, res: Response) => {
//   console.log(req);
//   const {
//     params: { a, b },
//   } = req;
  //   console.log('variable a',a)
  //   console.log('variable b',b)
  const {n1: numberOne,n2: numberTow} = req.query

  const sum = Number(numberOne) + Number(numberTow);

  res.status(200).send(`la somme de ${numberOne} et ${numberTow} est ${sum}`);

  
 

  //http://localhost:6002/helloworld/5/3    /helloworld/:a/:b
});
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
/**La première ligne importe les modules nécessaires, y compris Express qui est affecté 
 * à la variable express, et les types de requête et de réponse qui sont importés en tant
 *  que Request et Response.cd
Ensuite, une instance de l'application Express est créée en appelant la fonction express() 
et stockée dans la variable app.
Une fois l'application créée, un middleware est défini en utilisant la méthode use() de
 l'application. Ce middleware répondra à toutes les requêtes GET envoyées à l'URL "/helloworld".
  Lorsque cette route est appelée, la chaîne "incoming request ..." sera écrite dans la console
   et le texte "hello from app" sera envoyé en réponse avec un code d'état HTTP 200.

Enfin, la méthode listen() est utilisée pour démarrer le serveur et le faire écouter 
les connexions entrantes sur le port 6000. Lorsque le serveur démarre, la chaîne "server 
listening on 6000" sera écrite dans la console. */