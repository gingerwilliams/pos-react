import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    Navbar, Nav, NavItem
} from 'react-bootstrap';

import ctLogo from '../assets/img/new_logo.png';
import reactLogo from '../assets/img/reactlogo.png';
import image from '../assets/img/full-image-1.jpg';

const headerBackground = {
    backgroundImage: 'url(' + image + ')'
};

class Header extends Component{
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    }
    handleScroll(){
        const windowsScrollTop  = window.pageYOffset;
        var navbar = ReactDOM.findDOMNode(this.refs.navbarColorOnScroll);
        var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
        if(windowsScrollTop > 381){
            navbar.classList.remove("navbar-transparent");
        } else {
            navbar.classList.add("navbar-transparent");
        }
        if(window.innerWidth > 992){
            if(windowsScrollTop > 381){
                title.classList.remove("hidden");
            } else {
                title.classList.add("hidden");
            }
        }
    }
    updateDimensions(){
        var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
        const windowsScrollTop  = window.pageYOffset;
        if(window.innerWidth > 992){
            if(windowsScrollTop > 381){
                title.classList.remove("hidden");
            } else {
                title.classList.add("hidden");
            }
        } else {
            title.classList.remove("hidden");
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    mobileSidebarToggle(e){
        document.documentElement.classList.toggle('nav-open');
    }
    render(){
        return (
            <div className="header-wrapper">
                <Navbar collapseOnSelect className="navbar-color-on-scroll navbar-transparent navbar-components" fixedTop ref="navbarColorOnScroll">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://www.creative-tim.com">
                               <div className="logo-container">
                                    <div className="logo">
                                        <img alt="Creative Tim Logo" src={ctLogo} />
                                    </div>
                                    <div className="brand">
                                        Creative Tim
                                    </div>
                                </div>
                          </a>
                        </Navbar.Brand>
                        <Navbar.Toggle onClick={this.mobileSidebarToggle} />
                    </Navbar.Header>
                    <Navbar.Collapse className="text-center">
                        <Nav className="navbar-center">
                            <NavItem>
                                <div className={"navbar-title text-center" + (window.innerWidth > 992 ? " hidden":"")} ref="navbarTitle">
        							<h4>
        								<div className="image-container">
        									<img alt="React Logo" src={reactLogo} />
        								</div>
        								LBD PRO with React
        							</h4>
        						</div>
                            </NavItem>
                        </Nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
        						<a className="btn btn-simple btn-default" href="https://github.com/creativetimofficial/lbd-pro-react/issues" target="_blank" rel="noopener noreferrer">
        							<p>Have an issue?</p>
        						</a>

                            </li>
                            <li>
                                <NavLink to="/" className="nav-link btn btn-simple btn-default" activeClassName="active">
                                    <p>Go back to dashboard</p>
                                </NavLink>
                            </li>
                       </ul>
                    </Navbar.Collapse>
                </Navbar>
                <div className="header" style={headerBackground}>
                <div className="filter"></div>
                <div className="title-container text-center">
    				<div className="image-header">
    					<img src={reactLogo} alt="React Logo"/>
    				</div>
                        <h1>LBD Pro React</h1>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;