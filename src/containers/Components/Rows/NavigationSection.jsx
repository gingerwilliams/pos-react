import React, { Component } from 'react';
import {
    Alert ,
    Navbar, Nav, NavItem,
    FormGroup, InputGroup, FormControl
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import HeaderDemo from 'components/Header/Header.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import Header from 'components/Header/Header.jsx';`;
const codeExample = `<Header />`;
const code = `<Navbar fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#pablo">{this.makeBrand()}</a>
        </Navbar.Brand>
        <Navbar.Toggle
            onClick={this.mobileSidebarToggle}
            className={this.state.toggle}
        />
    </Navbar.Header>
    <Navbar.Collapse>
        {/* Here we render the links that appear in navbar */}
        <HeaderLinks />
    </Navbar.Collapse>
</Navbar>`;
const codeHeaderLinks = `<Navbar.Form pullLeft className="navbar-search-form">
    <FormGroup>
        <InputGroup>
            <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
            <FormControl type="text" placeholder="Search..." />
        </InputGroup>
    </FormGroup>
</Navbar.Form>
<Nav pullRight>
    <NavItem eventKey={3} href="#">
        <i className="fa fa-line-chart"></i>
        <p>Stats</p>
    </NavItem>
    <NavDropdown eventKey={2} title={(
                <div>
                    <i className="fa fa-gavel"></i>
                    <p className="hidden-md hidden-lg">
                        Actions
                        <b className="caret"></b>
                    </p>
                </div>
            )} noCaret id="basic-nav-dropdown-1">
        <MenuItem eventKey={2.1}>Create New Post</MenuItem>
        <MenuItem eventKey={2.2}>Manage Something</MenuItem>
        <MenuItem eventKey={2.3}>Do Nothing</MenuItem>
        <MenuItem eventKey={2.4}>Submit to live</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={2.5}>Another action</MenuItem>
    </NavDropdown>
    <NavDropdown eventKey={3} title={(
                <div>
                    <i className="fa fa-bell-o"></i>
                    <span className="notification">5</span>
                    <p className="hidden-md hidden-lg">
                        Notifications
                        <b className="caret"></b>
                    </p>
                </div>
            )} noCaret id="basic-nav-dropdown-2">
        <MenuItem eventKey={3.1}>Notification 1</MenuItem>
        <MenuItem eventKey={3.2}>Notification 2</MenuItem>
        <MenuItem eventKey={3.3}>Notification 3</MenuItem>
        <MenuItem eventKey={3.4}>Notification 4</MenuItem>
        <MenuItem eventKey={3.5}>Another notifications</MenuItem>
    </NavDropdown>
    <NavDropdown eventKey={4} title={(
                <div>
                    <i className="fa fa-list"></i>
                    <p className="hidden-md hidden-lg">
                        More
                        <b className="caret"></b>
                    </p>
                </div>
            )} noCaret id="basic-nav-dropdown-3" bsClass="dropdown-with-icons dropdown">
        <MenuItem eventKey={4.1}><i className="pe-7s-mail"></i> Messages</MenuItem>
        <MenuItem eventKey={4.2}><i className="pe-7s-help1"></i> Help Center</MenuItem>
        <MenuItem eventKey={4.3}><i className="pe-7s-tools"></i> Settings</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={4.4}><i className="pe-7s-lock"></i> Lock Screen</MenuItem>
        <MenuItem eventKey={4.5}>
            <div className="text-danger">
                <i className="pe-7s-close-circle"></i> Log out
            </div>
        </MenuItem>
    </NavDropdown>
</Nav>`;
class NavigationSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Navbar</h2>
                    <legend></legend>
                    <p>We restyled the classic Bootstrap Navbar and created a component for our demo navbar.</p>
                    <p>You will find this component in <code>src/components/Header/Header.jsx</code>. In this component there is just the structure of the navbar. The links can be found in <code>src/components/Header/HeaderLinks.jsx</code>. We've done this because on responsive we want both the links from <code>Navbar</code> and those from <code>Sidebar</code> component to be displayed.</p>
                    <Alert bsStyle="warning">
                        For demo purposes, this example will look good only on md screens (>992px).
                    </Alert>
                    <p>To use it, you import it like this:</p>
                    <CodeMirror value={codeImport} options={options} />
                    <br />
                    <div id="navbar">
                        <HeaderDemo />
                    </div>
                    <p>And then you use it in your component like this:</p>
                    <CodeMirror value={codeExample} options={options} />
                    <p>This is the code:</p>
                    <CodeMirror value={code} options={options} />
                    <p>This is the code for HeaderLinks</p>
                    <CodeMirror value={codeHeaderLinks} options={options} />
                    <br />
                    <p>We've just added some special functions for responsive to this component, the rest is just react-bootstrap tags.</p>
                    <p>You can add to the default navbar (<code>Navbar</code>) the prop <code>inverse</code> and <code>className="navbar-ct-color"</code> where <code>color</code> can be one of the following</p>
                    <ul>
                        <li>blue</li>
                        <li>azure</li>
                        <li>green</li>
                        <li>orange</li>
                        <li>red</li>
                    </ul>
                    <Navbar fluid collapseOnSelect inverse className="navbar-ct-blue">
                        <Navbar.Header>
                            <Navbar.Brand>
            					<a href="#pablo">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Form pullLeft className="navbar-search-form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                                    <FormControl type="text" placeholder="Search..." />
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="#">
                                <i className="fa fa-line-chart"></i>
                                <p>Stats</p>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Navbar fluid collapseOnSelect inverse className="navbar-ct-azure">
                        <Navbar.Header>
                            <Navbar.Brand>
            					<a href="#pablo">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Form pullLeft className="navbar-search-form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                                    <FormControl type="text" placeholder="Search..." />
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="#">
                                <i className="fa fa-line-chart"></i>
                                <p>Stats</p>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Navbar fluid collapseOnSelect inverse className="navbar-ct-green">
                        <Navbar.Header>
                            <Navbar.Brand>
            					<a href="#pablo">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Form pullLeft className="navbar-search-form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                                    <FormControl type="text" placeholder="Search..." />
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="#">
                                <i className="fa fa-line-chart"></i>
                                <p>Stats</p>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Navbar fluid collapseOnSelect inverse className="navbar-ct-orange">
                        <Navbar.Header>
                            <Navbar.Brand>
            					<a href="#pablo">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Form pullLeft className="navbar-search-form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                                    <FormControl type="text" placeholder="Search..." />
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="#">
                                <i className="fa fa-line-chart"></i>
                                <p>Stats</p>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Navbar fluid collapseOnSelect inverse className="navbar-ct-red">
                        <Navbar.Header>
                            <Navbar.Brand>
            					<a href="#pablo">Brand</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Navbar.Form pullLeft className="navbar-search-form">
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon><i className="fa fa-search"></i></InputGroup.Addon>
                                    <FormControl type="text" placeholder="Search..." />
                                </InputGroup>
                            </FormGroup>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={3} href="#">
                                <i className="fa fa-line-chart"></i>
                                <p>Stats</p>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <h4>Props</h4>
                    <p>If you want the navbar to be fixed top, you can use <code>className="navbar-fixed"</code>.</p>
                    <p>Please refer <a href="https://react-bootstrap.github.io/components.html#navbar-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default NavigationSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/NavigationSection.jsx