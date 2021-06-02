import React, {useEffect} from 'react'
import YouTube from 'react-youtube';
import './Result.css'

function Result(props)
{
    let songinfo = props.location.song
    //let [songinfo, setSonginfo] = useState([])
    // let songinfo= {
    //         'song_id': 2, 
    //         'title': "롤린 (Rollin')", 
    //         'artist': '브레이브걸스', 
    //         'album': "Rollin'", 
    //         'ost': 'None', 
    //         'rel_date': 'datetime.date(2017, 3, 7)', 
    //         'genre': 2, 
    //         'group_type': 2, 
    //         'gender': 2,
    //          'feat': '\r', 
    //          'relevance': '사랑', 
    //          'mood': 11, 
    //          'lyrics': "그 날을 잊지 못해 babe 날 보며 환히 웃던 너의 미소에 홀린 듯 I'm fall in love But 너무 쪽팔림에 난 그저 한마디 말도 못해 babe I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you Hey I just wanna be with you 오늘 밤이 가기 전에 I can't feel you 조금 더 다가와 줘 Tonight I'm ready for you You wanna touch me I know 대체 뭘 고민해 빨리 안아 아닌 척 모르는 척 하다가 늦게 놓치고 후회 말아 I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 이제 와 숨기려 하지 마요 그대여 아닌 척하지 마요 온종일 난 그대 생각에 잠긴 채로 난 이대로 기다리고 있어요 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you", 
    //          'words': 'None', 
    //          'melon_song_id': 30287019, 
    //          'type': '3', 
    //          'url': 'https://www.youtube.com/watch?v=-Axm4IYHVYk'
    // }

    const opts = {
        width: '100%',
        height: '480px',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }

    //값 없이 들어 왔을 경우
    useEffect(()=>{
        if (props.location.song === undefined){
            props.history.push("/");
        }
    })

    const displaySong =()=>{

        return (
            <div className = "songinfo-border">
                <div className ="songinfo">
                    <h5>{songinfo.title}</h5>
                    <p>{songinfo.artist}</p>
                    <p>{songinfo.album}</p>
                    <p>{songinfo.genre}</p>
                    <p>{songinfo.lyrics}</p>
                </div>
                <div className='songinfo-wrapper'>
                    
                    <YouTube videoId="-Axm4IYHVYk" opts={opts}/>
                </div>

            </div>
        )
    }

    if (props.location.song){// !지우기
        return (
            <div>
                {displaySong()}
            </div>
        )
    } else {
        return <div>{alert('다시 시작해 주세요.')}다시 시작해 주세요.</div>;
    }
    // {
    //     'song_id': 2, 
    //     'title': "롤린 (Rollin')", 
    //     'artist': '브레이브걸스', 
    //     'album': "Rollin'", 
    //     'ost': None, 
    //     'rel_date': datetime.date(2017, 3, 7), 
    //     'genre': 2, 
    //     'group_type': 2, 
    //     'gender': 2,
    //      'feat': '\r', 
    //      'relevance': '사랑', 
    //      'mood': 11, 
    //      'lyrics': "그 날을 잊지 못해 babe 날 보며 환히 웃던 너의 미소에 홀린 듯 I'm fall in love But 너무 쪽팔림에 난 그저 한마디 말도 못해 babe I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you Hey I just wanna be with you 오늘 밤이 가기 전에 I can't feel you 조금 더 다가와 줘 Tonight I'm ready for you You wanna touch me I know 대체 뭘 고민해 빨리 안아 아닌 척 모르는 척 하다가 늦게 놓치고 후회 말아 I wanna you 너의 눈빛은 날 자꾸 네 곁을 맴돌게 해 Just only you 굳게 닫힌 내 맘이 어느새 무너져버려 Because of you 온통 너의 생각뿐이야 나도 미치겠어 너무 보고 싶어 매일 매일 매일 자꾸 초라해지잖아 내 모습이 그대여 내게 말해줘 사랑한다고 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 이제 와 숨기려 하지 마요 그대여 아닌 척하지 마요 온종일 난 그대 생각에 잠긴 채로 난 이대로 기다리고 있어요 Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 하루가 멀다 하고 Rolling in the deep Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' Rollin' 기다리고 있잖아 Babe Just only you 기다리고 있잖아 Babe Just only you", 
    //      'words': None, 
    //      'melon_song_id': 30287019, 
    //      'type': '3', 
    //      'url': 'https://www.youtube.com/watch?v=-Axm4IYHVYk'}


//     자극적인(1), 화난(2), 긴장되는(3),
// 슬픈(4), 지루한(5), 졸린(6),
// 잔잔한(7), 평화로운(8), 느긋한(9),
// 기쁜(10), 행복한(11), 신나는(12)

// =MATCH(A1,{"자극적인","화난","긴장되는", "슬픈", "지루한", "졸린", "잔잔한", "평화로
}
export default Result