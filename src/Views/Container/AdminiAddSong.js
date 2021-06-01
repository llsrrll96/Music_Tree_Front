import React, {useState} from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import AdminiAddSongPreview from "../Component/AdminiAddSongPreview";
import { Header } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Admin.css';

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
    let [pageNumberParam, setPageNumberParam] = useState(1)
    let [grNumberParam, setGrNumberaParam] = useState(1)
    
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

    //page 1개당 50개 page = 1 ~ 10 , grNumber = 1 ~ 8 
    const getSongData = ()=>{
        if(!loading)//로딩중이 아닐때만
        {
            
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

    const handleChangePageNumberParam = (event) => {
        setPageNumberParam(event.target.value);
      };

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
                    <div className="adminiAdd-buttons">
                        <div className ="adminiAdd-input">
                            <FormControl required >
                                <InputLabel id="demo-simple-select-required-label">페이지 (1페이지당 50곡)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={pageNumberParam}
                                    onChange={handleChangePageNumberParam}
                                >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </div>
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
