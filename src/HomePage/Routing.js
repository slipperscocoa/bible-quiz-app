import React from 'react'; 
import TipsApp from './Tips'; 
import Navigating from './Navigating'; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class RouterApp extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/tips" component={TipsApp} />
                    </Switch>
                    <Navigating />
                </Router>
            </div>
        )
    }
}

export default RouterApp; 