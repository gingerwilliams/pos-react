import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

import Button from 'elements/CustomButton/CustomButton.jsx';
import Checkbox from 'elements/CustomCheckbox/CustomCheckbox.jsx';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            cardHidden: true
        }
    }
    componentDidMount(){
        setTimeout(function() { this.setState({cardHidden: false}); }.bind(this), 700);
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col md={4} sm={6} mdOffset={4} smOffset={3}>
                        <form >
                            <Card
                                hidden={this.state.cardHidden}
                                textCenter
                                title="Login"
                                content={
                                    <div>
                                        <FormGroup>
                                            <ControlLabel>
                                                Nhà hàng
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Nhập nhà hàng"
                                                type="text"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>
                                                Tài khoản
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Nhập tài khoản"
                                                type="text"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>
                                                Mật khẩu
                                            </ControlLabel>
                                            <FormControl
                                                placeholder="Nhập mật khẩu"
                                                type="password"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox
                                                number="1"
                                                label="Ghi nhớ"
                                            />
                                        </FormGroup>
                                    </div>
                                }
                                legend={
                                    <Button bsStyle="info" fill wd>
                                        Đăng nhập
                                    </Button>
                                }
                                ftTextCenter
                            />
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default LoginPage;