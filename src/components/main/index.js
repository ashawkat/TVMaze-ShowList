import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../container/series';
import SingleSeries from '../../container/singleseries';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route exact path="/series/:id" component={SingleSeries} />
    </Switch>
);

export default Main;