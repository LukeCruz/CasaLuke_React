import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Formulary from '../pages/Form';
import api from '../featch';

export default function Routing() {
    return(
        <Router>
            <Switch>

            <Route path="/" exact={true} component={Main}/>
            <Route path="/form" component={Formulary}/>
            <Route path="/api" component={api}/>

            </Switch>
                
        </Router>
    )
}