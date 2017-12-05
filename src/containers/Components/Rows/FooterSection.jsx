import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import Footer from 'components/Footer/Footer.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import Footer from 'components/Footer/Footer.jsx';`;
const exampleCode = `<Footer fluid />
<Footer fluid default />
<Footer fluid transparent />
<Footer fluid black />`;
class FooterSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Footers</h2>
                    <legend></legend>
                    <p>The footer component is located in <code>scr/components/Footer/Footer.jsx</code>. Feel free to change the links in there, but keep in mind, that if you delete something else, the folowing props could not work anymore.</p>
                    <p>There are 4 props for footers: <code>transparent</code> for transparent, <code>default</code> for grey, <code>black</code> for black (if you do not use any of these props, the footer will be white) and <code>fluid</code> to make the container of the links fluid (<code>container-fluid</code>).</p>
                    <p>Like most of components, you will have to import it to use it:</p>
                    <CodeMirror value={importCode} options={options}/>
                    <br/>
                    <div style={{backgroundColor: "#c1d9ff", display: "inline-block", padding: "10px", borderRadius: "5px"}}>
                        <Footer fluid />
                        <br />
                        <Footer fluid default />
                        <br />
                        <Footer fluid transparent />
                        <br />
                        <Footer fluid black />
                    </div>
                    <br />
                    <br />
                    <CodeMirror value={exampleCode} options={options}/>
                    <br />
                    <br />
                    <Alert bsStyle="warning">
                        For demo purposes we've used <code>fluid</code> on these examples to make the footers display on a smaller window, and we've added some <code>backgroundColor</code> to the div they're in to show you all the different types of footer.
                    </Alert>
                </div>
            </div>
        );
    }
}

export default FooterSection;