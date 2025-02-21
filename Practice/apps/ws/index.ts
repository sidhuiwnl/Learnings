
import { client } from "db/client";

Bun.serve({
    port : 8080,
    fetch(req,server){
        if(server.upgrade(req)){
            return;
        }
        return new Response("Upgrade Failed")
    },
    websocket : {
        message(ws,message){
            async function main(){
                const response = await client.user.create({
                    data : {
                        username : Math.random().toString(),
                        password : Math.random().toString(),
                    }
                })

            }
            main()
            ws.send("Sending message")
        }
    }
})