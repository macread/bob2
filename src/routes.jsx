import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Track from './client/track/Track';

export default (
    <Switch>
        <Route path = "/" component = { App } exact />
        <Route path = "/track" component = { Track } />
    </Switch>
)