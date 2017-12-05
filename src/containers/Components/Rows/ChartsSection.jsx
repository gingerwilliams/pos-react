import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import ChartistGraph from 'react-chartist';

import Card from 'components/Card/Card.jsx';

import { hoursChart } from 'variables/chartsVariables.jsx';
import { nasdaqChart } from 'variables/chartsVariables.jsx';
import { usersChart } from 'variables/chartsVariables.jsx';
import { publicChart } from 'variables/chartsVariables.jsx';
import { viewsChart } from 'variables/chartsVariables.jsx';
import { activityChart } from 'variables/chartsVariables.jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const importHoursCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { hoursChart } from 'variables/chartsVariables.jsx';`;
const exampleHoursCode = `<Row>
    <Col md={10}>
        <Card
            title="24 Hours Performance"
            category="Line Chart"
            content={
                <ChartistGraph
                    data={hoursChart.data}
                    type={hoursChart.type}
                    options={hoursChart.options}
                    responsiveOptions={hoursChart.responsiveOptions}
                />
            }
        />
    </Col>
</Row>`;
const importNasdaqCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { nasdaqChart } from 'variables/chartsVariables.jsx';`;
const exampleNasdaqCode = `<Row>
    <Col md={10}>
        <Card
            title="NASDAQ: AAPL"
            category="Line Chart with Points"
            content={
                <ChartistGraph
                    data={nasdaqChart.data}
                    type={nasdaqChart.type}
                    options={nasdaqChart.options}
                    responsiveOptions={nasdaqChart.responsiveOptions}
                />
            }
        />
    </Col>
</Row>`;
const importUsersCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { usersChart } from 'variables/chartsVariables.jsx';`;
const exampleUsersCode = `<Row>
    <Col md={10}>
        <Card
            title="Users Behavior"
            category="Multiple Lines Charts"
            content={
                <ChartistGraph
                    data={usersChart.data}
                    type={usersChart.type}
                    options={usersChart.options}
                    responsiveOptions={usersChart.responsiveOptions}
                />
            }
            legend={
                <div>
                    <span>
                        <i className="fa fa-circle text-info"></i> Open
                    </span><span>
                        <i className="fa fa-circle text-danger"></i> Click
                    </span><span>
                        <i className="fa fa-circle text-warning"></i> Click Second Time
                    </span>
                </div>
            }
        />
    </Col>
</Row>`;
const importPublicCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { publicChart } from 'variables/chartsVariables.jsx';`;
const examplePublicCode = `<Row>
    <Col md={10}>
        <Card
            title="Public Preferences"
            category="Pie Chart"
            content={
                <ChartistGraph
                    data={publicChart.data}
                    type={publicChart.type}
                    options={publicChart.options}
                    responsiveOptions={publicChart.responsiveOptions}
                />
            }
            legend={
                <div>
                    <span>
                        <i className="fa fa-circle text-info"></i> Apple
                    </span><span>
                        <i className="fa fa-circle text-danger"></i> Samsung
                    </span><span>
                        <i className="fa fa-circle text-warning"></i> Windows Phone
                    </span>
                </div>
            }
        />
    </Col>
</Row>`;
const importViewsCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { viewsChart } from 'variables/chartsVariables.jsx';`;
const exampleViewsCode = `<Row>
    <Col md={10}>
        <Card
            title="Views"
            category="Bar Chart"
            content={
                <ChartistGraph
                    data={viewsChart.data}
                    type={viewsChart.type}
                    options={viewsChart.options}
                    responsiveOptions={viewsChart.responsiveOptions}
                />
            }
        />
    </Col>
</Row>`;
const importActivityCode = `import { Row, Col } from 'react-bootstrap';
import Card from 'components/Card/Card.jsx';
import ChartistGraph from 'react-chartist';
import { activityChart } from 'variables/chartsVariables.jsx';`;
const exampleActivityCode = `<Row>
    <Col md={10}>
        <Card
            title="Activity"
            category="Multiple Bars Chart"
            content={
                <ChartistGraph
                    data={activityChart.data}
                    type={activityChart.type}
                    options={activityChart.options}
                    responsiveOptions={activityChart.responsiveOptions}
                />
            }
        />
    </Col>
</Row>`;
class ChartsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Charts</h2>
                    <legend></legend>
                    <p>For the implementation of graphic charts, we used the Chartist plugin and added our custom styles. The plugin is free to download and use <a href="https://github.com/fraserxu/react-chartist" target="_blank" rel="noopener noreferrer">here</a>. <a href="https://github.com/fraserxu" target="_blank" rel="noopener noreferrer">Fraser Xu</a> is the guy behind the project; he did an awesome job and we recommend using it his stuff. Besides all the great customisation that you have using it, it is also fully responsive. We changed the colors, background and typography.</p>
                    <h3>Example code</h3>
                    <p>As you will see in the following examples, we put our variables for charts in <code>src/variables/chartsVariables.jsx</code>. Here you can find all variables for creating these charts. This module exports all chart variables together, and every variables by it's own. Please check this file to understand better.</p>
                    <h3>Line Chart</h3>
                    <legend></legend>
                    <p>We recommend using this chart when you have easy to understand information, that can be conveyed in a single line throughout a continuous period.</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importHoursCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="24 Hours Performance"
                                category="Line Chart"
                                content={
                                    <ChartistGraph
                                        data={hoursChart.data}
                                        type={hoursChart.type}
                                        options={hoursChart.options}
                                        responsiveOptions={hoursChart.responsiveOptions}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={exampleHoursCode} options={options} />
                    <h3>Line Chart with Points</h3>
                    <legend></legend>
                    <p>This graphic is best used when you have multiple results for different points and you want to show a correlation (growth, down-side, etc).</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importNasdaqCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="NASDAQ: AAPL"
                                category="Line Chart with Points"
                                content={
                                    <ChartistGraph
                                        data={nasdaqChart.data}
                                        type={nasdaqChart.type}
                                        options={nasdaqChart.options}
                                        responsiveOptions={nasdaqChart.responsiveOptions}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={exampleNasdaqCode} options={options} />
                    <h3>Multiple Lines Chart</h3>
                    <legend></legend>
                    <p>We recommend you use this graphic when you need to show multiple functions in the same visual element. For example, you can see a correlation between the registered versus active users. Always try to use a legend when you have multiple elements in the graphic.</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importUsersCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="Users Behavior"
                                category="Multiple Lines Charts"
                                content={
                                    <ChartistGraph
                                        data={usersChart.data}
                                        type={usersChart.type}
                                        options={usersChart.options}
                                        responsiveOptions={usersChart.responsiveOptions}
                                    />
                                }
                                legend={
                                    <div>
                                        <span>
                                            <i className="fa fa-circle text-info"></i> Open
                                        </span><span>
                                            <i className="fa fa-circle text-danger"></i> Click
                                        </span><span>
                                            <i className="fa fa-circle text-warning"></i> Click Second Time
                                        </span>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={exampleUsersCode} options={options} />
                    <h3>Pie Chart</h3>
                    <legend></legend>
                    <p>A pie chart is the easiest way to represent an information. Use it whenever you want to show something understandable at once.</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importPublicCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="Public Preferences"
                                category="Pie Chart"
                                content={
                                    <ChartistGraph
                                        data={publicChart.data}
                                        type={publicChart.type}
                                        options={publicChart.options}
                                        responsiveOptions={publicChart.responsiveOptions}
                                    />
                                }
                                legend={
                                    <div>
                                        <span>
                                            <i className="fa fa-circle text-info"></i> Apple
                                        </span><span>
                                            <i className="fa fa-circle text-danger"></i> Samsung
                                        </span><span>
                                            <i className="fa fa-circle text-warning"></i> Windows Phone
                                        </span>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={examplePublicCode} options={options} />
                    <h3>Bar Chart</h3>
                    <legend></legend>
                    <p>We recommend using the bar chart whenever you want to show progress over periods of time. Here is an example.</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importViewsCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="Views"
                                category="Bar Chart"
                                content={
                                    <ChartistGraph
                                        data={viewsChart.data}
                                        type={viewsChart.type}
                                        options={viewsChart.options}
                                        responsiveOptions={viewsChart.responsiveOptions}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={exampleViewsCode} options={options} />
                    <h3>Multiple Bars Chart</h3>
                    <legend></legend>
                    <p>Go for multiple bars charts if you want to show two indicators side by side.</p>
                    <h4>Imports</h4>
                    <p>Imports used for this chart:</p>
                    <CodeMirror value={importActivityCode} options={options} />
                    <h4>Example Code</h4>
                    <Row>
                        <Col md={10}>
                            <Card
                                title="Activity"
                                category="Multiple Bars Chart"
                                content={
                                    <ChartistGraph
                                        data={activityChart.data}
                                        type={activityChart.type}
                                        options={activityChart.options}
                                        responsiveOptions={activityChart.responsiveOptions}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={exampleActivityCode} options={options} />
                    <h3>Props</h3>
                    <p>Please refer to <a href="https://github.com/fraserxu/react-chartist" target="_blank" rel="noopener noreferrer">react-chartist documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default ChartsSection;
