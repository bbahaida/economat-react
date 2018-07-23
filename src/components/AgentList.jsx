import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Row, Col , Table, Button, Image} from 'react-bootstrap';
import './AgentList.css';
import AddAgent from './AddAgent';
const BASE_URL = "http://localhost:8080";
const COMPONENT_AGENT = "/agents";
class AgentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }


    componentDidMount(){
        /* fetch(`${BASE_URL}${COMPONENT_AGENT}`)
        .then(response => response.json())
        .then(result => {
            this.setState({data: [...result]});
        }); */

        axios.get(`${BASE_URL}${COMPONENT_AGENT}`)
        .then(result => this.setState({data: [...result.data]}))
        .catch(err => console.log(err))
        
    }
    render() {
        const {data} = this.state;
        let tag = '';
        if(!(data.length > 0)){
            
            tag = <Image src="/assets/snim_load.gif" alt="Loading ....."/>
            
            
        }else{
            tag = (
                <Row>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                <th>Matricule</th>
                                <th>Nom Complet</th>
                                <th>Categorie</th>
                                <th>Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{item.matricule}</td>
                                            <td>{item.nom}</td>
                                            <td>{item.categorie.categorieId}</td>
                                            <td>{item.service}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    
                    
                </Row>
            );
            
        }

        return (
            <Grid className="main">
                {tag}
                
            </Grid>
        );
        
    }
}

export default AgentList;