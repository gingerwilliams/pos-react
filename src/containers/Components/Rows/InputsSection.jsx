import React, { Component } from 'react';
import { Table, Alert } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import FormInputs from 'components/FormInputs/FormInputs.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import FormInputs from 'components/FormInputs/FormInputs.jsx';`;
const code = `<FormInputs
    ncols = {["col-md-6" , "col-md-6"]}
    proprieties = {[
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Input"
        },
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Success",
         defaultValue : "Success",
         className: "valid"
        }
    ]}
/>
<FormInputs
    ncols = {["col-md-6" , "col-md-6"]}
    proprieties = {[
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Input",
         validationState: "error"
        },
        {
         type : "text",
         bsClass : "form-control",
         placeholder : "Group addon",
         defaultValue : "Group addon",
         addonRight : (<i className="fa fa-group"></i>)
        }
    ]}
/>`;
class InputsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Inputs</h2>
                    <legend></legend>
                    <p>We've restyled the Bootstrap input to give it a more flat, minimal look. You can use the classic look, different colors and states or input groups.</p>
                    <p>For a better way to render form inputs we've created a special component <code>FormInputs</code>. We use this component to create a whole row of inputs. To use this component you need to import it:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example Code</h4>
                    <FormInputs
                        ncols = {["col-md-6" , "col-md-6"]}
                        proprieties = {[
                            {
                             type : "text",
                             bsClass : "form-control",
                             placeholder : "Input"
                            },
                            {
                             type : "text",
                             bsClass : "form-control",
                             placeholder : "Success",
                             defaultValue : "Success",
                             className: "valid"
                            }
                        ]}
                    />
                    <FormInputs
                        ncols = {["col-md-6" , "col-md-6"]}
                        proprieties = {[
                            {
                             type : "text",
                             bsClass : "form-control",
                             placeholder : "Input",
                             validationState: "error"
                            },
                            {
                             type : "text",
                             bsClass : "form-control",
                             placeholder : "Group addon",
                             defaultValue : "Group addon",
                             addonRight : (<i className="fa fa-group"></i>)
                            }
                        ]}
                    />
                    <CodeMirror value={code} options={options} />
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
                                <td><code>ncols</code></td>
                                <td className="text-danger">yes</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Use this prop to tell the component how the row should be divided.</td>
                            </tr>
                            <tr>
                                <td><code>proprieties</code></td>
                                <td className="text-danger">yes</td>
                                <td>array</td>
                                <td>null</td>
                                <td>Use this prop to tell the component what kind of input should be rendered for the each specified col.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Alert bsStyle="warning">
                        <strong>Warning!</strong><br />
                        <p>The number of elements in <code>proprieties</code> has to be equal to the number of elements in <code>ncols</code> for this component to work properly.</p>
                        <p><code>proprieties</code> are props that come from react-bootstrap inputs props. Please refer to <a href="https://react-bootstrap.github.io/components.html#forms-controls-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a> for all the props that you can pass in this array of objects.</p>
                    </Alert>
                    <p>You can also use normal react-bootstrap elements for creating inputs. For this please refer to <a href="https://react-bootstrap.github.io/components.html#forms" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default InputsSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/InputsSection.jsx