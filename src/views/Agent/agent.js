import React, { Component } from 'react';
import axios from 'axios';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table,
  } from 'reactstrap';

const BASE_URL = "http://localhost:8080";
const COMPONENT_AGENT = "/agents";
const CATOGORIES = "/categories";
function Loading() {
    return <div style={loadingStyle}><img src={'/assets/snim_load.gif'} alt="Loading...." /></div>;
}
  
  const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
class Agent extends Component {
    constructor(props){
        super(props);
        this.state = {
            agent:{
                nom: '',
                categorie: {
                    categorieId: 233,
                },
                service: 0,
            },
            agentsList: [],
            categories: [],
            size:2,
            currentPage:1,
            totalPages: 0,
            isLoading: false,
            
        }
    }

    getData = () => {
        
    }

    

    handleChange = event => {
        const {agent, categories} = this.state;
        if(event.target.id === 'categorieId'){
            agent.categorie= categories[event.target.value];
        }else{
            agent[event.target.id] = event.target.value;
        }
        

        this.setState({
            agent, 
        }); 
    }

    /* selectHandleChange = event =>{

        const {agent,categories} = this.state;
        agent.categorie[event.target.id]
        this.setState({
            agent:{categorie: categories[event.target.value]}
        },() => {
            console.log('Loading..... '+this.state.agent)
         } );
    } */

    handleSubmit = e => {
        
         e.preventDefault();
         this.setState({ isLoading: true });
        
        axios.post(`${BASE_URL}${COMPONENT_AGENT}`,this.state.agent)
        .then(response => {
            console.log(response.data);
        })
        .catch(err=>console.log(err));

        

        axios.get(`${BASE_URL}${COMPONENT_AGENT}`)
        .then(response => {
            this.setState(prevState => ({ agentsList: [...response.data], isLoading: false}))
            //console.log(response.data);
        })
        .catch(err => console.log(err));
    }

    handlePagination = event => {
        this.setState({ isLoading: true });
        const page = parseInt(event.target.value, 10)
        this.setState(prevState => ({
            currentPage: page,
            isLoading: false
        }));
    }
    handleNext = () => {
        const next = this.state.currentPage + 1;
        this.setState(prev => ({currentPage: next}));
    }

    getBadgeClass(id){
        if(id === 1 ) return "warning";
        else if(id === 2 ) return "success";
        else return "danger";
        

    }
    getPagination = () => {
        const {currentPage, totalPages} = this.state;
        const pageNumbers = [];
        for(let i = 0 ; i < totalPages ; i++){
            pageNumbers.push(i);
        }
        return (
            pageNumbers.map((n, index) => {
                return (
                    n === currentPage-1 ? 
                    <PaginationItem key={index} active>
                        <PaginationLink onClick={this.handlePagination} tag="button" value={n}>{n+1}</PaginationLink>
                    </PaginationItem>
                    : 
                    <PaginationItem key={index}>
                        <PaginationLink onClick={this.handlePagination} tag="button" value={n}>{n+1}</PaginationLink>
                    </PaginationItem>
                );
            })
        );
    }
    getContent(){
        if(this.state.isLoading){
            return (
                Loading()
            );
        }else{
            const {categories, agentsList} = this.state
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>Ajouter un agent</strong>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="nom">Nom complet</Label>
                                        <Input type="text" id="nom" onChange={this.handleChange} placeholder="Taper le nom complet de l'agent" required />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="service">Service</Label>
                                        <Input type="number" id="service" onChange={this.handleChange} placeholder="Service code" required />
                                        
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="categorieId">Categorie</Label>
                                        <Input type="select" onChange={this.handleChange} id="categorieId">
                                            {categories.map((categorie,index) => {
                                                return <option key={index} value={index}>{categorie.designation}</option>
                                            })}
                                        </Input>
                                        
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit} ><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> List des agents
                            </CardHeader>
                            <CardBody>
                                <Table hover bordered striped responsive size="sm">
                                <thead>
                                <tr>
                                    <th>Matricule</th>
                                    <th>Nom</th>
                                    <th>Categorie</th>
                                    <th>Service</th>
                                    
                                </tr>
                                </thead>
                                <tbody>
                                    {agentsList.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{item.matricule}</td>
                                                <td>{item.nom}</td>
                                                
                                                <td><Badge color={this.getBadgeClass(item.categorie.categorieId)}>{item.categorie.designation}</Badge></td>
                                                <td>{item.service}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                </Table>
                                <nav>
                                <Pagination>
                                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                    {this.getPagination()}
                                    
                                    <PaginationItem><PaginationLink next tag="button" onClick={this.handleNext}>Next</PaginationLink></PaginationItem>
                                </Pagination>
                                </nav>
                            </CardBody>
                            </Card>
                    </Col>
                </Row>
            </div>

        );
        }
    }
    
    render() {
        return this.getContent();
    }
    componentDidMount(){
        this.setState({ isLoading: true });
        const {size, currentPage} = this.state;
        axios.get(`${BASE_URL}${COMPONENT_AGENT}?size=${size}&page=${currentPage-1}`)
        .then(response => {
            this.setState(prevState => (
                { 
                    agentsList: [...response.data.content], 
                    isLoading: false, 
                    totalPages: response.data.totalPages,
                }
            ));
            //console.log(response.data);
        })
        .catch(err => console.log(err));

        axios.get(`${BASE_URL}${CATOGORIES}`)
        .then(response => {
            this.setState(prevState => (
                { 
                    categories: [...response.data], 
                    isLoading: false, 
                    agent:{categorie:response.data[0]}
                }
            ));
            //console.log(response.data);
        })
        .catch(err=>console.log(err));



        //console.log(this.categories);
    }
}

export default Agent;