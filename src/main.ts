import  express  from "express";
const app = express();
const mongoose = require('mongoose');

app.use('/handcheck', (req,res)=>{
    console.log('incoming request ...');
    res.status(200).send('hello from app');
});

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})