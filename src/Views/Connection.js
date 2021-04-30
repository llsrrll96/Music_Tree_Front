import React from "react";
import io from "socket.io-client";
import './Home.css'

let endPoint = "http://localhost:5000/connection"
let socket = io.connect(`${endPoint}`)

function Connection()
{
    const getQuestion =()=>{
        socket.on("response",ans=>{
            console.log('response: '+ans)
        })
    }

    const connectServer =()=>{
        socket.emit("connect1","0")
        getQuestion()
    }

    return(
        <div className="question">
            연결
            {connectServer()}
        </div>
        
    )
}
export default Connection