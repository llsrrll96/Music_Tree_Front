import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Views/Home'
import Prediction from './Views/Prediction';
import Result from './Views/Result';
import Admin from './Views/Management/Admin';
import Admini from './Views/Management/Admini';
import DataGridDemo from './Views/Management/DataGridDemo';


function App() {
 
    return (
        //JSX : HTML 대용
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/prediction" component={Prediction}/>
                        <Route path="/result" component={Result} />
                        <Route path="/admin" component={Admin}/>
                        <Route path="/admini" component={Admini}/>
                        <Route path="/demo" component={DataGridDemo}/>
                    </Switch>
                </Router>
            </div>
    );
}

export default App;
