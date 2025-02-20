// @ts-ignore
import  WebSocket  from "ws";
import { client } from "db/client";

type Data  = {
    userId  : string;
    isActive : boolean;
    id : string;
}

const ws = new WebSocket("ws://localhost:8080");


ws.on("error",(err : any) => {
    console.error(err);
    ws.close();
})


ws.on("open", async () => {
    ws.send("The websocket connection is open")
    ws.on("message",async (message : Buffer) => {
        const data : Data = JSON.parse(message.toString())
        await client.todo.update({
            where : {
                id: data.id,
                userId : data.userId
            },
            data : {
                isActive  : data.isActive
            }
        })
    })
})

