import React, {useEffect} from 'react'
import './Result.css'

function Result(props)
{
    let sondId = props.location.state
    const songinfo={ //더미 데이터
        title : "title",
        artist : "artist",
        album : "album",
        genre : "genre",
        lyric : "lyric"
    }
    
    //값 없이 들어 왔을 경우
    useEffect(()=>{
        if (props.location.state === undefined){
            props.history.push("/");
        }
    })
    
    const displaySong =()=>{
        console.log("result song1: " +props.location.state)
        console.log("sondId: "+ sondId)
        return (
            <div className = "songinfo_side">
                <div className ="songinfo">
                    <p>{songinfo.title}</p>
                    <p>{songinfo.artist}</p>
                    <p>{songinfo.album}</p>
                    <p>{songinfo.genre}</p>
                    <p>{songinfo.lyric}</p>
                </div>
            </div>
        )
    }

    if (props.location.state){
        return (
            <div>
                <span>{props.location.state}</span>
                {displaySong()}
            </div>
        )
    } else {
        return null;
    }
}
export default Result