import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Views/Home'
import Prediction from './Views/Prediction';
import Connection from './Views/Connection';
import Result from './Views/Result';

function App() {
 
    return (
        //JSX : HTML 대용
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/prediction" component={Prediction}/>
                        <Route path="/connection" component={Connection}/>
                        <Route path="/result" component={Result} />
                    </Switch>
                </Router>
            </div>
    );
}

export default App;
