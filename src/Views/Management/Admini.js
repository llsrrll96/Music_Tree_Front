import React, {useState, useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'

const column =[
    {field: 'id',hide:true },
    {field: 'title', headerName:'제목' ,width:130},
    {field: 'artist', headerName:'가수', width:130},
    {field: 'album', headerName:'앨범',width: 130},
    {field: 'ost', headerName:'OST', type:'number',width:100},
    {field: 'rel_date', headerName: 'DATE', width:120},
    {field: 'genre', headerName: '장르', type:'number', width:90},
    {field: 'group_type', headerName: '유형', type:'number', width:90},
    {field: 'gender', headerName: '성별', type:'number', width:100},
    {field: 'feat', headerName: 'Feat', width:100},
    {field: 'relevance', headerName: '관련성', width:100},
    {field: 'mood', headerName: '분위기', width:100},
    {field: 'lyrics', headerName: '가사', width:200},
    {field: 'words', headerName: '기타', width:100}
]


function Admini ()  {
    const [songPosts, setSongPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(50)
    
    useEffect(() => {
        async function fetchSongPosts(){
            setLoading(true);    
            console.log('로딩')        
            await axios.get('http://127.0.0.1:5000/song-info')
            .then((songs)=>{
                setSongPosts(songs.data);
                console.log(songs.data)
                
                setLoading(false);
            });
            
        }
        fetchSongPosts()
    },[]);
    

    return (
        <div className="Admini-root" style={{height: 400, width:'100%' }}>
            <DataGrid rows={songPosts} columns={column} loading={loading} pageSize={5} checkboxSelection/>
        </div>
    )
}

export default Admini
