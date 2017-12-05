import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { Row, Col } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import{ selectOptions } from 'variables/Variables.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import Select from 'react-select';
import 'react-select/dist/react-select.css';`;
const codeImportSelectOption = `import{ selectOptions } from 'variables/Variables.jsx';`;
const codeState = `this.state = {
    singleSelect: null,
    multipleSelect: null
};`;
const codeExample = `<Select
    placeholder="Single Select"
    name="singleSelect"
    value={this.state.singleSelect}
    options={selectOptions}
    onChange={(value) => this.setState({ singleSelect: value})}
/>
<Select
    placeholder="Multiple Select"
    closeOnSelect={false}
    multi={true}
    name="multipleSelect"
    value={this.state.multipleSelect}
    options={selectOptions}
    onChange={(value) => { this.setState({ multipleSelect: value})}}
/>`;

class CustomizableSelectSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            singleSelect: null,
            multipleSelect: null
        };
    }
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Customizable Select</h2>
                    <legend></legend>
                    <h4>Import</h4>
                    <p>To use this component you will have to import it and import its css as well like so:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example code</h4>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={6}>
                                    <Select
                                        placeholder="Single Select"
                                        name="singleSelect"
                                        value={this.state.singleSelect}
                                        options={selectOptions}
                                        onChange={(value) => this.setState({ singleSelect: value})}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Select
                                        placeholder="Multiple Select"
                                        closeOnSelect={false}
                                        multi={true}
                                        name="multipleSelect"
                                        value={this.state.multipleSelect}
                                        options={selectOptions}
                                        onChange={(value) => { this.setState({ multipleSelect: value})}}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <CodeMirror value={codeExample} options={options} />
                    <br />
                    <p>As you can see, you will need to add some states in your constructor for this component to work properly:</p>
                    <CodeMirror value={codeState} options={options} />
                    <p>And you will have to give it a collection of elements from which to populate them <code>options=selectOptions</code>.</p>
                    <p>In our demo we've created some files with variables that we use for different components. These variables can be found in <code>src/variables/</code>. To understand better what is this all about, please take a look at these files.</p>
                    <p>For this component we have the <code>selectOptions</code> variable which is located in <code>src/variables/Variables.jsx</code>. We import it like so:</p>
                    <CodeMirror value={codeImportSelectOption} options={options} />
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://github.com/JedWatson/react-select#usage" target="_blank" rel="noopener noreferrer">react-select documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default CustomizableSelectSection;
