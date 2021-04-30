import React from "react";
import Button from '@material-ui/core/Button'; // Button을 import 한다.
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import './Home.css'
   
function Home()
{
    return (
        <div className="flex-container">
            
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                >
                    <Link to="/prediction">
                        <Button style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
                            Start
                        </Button>
                    </Link>
                    <Link to="/connection">
                        <Button style={{maxWidth:'300px',minWidth:'300px'}} variant="outlined">
                            연결
                        </Button>
                    </Link>
            </Grid>
        
        </div>

    )
}
export default Home