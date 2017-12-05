import React, { Component } from 'react';
import {
    Row, Col,
    Nav, NavItem,
    Tab
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import Card from 'components/Card/Card.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCodeSimple = `import {
    Row, Col,
    Nav, NavItem,
    Tab
} from 'react-bootstrap';`;
const codeExampleSimple = `<Tab.Container id="tabs-simple" defaultActiveKey="info">
    <Row className="clearfix">
        <Col sm={12}>
            <Nav bsStyle="tabs">
                <NavItem eventKey="info">Info</NavItem>
                <NavItem eventKey="account">Account</NavItem>
                <NavItem eventKey="style">Style</NavItem>
                <NavItem eventKey="settings">Settings</NavItem>
            </Nav>
        </Col>
        <Col sm={12}>
            <Tab.Content animation>
                <Tab.Pane eventKey="info">
                    Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!
                </Tab.Pane>
                <Tab.Pane eventKey="account">
                    We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                </Tab.Pane>
                <Tab.Pane eventKey="style">
                    Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                    Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                </Tab.Pane>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
<Tab.Container id="tabs-with-icons" defaultActiveKey="info">
    <Row className="clearfix">
        <Col sm={12}>
            <Nav bsStyle="tabs">
                <NavItem eventKey="info">
                    <i className="fa fa-info"></i> Info
                </NavItem>
                <NavItem eventKey="account">
                    <i className="fa fa-user"></i> Account
                </NavItem>
                <NavItem eventKey="style">
                    <i className="fa fa-cube"></i> Style
                </NavItem>
                <NavItem eventKey="settings">
                    <i className="fa fa-cog"></i> Settings
                </NavItem>
            </Nav>
        </Col>
        <Col sm={12}>
            <Tab.Content animation>
                <Tab.Pane eventKey="info">
                    Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!
                </Tab.Pane>
                <Tab.Pane eventKey="account">
                    We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                </Tab.Pane>
                <Tab.Pane eventKey="style">
                    Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.
                </Tab.Pane>
                <Tab.Pane eventKey="settings">
                    Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                </Tab.Pane>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>`;
const codePageSubInport = `import {
    Nav, NavItem,
    Tab
} from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';`;
const codePageSubExample = `<Tab.Container id="nav-with-icons" defaultActiveKey="description">
    <div>
        <div className="nav-container">
            <Nav bsStyle="tabs" bsClass="nav nav-icons">
                <NavItem eventKey="description">
                    <i className="fa fa-info-circle"></i><br /> Description
                </NavItem>
                <NavItem eventKey="location">
                    <i className="fa fa-map-marker"></i><br /> Location
                </NavItem>
                <NavItem eventKey="legal">
                    <i className="fa fa-legal"></i><br /> Legal Info
                </NavItem>
                <NavItem eventKey="help">
                    <i className="fa fa-life-ring"></i><br /> Help Center
                </NavItem>
            </Nav>
        </div>
        <Tab.Content>
            <Tab.Pane eventKey="description">
                <Card
                    title="Description about product"
                    category="More information here"
                    content={
                        <div>
                            <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>
                            <p>The first thing you notice when you hold the phone is how great it feels in your hand. There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and glass that feels like one continuous surface.</p>
                        </div>
                    }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="location">
                <Card
                    title="Location of product"
                    category="Here is some text"
                    content={
                        <div>
                            <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                            <p>Larger, yet dramatically thinner.It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
                        </div>
                    }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="legal">
                <Card
                    title="Legal items"
                    category="More information here"
                    content={
                        <div>
                            <p>The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                            <p>Larger, yet dramatically thinner.It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
                        </div>
                    }
                />
            </Tab.Pane>
            <Tab.Pane eventKey="help">
                <Card
                    title="Help center"
                    category="More information here"
                    content={
                        <div>
                            <p>From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.</p>
                            <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                        </div>
                    }
                />
            </Tab.Pane>
        </Tab.Content>
    </div>
</Tab.Container>`;
class TabsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tabs</h2>
                    <legend></legend>
                    <p>If you have information that you don't need to show at once, we suggest you use tabs. The first option for tabs is the plain text tabs and the second also contains icons.</p>
                    <h4>Imports</h4>
                    <p>To use these components you'll have to make these imports:</p>
                    <CodeMirror value={importCodeSimple} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={6}>
                            <Tab.Container id="tabs-simple" defaultActiveKey="info">
                                <Row className="clearfix">
                                    <Col sm={12}>
                                        <Nav bsStyle="tabs">
                                            <NavItem eventKey="info">Info</NavItem>
                                            <NavItem eventKey="account">Account</NavItem>
                                            <NavItem eventKey="style">Style</NavItem>
                                            <NavItem eventKey="settings">Settings</NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content animation>
                                            <Tab.Pane eventKey="info">
                                                Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account">
                                                We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="style">
                                                Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="settings">
                                                Explore a wide Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                        <Col md={6}>
                            <Tab.Container id="tabs-with-icons" defaultActiveKey="info">
                                <Row className="clearfix">
                                    <Col sm={12}>
                                        <Nav bsStyle="tabs">
                                            <NavItem eventKey="info">
                                                <i className="fa fa-info"></i> Info
                                            </NavItem>
                                            <NavItem eventKey="account">
                                                <i className="fa fa-user"></i> Account
                                            </NavItem>
                                            <NavItem eventKey="style">
                                                <i className="fa fa-cube"></i> Style
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content animation>
                                            <Tab.Pane eventKey="info">
                                                Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account">
                                                We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="style">
                                                Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <CodeMirror value={codeExampleSimple} options={options} />
                    <h4>Props</h4>
                    <p>We've used only react-bootstrap tags, if you want to see all the props, please refer to <a href="https://react-bootstrap.github.io/components.html#tabs" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a></p>
                    <h2>Page Subcategories</h2>
                    <legend></legend>
                    <p>For something that looks more modular, you can use the page subcategories. It's basically <code>Tab</code>s but with some more of our design.</p>
                    <h4>Imports</h4>
                    <p>For this you will ned the following imports:</p>
                    <CodeMirror value={codePageSubInport} options={options} />
                    <h4>Example Code</h4>
                    <Tab.Container id="nav-with-icons" defaultActiveKey="description">
                        <div>
                            <div className="nav-container">
                                <Nav bsStyle="tabs" bsClass="nav nav-icons">
                                    <NavItem eventKey="description">
                                        <i className="fa fa-info-circle"></i><br /> Description
                                    </NavItem>
                                    <NavItem eventKey="location">
                                        <i className="fa fa-map-marker"></i><br /> Location
                                    </NavItem>
                                    <NavItem eventKey="legal">
                                        <i className="fa fa-legal"></i><br /> Legal Info
                                    </NavItem>
                                    <NavItem eventKey="help">
                                        <i className="fa fa-life-ring"></i><br /> Help Center
                                    </NavItem>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="description">
                                    <Card
                                        title="Description about product"
                                        category="More information here"
                                        content={
                                            <div>
                                                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>
                                                <p>The first thing you notice when you hold the phone is how great it feels in your hand. There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and glass that feels like one continuous surface.</p>
                                            </div>
                                        }
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="location">
                                    <Card
                                        title="Location of product"
                                        category="Here is some text"
                                        content={
                                            <div>
                                                <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                                                <p>Larger, yet dramatically thinner.It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
                                            </div>
                                        }
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="legal">
                                    <Card
                                        title="Legal items"
                                        category="More information here"
                                        content={
                                            <div>
                                                <p>The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                                                <p>Larger, yet dramatically thinner.It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
                                            </div>
                                        }
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="help">
                                    <Card
                                        title="Help center"
                                        category="More information here"
                                        content={
                                            <div>
                                                <p>From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.</p>
                                                <p>Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.</p>
                                            </div>
                                        }
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                    <CodeMirror value={codePageSubExample} options={options} />
                    <h4>Props</h4>
                    <p>We've used react-bootstrap tags, if you want to see all the props, please refer to <a href="https://react-bootstrap.github.io/components.html#tabs" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>. Plus we have used our own component, the <code>Card</code> component.</p>
                </div>
            </div>
        );
    }
}

export default TabsSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TabsSection.jsx