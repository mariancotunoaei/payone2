import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from './Main';
import MainScreen from 'screens/MainScreen';

const RenderRoutes = (props) => (
    <HashRouter>
        <Route
            render={props => (
                <Main {...props}>
                    <Switch>
                        <Route path='/' component={MainScreen} />
                    </Switch>
                </Main>
            )}
        />
    </HashRouter>
);

export default RenderRoutes;
