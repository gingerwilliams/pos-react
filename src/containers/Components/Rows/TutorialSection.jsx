import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const fileStructure = `lbd-pro-react
├── CHANGELOG.md
├── Documentation
│   ├── css
│   │   ├── demo.css
│   │   ├── documentation.css
│   │   └── light-bootstrap-dashboard.css
│   ├── img
│   │   ├── apple-icon.png
│   │   ├── back.jpg
│   │   ├── favicon.png
│   │   └── tim-logo.png
│   └── tutorial-components.html
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   ├── demo.css
    │   │   ├── light-bootstrap-dashboard.css.map
    │   │   └── pe-icon-7-stroke.css
    │   ├── fonts
    │   ├── img
    │   │   ├── faces
    │   │   ├── flags
    │   └── sass
    │       ├── lbd
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── light-bootstrap-dashboard.css
    │       └── light-bootstrap-dashboard.scss
    ├── components
    │   ├── Card
    │   │   ├── Card.jsx
    │   │   ├── MapCard.jsx
    │   │   ├── StatsCard.jsx
    │   │   └── UserCard.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   ├── HeaderLinks.jsx
    │   │   └── PagesHeader.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   └── Tasks
    │       └── Tasks.jsx
    ├── containers
    │   ├── App
    │   │   └── App.jsx
    │   ├── Dash
    │   │   └── Dash.jsx
    │   └── Pages
    │       └── Pages.jsx
    ├── elements
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── CustomCheckbox.jsx
    │   └── CustomRadio
    │       └── CustomRadio.jsx
    ├── index.js
    ├── logo.svg
    ├── registerServiceWorker.js
    ├── routes
    │   ├── app.jsx
    │   ├── dash.jsx
    │   ├── index.jsx
    │   └── pages.jsx
    ├── variables
    │   ├── Variables.jsx
    │   ├── chartsVariables.jsx
    │ �� └── faVariables.jsx
    └── views
        ├── Calendar
        │   └── Calendar.jsx
        ├── Charts
        │   └── Charts.jsx
        ├── Components
        │   ├── Buttons.jsx
        │   ├── GridSystem.jsx
        │   ├── Icons.jsx
        │   ├── Notifications.jsx
        │   ├── Panels.jsx
        │   ├── SweetAlertPage.jsx
        │   └── Typography.jsx
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Forms
        │   ├── ExtendedForms.jsx
        │   ├── RegularForms.jsx
        │   ├── ValidationForms.jsx
        │   └── Wizard
        │       ├── Step1.jsx
        │       ├── Step2.jsx
        │       ├── Step3.jsx
        │       └── Wizard.jsx
        ├── Maps
        │   ├── FullScreenMap.jsx
        │   ├── GoogleMaps.jsx
        │   └── VectorMap.jsx
        ├── Pages
        │   ├── LockScreenPage.jsx
        │   ├── LoginPage.jsx
        │   ├── RegisterPage.jsx
        │   └── UserPage.jsx
        └── Tables
            ├── DataTables.jsx
            ├── ExtendedTables.jsx
            └── RegularTables.jsx
`;
class TutorialSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2 className="text-center">Short Description and Usage</h2>
                    <legend></legend>
                    <p>
                        Light Bootstrap Dashboard PRO React is a beautiful resource built over Bootstrap, React and React-Bootstrap to allow you to create powerful and beautiful dashboards. We have redesigned all the usual components in Bootstrap to make it look flat, minimalist and easy to use.
                        <br/><br/>
                        Using the dashboard is very simple, but it does require you to understand basic JavaScript functions, react and react-bootstrap. To get the desired effect you will need to integrate react components and JS plugins that take a little bit more effort. Down below we list all the files you need to include inside the application to get going.
                    </p>
                </div>
                <div className="tim-row">
                    <h2 className="text-center">License</h2>
                    <legend></legend>
                    <p >
                        When you purchase an item from <a href="">Creative Tim</a>, you are actually purchasing a license to use that item. All our free items are under MIT license. All our premium items are covered by our Personal and Developer licenses. In order to understand the rights and restrictions that come with your purchase, please read the details from our <a href="">Official License Page</a>.
                    </p>
                </div>
                <div className="tim-row">
                    <h2 className="text-center">Getting Started</h2>
                    <legend></legend>
                    <p>The Light Bootstrap Dashboard React is built on top of <a href="">react-bootstrap</a> (Bootstrap 3), so you can safely use it on your existing or new React-Bootstrap project. No line of code from Bootstrap 3 was changed, so you don't have to worry about undesired effects in your work.</p>
                    <p>We provide all the necessary CSS resources. So, to immediately change or get started with our design, include the <code>src/assets/scss/light-bootstrap-dashboard.css</code> in your HTML template. Your project will get the new look.</p>
                    <h4 className="title"><b>Local Development</b></h4>
                    <ul>
                        <li>Install NodeJs from <a href="">NodeJs Official Page</a></li>
                        <li>Open Terminal</li>
                        <li>Go to your file project</li>
                        <li>Run in terminal <pre>npm install</pre></li>
                        <li>Then run <pre>npm start</pre></li>
                        <li>
                            (Optional) You can create a new react application like this
                            <ul>
                                <li>Run in terminal <pre>npm install -g create-react-app</pre></li>
                                <li>Go to the folder where you want to create your app</li>
                                <li>Run in terminal <pre>create-react-app your-app-name</pre></li>
                                <li>Navigate to <code>your-app-name</code></li>
                                <li>Run in terminal <pre>npm start</pre></li>
                                <li>More information → <a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a></li>
                            </ul>
                        </li>
                        <li>Navigate to <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a></li>
                        <li>More information → <a href="https://reactjs.org/docs/installation.html" target="_blank" rel="noopener noreferrer">react</a></li>
                    </ul>
                    <h4 className="title"><b>Live Production on Heroku</b></h4>
                    <ul>
                        <li>Open terminal</li>
                        <li>Go to your file project</li>
                        <li>
                            Run in terminal one by one: (Replace <code>$APP_NAME</code> with a name for your unique app.)
                            <pre>git init</pre>
                            <pre>heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git</pre>
                            <pre>git add .</pre>
                            <pre>git commit -m "Start with create-react-app"</pre>
                            <pre>git push heroku master</pre>
                            <pre>heroku open</pre>
                        </li>
                        <li>More info → <a href="https://github.com/mars/create-react-app-buildpack#purpose" target="_blank" rel="noopener noreferrer">here</a></li>
                    </ul>
                </div>
                <div className="tim-row">
                    <h2 className="text-center">File Structure</h2>
                    <legend></legend>
                    <p>Once you have downloaded the archive and opened it, you will find the following structure:</p>
                    <p>Let's take it one by one:</p>
                </div>
                <CodeMirror value={fileStructure} options={options} />
                <div className="tim-row">
                    <h2 className="text-center">Restyled Components</h2>
                    <legend></legend>
                    <p>Here is the list of Bootstrap 3 components that we restyled for the Light Bootstrap Dashboard:</p>
                    <ul>
                        <li>Buttons</li>
                        <li>Collapse</li>
                        <li>Dropdown</li>
                        <li>Images</li>
                        <li>Inputs</li>
                        <li>Menu</li>
                        <li>Navigation Menu</li>
                        <li>Notifications</li>
                        <li>Pagination</li>
                        <li>Progress Bars</li>
                        <li>Select</li>
                        <li>Tables</li>
                        <li>Textarea</li>
                        <li>Tooltips</li>
                        <li>Typography</li>
                    </ul>
                </div>
                <div className="tim-row">
                    <h2 className="text-center">New Components</h2>
                    <legend></legend>
                    <p>Besides giving the existing Bootstrap elements a new look, we added new ones, so that the interface and consistent and homogenous. We also imported more plugins to use depending on your needs.</p>
                    <p>Going through them, we added:</p>
                    <ul>
                        <li> Cards</li>
                        <li> Charts</li>
                        <li> Checkboxes</li>
                        <li> Footers</li>
                        <li> Google Maps</li>
                        <li> Vector Maps</li>
                        <li> Bootstrap Table</li>
                        <li> DataTables</li>
                        <li> DateTimePicker</li>
                        <li> Maps</li>
                        <li> Panels</li>
                        <li> Radio Buttons</li>
                        <li> Sliders</li>
                        <li> Sweet Alert</li>
                        <li> Switches</li>
                        <li> Sidebar</li>
                        <li> Tags</li>
                        <li> Wizard</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TutorialSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TutorialSection.jsx