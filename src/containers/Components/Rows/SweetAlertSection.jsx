import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import SweetAlert from 'react-bootstrap-sweetalert';

import Button from 'elements/CustomButton/CustomButton.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import SweetAlert from 'react-bootstrap-sweetalert';
import Button from 'elements/CustomButton/CustomButton.jsx';`;
const stateCode = `this.state = {
    alert: null
}`;
const buttonCode = `<Button fill onClick={this.successAlert.bind(this)}>Try me!</Button>
{this.state.alert}`;
const functionCode = `successAlert(){
    this.setState({
        alert: (
            <SweetAlert
                success
                style={{display: "block",marginTop: "-100px"}}
                title="Good job!"
                onConfirm={() => this.setState({alert: null})}
                onCancel={() => this.setState({alert: null})}
                confirmBtnBsStyle="info"
            >
                You clicked the button!
            </SweetAlert>
        )
    });
}`;
class SweetAlertSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            alert: null
        }
    }
    successAlert(){
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{display: "block",marginTop: "-100px"}}
                    title="Good job!"
                    onConfirm={() => this.setState({alert: null})}
                    onCancel={() => this.setState({alert: null})}
                    confirmBtnBsStyle="info"
                >
                    You clicked the button!
                </SweetAlert>
            )
        });
    }
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Sweet Alert</h2>
                    <legend></legend>
                    <h4>Imports</h4>
                    <p>To use this component you'll have to make this import:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example Code</h4>
                    <p>If you want to replace the classic alert box with something that looks amazing, you can use the React Bootstrap Sweet Alert Plugin. We have changed the typography and colors for the plugin provided by <a href="https://github.com/djorg83" target="_blank" rel="noopener noreferrer">Daniel Jorgensens</a>. If you want to see the full documentation, please check out <a href="https://github.com/djorg83/react-bootstrap-sweetalert" target="_blank" rel="noopener noreferrer">this</a> page. </p>
                    <p>If you want to see a basic coded example, here is one below.</p>
                    <Button fill onClick={this.successAlert.bind(this)}>Try me!</Button>
                    {this.state.alert}
                    <p>First of all you need a <code>state</code> in your <code>constructor</code></p>
                    <CodeMirror value={stateCode} options={options} />
                    <p>Than you will need a function:</p>
                    <CodeMirror value={functionCode} options={options} />
                    <p>And the last thing, is to make a button that calls this function, and to render the alert</p>
                    <CodeMirror value={buttonCode} options={options} />
                </div>
            </div>
        );
    }
}

export default SweetAlertSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/SweetAlertSection.jsx