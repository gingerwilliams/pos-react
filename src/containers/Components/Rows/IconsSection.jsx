import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import { Row, Col } from 'react-bootstrap';`;
const codeExample = `<Row className="all-icons">
    <Col lg={2} md={3} sm={4} xs={6} className="font-icon-list">
        <div className="font-icon-detail">
            <i className="pe-7s-album"></i>
            <input type="text" defaultValue="pe-7s-album" />
        </div>
    </Col>
</Row>`;
class IconsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Icons</h2>
                    <legend></legend>
                    <p>We used the default icons from <a href="http://themes-pixeden.com/font-demos/7-stroke/index.html" target="_blank" rel="noopener noreferrer">Pixeden</a>.</p>
                    <h4>Imports</h4>
                    <p>To get the look from our demo, you'll need the following imports:</p>
                    <CodeMirror value={codeImport} options={options} />
                    <h4>Example</h4>
                    <Row className="all-icons">
                        <Col lg={2} md={3} sm={4} xs={6} className="font-icon-list">
                            <div className="font-icon-detail">
                                <i className="pe-7s-album"></i>
                                <input type="text" defaultValue="pe-7s-album" />
                            </div>
                        </Col>
                    </Row>
                    <CodeMirror value={codeExample} options={options} />
                    <h4>Details</h4>
                    <p>You'll find all these icons in <code>src/variables/Variables.jsx</code>.</p>
                </div>
            </div>
        );
    }
}

export default IconsSection;
