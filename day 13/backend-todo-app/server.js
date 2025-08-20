
// const express = require('express') 
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

// API 1 create-todo
app.post('/create-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("student created successfully")
})

// API 2 Read-all-todo
app.get('/read-all-todo', (req, res) => {
    console.log(`read student with id = ${req.query.id}`)
    let studentObj = {
        "id": 1,
        "name": "ram",
        "rollNo": 123
    }
    res.json(studentObj);
})

// API 3 read-todo
app.get('/read-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    let studentArr = [
        {
            "id": 1,
            "name": "ram",
            "rollNo": 123
        },
        {
            "id": 2,
            "name": "shyam",
            "rollNo": 456
        }
    ]
    res.json(studentArr)
})

// API 4 update -todo
app.patch('/update-todo', (req, res) => {
    console.log(`user id = ${req.query.id}`)
    console.log(`update data = ${req.body}`)
    res.send("student updated successfully")
})


// API 5 delete-todo
app.delete('/delete-todo', (req, res) => {
    console.log(`delete user with id = ${req.query.id}`)
    res.send("student deleted successfully")
})


// start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`)
})