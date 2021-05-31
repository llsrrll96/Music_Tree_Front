import React ,{useState} from 'react'
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import io from "socket.io-client";

//소켓 아이디 유지 못하는 현상 발생
let endPoint = "http://localhost:5000/prediction"
let socket = io.connect(`${endPoint}`)

const Search = (socketId) => {
    let [lyrics, setLyrics] = useState('')
    let [isResult, setIsResult] = useState(false)
    let [songId, setSongId] = useState('')

    const sendHandler = ()=>{
        setLyrics(document.getElementById("lyrics-required").value)
        console.log(lyrics)

        //서버 전송
        socket.emit("lyrics_find", {socketId : socketId, lyricsInput : lyrics})
        socket.on("answer",data=>
        {
            setSongId(data.song_answer)
            setIsResult(true)
        })
    }

    const unknownHandler = () =>{
        //서버에 모른다는 거 보냄
    }

    if(isResult){
        return <Redirect to= {{
            pathname: "/Result",
            state : songId//test
        }}
        />
    }else
    return (
        <div className="search-flex-container">
            {console.log(socketId)}

            <div className="search-input-box">
                <form className="input" noValidate autoComplete="off">
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <TextField required id="lyrics-required" label="가사 입력"/>
                    </Box>
                    <Box className="search-box" display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <div className="search-send-button">
                            <Button id='sendBtn' onClick={sendHandler} variant="outlined" color="primary">
                                보내기
                            </Button>
                        </div>
                        <div className="search-unknown-button">
                            <Button id='unknownBtn' onClick={unknownHandler} variant="outlined" color="secondary">
                                모름
                            </Button>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default Search


