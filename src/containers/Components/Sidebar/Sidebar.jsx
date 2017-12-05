import React , { Component } from 'react';
import { Affix } from 'react-overlays';
import { NavLink } from 'react-router-dom';
import * as Ps from 'perfect-scrollbar';
import 'perfect-scrollbar/dist/css/perfect-scrollbar.min.css';

import componentsRoutes from 'routes/components.jsx';

class Sidebar extends Component{
    componentDidMount() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            Ps.initialize(this.refs.sidebarWrapper, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    componentDidUpdate(){
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            setTimeout(() => { Ps.update(this.refs.sidebarWrapper) }, 350);
        }
    }
    isMac(){
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    render(){
        return (
            <AffixWrapper>
                <div className="fixed-section" ref="sidebarWrapper">
                    <ul>
                        {
                            componentsRoutes.map((prop,key) => {
                                if(!prop.redirect)
                                    return (
                                        <li key={key}><NavLink to={prop.path} className="nav-link" activeClassName="active">{prop.name}</NavLink></li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </AffixWrapper>
        );
    }
}

class AffixWrapper extends Component{
    render(){
        if(window.innerWidth > 991)
            return (<Affix offsetTop={390} >{this.props.children}</Affix>);
        return this.props.children;
    }
}

export default Sidebar;