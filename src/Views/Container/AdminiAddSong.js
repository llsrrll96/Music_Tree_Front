import React, {useState} from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import AdminiAddSongPreview from "../Component/AdminiAddSongPreview";
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
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    }));
//

const AdminiAddSong = () => {
    const host = '119.56.229.177'

    let [loading , setLoading] = useState(false)
    const [song, setSong] = useState([])
    const [isSave, setIsSave] = useState(false)
    let [pageNumberParam, setPageNumberParam] = useState(1)
    let [grNumberParam, setGrNumberaParam] = useState(1)
    const classes = useStyles();


    //page 1개당 50개 page = 1 ~ 10 , grNumber = 1 ~ 8 
    const getSongData = ()=>{
        if(!loading)//로딩중이 아닐때만
        {
            
            async function fetchSongPosts(pageNumber,grNumber){
                setLoading(true)   
                await axios.get('http://'+host+':5000/admin/add1?page='+pageNumber+'&grNumber='+grNumber)
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
            async function fetchSongPosts(){
                setLoading(true)   
                await axios.get('http://'+host+':5000/admin/add2')
                .then((data)=>{
                    if(data.result ==='yes'){
                        alert('저장완료')
                        setIsSave(false)
                        setLoading(false)
                    }
                });
            }
            fetchSongPosts()  
            
        }else{
            alert('저장실패')
        }
    }

    const handleChangePageNumberParam = (event) => {
        setPageNumberParam(event.target.value);
      };
      const handleChangeGrNumberParam = (event) => {
        setGrNumberaParam(event.target.value);
      };

    return (
        <div>
            <div>
                <header className="admini-header">노래 추가</header>
            </div>
            
            <div className="admini-main">
                <div className="admini-sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="adminiAdd-content">
                    <div className="adminiAdd-buttons">
                        <div className ="adminiAdd-input">
                            <FormControl required 
                                className={classes.formControl}
                            >
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
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                            </FormControl>
                        </div>
                        <div className ="adminiAdd-input">
                            <FormControl required 
                                className={classes.formControl}
                            >
                                <InputLabel id="demo-simple-select-required-label">장르 선택</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={grNumberParam}
                                    onChange={handleChangeGrNumberParam}
                                >
                                <MenuItem value={1}>발라드</MenuItem>
                                <MenuItem value={2}>댄스</MenuItem>
                                <MenuItem value={3}>랩/힙합</MenuItem>
                                <MenuItem value={4}>R&B</MenuItem>
                                <MenuItem value={5}>인디음악</MenuItem>
                                <MenuItem value={6}>록/메탈</MenuItem>
                                <MenuItem value={7}>트로트</MenuItem>
                                <MenuItem value={8}>포크/블루스</MenuItem>
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
                                >노래 스크랩
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
