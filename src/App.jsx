import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './login/login'

import Head from './head/head'
export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                <Switch>
                     <Route path='/' exact component={Login} />             
                     <Route path='/head' component={Head} />
                </Switch>  
                </div>
                 
            </div>
        );
    }
}