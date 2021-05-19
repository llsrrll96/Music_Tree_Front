import React, {useState, useEffect,useCallback} from 'react'
import axios from 'axios'
import Sidebar from "./Sidebar";

import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import { Header } from 'semantic-ui-react'
import './Admin.css';

const column =[
    {field: 'id',headerName:'ID' },
    {field: 'title', headerName:'제목' ,width:130},
    {field: 'artist', headerName:'가수', width:130},
    {field: 'album', headerName:'앨범',width: 130},
    {field: 'ost', headerName:'OST', type:'number',width:100},
    {field: 'rel_date', headerName: 'DATE', width:120},
    {field: 'genre', headerName: '장르', type:'number', width:90},
    {field: 'group_type', headerName: '유형', type:'number', width:90},
    {field: 'gender', headerName: '성별', type:'number', width:90},
    {field: 'feat', headerName: 'Feat', width:100},
    {field: 'relevance', headerName: '관련성', width:110, editable:true},
    {field: 'mood', headerName: '분위기', width:100, editable: true},
    {field: 'lyrics', headerName: '가사', width:200, editable: true},
    {field: 'words', headerName: '기타', width:100,editable:true}
]

function Admini ()  {
    const [songPosts, setSongPosts] = useState([])
    const [loading, setLoading] = useState(false)
    //const [currentPage, setCurrentPage] = useState(1)
    //const [postsPerPage, setpostsPerPage] = useState(50)
    const [editRowsModel, setEditRowsModel] = useState({})       //수정된 row
    const [editrowsMedelKey, setEditRowsModelKey] = useState('') //key
    const [selectionModel, setSelectionModel] = useState([])            //선택된 id
    const [selectedLowForModify, setSelectedLowForModify] = useState({}) //수정 선택된 값
    const [pageNum , setPageNum] = useState(1)
    let pageNumber = 1

    useEffect(() => {
        async function fetchSongPosts(){
            setLoading(true);    
            console.log('로딩')        
            await axios.get('http://127.0.0.1:5000/song-info?index=' + pageNum)
            .then((songs)=>{
                setSongPosts(songs.data);
                setLoading(false);
            });
        }
        fetchSongPosts()
    },[]);

    const loadSongPost = (num)=>{
        async function fetchSongPosts(){
            setLoading(true);    
            console.log('로딩')        
            await axios.get('http://127.0.0.1:5000/song-info?index=' + num)
            .then((songs)=>{
                setSongPosts(songs.data);
                setLoading(false);
            });
        }
        fetchSongPosts()
    }
    
    
    //수정할 값 셋팅 하는 함수
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
    //id 배열 데이터 삭제 버튼
    const handleDeleteButtonClick = ()=>{
        console.log(selectionModel) //[1, 2, 3, 4, 5]
        if ((selectionModel && selectionModel.length) < 1 || selectionModel[0]== null){
            alert('삭제할 행을 선택해 주세요')
        }else{
            
            async function postDeleteSongs(){  
                await axios.post('http://127.0.0.1:5000/admin/delete',selectionModel)
                .then( function(result) {
                    console.log(result.data)
                    alert(result.data.result)
                }).catch( (error) => {
                    console.log('error: ', error)
                })
            }
            postDeleteSongs()
        }
    }
    //수정 버튼
    const handleModifyButtonClick = (selectedLowForModify) =>{
        console.log(selectionModel)
        if ((selectionModel && selectionModel.length) === 1){ //수정 항목 보내는 부분
            console.log(selectedLowForModify) //선택된 값
            console.log(selectedLowForModify.data)            
            async function postModifySongs(){  
                await axios.post('http://127.0.0.1:5000/admin/modify',selectedLowForModify.data)
                .then( function(result) { //서버에서 온 값
                    console.log(result.data)
                    alert(result.data.result)
                }).catch( (error) => {
                    console.log('error: ', error)
                })
            }
            postModifySongs()
        }else{
            alert("한 행씩 수정해 주세요")
        }
    }
    //페이지 Down 버튼
    const handleChangePageDownButtonClick = () =>{
        if(pageNum > 1)
        {
            //pageNumber -= 50
            loadSongPost(pageNum - 50)
            setPageNum(pageNum - 50)
            console.log("페이지 변경: "+ pageNum)
        }else{
            console.log(pageNum)
            alert("내릴 수 없습니다.")
        }
        
    }
    //페이지 Up 버튼
    const handleChangePageUpButtonClick = ()=>{
        //pageNumber += 50
        loadSongPost(pageNum + 50)
        setPageNum(pageNum + 50)
        console.log("페이지 변경: "+ pageNum)
    }

    //row 선택
    const onRowSelected = (params)=>{
        //console.log(params.data)
        setSelectedLowForModify(params)
    }

    // {"3":{"lyrics":{"value": "값"}}}
    return (
        
        <div>
            <div className="admini-header">
                <Header as='h2'>노래 목록</Header>
            </div>
            
            <div className="admini-main">
                <div className="admini-sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="admini-content">
                    <div>
                        <code>editRowsModel: {JSON.stringify(editRowsModel)}</code>
                    </div>
                    <div style={{height: 600, width:'100%' }}>
                        <DataGrid className="datagrid"
                        rows={songPosts} 
                        columns={column} 
                        loading={loading} 
                        pageSize={100} 
                        checkboxSelection
                        editRowsModel={editRowsModel}
                        onEditRowModelChange={handleEditRowModelChange}
                        selectionModel={selectionModel}
                        onSelectionModelChange={(newSelection) => {
                            setSelectionModel(newSelection.selectionModel);
                        }}
                        onRowSelected={onRowSelected}
                        />
                    </div>

                    <div className="admini-buttons">
                        <div className="modifybtn"> 
                            <Button 
                                onClick={e => {
                                    e.stopPropagation()
                                    handleModifyButtonClick(selectedLowForModify)
                                }}
                                color="primary"
                                variant="outlined"
                            >
                                수정하기
                            </Button>
                        </div>       

                        <div className="deletebtn">
                            <Button 
                                onClick={e => {
                                    e.stopPropagation()
                                    handleDeleteButtonClick()
                                }}
                                color="secondary"
                                variant="outlined"
                            >
                                삭제하기
                            </Button>
                        </div>
                        <div className = "changePageDownbtn">
                            <Button
                                onClick={e=>{
                                    e.stopPropagation()
                                    handleChangePageDownButtonClick()
                                }}
                                variant = "outlined"
                            >
                                 - 페이지 다운
                            </Button>
                        </div>
                        <div className = "changePageUpbtn">
                            <Button
                                onClick={e=>{
                                    e.stopPropagation()
                                    handleChangePageUpButtonClick()
                                }}
                                variant = "outlined"
                            >
                                + 페이지 업
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admini
