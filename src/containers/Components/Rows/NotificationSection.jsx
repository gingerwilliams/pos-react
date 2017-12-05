import React, { Component } from 'react';
import {
    Row, Col,
    Alert
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import NotificationSystem from 'react-notification-system';
import {style} from "variables/Variables.jsx";

import Button from "elements/CustomButton/CustomButton.jsx";

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import NotificationSystem from 'react-notification-system';
import {style} from "variables/Variables.jsx";
import Button from "elements/CustomButton/CustomButton.jsx";`;
const codeExample = `<NotificationSystem ref="notificationSystem" style={style}/>
<Row>
    <Col md={3}>
        <Button
            block
            onClick={this.handleClick.bind(this,'tl')}
        >
            Show notification
        </Button>
    </Col>
</Row>`;
const codeExampleFunction = `handleClick(position){
    var color = Math.floor((Math.random() * 4) + 1);
    switch (color) {
        case 1:
        level = 'success';
        break;
        case 2:
        level = 'warning';
        break;
        case 3:
        level = 'error';
        break;
        case 4:
        level = 'info';
        break;
        default:
        break;
    }
    this.state._notificationSystem.addNotification({
        title: (<span data-notify="icon" className="pe-7s-gift"></span>),
        message: (
            <div>
                Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
            </div>
        ),
        level: level,
        position: position,
        autoDismiss: 15,
    });`;
const codeExampleMount = `this.setState({_notificationSystem: this.refs.notificationSystem})`;
const codeExampleConstruct = `this.handleClick = this.handleClick.bind(this);
this.componentDidMount = this.componentDidMount.bind(this);
this.state = {
    _notificationSystem: null
};`;
class NotificationSection extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }
    handleClick(position){
        position = Math.floor((Math.random() * 6) + 1);
        var level;
        switch (position) {
            case 1:
            level = 'tl';
            break;
            case 2:
            level = 'tc';
            break;
            case 3:
            level = 'tr';
            break;
            case 4:
            level = 'bl';
            break;
            case 5:
            level = 'bc';
            break;
            case 6:
            level = 'br';
            break;
            default:
            break;
        }
        position = level;
        var color = Math.floor((Math.random() * 4) + 1);
        switch (color) {
            case 1:
            level = 'success';
            break;
            case 2:
            level = 'warning';
            break;
            case 3:
            level = 'error';
            break;
            case 4:
            level = 'info';
            break;
            default:
            break;
        }
        this.state._notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15,
        });
    }

    componentDidMount(){
        this.setState({_notificationSystem: this.refs.notificationSystem})
    }
    render(){
        return (
            <div className="tim-container">
                <NotificationSystem ref="notificationSystem" style={style}/>
                <div className="tim-row">
                    <h2>Notifications</h2>
                    <legend></legend>
                    <p>For this component we've used <a href="https://github.com/igorprado/react-notification-system" target="_blank" rel="noopener noreferrer">igorprado</a>'s react-notification-system and we've added some personalised style for a cleaner and fresher look. They go great with the navbar. They come in 4 different colors (<code>success</code>, <code>warning</code>, <code>error</code>, <code>info</code>), and they can be rednered in 6 different places (<code>tl</code>	top-left, <code>tc</code> top center, <code>tr</code>	top-right, <code>bl</code>	bottom-left, <code>bc</code>	bottom-center, <code>br</code>	bottom-right)</p>
                    <h4>Imports</h4>
                    <p>For this you will need the following imports:</p>
                    <br />
                    <CodeMirror value={codeImport} options={options} />
                    <br />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={3}>
                            <Button block onClick={this.handleClick.bind(this,'tl')}>Show notification</Button>
                        </Col>
                    </Row>
                    <br />
                    <CodeMirror value={codeExample} options={options} />
                    <br />
                    <p>Beside this code that you have to put it in your render method, you will have to put the following in your constructor:</p>
                    <br />
                    <CodeMirror value={codeExampleConstruct} options={options} />
                    <br />
                    <p>Then put the following in your <code>componentDidMount</code> function:</p>
                    <br />
                    <CodeMirror value={codeExampleMount} options={options} />
                    <br />
                    <p>And finally add this function in your component:</p>
                    <br />
                    <CodeMirror value={codeExampleFunction} options={options} />
                    <br />
                    <Alert bsStyle="warning">
                        In this page, the <code>Show notification</code> button has a random generated <code>position</code> and <code>level</code>.
                    </Alert>
                    <Alert bsStyle="warning">
                        We've put all the above in our <code>Dash</code> container, and we've sent the <code>function</code> of the notifications as a prop to our <code>Notifications</code> view. We've done this due to the fact that the <code>wrapper div</code> of the <code>notifications</code> has to be outside the <code>main-panel div</code>.
                    </Alert>
                    <h4>Props</h4>
                    <p>
                        For more details about <code>NotificationSystem</code> please refer to <a href="https://github.com/igorprado/react-notification-system" target="_blank" rel="noopener noreferrer">react-notification-system documentation</a>.
                    </p>
                </div>
            </div>
        );
    }
}

export default NotificationSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/NotificationSection.jsx