import React, {useState} from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import AdminiAddSongPreview from "../Component/AdminiAddSongPreview";
import { Header } from 'semantic-ui-react';
import './Admin.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

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
    const [song, setSong] = useState([''])
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
    // [
    //     {
    //             title: "사랑 안 해",
    //             artist: "백지영"
    //     },
    //     {
    //             title: "불꽃놀이",
    //             artist: "하진"
    //     }
    // ]

    //page 1개당 50개
    const displaySongForAdd = ()=>{
        async function fetchSongPosts(){
            console.log('로딩')        
            await axios.get('http://127.0.0.1:5000/admin/addt?page=1&grNumber=1')
            .then((songs)=>{
                setSong(songs);
                console.log(songs)
            });
        }
        fetchSongPosts()
    }
    const test =()=>{
        setSong(data)
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
                <div className="admini-content">
                    <div className =" adminiAdd-input">
                        
                    </div>
                    <div className="adminiAdd-button">
                        <ColorButton 
                            onClick={e => {
                                e.stopPropagation()
                                test() //displaySongForAdd()
                            }}
                        >추가하기
                        </ColorButton>
                    </div>
                    <div className="adminiAdd-preview" >
                        {song && song.length &&(
                            <AdminiAddSongPreview songData={song} />
                        )}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AdminiAddSong
