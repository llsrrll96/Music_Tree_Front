import React, {useEffect} from 'react'
import YouTube from 'react-youtube';
import './Result.css'

function Result(props)
{
    let song_answer_arr = props.location.song_answer_arr
 
    //값 없이 들어 왔을 경우
    useEffect(()=>{
        if (props.location.song_answer_arr === undefined){
            props.history.push("/");
        }
    })

    const opts = {
        width: '100%',
        height: '480px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    const displayHeader=()=>{

        return (
            <div className = "songinfo-header">
                <div className="songinfo-header-title">
                    <h2>예측 결과 !</h2>
                </div>
            </div>
        )
    }

    const genreFilter =(genre)=>{
        let filteredGenre = ''

        if(genre === 1){
            filteredGenre = "발라드"
        }else if(genre === 2){
            filteredGenre = "댄스"
        }else if(genre === 3){
            filteredGenre = "랩/힙합"
        }else if(genre === 4){
            filteredGenre = "R&B"
        }else if(genre === 5){
            filteredGenre = "인디음악"
        }else if(genre === 6){
            filteredGenre = "록/메탈"
        }else if(genre === 7){
            filteredGenre = "트로트"
        }else if(genre === 8){
            filteredGenre = "포크/블루스"
        }
        return filteredGenre
    }

    const displaySong=()=>{
        let songinfo=song_answer_arr[0]

        let genre = genreFilter(songinfo.genre)
        let url = songinfo.url.split("v=")
        return (
        <div>
            <div className = "songinfo-border">
                <div className ="songinfo">
                    <h5>{songinfo.title}</h5>
                    <h4>{songinfo.artist}</h4>
                    <div className = "songinfo-detail">
                        <div className="songinfo-partition">
                            <div className="songinfo-detail-column">
                                앨범
                            </div>
                            <div className="songinfo-detail-column-value">
                                {songinfo.album}
                            </div>
                        </div>
                        <div className="songinfo-partition">
                            <div className="songinfo-detail-column">
                                장르
                            </div>
                            <div className="songinfo-detail-column-value">
                                {genre}
                            </div>
                        </div>
                        <div className="songinfo-partition">
                            <h4>가사</h4>
                        </div>
                        <div className="songinfo-partition">
                            <div className="songinfo-detail-lyrics">
                                {songinfo.lyrics}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='songinfo-wrapper'>
                    <YouTube videoId={url[1]} opts={opts}/>
                </div>
            </div>

            <div className = "songinfo-border">
            <div className ="songinfo2">
                <div className='songinfo-alpha'>
                    {song_answer_arr.length > 1 ? displaySongAlpha(song_answer_arr.slice(1)) : ''}
                
                </div>
            </div>
            </div>
        </div>
        )
    }

    const displaySongAlpha=(songinfos)=>{
        
        const songinfodiv = songinfos && songinfos.map(songinfo=>(
            <div>
                <h5>{songinfo.title}</h5>
                <h4>{songinfo.artist}</h4>
                <div className = "songinfo-detail">
                    <div className="songinfo-partition">
                        <div className="songinfo-detail-column">
                            앨범
                        </div>
                        <div className="songinfo-detail-column-value">
                            {songinfo.album}
                        </div>
                    </div>
                    <div className="songinfo-partition">
                        <div className="songinfo-detail-column">
                            장르
                        </div>
                        <div className="songinfo-detail-column-value">
                            {genreFilter(songinfo.genre)}
                        </div>
                    </div>
                    <div className="songinfo-partition">
                        <h4>가사</h4>
                    </div>
                    <div className="songinfo-partition">
                        <div className="songinfo-detail-lyrics">
                            {songinfo.lyrics}
                        </div>
                    </div>
                </div>
            </div>
        ))
        return songinfodiv
    }


    if (props.location.song_answer_arr){
        return (
            <div>
                {displayHeader()}
                {displaySong()}
            </div>
        )
    } else {
        return <div>{alert('다시 시작해 주세요.')}다시 시작해 주세요.</div>;
    }

}
export default Result