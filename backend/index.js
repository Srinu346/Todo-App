const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const todos = [{name:"Todo 1",done:false},{name:"Todo 2", done: true},{name:"Todo 3",done: false}];

app.get("/todos",(req,res)=>{
    res.send(todos);
})

app.post("/addTodo",(req,res)=>{
    const {name,done} = req.body;
    todos.push({name,done});
    res.send("Todo Added Successfully !!!");
})

app.listen(3000,()=>{
    console.log("Listening On port 3000")
})