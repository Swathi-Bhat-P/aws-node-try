const express = require('express')
const app = express()
require("dotenv").config()
//sample api
app.get('/api/get', (req, res) => {
    res.status(200).send({ message: "Hello from node js in AWS" })
})

app.get('/api/get_user_details', (req, res) => {
    res.send({
        user: {
            name: "Swathi",
            contact: "1234"
        },
        env: process.env.NAME
    })
})

app.listen(process.env.PORT, () => {
    console.log("server is listening to 8000")
})