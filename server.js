const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/brodie', (req,res) => {res.send("Hello Brodie")});
app.get('/adam', (req,res) => {res.send("Hello Adam")}); 


app.listen(port, ()=>console.log("Listening"));