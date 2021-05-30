import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import io from "socket.io-client";
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import './Home.css';
import tree from '../images/tree.png';
import Search from './Component/Search';

let endPoint = "http://localhost:5000/prediction"
let socket = io.connect(`${endPoint}`)

function PredictionB() {
    let [question, setQuestion] = useState([])
    let [btnValue, setBtnValue] = useState([])
    let [socketId,setSocketId] = useState("")
    let [isStart, setIsStart] = useState(true)
    let [isRedirect, setIsRedirect] = useState(false)
    let [isSearch, setIsSearch] = useState(false) //test
    let [songId, setSongId] = useState('0')
    
    //문제를 바꿀때 사용
    useEffect(()=>{
        console.log(question)
        createQuestionBox(question)
        createButton(btnValue)
    }) //길이가 변할때 실행
    
    //=================서버에서 데이터 받아오는 함수===================//
    //     data = {
    //         "type": "1",
    //         "step": step,  # 1: 성별, 2: 활동유형, 3:장르, 4:년도, 5:OST 여부, 6:피처링 여부, 7:분위기, 8:관련성
    //         "question_type_name": question_type_name[step-1],  #질문에 나올 질문할 속성 명, "성별"
    //         "question_type": question_type[step-1]  #답변으로 표시될 노래 속성값들 ,  ["남성","여성"]
    // }
    //type : 1 = 질문, 2 = 가사 , 3 = 결과

    function getServerData (){
        // socket.on("answer",ans=>{
        //     console.log('answer type: '+ans.type)
        //     if (ans.type === "1") //객관식
        //     {
        //         setQuestion(ans)
        //     }else if(ans.type === "2")  //가사 찾기
        //     {
        //         setIsSearch(true)
        //     }else if(ans.type === "3") //노래 결과
        //     {
        //         // data = {
        //         //     "type" : "3",
        //         //     "songId" : "1234"
        //         // }
        //         setSongId(ans.songId)
        //         setIsRedirect(true)
        //     }
        // })
        /*질문생성*/
        console.log("서버 데이터")
        socket.emit("question", {socketId : socket.id})
        socket.on("response",data=>{
            setQuestion(data)
            setBtnValue(data.question_type)
            console.log(data)
            console.log('버튼: ' + data.question_type)
        })
    }

    //====================================//
    //사용자 답 선택
    //사전 조건 : 소켓 연결
    const sendToServer = (btnValue) => {
        //버튼 값을 보낸다.
        const sendData = {
            "btnValue" : btnValue,
            "socketId" : socket.id
        }
        socket.emit("answer", sendData)
        
        //값을 가져오고 갱신한다.
        getServerData(socketId)
    }
    
    //===============서버와 소켓 연결==================//
    function connectServer (){
        setSocketId(socket.id)
        socket.emit("join",
            {
                socketId : socket.id,
            },()=>{
                socket.on("jresponse",v=>{
                    console.log('소켓 '+ v.socketId)
                    getServerData(v.socketId)
                })
            }
        )
        //첫 문제 생성
    //     data = {
    //         "type": "1",
    //         "step": step,  # 1: 성별, 2: 활동유형, 3:장르, 4:년도, 5:OST 여부, 6:피처링 여부, 7:분위기, 8:관련성
    //         "question_type_name": question_type_name[step-1],  #질문에 나올 질문할 속성 명, "성별"
    //         "question_type": question_type[step-1]  #답변으로 표시될 노래 속성값들 ,  ["남성","여성"]
    // }
    }

    //===============질문 생성==================//
    function createQuestionBox (question)
    {
        if(isStart){
            connectServer()            
            setIsStart(false)
        }

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
    
    //버튼생성
    const createButton =(buttons)=> //배열 형식
        buttons && buttons.map(btn => {
        return(<Button onClick={()=>sendToServer(btn)} value='btn' style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
                    {btn}
                </Button>
        )})

    // const buttonList = testbtn && testbtn.map(btn => {
    //         return(<Button onClick={()=>sendToServer(btn)} value='btn' style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
    //             {btn}
    //         </Button>)
    // })
    

    //=======================================//
    if(isRedirect){
        return <Redirect to= {{
            pathname: "/Result",
            state : songId
        }}/>
    }else if(isSearch){
        return <Search socketId = {socketId}/>
    }else{
        return (
            //JSX : HTML 대용
            <div className='main'>
                <div className="search-tree-img ">
                    <img src={tree} alt =""/>
                </div>
                <div className="question">
                    {createQuestionBox(question)}
                </div>
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
            </div>
        );
    }
}

export default PredictionB;