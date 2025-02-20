"use server"
import {client} from "db/client";

export async function adduser({
    username,
    password,
                              } : {
    username: string;
    password: string;
}){
    const response = await client.user.create({
        data : {
            username,
            password,
        }
    })

    return response
}

export async function addTodo({
    userId,
    todo
                              } : {
    userId: string;
    todo : string
}){
   const  response = await client.todo.create({
        data : {
            userId,
            todo,
            isActive : false
        }
    })

    return response
}