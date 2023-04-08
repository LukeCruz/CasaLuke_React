import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Formulary from '../pages/Form';
import api from '../featch';
import articles from '../pages/Articles';
import services from '../pages/Services';
import About from '../pages/About';
import Travels from '../pages/MenuFloat/Travels';
import Hotels from '../pages/MenuFloat/Hotels';
import Restaurant from '../pages/MenuFloat/Restaurant';
import ArticlesOne from '../pages/ArticlesPages/ArticleOne';
import ArticlesTwo from '../pages/ArticlesPages/ArticleTwo';
import ArticlesTree from '../pages/ArticlesPages/ArticleTree';
import ArticlesFour from '../pages/ArticlesPages/ArticleFour';
import ArticlesFive from '../pages/ArticlesPages/ArticleFive';
import ArticlesSix from '../pages/ArticlesPages/ArticleSix';

export default function Routing() {
    return (
        <Router>
            <Switch>

                <Route path="/" exact={true} component={Main} />
                <Route path="/form" component={Formulary} />
                <Route path="/api" component={api} />
                <Route path='/articles' component={articles} />
                <Route path='/services' component={services} />
                <Route path='/restaurants' component={Restaurant} />
                <Route path='/hotels' component={Hotels} />
                <Route path='/travels' component={Travels} />


                <Route path='/1' component={ArticlesOne} />
                <Route path='/2' component={ArticlesTwo} />
                <Route path='/3' component={ArticlesTree} />
                <Route path='/4' component={ArticlesFour} />
                <Route path='/5' component={ArticlesFive} />
                <Route path='/6' component={ArticlesSix} />

                <Route path='/about' component={About} />

            </Switch>

        </Router>
    )
}