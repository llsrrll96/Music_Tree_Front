import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';
import io from "socket.io-client";
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import tree from '../images/tree.png';
import './Home.css';

let host = "192.168.230.179" 
let endPoint = "http://"+host+":5000/prediction"
let socket = io.connect(`${endPoint}`)

function Prediction() 
{
    let [loading , setLoading] = useState(true)
    let [question, setQuestion] = useState([])
    let [btnValue, setBtnValue] = useState([])

    const isConnection = useRef(false)

//=================================//
    /* 데이터 요청 함수 */
    function getQuestionData()
    {
        setLoading(true)
        console.log("서버 데이터")
        socket.emit("question", {socketId : socket.id}) //step 지우기
        socket.on("response",data=>{
            setQuestion(data) //set 될때마다 리렌더링됨
            setBtnValue(data.question_type)
            setLoading(false)
            socket.off("response")
        })
    }

    /* 클릭한 값을 서버에 보낸다.*/
    const sendAnswer = (e, btnValue) => {
        e.preventDefault()
        const sendData = {
            "btnValue" : btnValue,
            "socketId" : socket.id
        }
        socket.emit("answer", sendData)

        socket.on("answer",data=>{
            //서버의 응답을 받은 후
            //서버에 다음 질문 요청
            getQuestionData()
            socket.off("answer")
        })
    }

    /* 가사 검색 */
    const sendHandler = (e)=>{
        setLoading(true)
        e.preventDefault()
        if (e.currentTarget.id === 'sendBtn')
        {
            let lyrics = document.getElementById("lyrics-required").value
            if (!lyrics){
                alert('가사를 입력해 주세요.')
            }else{
                //서버 전송
                socket.emit("lyrics_find", {socketId : socket.id, lyricsInput : lyrics})
                socket.on("answer",data=>{
                    setQuestion(data) //set 될때마다 리렌더링됨
                    setLoading(false)
                })
            }
        }else{ //모른다.
            socket.emit("lyrics_find", {socketId : socket.id, lyricsInput : ''})
            socket.on("answer",data=>{
                setQuestion(data) //set 될때마다 리렌더링됨
                setLoading(false)
            })
        }
    }

//=================================//
    useEffect(()=>{
        //처음 시작 시 실행 하는 코드
        if(!isConnection.current){ //첫
            isConnection.current = true
            socket.emit("join",{socketId : socket.id})

            socket.on("join_response",data=>{
                if(isConnection.current)
                {
                    getQuestionData()
                }
                else{
                    console.log('false')
                }
            })
        
        }

    },[])


//=================================//
    /* 질문 컴포넌트 */
    function questionBox(question)
    {
        //타입 체크
        if(question.type === '1')
        {
            return(
                <div className="question-body" >
                    <Grid
                    container
                    justify="center"
                    alignItems="center"
                    >
                        <Typography component="div">
                            <Box display="flex" m={1} border={1} width={300}>
                                <Box p={1} bgcolor="info.main" width={50} textAlign="center">
                                    <p className="question-text">
                                        {question.step}
                                    </p>
                                </Box>
                                <Box p={1}>
                                    <p className="question-text" width={1/4}>
                                        {question.question_type_name}
                                    </p>
                                </Box>
                            </Box>
                        </Typography>
                    </Grid>
                </div>
            )
        }else if(question.type === '2'){ //가사
            if(question.result === 'failure'){
                return (
                    <div className = "songinfo-header">
                    <div className="songinfo-header-title">
                        <h2>예측 실패..!</h2>
                    </div>
                </div>
                )
            }else{
                return (
                    <div className="search-flex-container">        
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
                                        <Button id='unknownBtn' onClick={sendHandler} variant="outlined" color="secondary">
                                            모름
                                        </Button>
                                    </div>
                                </Box>
                            </form>
                        </div>
                    </div>
                )
            }
        }else if(question.type === '3'){ //결과
            return (<Redirect to= {{
                pathname: "/Result",
                song_answer_arr : question.song_answer_arr
            }}/>)
        }
    }

    /* 답변 컴포넌트 */
    function buttonDIV()
    {
        return(
            <div className="flex-container">
                <div className="buttons">
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    >   
                        {createButton(question.question_type)}
                    </Grid>
                </div>
            </div>
        )
    }
    const createButton =(buttons)=> //배열 형식
        buttons && buttons.map(btn => {
            return(
                    <Button onClick={(e)=>sendAnswer(e, btn)} key={btn} value='btn' style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
                        {btn}
                    </Button>
        )})

    return (
        <div className='main'>
            <div className="search-tree-img ">
                <img src={tree} alt =""/>
            </div>
            { loading &&<LinearProgress />}

            {questionBox(question)}
            {buttonDIV()}
        </div>
    );
}
export default Prediction;