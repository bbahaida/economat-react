import React, { Component } from 'react';
import axios from 'axios'

import {Grid, Row, Col , FormControl,FormGroup, ControlLabel, Button, Modal } from 'react-bootstrap';
import './AddAgent.css';

const BASE_URL = "http://localhost:8080";
const COMPONENT_AGENT = "/agents";


class AddAgent extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
    }
    handleHide() {
        this.setState({ show: false });
    }
    componentDidMount(){
        axios.post(`${BASE_URL}${COMPONENT_AGENT}`,this.mock)
        .catch(err=>console.log(err));
    }

    mock = {
        "matricule": 2222,
        "nom": "Mock",
        "service": 275,
        "categorie": {
            "categorieId": 600,
            "designation": "Ouvrier",
            "ceil": 28000
        }
    }

    onSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
          <div className="modal-container" style={{ height: 200 }}>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.setState({ show: true })}
            >
              Ajouter
            </Button>
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Ajouter un agent
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={this.onSubmit}>
                    <Grid>
                        <Row>
                            <Col xs={12}> 
                                <Col xs={12} sm={6}>
                                    <FormGroup>
                                        <ControlLabel>Label</ControlLabel>
                                        <FormControl type="text"  />
                                    </FormGroup>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormGroup>
                                        <ControlLabel>Label</ControlLabel>
                                        <FormControl type="text"  />
                                    </FormGroup>
                                </Col>
                            </Col>
                            
                        </Row>
                        
                    </Grid>
                    
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}



export default AddAgent;