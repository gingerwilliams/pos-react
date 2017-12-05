import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import { Pagination } from 'react-bootstrap';`;
const codePagnation = `<Pagination
    className="pagination-no-border"
    first
    last
    items={5}
    activePage={3}
/>
<Pagination
    first
    last
    items={5}
    activePage={3}
/>`;
const codePagnationColors = `<Pagination
    className="pagination-blue"
    first
    last
    items={5}
    activePage={3}
/>
<Pagination
    className="pagination-green"
    first
    last
    items={5}
    activePage={3}
/>
<Pagination
    className="pagination-orange"
    first
    last
    items={5}
    activePage={3}
/>
<Pagination
    className="pagination-red"
    first
    last
    items={5}
    activePage={3}
/>`;
class PaginationSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Pagination</h2>
                    <legend></legend>
                    <p>We took the React-Bootstrap pagination elements and customised them to fit the overall theme. We also added a special <code>className</code> called <code>.pagination-no-border</code>, which does what its name says and improves the overall clean look.</p>
                    <p>To use them, you'll have to import them:</p>
                    <CodeMirror value={codeImport} options={options} />
                    <Pagination
                        className="pagination-no-border"
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <Pagination
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <CodeMirror value={codePagnation} options={options} />
                    <br />
                    <br />
                    <p>Besides the classic look, we also added the color <code>className</code>s to offer more customisation (<code>pagination-blue</code>, <code>pagination-green</code>, <code>pagination-orange</code>, <code>pagination-red</code>).</p>
                    <Pagination
                        className="pagination-blue"
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <br />
                    <Pagination
                        className="pagination-green"
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <br />
                    <Pagination
                        className="pagination-orange"
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <br />
                    <Pagination
                        className="pagination-red"
                        first
                        last
                        items={5}
                        activePage={3}
                    />
                    <br />
                    <br />
                    <CodeMirror value={codePagnationColors} options={options} />
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://react-bootstrap.github.io/components.html#pagination-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default PaginationSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/PaginationSection.jsx