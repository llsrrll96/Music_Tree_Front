import React from 'react'
import './Admin.css'

//뿌려주는 역할
const Posts = ({posts,loading}) => {
    //loading 일때 표시
    return (
        <>
        
        { loading &&<div  className="loader"> </div>}

        <ul>
            {posts.map(post=>(<li key ={post.id}>{post.title}</li>))}
        </ul>
        </>
    )
}

export default Posts
