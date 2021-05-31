import React, {useState,useEffect} from 'react'
import './Result.css'

function Result(props)
{
    let songId = props.location.song
    let [songinfo, setSonginfo] = useState([])
    
    //값 없이 들어 왔을 경우
    useEffect(()=>{
        if (props.location.song === undefined){
            props.history.push("/");
        }
    })
    useEffect(()=>{
            console.log("result song1: " +props.location.song)
            console.log("sondId: "+ songId)
            console.log("url: "+ props.location.url)
            getSongData()
    },[])

    const getSongData =()=>{
        //서버에 song 아이디를 보낸다.
        
        //결과를 받아온다.
        let info={ //더미 데이터
            title : "라일락",
            artist : "아이유",
            album : "IU 5th Album 'LILAC",
            genre : "댄스",
            lyric : `나리는 꽃가루에 눈이 따끔해 (아야)
            \n눈물이 고여도 꾹 참을래
            내 마음 한켠 비밀스런 오르골에 넣어두고서
            영원히 되감을 순간이니까
            
            우리 둘의 마지막 페이지를 잘 부탁해
            어느 작별이 이보다 완벽할까
            나리는 꽃가루에 눈이 따끔해 (아야)
            눈물이 고여도 꾹 참을래
            내 마음 한켠 비밀스런 오르골에 넣어두고서
            영원히 되감을 순간이니까
            
            우리 둘의 마지막 페이지를 잘 부탁해
            어느 작별이 이보다 완벽할까
            나리는 꽃가루에 눈이 따끔해 (아야)
            눈물이 고여도 꾹 참을래
            내 마음 한켠 비밀스런 오르골에 넣어두고서
            영원히 되감을 순간이니까
            
            우리 둘의 마지막 페이지를 잘 부탁해
            어느 작별이 이보다 완벽할까`
        }
        setSonginfo(info)
    }
    
    const displaySong =()=>{
        return (
            <div className = "songinfo-border">
                <div className ="songinfo">
                    <h5>{songinfo.title}</h5>
                    <p>{songinfo.artist}</p>
                    <p>{songinfo.album}</p>
                    <p>{songinfo.genre}</p>
                    <p>{songinfo.lyric}</p>
                </div>
            </div>
        )
    }

    if (songinfo){
        return (
            <div>
                {displaySong()}
            </div>
        )
    } else {
        return <div>{alert('다시 시작해 주세요.')}다시 시작해 주세요.</div>;
    }
}
export default Result