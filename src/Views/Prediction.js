import React, {useState} from 'react';
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

function Prediction() {
    let [question, setQuestion] = useState([0,'질문 입니까?'])
    let [socketId,setSocketId] = useState('')
    let [isStart, setIsStart] = useState(true)
    let [isRedirect, setIsRedirect] = useState(false)
    let [isSearch, setIsSearch] = useState(false) //test

    let [songId, setSongId] = useState('0')
    const btnTexts = ['네','몰라요','아니요']

    //문제를 바꿀때 사용
    // useEffect(()=>{
    //     getBtnText()
    // },[btnText.length]) //길이가 변할때 실행
    
    //=================서버에서 데이터 받아오는 함수===================//
    // # data = {
    // #             "type" : "1",
    // #             "step": "2",
    // #             "q":"2번 질문입니다.",
    // #             'socketId': session['socketId']
    // #         }
    //type : 1 = 질문, 2 = 가사 , 3 = 결과
    const getServerData =()=>{
        socket.on("answer",ans=>{
            if (ans.type === "1") //객관식
            {
                console.log('answer type: '+ans.type)
                console.log('answer socketId: '+ans.socketId)
                setQuestion(ans)
                setSocketId(ans.socketId)
            }else if(ans.type === "2")  //가사 찾기
            {
                setIsSearch(true)
            }else if(ans.type === "3") //노래 결과
            {
                // data = {
                //     "type" : "3",
                //     "songId" : "1234"
                // }
                setSongId(ans.songId)
                setIsRedirect(true)
            }
        })
    }

    //====================================//
    //사용자 답 선택
    //사전 조건 : 소켓 연결
    const sendToServer = (btnValue) => {
        //버튼 값을 보낸다.
        const sendData = {
            "btnValue" : btnValue,
            "socketId" : socketId
        }
        socket.emit("answer", sendData)
        //값을 가져오고 갱신한다.
        getServerData()
    }
    
    //===============서버와 소켓 연결==================//
    const connectServer =()=>{
        socket.emit("join",
            {
                socketId : socket.id,
            }
        )
        //첫 문제 생성
        // data = {
        //     "step": "1",
        //     "q":"1번 질문입니다.",
        //     'socketId': session['socketId']
        // }
        socket.on("response",v=>{
            console.log('data '+ v.socketId)
            setQuestion(v)
            setSocketId(v.socketId)
        })
    }

    //===============질문 생성==================//
    const createQuestionBox =(question)=>{
        if(isStart){
            connectServer()
            setIsStart(false)
        }
        return(
            <div className="question-body" >
                <Grid
                container
                direction="column"
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
                                    {question.q}
                                </p>
                            </Box>
                        </Box>
                    </Typography>

                </Grid>
            </div>
        )

    }
    //버튼생성
    const createButton =()=>{
        
        return (
            <div className="buttons">
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Button onClick={()=>sendToServer('1')} value='1' style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
                        {btnTexts[0]}
                    </Button>
                    <Button onClick={()=>sendToServer('2')} value='2' style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined" color="primary">
                        {btnTexts[1]}
                    </Button>
                    <Button onClick={()=>sendToServer('3')} style={{maxWidth:'300px',minWidth:'300px'}} value='3' variant="outlined" color="secondary">
                        {btnTexts[2]}
                    </Button>
                </Grid>
            </div>
        )
    }

    //=======================================//
    if(isRedirect){
        return <Redirect to= {{
            pathname: "/Result",
            state : songId
        }}
        />
    }else if(isSearch){
        return <Search />
    }
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
                {createButton()}
            </div>
        </div>
    );
}

export default Prediction;