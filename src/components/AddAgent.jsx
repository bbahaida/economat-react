import React, { Component } from 'react';
import axios from 'axios'
import {Grid, Row, Col , FormControl,FormGroup, ControlLabel, Button } from 'react-bootstrap';
import './AddAgent.css';

const BASE_URL = "http://localhost:8080";
const COMPONENT_AGENT = "/agents";
const CATOGORIES = "/categories";


class AddAgent extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            agent:{
                nom: '',
                categorie: {
                    categorieId: 0,
                },
                service: 0,
            },
            categories: [],
            isLoading: false,
            
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        axios.get(`${BASE_URL}${CATOGORIES}`)
        .then(response => {
            this.setState(prevState => ({ categories: response.data, isLoading: false, agent:{categorie:response.data[0]}}));
            
        })
        .catch(err=>console.log(err));

        //console.log(this.categories);
    }

    nomHandleChange = event => {
        this.setState({
            agent:{nom: event.target.value},
            
        }); 

        //console.log([event.target.id]+':'+ event.target.value);
    }
    serviceHandleChange = event => {
        this.setState({
            agent:{service: event.target.value},
            
        }); 

        //console.log([event.target.id]+':'+ event.target.value);
    }

    selectHandleChange = event =>{
        this.setState({
            categorie:{
                categorieId: event.target.value
            }
        });
    }

    onSubmit = e => {
        
         e.preventDefault();
        
        console.log(this.state);
        /*axios.post(`${BASE_URL}${COMPONENT_AGENT}`,this.state)
        .catch(err=>console.log(err));*/
    }
    render() {
        return (
            <Grid className="main">
                <Row>
                    <Col xs={12} sm={6} smOffset={3}>
                        <form onSubmit={this.onSubmit}>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <ControlLabel>Nom</ControlLabel>
                                    <FormControl type="text" onChange={this.nomHandleChange} id="nom" />
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <ControlLabel>Service</ControlLabel>
                                    <FormControl type="number" onChange={this.serviceHandleChange} id="service" />
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                                <FormGroup>
                                    <ControlLabel>Categorie</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select" onChange={this.selectHandleChange} id="categorie.categorieId">
                                        {this.state.categories.map((categorie,index) => {
                                            return(<option key={index} value={categorie.categorieId}>{categorie.designation}</option>);
                                        })}
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col xs={12} sm={6}>
                                <Button
                                block
                                type="submit"
                                bsStyle="primary"
                                style={{marginTop: 25}}
                                >Ajouter</Button>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}



export default AddAgent;