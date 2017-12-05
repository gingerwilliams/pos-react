import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import TagsInput from 'react-tagsinput';`;
const stateCode = `this.state = {
    regularTags: ["pizza","pasta","parmesan"],
    filledTags: ["pizza","pasta","parmesan"]
};
this.handleRegularTags = this.handleRegularTags.bind(this);
this.handleFilledTags = this.handleFilledTags.bind(this);`;
const codeExample = `<TagsInput
    value={this.state.regularTags}
    onChange={this.handleRegularTags}
    tagProps={{className: 'react-tagsinput-tag tag-azure' }}
/>
<TagsInput
    value={this.state.filledTags}
    onChange={this.handleFilledTags}
    tagProps={{className: 'react-tagsinput-tag tag-fill tag-azure' }}
/>`;
const codeFunctions = `handleRegularTags(regularTags) {
    this.setState({regularTags});
}
handleFilledTags(filledTags) {
    this.setState({filledTags});
}`;
class TagsSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            regularTags: ["pizza","pasta","parmesan"],
            filledTags: ["pizza","pasta","parmesan"]
        };
        this.handleRegularTags = this.handleRegularTags.bind(this);
        this.handleFilledTags = this.handleFilledTags.bind(this);
    }
    handleRegularTags(regularTags) {
        this.setState({regularTags});
    }
    handleFilledTags(filledTags) {
        this.setState({filledTags});
    }
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tags</h2>
                    <legend></legend>
                    <p>You will have to import this component like so:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example code</h4>
                    <Row>
                        <Col md={6}>
                            Regular
                            <TagsInput value={this.state.regularTags} onChange={this.handleRegularTags} tagProps={{className: 'react-tagsinput-tag tag-azure' }}/>
                            Filled
                            <TagsInput value={this.state.filledTags} onChange={this.handleFilledTags} tagProps={{className: 'react-tagsinput-tag tag-fill tag-azure' }}/>
                        </Col>
                    </Row>
                    <br />
                    <CodeMirror value={codeExample} options={options} />
                    <p>As you can see, you will need to add some states in your component constructor:</p>
                    <CodeMirror value={stateCode} options={options} />
                    <p>And bind <code>this</code> to the functions that change the tags value.</p>
                    <p>Functions look like this:</p>
                    <CodeMirror value={codeFunctions} options={options} />
                    <h4>Props</h4>
                    <p>We've added our own style for this component, and you can use the following classes (<code>className</code>) inside the <code>tagProps</code> prop to add the style you want.</p>
                    <ul>
                        <li>
                            <code>tag-<b>color</b></code>
                            where <code><b>color</b></code> can be one of the following:
                            <ul>
                                <li><code>blue</code></li>
                                <li><code>azure</code></li>
                                <li><code>green</code></li>
                                <li><code>orange</code></li>
                                <li><code>red</code></li>
                            </ul>
                        </li>
                        <li><code>tag-fill</code> to make filled tags</li>
                    </ul>
                    <p>For more information, please refer to <a href="https://github.com/olahol/react-tagsinput#props" target="_blank" rel="noopener noreferrer">react-tagsinput documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default TagsSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TagsSection.jsx