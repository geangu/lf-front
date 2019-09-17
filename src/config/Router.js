import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/home/Home';
import Business from '../components/business/Business';
import NotFound from '../components/not-found/NotFound';
import Owner from '../components/owner/Owner';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/business' component={Business} />
                    <Route exact path='/owner' component={Owner} />
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;