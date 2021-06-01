import React, {useState} from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import AdminiAddSongPreview from "../Component/AdminiAddSongPreview";
import { Header } from 'semantic-ui-react';
import './Admin.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';

//custom button
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);
//

const AdminiAddSong = () => {
    let [loading , setLoading] = useState(false)
    const [song, setSong] = useState([])
    const [isSave, setIsSave] = useState(false)

    const data = [
        {
                title: "사랑 안 해",
                artist: "백지영"
        },
        {
                title: "불꽃놀이",
                artist: "하진"
        }
    ]

    //page 1개당 50개
    const getSongData = ()=>{
        if(!loading)//로딩중이 아닐때만
        {
            
            let pageNumberParam = 1
            let grNumberParam = 1

            async function fetchSongPosts(pageNumber,grNumber){
                setLoading(true)   
                await axios.get('http://127.0.0.1:5000/admin/add1?page='+pageNumber+'&grNumber='+grNumber)
                .then((songs)=>{
                    setSong(songs.data);
                    setIsSave(true)
                    setLoading(false)
                });
            }
            fetchSongPosts(pageNumberParam,grNumberParam)   
        }else
            alert('로딩 중')
    }
    const saveSongData=()=>{
        if(isSave){
            alert('저장완료')
            setIsSave(false)
        }else{
            alert('저장실패')
        }
    }

    return (
        <div>
            <div className="admini-header">
                <Header as='h2'>노래 추가</Header>
            </div>
            
            <div className="admini-main">
                <div className="admini-sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="adminiAdd-content">
                    <div className =" adminiAdd-input">
                        
                    </div>
                    <div className="adminiAdd-buttons">
                        <div className="adminiAdd-button">
                            <ColorButton 
                                onClick={e => {
                                    e.stopPropagation()
                                    getSongData()
                                }}
                                >추가하기
                            </ColorButton>
                        </div>
                        <div className="adminiAdd-savebutton">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<SaveIcon />}
                                onClick={e => {
                                    e.stopPropagation()
                                    saveSongData()
                                }}
                                >저장하기
                            </Button>
                        </div>
                    </div>
                    { loading &&<CircularProgress />}
                    <div className="adminiAdd-preview" >
                        {song && song.length > 0 &&(
                            <AdminiAddSongPreview songData={song} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminiAddSong
