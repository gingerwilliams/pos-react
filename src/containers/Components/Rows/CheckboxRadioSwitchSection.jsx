import React, { Component } from 'react';
import{ Table } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import Switch from 'react-bootstrap-switch';

import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';
import Radio from 'elements/CustomRadio/CustomRadio.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};

const importCheckCode = `import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';`;
const importRadioCode = `import Radio from 'elements/CustomRadio/CustomRadio.jsx';`;
const importSwitchCode = `import Switch from 'react-bootstrap-switch';`;

const checkboxesCode = `<Checkbox
    isChecked
    number="1d"
    label="Subscribe to newsletter"
/>
<Checkbox
    number="2d"
    label="Subscribe to newsletter"
/>
<Checkbox
    isChecked
    disabled
    number="3d"
    label="Subscribe to newsletter"
/>
<Checkbox
    disabled
    number="4d"
    label="Subscribe to newsletter"
/>`;
const radioButtonsCode = `<Radio
    number="1dr"
    option="1"
    name="radio"
    onChange={this.handleRadio}
    checked={this.state.radio === "1"}
    label="Checked"
/>
<Radio
    number="2dr"
    option="2"
    name="radio"
    onChange={this.handleRadio}
    checked={this.state.radio === "2"}
    label="Unchecked"
/>
<Radio
    disabled
    number="3dr"
    option="4"
    name="radioDisabled"
    checked={true}
    label="Checked"
/>
<Radio
    disabled
    number="4dr"
    option="5"
    name="radioDisabled"
    checked={false}
    label="Unchecked"
/>`;
const radioButtonsStateCode = `this.state = {
    radio: "1"
};`;
const radioButtonsHandleCode = `handleRadio = event => {
    const target = event.target;
    this.setState({
        [target.name]: target.value
    });
};`;
const switchesCode = `<Switch
    defaultValue={false}
/>{" "}
<Switch />
<Switch
    onText=""
    offText=""
    defaultValue={false}
/>{" "}
<Switch
    onText=""
    offText=""
/>
<Switch
    onText="✔"
    offText="✘"
    defaultValue={false}
/>{" "}
<Switch
    onText="✔"
    offText="✘"
/>`;

class CheckboxRadioSwitchSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            radio: "1"
        };
    }
    handleRadio = event => {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    };
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Checkboxes</h2>
                    <legend></legend>
                    <h4>Import</h4>
                    <p>To use our custom made Checkboxes you need to import them like so:</p>
                    <CodeMirror value={importCheckCode} options={options} />
                    <h4>Example code</h4>
                    <Checkbox
                        isChecked
                        number="1d"
                        label="Subscribe to newsletter"
                    />
                    <Checkbox
                        number="2d"
                        label="Subscribe to newsletter"
                    />
                    <Checkbox
                        isChecked
                        disabled
                        number="3d"
                        label="Subscribe to newsletter"
                    />
                    <Checkbox
                        disabled
                        number="4d"
                        label="Subscribe to newsletter"
                    />
                    <CodeMirror value={checkboxesCode} options={options} />
                    <h4>Props</h4>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Required?</td>
                                <td>Type</td>
                                <td>Default</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>isChecked</code></td>
                                <td>no</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the checkbox checked by default.</td>
                            </tr>
                            <tr>
                                <td><code>number</code></td>
                                <td className="text-danger">yes</td>
                                <td>string</td>
                                <td>null</td>
                                <td>You <span className="text-danger">need</span> to set this prop and it has to be <span className="text-danger">unique</span> (this prop sets the id of the Checkbox).</td>
                            </tr>
                            <tr>
                                <td><code>label</code></td>
                                <td>no</td>
                                <td>string / react component</td>
                                <td>null</td>
                                <td>Use this prop to set a label for the checkbox.</td>
                            </tr>
                            <tr>
                                <td><code>inline</code></td>
                                <td>no</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the checkboxes <code>display: inline-block</code>.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>Please refer to <a href="https://react-bootstrap.github.io/components.html#forms-props-checkbox" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a> for more.</p>
                </div>
                <div className="tim-row">
                    <h2>Radio Buttons</h2>
                    <legend></legend>
                    <h4>Import</h4>
                    <p>To use our custom made RadioButtons you need to import them like so:</p>
                    <CodeMirror value={importRadioCode} options={options} />
                    <h4>Example code</h4>
                    <Radio
                        number="1dr"
                        option="1"
                        name="radio"
                        onChange={this.handleRadio}
                        checked={this.state.radio === "1"}
                        label="Checked"
                    />
                    <Radio
                        number="2dr"
                        option="2"
                        name="radio"
                        onChange={this.handleRadio}
                        checked={this.state.radio === "2"}
                        label="Unchecked"
                    />
                    <Radio
                        disabled
                        number="3dr"
                        option="4"
                        name="radioDisabled"
                        checked={true}
                        label="Checked"
                    />
                    <Radio
                        disabled
                        number="4dr"
                        option="5"
                        name="radioDisabled"
                        checked={false}
                        label="Unchecked"
                    />
                    <CodeMirror value={radioButtonsCode} options={options} />
                    <p>As you can see, you need to add a function for handleing these components where you use them, keep in mind that you can change this function, but for them to work properly you will need the following code at least:</p>
                    <CodeMirror value={radioButtonsHandleCode} options={options} />
                    <p>And you will need to create a state (in the constructor of your component / in the constructor where you render them) for them so that react knows which one is checked and which one is not (you will need to give the name of that <code>state</code> as the name that you've given to your radios):</p>
                    <CodeMirror value={radioButtonsStateCode} options={options} />
                    <h4>Props</h4>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Required?</td>
                                <td>Type</td>
                                <td>Default</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>label</code></td>
                                <td>no</td>
                                <td>string / react component</td>
                                <td>null</td>
                                <td>Use this prop to set a label for the radio button.</td>
                            </tr>
                            <tr>
                                <td><code>number</code></td>
                                <td className="text-danger">yes</td>
                                <td>string</td>
                                <td>null</td>
                                <td>You <span className="text-danger">need</span> to set this prop and it has to be <span className="text-danger">unique</span> (this prop sets the id of the Radio Button).</td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td className="text-danger">yes</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Use this prop to set the name of the radio button (you need to set this prop because it is tied up with the <code>state</code> of the component - see above).</td>
                            </tr>
                            <tr>
                                <td><code>option</code></td>
                                <td className="text-danger">yes</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Use this prop to set the value of the radio button (you need to set this prop because it is tied up with the value of the <code>state</code> of the component - see above).</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>Please refer to <a href="https://react-bootstrap.github.io/components.html#forms-props-radio" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a> for more.</p>
                </div>
                <div className="tim-row">
                    <h2>Switches</h2>
                    <legend></legend>
                    <h4>Import</h4>
                    <p>To use this component you need to import it ike so:</p>
                    <CodeMirror value={importSwitchCode} options={options} />
                    <h4>Example code</h4>
                    <Switch
                        defaultValue={false}
                    />{" "}
                    <Switch />
                    <Switch
                        onText=""
                        offText=""
                        defaultValue={false}
                    />{" "}
                    <Switch
                        onText=""
                        offText=""
                    />
                    <Switch
                        onText="✔"
                        offText="✘"
                        defaultValue={false}
                    />{" "}
                    <Switch
                        onText="✔"
                        offText="✘"
                    />
                    <CodeMirror value={switchesCode} options={options} />
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://github.com/Julusian/react-bootstrap-switch#properties" target="_blank" rel="noopener noreferrer">react-bootstrap-switch documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default CheckboxRadioSwitchSection;

