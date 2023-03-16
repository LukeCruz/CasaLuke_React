import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Formulary from '../pages/Form';
import api from '../featch';
import articles from '../pages/Articles';
import ArticlesOne from '../pages/ArticlesPages/ArticleOne';
import About from '../pages/About';

export default function Routing() {
    return (
        <Router>
            <Switch>

                <Route path="/" exact={true} component={Main} />
                <Route path="/form" component={Formulary} />
                <Route path="/api" component={api} />
                <Route path='/articles' component={articles} />
                <Route path='/1' component={ArticlesOne} />
                <Route path='/about' component={About} />

            </Switch>

        </Router>
    )
}