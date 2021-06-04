import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Views/Home'
import PredictionB from './Views/PredictionB';
import Prediction from './Views/Prediction';
import Result from './Views/Component/Result';
import SongResult from './Views/Component/SongResult';
import Admin from './Views/Container/Admin';
import AdminiAddSong from './Views/Container/AdminiAddSong';
import DataGridDemo from './Views/Container/DataGridDemo';
import SearchSong from './Views/Container/SearchSong';

function App() {
 
    return (
        //JSX : HTML 대용
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/PredictionB" component={PredictionB}/>
                        <Route path="/Prediction2" component={Prediction}/>
                        <Route path="/result" component={Result} />
                        <Route path="/SongResult" component={SongResult}/>
                        <Route path="/admin/add" component={AdminiAddSong}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/demo" component={DataGridDemo}/>
                        <Route path="/SearchSong" component={SearchSong}/>
                    </Switch>
                </Router>
            </div>
    );
}

export default App;