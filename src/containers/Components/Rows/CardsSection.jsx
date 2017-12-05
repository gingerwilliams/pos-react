import React, { Component } from 'react';
import {
    Row, Col,
    Table
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import Card from 'components/Card/Card.jsx';
import UserCard from 'components/Card/UserCard.jsx';
import StatsCard from 'components/Card/StatsCard.jsx';
import MapCard from 'components/Card/MapCard.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/default-avatar.png";

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImportCard = `import Card from 'components/Card/Card.jsx';`;
const codeExampleCard = `<Row>
    <Col md={6}>
        <Card
            title="This is the title of the card"
            category="This is the category of the card"
            content={
                <div>
                    <p>Hey!</p>
                    <p>We are some <code>p</code>s</p>
                    <p>Wrapped inside a <code>div</code></p>
                    <p>And we are the content of the card</p>
                </div>
            }
            legend={
                <div>
                    <p>This is the legend.</p>
                    <p>This is the second line of the legend</p>
                </div>
            }
            stats={
                <div><i className="fa fa-clock-o"></i> This is some stat with an icon</div>
            }
        />
    </Col>
</Row>`;
const codeImportUserCard = `import UserCard from 'components/Card/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import avatar from "assets/img/default-avatar.png";`;
const codeExampleUserCard = `<Row>
    <Col md={4}>
        <UserCard
            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
            avatar={avatar}
            name="Tania Andrew"
            userName="tania123"
            description={
                <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                </span>
            }
            socials={
                <div>
                    <Button simple><i className="fa fa-facebook-square"></i></Button>
                    <Button simple><i className="fa fa-twitter"></i></Button>
                    <Button simple><i className="fa fa-google-plus-square"></i></Button>
                </div>
            }
        />

    </Col>
</Row>`;
const codeImportStatsCard = `import StatsCard from 'components/Card/StatsCard.jsx';`;
const codeExampleStatsCard = `<Row>
    <Col lg={4} sm={8}>
        <StatsCard
            bigIcon={<i className="pe-7s-wallet text-success"></i>}
            statsText="Revenue"
            statsValue="$1,345"
            statsIcon={<i className="fa fa-calendar-o"></i>}
            statsIconText="Last day"
        />
    </Col>
</Row>`;
const codeImportMapCard = `import MapCard from 'components/Card/MapCard.jsx';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';`;
const codeExampleMapCard = `<Row>
    <Col md={12}>
        <MapCard
            title="Regular Map"
            content={
                <Map
                    containerStyle={{position: 'relative'}}
                    style={{width: '100%', height: '300px', position: 'relative'}}
                    google={this.props.google}
                    initialCenter={{
                      lat: 40.7484405,
                      lng: -73.9856644
                    }}
                    zoom={13}
                    clickableIcons={false}
                >
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                    />
                </Map>
            }
        />
    </Col>
</Row>`;
const codeExportMapCard = `export default GoogleApiWrapper({
    apiKey: "YOUR_API_KEY_HERE"
})(NameOfYourComponentClass);`;
class CardsSection extends Component{
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Cards</h2>
                    <legend></legend>
                    <p>We've created four types of cards, one is for simple use and can be modified with some props, one is for creating user cards, one is for creating stats cards and the last one is a special one used in the <code>Google Maps</code> View.</p>
                    <h3>Card</h3>
                    <legend></legend>
                    <p>The following is just a simple example with some text, but you can see more examples in views of this demo (charts, tables, forms, calendar, icons, almost all of our demo pages use this kind of card - you can check them to understand better).</p>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportCard} options={options} />
                    <h4>Example</h4>
                    <Row>
                        <Col md={6}>
                            <Card
                                title="This is the title of the card"
                                category="This is the category of the card"
                                content={
                                    <div>
                                        <p>Hey!</p>
                                        <p>We are some <code>p</code>s</p>
                                        <p>Wrapped inside a <code>div</code></p>
                                        <p>And we are the content of the card</p>
                                    </div>
                                }
                                legend={
                                    <div>
                                        <p>This is the legend.</p>
                                        <p>This is the second line of the legend</p>
                                    </div>
                                }
                                stats={
                                    <div><i className="fa fa-clock-o"></i> This is some stat with an icon</div>
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={codeExampleCard} options={options} />
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
                                <td><code>title</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the title of the card.</td>
                            </tr>
                            <tr>
                                <td><code>category</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the category of the card.</td>
                            </tr>
                            <tr>
                                <td><code>content</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the content of the card.</td>
                            </tr>
                            <tr>
                                <td><code>legend</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the legend of the card.</td>
                            </tr>
                            <tr>
                                <td><code>stats</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the stats of the card and adds a <code>hr</code> before it.</td>
                            </tr>
                            <tr>
                                <td><code>hidden</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the card hidden (this is useful if you want to achieve some sort of animations - see Login Page to understand better).</td>
                            </tr>
                            <tr>
                                <td><code>plain</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the card with no background color.</td>
                            </tr>
                            <tr>
                                <td><code>calendar</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>We used this prop for the <code>Calendar</code> to add some personalized style for this component.</td>
                            </tr>
                            <tr>
                                <td><code>wizard</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>We used this prop for the <code>Wizard</code> to add some personalized style for this component.</td>
                            </tr>
                            <tr>
                                <td><code>textCenter</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the <code>title</code> and <code>category</code> <code>text-center</code>.</td>
                            </tr>
                            <tr>
                                <td><code>ctAllIcons</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to add to the content of the card the class <code>all-icons</code>. This class is used to add some special styling to the cards that have an icon inside it (see <code>Pixeden</code> cards in <code>Icons</code> view of this demo).</td>
                            </tr>
                            <tr>
                                <td><code>ctFullWidth</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the content of the card go full width (no padding).</td>
                            </tr>
                            <tr>
                                <td><code>tableFullWidth</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the table content of the card go full width (no padding for tables).</td>
                            </tr>
                            <tr>
                                <td><code>ctTextCenter</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the content of the card <code>text-center</code>.</td>
                            </tr>
                            <tr>
                                <td><code>ftTextCenter</code></td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Use this prop to make the footer of the card <code>text-center</code>.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>User Card</h3>
                    <legend></legend>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportUserCard} options={options} />
                    <h4>Example</h4>
                    <Row>
                        <Col md={4}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Tania Andrew"
                                userName="tania123"
                                description={
                                    <span>
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />

                        </Col>
                    </Row>
                    <CodeMirror value={codeExampleUserCard} options={options} />
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
                                <td><code>bgImage</code></td>
                                <td>string / imported image</td>
                                <td>null</td>
                                <td>This prop sets user's background image.</td>
                            </tr>
                            <tr>
                                <td><code>avatar</code></td>
                                <td>string / imported image</td>
                                <td>null</td>
                                <td>This prop sets user's avatar image.</td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets user's name.</td>
                            </tr>
                            <tr>
                                <td><code>userName</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets user's user-name.</td>
                            </tr>
                            <tr>
                                <td><code>description</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets user's description.</td>
                            </tr>
                            <tr>
                                <td><code>socials</code></td>
                                <td>node</td>
                                <td>null</td>
                                <td>Use this prop to add user's socials.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Stats Card</h3>
                    <legend></legend>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportStatsCard} options={options} />
                    <h4>Example</h4>
                    <Row>
                        <Col lg={4} sm={8}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                                statsText="Revenue"
                                statsValue="$1,345"
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="Last day"
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={codeExampleStatsCard} options={options} />
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
                                <td><code>bigIcon</code></td>
                                <td>node</td>
                                <td>null</td>
                                <td>This prop sets the main icon of the card.</td>
                            </tr>
                            <tr>
                                <td><code>statsText</code></td>
                                <td>string</td>
                                <td>null</td>
                                <td>This prop sets the main text of the card.</td>
                            </tr>
                            <tr>
                                <td><code>statsValue</code></td>
                                <td>string</td>
                                <td>null</td>
                                <td>This prop sets the text under the main text of the card.</td>
                            </tr>
                            <tr>
                                <td><code>statsIcon</code></td>
                                <td>node</td>
                                <td>null</td>
                                <td>This prop sets the footer icon.</td>
                            </tr>
                            <tr>
                                <td><code>statsIconText</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the footer text.</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h3>Map Card</h3>
                    <legend></legend>
                    <h4>Imports</h4>
                    <CodeMirror value={codeImportMapCard} options={options} />
                    <h4>Example</h4>
                    <Row>
                        <Col md={12}>
                            <MapCard
                                title="Regular Map"
                                content={
                                    <Map
                                        containerStyle={{position: 'relative'}}
                                        style={{width: '100%', height: '300px', position: 'relative'}}
                                        google={this.props.google}
                                        initialCenter={{
                                          lat: 40.7484405,
                                          lng: -73.9856644
                                        }}
                                        zoom={13}
                                        clickableIcons={false}
                                    >
                                        <Marker onClick={this.onMarkerClick}
                                            name={'Current location'}
                                        />
                                    </Map>
                                }
                            />
                        </Col>
                    </Row>
                    <CodeMirror value={codeExampleMapCard} options={options} />
                    <h4>Export</h4>
                    <p>If you use this kind of card, and if you use a map for it, you will have to export your component with the api key for o google maps</p>
                    <CodeMirror value={codeExportMapCard} options={options} />
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
                                <td><code>title</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the title of the card.</td>
                            </tr>
                            <tr>
                                <td><code>content</code></td>
                                <td>string / node</td>
                                <td>null</td>
                                <td>This prop sets the conetnt of the card.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY"
})(CardsSection);
