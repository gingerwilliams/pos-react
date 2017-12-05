import React, { Component } from 'react';
import {
    DropdownButton, MenuItem,
    Row, Col
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const codeImport = `import { DropdownButton, MenuItem } from 'react-bootstrap';`;
const codeExample = `<DropdownButton title="Default" key="1" id={\`dropdown-basic-1\`}>
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="5">One more separated link</MenuItem>
</DropdownButton>`;

const options = {
    mode: 'jsx',
    readOnly: true
};

class DropdownSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Dropdown</h2>
                    <legend></legend>
                    <p>We are very proud to present the dropdown, we added a subtle animation for this classic widget.</p>
                    <p>Here is an examples and the code:</p>
                    <Row>
                        <Col md={3} className="dropdown">
                            <DropdownButton title="Default" key="1" id={`dropdown-basic-1`}>
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3">Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="5">One more separated link</MenuItem>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <br />
                    <p>To use the dropdown from react-bootstrap you need to import it with it's elements like so:</p>
                    <CodeMirror value={codeImport} options={options} />
                    <p>And here is the code:</p>
                    <CodeMirror value={codeExample} options={options} />
                    <p>For more info please refer to <a href="https://react-bootstrap.github.io/components.html#btn-dropdowns" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://react-bootstrap.github.io/components.html#btn-dropdowns-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default DropdownSection;
