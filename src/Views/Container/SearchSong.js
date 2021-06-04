import React , {useState} from 'react'
import axios from 'axios';

const SearchSong = () => {
    let [songinfo , setSonginfo]= useState([])
    
    function searchsong()
    {
        // async function fetchSongPosts(){
        //     await axios.get('http://www.maniadb.com/api/search/metallica/?sr=artist&display=10&key=example&v=0.5')
        //     .then((songs)=>{
        //         console.log(songs)
        //     });
        // }
        // fetchSongPosts()
        const url = 'http://www.maniadb.com/api/search/metallica/?sr=song&display=10&key=example&v=0.5'
        fetch(url,
        {
           method: 'GET',
           mode: 'no-cors',
            headers: {
                "Content-Type": "text/xml",
            }
        })
        .then(response => {
            // var xml2json = new XMLtoJSON(); 
            // var objson = xml2json.fromStr(response);
            // var convert = require('xml-js');
            // var result1 = convert.xml2json(response, {compact: true, spaces: 4});
            // console.log(result1)
            const parser = new DOMParser();
            const xml = parser.parseFromString(response, "application/xml");
            console.log(xml);
        })
        .catch(console.error);
    }
    return (
        <div>
            {songinfo}
            <button onClick={searchsong}>요청 버튼</button>
        </div>
    )
}

export default SearchSong
