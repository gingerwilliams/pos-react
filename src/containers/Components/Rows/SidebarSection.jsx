import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importCode = `import Sidebar from 'components/Sidebar/Sidebar.jsx';`;
const exampleImageImport = `import image from 'assets/img/full-screen-image-3.jpg';
const bgImage = {backgroundImage: "url("+image+""};`;
const exampleImageCode = `<div className="sidebar-background" style={bgImage}></div>
    <div className="sidebar" data-color="azure" data-image={image}>
        ...
    </div>
</div>`;
const exampleNavLinkCode = `<li className={this.activeRoute("/components/panels")}>
    <NavLink to={'/components/panels'} className="nav-link" activeClassName="active">
        <span className="sidebar-mini">P</span>
        <span className="sidebar-normal">Panels</span>
    </NavLink>
</li>`;
const exampleRoutesCode = `{ path: "/components/panels", name: "Panels", component: Panels },`;
class SidebarSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Sidebar</h2>
                    <legend></legend>
                    <p>We have created a component for the main navigation of this dashboard, <code>Sidebar</code>, which is located in <code>src/components/Sidebar/Sidebar.jsx</code>. It contains the company title, a photo of the logged in user with options inside a dropdown, and a list of all the pages. Every element in the list of pages can have a sublist of pages. .</p>
                    <h4>Imports</h4>
                    <p>To use this component you'll have to make this import:</p>
                    <CodeMirror value={importCode} options={options} />
                    <h4>Example Code</h4>
                    <p>As we were saying in <code>Navigation</code> component, here we import again the <code>HeaderLinks</code> (links that appear in <code>Navbar</code>), so if we are on responsive mode, we show them as well in our <code>Sidebar</code>.</p>
                    <p>You can navigate to <code>src/components/Sidebar/Sidebar.jsx</code> and understand better.</p>
                    <p>If you want the <code>Sidebar</code> component to have the background as a solid color, you can use the <code>data-color</code> attribute on the wrapper <code>div</code> and add the color you like: <code>data-color="blue | azure | green | orange | red | purple"</code>.</p>
                    <p>You can also add an image to your <code>Sidebar</code> by using <code>data-image</code> attribute on the wrapper <code>div</code>, and than you will have to make a <code>div</code> with an inline style with the <code>backgroundImage</code> set to your image.</p>
                    <p>This is an example of how these two <code>div</code>s should look in the render method:</p>
                    <CodeMirror value={exampleImageCode} options={options} />
                    <p>And before this, you need to import the image and set a variable with <code>backgroundImage</code> style like this:</p>
                    <CodeMirror value={exampleImageImport} options={options} />
                    <p>This component is tied up with the <code>routes</code> of the dashboard. These are found in <code>src/routes/app.jsx</code> and are rendered in the <code>App</code> container (<code>src/containers/App/App.jsx</code>).</p>
                    <p>In the <code>Sidebar</code> component you will see the following code which basically is the code for <code>Sidebar</code>s buttons:</p>
                    <CodeMirror value={exampleNavLinkCode} options={options} />
                    <p>And than, in <code>src/routes/app.jsx</code>, you will have a coresponding object with this path:</p>
                    <CodeMirror value={exampleRoutesCode} options={options} />
                    <p>These routes are beeing created in the <code>App</code> container. For more information, please navigate to <code>src/containers/App/App.jsx</code>.</p>
                </div>
            </div>
        );
    }
}

export default SidebarSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/SidebarSection.jsx