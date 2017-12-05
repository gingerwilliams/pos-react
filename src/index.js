import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';

import indexRoutes from './routes/index.jsx';

import './assets/css/bootstrap.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

const hist = createBrowserHistory();

ReactGA.initialize('UA-00000000-01');
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

hist.listen( location =>  {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
});
ReactDOM.render((
    <HashRouter>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                })
            }
        </Switch>
    </HashRouter>
), document.getElementById('root'));
