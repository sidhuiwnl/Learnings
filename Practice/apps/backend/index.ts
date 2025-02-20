import express from "express";
import {client} from "db/client";
const app = express();

app.use(express.json());


app.post("/signup", async (req, res) => {
    const body = req.body;
    await client.user.create({
        data : {
            username : body.username,
            password: body.password,

        }
    })

})


app.post("/todo",async (req,res) =>{
    const body = req.body;

    await client.todo.create({
        data : {
            todo : body.todo,
            isActive : false,
            userId : body.userId
        }
    })
})















app.listen(3000,() =>{
    console.log("Server started on port 3000");
})