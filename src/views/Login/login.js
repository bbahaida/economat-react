import React, { Component } from 'react';
import { 
    Button, 
    Card, 
    CardBody, 
    Col, 
    Container, 
    Input, 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Row } from 'reactstrap';

class Login extends Component {
    state = { 
        username: '',
        password: '',
     }

     constructor(props){
         super(props);
         console.log(this.props);
     }

    handleChange = (e) => {
        let change = {}
        change[e.target.id] = e.target.value
        this.setState(change)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    
    render() { 
        const {onLogin} = this.props;
    
        return ( 
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                        <Card className="p-4">
                            <CardBody>
                                <h1>Login</h1>
                                <p className="text-muted">Sign In to your account</p>
                                <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="icon-user"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" onChange={this.handleChange} id="username" placeholder="Username" />
                                </InputGroup>
                                <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="icon-lock"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" onChange={this.handleChange} id="password" placeholder="Password" />
                                </InputGroup>
                                <Row>
                                <Col xs="6">
                                    <Button color="primary" className="px-4">Login</Button>
                                </Col>
                                <Col xs="6" className="text-right">
                                    <Button color="link" onClick={onLogin} className="px-0">Forgot password?</Button>
                                </Col>
                                </Row>
                            </CardBody>
                            </Card>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Login;