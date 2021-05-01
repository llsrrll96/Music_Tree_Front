import React ,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import tree from '../../images/tree.png';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Search = (props) => {
    let [lyrics, setLyrics] = useState('')
    
    const send = ()=>{
        setLyrics(document.getElementById("lyrics-required").value)
        console.log(lyrics)

        //서버 전송
    }
    const known = () =>{
        //서버에 모른다는 거 보냄
    }

    return (
        <div className="Search-flex-container">
            <div className="search-tree-img">
                <img src={tree} alt =""/>
            </div>

            <div className="search-input-box">
                <form className="input" noValidate autoComplete="off">
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <TextField required id="lyrics-required" label="가사 입력"/>
                       
                    </Box>

                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <div className="search-send-button">
                            <Button id='sendBtn' onClick={send} variant="outlined" color="primary">
                                SEND
                            </Button>
                        </div>
                        <div className="search-unknown-button">
                            <Button id='unknownBtn' onClick={known} variant="outlined" color="secondary">
                                모르겠음
                            </Button>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default Search


