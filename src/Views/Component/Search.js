import React ,{useState} from 'react'
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import tree from '../../images/tree.png';

const Search = (socketId) => {
    let [lyrics, setLyrics] = useState('')
    let [isRedirect, setIsRedirect] = useState(false)
    let [songId, setSongId] = useState('')
    const send = ()=>{
        setLyrics(document.getElementById("lyrics-required").value)
        console.log(lyrics)

        //서버 전송
        setSongId('123')
        setIsRedirect(true)
    }

    const known = () =>{
        //서버에 모른다는 거 보냄
    }
    if(isRedirect){
        return <Redirect to= {{
            pathname: "/Result",
            state : songId//test
        }}
        />
    }else
    return (
        <div className="search-flex-container">
            <div className="search-tree-img">
                <img src={tree} alt =""/>
            </div>
            {console.log(socketId)}

            <div className="search-input-box">
                <form className="input" noValidate autoComplete="off">
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <TextField required id="lyrics-required" label="가사 입력"/>
                       
                    </Box>

                    <Box className="search-box" display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <div className="search-send-button">
                            <Button id='sendBtn' onClick={send} variant="outlined" color="primary">
                                보내기
                            </Button>
                        </div>
                        <div className="search-unknown-button">
                            <Button id='unknownBtn' onClick={known} variant="outlined" color="secondary">
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


