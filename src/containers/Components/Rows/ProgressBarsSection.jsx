import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import { ProgressBar } from 'react-bootstrap';`;
const exampleCode = `<ProgressBar
    now={30}
    className="progress-line-primary"
    label="30% Complete" srOnly
/>
<ProgressBar
    bsStyle="info"
    now={60}
    className="progress-line-info"
    label="60% Complete" srOnly
/>
<ProgressBar>
    <ProgressBar
        bsStyle="success"
        now={35}
        key={1}
        label="35% Complete (success)"
        srOnly
    />
    <ProgressBar
        bsStyle="warning"
        now={20}
        key={2}
        label="20% Complete (warning)"
        srOnly
    />
    <ProgressBar
        active
        bsStyle="danger"
        now={10}
        key={3}
        label="10% Complete (danger)"
        srOnly
    />
</ProgressBar>`;
class ProgressBarsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Progress Bars</h2>
                    <legend></legend>
                    <p>The progress bars from React-Bootstrap hold the same classes and functionality. Adding this dashboard over your existing project will only make it look more clean and minimal.</p>
                    <p>To use them, simply import them like so:</p>
                    <CodeMirror value={importCode} options={options}/>
                    <br />
                    <h4>Example Code</h4>
                    <ProgressBar
                        now={30}
                        className="progress-line-primary"
                        label="30% Complete" srOnly
                    />
                    <ProgressBar
                        bsStyle="info"
                        now={60}
                        className="progress-line-info"
                        label="60% Complete" srOnly
                    />
                    <ProgressBar>
                        <ProgressBar bsStyle="success" now={35} key={1} label="35% Complete (success)" srOnly/>
                        <ProgressBar bsStyle="warning" now={20} key={2} label="20% Complete (warning)" srOnly/>
                        <ProgressBar active bsStyle="danger" now={10} key={3} label="10% Complete (danger)" srOnly/>
                    </ProgressBar>
                    <CodeMirror value={exampleCode} options={options}/>
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://react-bootstrap.github.io/components.html#progress-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default ProgressBarsSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/ProgressBarsSection.jsx