import React from 'react'
import YouTube from 'react-youtube';
import './Result.css'

const SongResult = () => {

    let song_answer_arr = [{
            'song_id': 2, 
            'title': "롤린 (Rollin')", 
            'artist': '브레이브걸스', 
            'album': "Rollin'", 
            'ost': 'None', 
            'rel_date': 'datetime.date(2017, 3, 7)', 
            'genre': 2, 
            'group_type': 2, 
            'gender': 2,
             'feat': '\r', 
             'relevance': '사랑', 
             'mood': 11, 
             'lyrics': "그 날을 잊지 못해 babe 날 보며 환히 웃던 너의 미소에 홀린 듯 I'm fall in love But 너무 쪽팔림에 난 그저 한마디 말도 못해 babe I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you Hey I just wanna be with you 오늘 밤이 가기 전에 I can't feel you 조금 더 다가와 줘 Tonight I'm ready for you You wanna touch me I know 대체 뭘 고민해 빨리 안아 아닌 척 모르는 척 하다가 늦게 놓치고 후회 말아 I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 이제 와 숨기려 하지 마요 그대여 아닌 척하지 마요 온종일 난 그대 생각에 잠긴 채로 난 이대로 기다리고 있어요 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you", 
             'words': 'None', 
             'melon_song_id': 30287019, 
             'type': '3', 
             'url': 'https://www.youtube.com/watch?v=-Axm4IYHVYk'
    },
    {
        'song_id': 2, 
        'title': "롤린2 (Rollin')", 
        'artist': '브레이브걸스2', 
        'album': "Rollin'2", 
        'ost': 'None', 
        'rel_date': 'datetime.date(2017, 3, 7)', 
        'genre': 2, 
        'group_type': 2, 
        'gender': 2,
         'feat': '\r', 
         'relevance': '사랑', 
         'mood': 11, 
         'lyrics': "그 날을 잊지 못해 babe 날 보며 환히 웃던 너의 미소에 홀린 듯 I'm fall in love But 너무 쪽팔림에 난 그저 한마디 말도 못해 babe I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you Hey I just wanna be with you 오늘 밤이 가기 전에 I can't feel you 조금 더 다가와 줘 Tonight I'm ready for you You wanna touch me I know 대체 뭘 고민해 빨리 안아 아닌 척 모르는 척 하다가 늦게 놓치고 후회 말아 I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 이제 와 숨기려 하지 마요 그대여 아닌 척하지 마요 온종일 난 그대 생각에 잠긴 채로 난 이대로 기다리고 있어요 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you", 
         'words': 'None', 
         'melon_song_id': 30287019, 
         'type': '3', 
         'url': 'https://www.youtube.com/watch?v=-Axm4IYHVYk'
    }]

    const displayHeader=()=>{

        return (
            <div className = "songinfo-header">
                <div className="songinfo-header-title">
                    <h2>예측 결과 !</h2>
                </div>
            </div>
        )
    }

    const opts = {
        width: '100%',
        height: '480px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
    const genreFilter =(genre)=>{
        let filteredgenre = ''

        if(genre === 1){
            filteredgenre = "발라드"
        }else if(genre === 2){
            filteredgenre = "댄스"
        }else if(genre === 3){
            filteredgenre = "랩/힙합"
        }else if(genre === 4){
            filteredgenre = "R&B"
        }else if(genre === 5){
            filteredgenre = "인디음악"
        }else if(genre === 6){
            filteredgenre = "록/메탈"
        }else if(genre === 7){
            filteredgenre = "트로트"
        }else if(genre === 8){
            filteredgenre = "포크/블루스"
        }
        return filteredgenre
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
                                발매일
                            </div>
                            <div className="songinfo-detail-column-value">
                                {songinfo.rel_date}
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
        console.log(songinfos)
        
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
                            발매일
                        </div>
                        <div className="songinfo-detail-column-value">
                            {songinfo.rel_date}
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

    return (
        <div>
            {displayHeader()}
            {displaySong()}
        </div>
    )
}

export default SongResult
    // 자극적인(1), 화난(2), 긴장되는(3),
    // 슬픈(4), 지루한(5), 졸린(6),
    // 잔잔한(7), 평화로운(8), 느긋한(9),
    // 기쁜(10), 행복한(11), 신나는(12)
    
    // =MATCH(A1,{"자극적인","화난","긴장되는", "슬픈", "지루한", "졸린", "잔잔한", "평화로운", "느긋한", "기쁜", "행복한", "신나는"},0)
    
    // 솔로(1)
    // 그룹(2)
    // 기타(3)
    
    // =IF(C2="솔로",1,IF(C2="그룹",2,3))
    
    // 남성(1)
    // 여성(2)
    // 혼성(3)
    // 기타(0)
    
    // =IF(D2="남성",1,IF(D2="여성",2,IF(D2="혼성",3,0)))
    
    // 발라드(1)
    // 댄스(2)
    // 랩/힙합(3)
    // R&B(4)
    // 인디음악(5)
    // 록/메탈(6)
    // 트로트(7)
    // 포크/블루스(8)