import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './Posts'
import Pagination from './Pagination'

function  Admin () {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(10)
    
    useEffect(() => {
        async function fetchPosts(){
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
            setLoading(false);
        }
        fetchPosts()
    },[]);
    
    //페이지네이션
    const indexOfLast = currentPage * postsPerPage //전체
    const indexOfFirst = indexOfLast - postsPerPage //인덱스 첫번째

    const getCurrentPosts = (pPosts) => {
        let currentPosts = 0
        currentPosts = pPosts.slice(indexOfFirst, indexOfLast)
        return currentPosts
    }

    return (
        <div className="root">
            <Posts posts={getCurrentPosts(posts)} loading={loading}></Posts>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}></Pagination>
        </div>
    )
}

export default Admin
