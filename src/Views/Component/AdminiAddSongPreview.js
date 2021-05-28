import React from 'react'

const AdminiAddSongPreview = ({songData}) => {

    return (
        <div className="App">
            {songData.map(s =>{
                return <li>{s.title} {s.artist} </li>
            })}
        </div>
    )
}
export default AdminiAddSongPreview
