import React, { useState, useEffect, useRef } from 'react';
import io from "socket.io-client";
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import tree from '../images/tree.png';
import Search from './Component/Search';
import './Home.css';


let endPoint = "http://localhost:5000/prediction"
let socket = io.connect(`${endPoint}`)

function Prediction() 
{
    let [loading , setLoading] = useState(true)
    let [isSearch, setIsSearch] = useState(false)
    let [isResult, setIsResult] = useState(false)
    let [socketId, setSocketId] = useState('')
    let [question, setQuestion] = useState([])
    let [btnValue, setBtnValue] = useState([])

    const isConnection = useRef(false)

//=================================//
    /* 데이터 요청 함수 */
    function getQuestionData()
    {
        setLoading(true)
        console.log("서버 데이터")
        socket.emit("question", {socketId : socket.id,step: 1})
        socket.on("response",data=>{
            setQuestion(data) //set 될때마다 리렌더링됨
            setBtnValue(data.question_type)
            console.log(data)
            console.log('버튼: ' + data.question_type)
            setLoading(false)
        })
    }
    function getQuestionData2()
    {
        setLoading(true)
        console.log("서버 데이터")
        socket.emit("question", {socketId : socket.id,step: 2})
        socket.on("response",data=>{
            setQuestion(data) //set 될때마다 리렌더링됨
            setBtnValue(data.question_type)
            console.log(data)
            console.log('버튼: ' + data.question_type)
            setLoading(false)
        })
    }

    /* 클릭한 값을 서버에 보낸다.*/
    const sendAnswer = (e, btnValue) => {
        e.preventDefault()
        console.log('btn: '+btnValue)
        const sendData = {
            "btnValue" : btnValue,
            "socketId" : socket.id
        }
        socket.emit("answer", sendData)
        socket.on("answer",data=>{
            //서버의 응답을 받은 후
            console.log("answer: "+data.result)
            //서버에 다음 질문 요청
            getQuestionData2()
        })
    }

//=================================//
    useEffect(()=>{
        console.log("마운트될때만 실행된다.") //처음 나타났을때
        if(!isConnection.current){ //첫
            isConnection.current = true
            socket.emit("join",{socketId : socket.id},()=>{
                    socket.on("jresponse",v=>{
                        console.log('소켓 '+socket.id)
                        // getServerData(v.socketId)
                    })
            })
        }
    },[])

    useEffect(()=>{
        console.log('렌더링 될때마다 실행')
        if(isConnection.current)
        {
            console.log('연결성공시 실행')
            getQuestionData()
        }
        else{
            console.log('false')
        }
    },[])

//=================================//
    /* 질문 컴포넌트 */
    function questionBox(question)
    {
        if(question.type === '1') //타입 체크
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
            {console.log('question: '+ question)}

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