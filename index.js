require('dotenv').config()

const express = require('express')/*Syntax for the require module*/

const app = express()

const port = 4000/*There are in total of 65,535 ports out of which some ports are free and 
these ports are responsible for listening the user's request by remaining present at the 
server's end.*/

app.get('/', (req, res) => { /*Syntax of the callback function*/
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/twitter',(req, res)=>{
    res.send('@HarshalGan40135');
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please login to Chai aur Code</h1>");
})

app.get('/youtube',(req,res)=>{
    res.send("<h2> Chai aur Code </h2>")
})






