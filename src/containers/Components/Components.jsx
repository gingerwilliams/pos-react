import React, { Component } from 'react';
import{
    Grid, Row, Col
} from 'react-bootstrap';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import * as Ps from 'perfect-scrollbar';
import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css';
import 'codemirror/lib/codemirror.css';

import Sidebar from './Sidebar/Sidebar.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

import componentsRoutes from 'routes/components.jsx';

import './assets/css/Components.css';

class Components extends Component{
    componentDidMount(){
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            Ps.initialize(this.refs.componentsPanel, { wheelSpeed: 2, suppressScrollX: true });
            console.log("hey");
        }
    }
    isMac(){
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    componentDidUpdate(){
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            setTimeout(() => { Ps.update(this.refs.componentsPanel) }, 350);
        }
    }
    render(){
        return (
            <div className="components" ref="componentsPanel">
                <Header />
                <div className="wrapper">
                    <div className="main">
                        <div className="section">
                            <Grid>
                                <Row>
                                    <Col md={2}>
                                        <Sidebar />
                                    </Col>
                                    <Col md={8} mdOffset={1}>
                                        <div className="space-top"></div>
                                        <div className="components-panel">
                                            <Switch>
                                                {
                                                    componentsRoutes.map((prop,key) => {
                                                        if(prop.redirect)
                                                            return (
                                                                <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                                                            );
                                                        return (
                                                            <Route path={prop.path} component={prop.component} key={key}/>
                                                        );
                                                    })
                                                }
                                            </Switch>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Components;