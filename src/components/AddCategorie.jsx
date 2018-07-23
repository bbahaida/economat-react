import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Row, Col , FormControl,FormGroup, ControlLabel } from 'react-bootstrap';
import './AddCategorie.css';

const BASE_URL = "http://localhost:8080";
const COMPONENT_CATEGORIE = "/categories";

class AddCategorie extends Component {
    constructor(props){
        super(props);
    }
    onSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <Grid className="main">
                <Row>
                    <Col xs={12} sm={8} smOffset={2}>
                        <form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <ControlLabel></ControlLabel>
                                <FormControl />
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AddCategorie;