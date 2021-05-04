import React, {useState, useEffect,useCallback} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const column =[
    {field: 'id',headerName:'ID' },
    {field: 'title', headerName:'제목' ,width:130},
    {field: 'artist', headerName:'가수', width:130},
    {field: 'album', headerName:'앨범',width: 130},
    {field: 'ost', headerName:'OST', type:'number',width:100},
    {field: 'rel_date', headerName: 'DATE', width:120},
    {field: 'genre', headerName: '장르', type:'number', width:90},
    {field: 'group_type', headerName: '유형', type:'number', width:90},
    {field: 'gender', headerName: '성별', type:'number', width:100},
    {field: 'feat', headerName: 'Feat', width:100},
    {field: 'relevance', headerName: '관련성', width:100, editable:true},
    {field: 'mood', headerName: '분위기', width:100, editable: true},
    {field: 'lyrics', headerName: '가사', width:200, editable: true},
    {field: 'words', headerName: '기타', width:100,editable:true}
]

function Admini ()  {
    const [songPosts, setSongPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(50)
    const [editRowsModel, setEditRowsModel] = useState({})       //수정된 row
    const [editrowsMedelKey, setEditRowsModelKey] = useState('') //key
    const [selectionModel, setSelectionModel] = useState([])
    
    useEffect(() => {
        async function fetchSongPosts(){
            setLoading(true);    
            console.log('로딩')        
            await axios.get('http://127.0.0.1:5000/song-info')
            .then((songs)=>{
                setSongPosts(songs.data);
                setLoading(false);
            });
        }
        fetchSongPosts()
    },[]);
    

    //선언한 함수 계속 사용해야 할때 = useCallback
    const handleEditRowModelChange = useCallback(
        (params) => {
            setEditRowsModel(params.model)
            setEditRowsModelKey(Object.keys(params.model)[0])
            //console.log(Object.keys(params.model)[0])
        },
        []
    )

    //selection 된 row 들
    const handleButtonClick = ()=>{
        console.log(selectionModel) //[1, 2, 3, 4, 5]
        const jdata = JSON.stringify(selectionModel)

        //삭제할 값을 서버에 보낸다.

        async function postDeleteSongs(){  
            await axios.post('http://127.0.0.1:5000/admin/delete',jdata)
            .then( function(result) {
                console.log(result.data)
                alert(result.data.result)
            }).catch( (error) => {
                console.log('error: ', error)
            })
        }
        postDeleteSongs()
    }

    // {"3":{"lyrics":{"value": "값"}}}
    return (
        <div >
            <div>
                <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
            </div>
            <div className="Admini-root" style={{height: 400, width:'100%' }}>
                <DataGrid className="datagrid"
                rows={songPosts} 
                columns={column} 
                loading={loading} 
                pageSize={5} 
                checkboxSelection
                editRowsModel={editRowsModel}
                onEditRowModelChange={handleEditRowModelChange}
                selectionModel={selectionModel}
                onSelectionModelChange={(newSelection) => {
                    setSelectionModel(newSelection.selectionModel);
                }}
                />
            </div>
            <div >
                <Button 
                    onClick={e => {
                        e.stopPropagation()
                        handleButtonClick()
                    }}
                    color="primary"
                    variant="outlined"
                >
                    삭제하기
                </Button>
            </div>
        </div>
    )
}

export default Admini
