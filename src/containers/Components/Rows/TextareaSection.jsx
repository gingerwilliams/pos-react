import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const code = `<FormGroup controlId="formControlsTextarea">
    <ControlLabel>Textarea</ControlLabel>
    <FormControl componentClass="textarea" placeholder="textarea" />
</FormGroup>`;
const codeImport = `import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';`;
const options = {
    mode: 'jsx',
    readOnly: true
};
class TextareaSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Textarea</h2>
                    <legend></legend>
                    <p>We added custom style for the textarea, so it looks similar to all other inputs.</p>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Textarea</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    <br />
                    <CodeMirror value={code} options={options} />
                    <br />
                    <p>As you can see we've used the default react-bootstrap tags for this, the only changes were made in css, so you just have to import these tags from react-bootstrap like so:</p>
                    <CodeMirror value={codeImport} options={options} />
                </div>
            </div>
        );
    }
}

export default TextareaSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TextareaSection.jsx