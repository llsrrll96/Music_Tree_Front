import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i =1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumbers.push(i)
    }
    //paginate 현재 페이지 set
    return (
        <div>
            <nav>
                {pageNumbers.map(number=>(
                    <span onClick={()=>paginate(number)} className="page-link"> 
                        {number}  
                    </span>
                ))}
            </nav>
        </div>
    )
}

export default Pagination
