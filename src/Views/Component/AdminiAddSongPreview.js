import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const AdminiAddSongPreview = ({songData}) => {

    return (
        <div className="App">
            {songData.map(s =>{
                return (
                    <ListItem button>
                        <ListItemText primary={s.title} secondary={s.artist} />
                    </ListItem>
                )
            })}
        </div>
    )
}
export default AdminiAddSongPreview
