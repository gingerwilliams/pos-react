import React, { Component } from 'react';
import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

import img1 from 'assets/img/blog-1.jpg';
import img2 from 'assets/img/blog-1.jpg';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImportSimple = `import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton.jsx';`;
const codeExampleSimple = `<Table responsive>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th className="text-right">Salary</th>
            <th className="text-right">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td className="text-right">€ 99,225</td>
            { actions }
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>John Doe</td>
            <td>Design</td>
            <td className="text-right">€ 89,241</td>
            { actions }
        </tr>
    </tbody>
</Table>`;
const codeActionsSimple = `const view = (
    <Tooltip id="view">View Profile</Tooltip>
);
const edit = (
    <Tooltip id="edit">Edit Profile</Tooltip>
);
const remove = (
    <Tooltip id="remove">Remove</Tooltip>
);
const viewPost = (
    <Tooltip id="view">View Post</Tooltip>
);
const editPost = (
    <Tooltip id="edit">Edit Post</Tooltip>
);
const removePost = (
    <Tooltip id="remove">Remove Post</Tooltip>
);
const actions = (
    <td className="td-actions text-right">
        <OverlayTrigger placement="top" overlay={view}>
            <Button simple bsStyle="info" bsSize="xs">
                <i className="fa fa-user"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={edit}>
            <Button simple bsStyle="success" bsSize="xs">
                <i className="fa fa-edit"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={remove}>
            <Button simple bsStyle="danger" bsSize="xs">
                <i className="fa fa-times"></i>
            </Button>
        </OverlayTrigger>
    </td>
);`;
const codeImportStriped = `import { Table } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';`;
const codeExampleStriped = `<Table striped>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th className="text-right">Salary</th>
            <th className="text-right">Active</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Andrew Mike</td>
            <td>Develop</td>
            <td className="text-right">€ 99,225</td>
            <td className="text-right">
                <Switch
                    onText=""
                    offText=""
                    defaultValue={false}
                />
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Mike Monday</td>
            <td>Marketing</td>
            <td className="text-right">€ 49,990</td>
            <td className="text-right">
                <Switch
                    onText=""
                    offText=""
                />
            </td>
        </tr>
    </tbody>
</Table>`;
const codeImportBig = `import { Table, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'elements/CustomButton/CustomButton.jsx';
import img1 from 'assets/img/blog-1.jpg';
import img2 from 'assets/img/blog-2.jpg';`;
const codeActionsBig = `const view = (
    <Tooltip id="view">View Profile</Tooltip>
);
const edit = (
    <Tooltip id="edit">Edit Profile</Tooltip>
);
const remove = (
    <Tooltip id="remove">Remove</Tooltip>
);
const viewPost = (
    <Tooltip id="view">View Post</Tooltip>
);
const editPost = (
    <Tooltip id="edit">Edit Post</Tooltip>
);
const removePost = (
    <Tooltip id="remove">Remove Post</Tooltip>
);
const actionsPost = (
    <td className="td-actions">
        <OverlayTrigger placement="left" overlay={viewPost}>
            <Button simple icon bsStyle="info">
                <i className="fa fa-image"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={editPost}>
            <Button simple icon bsStyle="success">
                <i className="fa fa-edit"></i>
            </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="left" overlay={removePost}>
            <Button simple icon bsStyle="danger">
                <i className="fa fa-times"></i>
            </Button>
        </OverlayTrigger>
    </td>
);`;
const codeExampleBig = `<Table responsive className="table-bigboy">
    <thead>
        <tr>
            <th className="text-center">Thumb</th>
            <th>Blog Title</th>
            <th className="th-description">Description</th>
            <th className="text-right">Date</th>
            <th className="text-right">Views</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div className="img-container">
                    <img alt="..." src={img1} />
                </div>
            </td>
            <td className="td-name">
                10 Things that all designers do
            </td>
            <td>Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.</td>
            <td className="td-number">
                30/08/2016
            </td>
            <td className="td-number">
                1,225
            </td>
            { actionsPost }
        </tr>
        <tr>
            <td>
                <div className="img-container">
                    <img alt="..." src={img2} />
                </div>
            </td>
            <td className="td-name">
                Back to School Offer
            </td>
            <td>Design is not just what it looks like and feels like. Design is how it works.</td>
            <td className="td-number">
                17/07/2016
            </td>
            <td className="td-number">
                49,302
            </td>
            { actionsPost }
        </tr>
    </tbody>
</Table>`;
class TablesSection extends Component{
    render(){
        const view = (
            <Tooltip id="view">View Profile</Tooltip>
        );
        const edit = (
            <Tooltip id="edit">Edit Profile</Tooltip>
        );
        const remove = (
            <Tooltip id="remove">Remove</Tooltip>
        );
        const viewPost = (
            <Tooltip id="view">View Post</Tooltip>
        );
        const editPost = (
            <Tooltip id="edit">Edit Post</Tooltip>
        );
        const removePost = (
            <Tooltip id="remove">Remove Post</Tooltip>
        );
        const actions = (
            <td className="td-actions text-right">
                <OverlayTrigger placement="top" overlay={view}>
                    <Button simple bsStyle="info" bsSize="xs">
                        <i className="fa fa-user"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={edit}>
                    <Button simple bsStyle="success" bsSize="xs">
                        <i className="fa fa-edit"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={remove}>
                    <Button simple bsStyle="danger" bsSize="xs">
                        <i className="fa fa-times"></i>
                    </Button>
                </OverlayTrigger>
            </td>
        );
        const actionsPost = (
            <td className="td-actions">
                <OverlayTrigger placement="left" overlay={viewPost}>
                    <Button simple icon bsStyle="info">
                        <i className="fa fa-image"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="left" overlay={editPost}>
                    <Button simple icon bsStyle="success">
                        <i className="fa fa-edit"></i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger placement="left" overlay={removePost}>
                    <Button simple icon bsStyle="danger">
                        <i className="fa fa-times"></i>
                    </Button>
                </OverlayTrigger>
            </td>
        );
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Tables</h2>
                    <legend></legend>
                    <p>All Boostrap classes for tables are supported and improved. Besides the simple and striped tables, we added tables that have actions and table with switches. We have also created the Big Boy table, that can be used for content management systems or in the checkout process of an ecommerce. It offers extended functionality, like adding pictures, descriptions and actions.</p>
                    <h3>Simple Table with Actions</h3>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportSimple} options={options}/>
                    <h4>Example code</h4>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th className="text-right">Salary</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>
                                <td className="text-right">€ 99,225</td>
                                { actions }
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>John Doe</td>
                                <td>Design</td>
                                <td className="text-right">€ 89,241</td>
                                { actions }
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <CodeMirror value={codeExampleSimple} options={options}/>
                    <br />
                    <p>And the actions code (which you have to define before the table)</p>
                    <br />
                    <CodeMirror value={codeActionsSimple} options={options}/>
                    <br />
                    <h3>Striped Table with Switches</h3>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportStriped} options={options}/>
                    <h4>Example code</h4>
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th>Job Position</th>
                                <th className="text-right">Salary</th>
                                <th className="text-right">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td>Andrew Mike</td>
                                <td>Develop</td>
                                <td className="text-right">€ 99,225</td>
                                <td className="text-right">
                                    <Switch
                                        onText=""
                                        offText=""
                                        defaultValue={false}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td>Mike Monday</td>
                                <td>Marketing</td>
                                <td className="text-right">€ 49,990</td>
                                <td className="text-right">
                                    <Switch
                                        onText=""
                                        offText=""
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <CodeMirror value={codeExampleStriped} options={options}/>
                    <br />
                    <h3>Big Boy Table</h3>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportBig} options={options}/>
                    <h4>Example code</h4>
                    <Table responsive className="table-bigboy">
                        <thead>
                            <tr>
                                <th className="text-center">Thumb</th>
                                <th>Blog Title</th>
                                <th className="th-description">Description</th>
                                <th className="text-right">Date</th>
                                <th className="text-right">Views</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img alt="..." src={img1} />
                                    </div>
                                </td>
                                <td className="td-name">
                                    10 Things that all designers do
                                </td>
                                <td>Most beautiful agenda for the office, really nice paper and black cover. Most beautiful agenda for the office.</td>
                                <td className="td-number">
                                    30/08/2016
                                </td>
                                <td className="td-number">
                                    1,225
                                </td>
                                { actionsPost }
                            </tr>
                            <tr>
                                <td>
                                    <div className="img-container">
                                        <img alt="..." src={img2} />
                                    </div>
                                </td>
                                <td className="td-name">
                                    Back to School Offer
                                </td>
                                <td>Design is not just what it looks like and feels like. Design is how it works.</td>
                                <td className="td-number">
                                    17/07/2016
                                </td>
                                <td className="td-number">
                                    49,302
                                </td>
                                { actionsPost }
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <CodeMirror value={codeExampleBig} options={options}/>
                    <br />
                    <p>And the actions code (which you have to define before the table)</p>
                    <br />
                    <CodeMirror value={codeActionsBig} options={options}/>
                    <br />
                    <h4>Props</h4>
                    <p>For tables we have used mostly HTML, there is the <code>Table</code> react-bootstrap tag, to write less. You can find out more about this component <a href="https://react-bootstrap.github.io/components.html#tables" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>Beside these tables, there are normal tables as well.</p>
                </div>
            </div>
        );
    }
}

export default TablesSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/TablesSection.jsx