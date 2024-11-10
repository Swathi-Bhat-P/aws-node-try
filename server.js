const express = require('express')
const app = express()

app.get('/api/get', (req,res)=>{
    res.status(200).send({message:"Hello from node js in AWS"})
})

app.listen(8000, ()=>{
    console.log("server is listening to 8000")
})