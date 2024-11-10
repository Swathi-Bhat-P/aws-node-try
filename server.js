const express = require('express')
const app = express()

//sample api
app.get('/api/get', (req, res) => {
    res.status(200).send({ message: "Hello from node js in AWS" })
})

app.get('/api/get_user_details', (req, res) => {
    res.send({
        user: {
            name: "Swathi",
            contact: "1234"
        }
    })
})

app.listen(8000, () => {
    console.log("server is listening to 8000")
})