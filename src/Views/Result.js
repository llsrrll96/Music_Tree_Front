import React, {useEffect} from 'react'
import './Result.css'

function Result(props)
{
    let sondId = props.location.state
    const songinfo={
        title : "title",
        artist : "artist",
        album : "album",
        genre : "genre",
        lyric : "lyric"
    }
    
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