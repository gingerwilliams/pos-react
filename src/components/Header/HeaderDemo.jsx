import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import HeaderLinks from './HeaderLinks.jsx'

class Header extends Component{
    render(){
        return (
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
    					<a href="#pablo">Brand</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <HeaderLinks />
            </Navbar>
        );
    }
}

export default Header;
