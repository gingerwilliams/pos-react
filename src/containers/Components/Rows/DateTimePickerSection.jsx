import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { FormGroup } from 'react-bootstrap';`;
const exampleCode = `<FormGroup>
    <Datetime
        inputProps={{placeholder:"Datetime Picker Here"}}
    />
</FormGroup>`;
class DateTimePickerSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>DateTimePicker</h2>
                    <legend></legend>
                    <p>We have created a date-time picker starting from <a href="https://github.com/YouCanBookMe/react-datetime" target="_blank" rel="noopener noreferrer">this wonderful plugin</a> created by <a href="https://github.com/YouCanBookMe" target="_blank" rel="noopener noreferrer">YouCanBook.Me Ltd</a>. We have changed the culors, typography and buttons, so it can look like the rest of the dashboard.</p>
                    <h4>Imports</h4>
                    <p>To use this component you'll have to make this import:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example Code</h4>
                    <FormGroup>
                        <Datetime
                            inputProps={{placeholder:"Datetime Picker Here"}}
                        />
                    </FormGroup>
                    <CodeMirror value={exampleCode} options={options} />
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://github.com/YouCanBookMe/react-datetime" target="_blank" rel="noopener noreferrer">react-datetime documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default DateTimePickerSection;
