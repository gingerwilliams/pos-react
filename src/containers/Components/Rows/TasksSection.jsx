import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import Tasks from 'components/Tasks/Tasks.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import Tasks from 'components/Tasks/Tasks.jsx';`;
const codeExample = `<table className="table">
    <Tasks />
</table>`;
class TasksSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tasks</h2>
                    <legend></legend>
                    <p>We've created a special component to render the tasks list shown in <code>Dashboard</code> <code>Task</code> card.</p>
                    <CodeMirror value={codeImport} options={options}/>
                    <h4>Example code</h4>
                    <table className="table">
                        <Tasks />
                    </table>
                    <CodeMirror value={codeExample} options={options}/>
                    <p>If you want to understand this component better, please take a look inside <code>src/components/Tasks/Tasks.jsx</code> file.</p>
                </div>
            </div>
        );
    }
}

export default TasksSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TasksSection.jsx