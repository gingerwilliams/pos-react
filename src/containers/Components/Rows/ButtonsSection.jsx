import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import{ Table } from 'react-bootstrap';


import Button from 'elements/CustomButton/CustomButton.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};

const importCode = `import Button from 'elements/CustomButton/CustomButton.jsx';`;

const colorsCode = `<Button bsStyle="default">Default</Button>
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="info">Info</Button>
<Button bsStyle="success">Success</Button>
<Button bsStyle="warning">Warning</Button>
<Button bsStyle="danger">Danger</Button>
<Button neutral>Neutral</Button>`;

const sizesCode = `<Button bsSize="lg">Large</Button>
<Button>Normal</Button>
<Button bsSize="sm">Small</Button>
<Button bsSize="xs">Extra Small</Button>`;

const stylesCode = `<Button>Default</Button>
<Button fill>Filled</Button>
<Button round>Rounded</Button>
<Button wd>Min Width</Button>
<Button simple>Simple</Button>
<Button simple icon>
    <i className="fa fa-image"></i>
</Button>`;

const socialsCode = `<Button fill twitter><i className="fa fa-twitter"></i></Button>
<Button fill facebook><i className="fa fa-facebook"> </i></Button>
<Button fill google><i className="fa fa-google-plus"> </i></Button>
<Button fill linkedin><i className="fa fa-linkedin"></i></Button>
<Button fill pinterest><i className="fa fa-pinterest"></i></Button>
<Button fill youtube><i className="fa fa-youtube-play"></i></Button>
<Button fill tumblr><i className="fa fa-tumblr"> </i></Button>
<Button fill github><i className="fa fa-github"></i></Button>
<Button fill behance><i className="fa fa-behance"></i></Button>
<Button fill dribbble><i className="fa fa-dribbble"></i></Button>
<Button fill reddit><i className="fa fa-reddit"></i></Button>
<Button fill stumbleupon><i className="fa fa-stumbleupon"></i></Button>`;

class ButtonsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <h2>Buttons</h2>
                <legend></legend>
                <h4>Import</h4>
                <p>If you want to use our custom made buttons you need to import them like so:</p>
                <CodeMirror value={importCode} options={options} />
                <h4>Color</h4>
                <p>We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:</p>
                <div style={{backgroundColor: "#D5D5D5", display: "inline-block", padding: "5px 5px", borderRadius: "5px"}}>
                    <Button bsStyle="default">Default</Button>
                    <Button bsStyle="primary">Primary</Button>
                    <Button bsStyle="info">Info</Button>
                    <Button bsStyle="success">Success</Button>
                    <Button bsStyle="warning">Warning</Button>
                    <Button bsStyle="danger">Danger</Button>
                    <Button neutral>Neutral</Button>
                </div>
                <br />
                <br />
                <CodeMirror value={colorsCode} options={options} />
                <h4>Sizes</h4>
                <p>Buttons come in all needed sizes:</p>
                <p>
                    <Button bsSize="lg">Large</Button>
                    <Button>Normal</Button>
                    <Button bsSize="sm">Small</Button>
                    <Button bsSize="xs">Extra Small</Button>
                </p>
                <CodeMirror value={sizesCode} options={options} />
                <h4>Styles</h4>
                <p>We added extra props that can help you better customise the look. You can use regular buttons, filled buttons, rounded corners buttons, minimum width, icons or plain link buttons. Let's see some examples:</p>
                <p>
                    <Button>Default</Button>
                    <Button fill>Filled</Button>
                    <Button round>Rounded</Button>
                    <Button wd>Min Width</Button>
                    <Button simple>Simple</Button>
                    <Button simple icon bsStyle="info">
                        <i className="fa fa-image"></i>
                    </Button>
                </p>
                <CodeMirror value={stylesCode} options={options} />
                <h4>Social Buttons</h4>
                <p>An extra category of buttons that are necessary for any project is the social buttons. We have added props that provide the default color for every social network. </p>
                <p>To use them, you have to add to your button the specific network as a prop, for example <code>twitter</code>. All styles described above can be applied to social buttons, ranging from filled to round to simple. </p>
                <p>We used the Font Awesome social icons that you can find <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank" rel="noopener noreferrer">here</a>. </p>
                <p>Here is the example for all the social buttons with the filled style:</p>
                <p>
                    <Button fill twitter><i className="fa fa-twitter"></i></Button>
                    <Button fill facebook><i className="fa fa-facebook"> </i></Button>
                    <Button fill google><i className="fa fa-google-plus"> </i></Button>
                    <Button fill linkedin><i className="fa fa-linkedin"></i></Button>
                    <Button fill pinterest><i className="fa fa-pinterest"></i></Button>
                    <Button fill youtube><i className="fa fa-youtube-play"></i></Button>
                    <Button fill tumblr><i className="fa fa-tumblr"> </i></Button>
                    <Button fill github><i className="fa fa-github"></i></Button>
                    <Button fill behance><i className="fa fa-behance"></i></Button>
                    <Button fill dribbble><i className="fa fa-dribbble"></i></Button>
                    <Button fill reddit><i className="fa fa-reddit"></i></Button>
                    <Button fill stumbleupon><i className="fa fa-stumbleupon"></i></Button>
                </p>
                <CodeMirror value={socialsCode} options={options} />
                <h4>Props</h4>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Type</td>
                            <td>Default</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>fill</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button filled.</td>
                        </tr>
                        <tr>
                            <td><code>simple</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button simple (link like).</td>
                        </tr>
                        <tr>
                            <td><code>pullRight</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button float right.</td>
                        </tr>
                        <tr>
                            <td><code>block</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button width like the widht of parent.</td>
                        </tr>
                        <tr>
                            <td><code>wd</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button width minimum 140px.</td>
                        </tr>
                        <tr>
                            <td><code>round</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button round.</td>
                        </tr>
                        <tr>
                            <td><code>icon</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make an icon button.</td>
                        </tr>
                        <tr>
                            <td><code>neutral</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Use this prop to make the button white.</td>
                        </tr>
                        <tr>
                            <td><code>twitter</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of twitter.</td>
                        </tr>
                        <tr>
                            <td><code>facebook</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of facebook.</td>
                        </tr>
                        <tr>
                            <td><code>google</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of google+.</td>
                        </tr>
                        <tr>
                            <td><code>linkedin</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of linkedin.</td>
                        </tr>
                        <tr>
                            <td><code>pinterest</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of pinterest.</td>
                        </tr>
                        <tr>
                            <td><code>youtube</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of youtube.</td>
                        </tr>
                        <tr>
                            <td><code>tumblr</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of tumblr.</td>
                        </tr>
                        <tr>
                            <td><code>github</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of github.</td>
                        </tr>
                        <tr>
                            <td><code>behance</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of behance</td>
                        </tr>
                        <tr>
                            <td><code>dribbble</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of dribbble.</td>
                        </tr>
                        <tr>
                            <td><code>reddit</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of reddit.</td>
                        </tr>
                        <tr>
                            <td><code>stumbleupon</code></td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Social prop to make the button the color of stumbleupon.</td>
                        </tr>
                    </tbody>
                </Table>
                <p>You can refer to <a href="https://react-bootstrap.github.io/components.html#buttons-props" target="_blank" rel="noopener noreferrer">react-bootstrap documentation</a> for more props.</p>
            </div>
        );
    }
}

export default ButtonsSection;