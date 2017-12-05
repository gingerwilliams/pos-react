import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton.jsx';`;
const codeExampleTooltips = `const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);`;
const codeExample = `<OverlayTrigger placement="top" overlay={edit}>
    <Button
        bsStyle="info"
        simple
        type="button"
        bsSize="xs"
    >
        <i className="fa fa-edit"></i>
    </Button>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={remove}>
    <Button
        bsStyle="danger"
        simple
        type="button"
        bsSize="xs"
    >
        <i className="fa fa-times"></i>
    </Button>
</OverlayTrigger>`;
class TooltipSection extends Component{
    render(){
        const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
        const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tooltips</h2>
                    <legend></legend>
                    <p>You will see the usage of these components in the <code>Table</code> section.</p>
                    <h4>Imports</h4>
                    <p>For this component you'll need the following imports:</p>
                    <CodeMirror value={codeImport} options={options} />
                    <h4>Example</h4>
                    <OverlayTrigger placement="top" overlay={edit}>
                        <Button
                            bsStyle="info"
                            simple
                            type="button"
                            bsSize="xs"
                        >
                            <i className="fa fa-edit"></i>
                        </Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={remove}>
                        <Button
                            bsStyle="danger"
                            simple
                            type="button"
                            bsSize="xs"
                        >
                            <i className="fa fa-times"></i>
                        </Button>
                    </OverlayTrigger>
                    <CodeMirror value={codeExample} options={options} />
                    <p>And the definition of the <code>Tooltip</code>s:</p>
                    <CodeMirror value={codeExampleTooltips} options={options} />
                </div>
            </div>
        );
    }
}

export default TooltipSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TooltipSection.jsx