const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/brodie', (req,res) => {res.send("Hello Brodie")});
app.get('/nathan', (req,res) => {res.send("Hello Nathan")});

app.listen(port, ()=>console.log("Listening"));