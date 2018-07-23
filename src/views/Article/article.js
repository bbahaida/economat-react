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

function Loading() {
    return <div style={loadingStyle}><img src={'/assets/snim_load.gif'} alt="Loading...." /></div>;
}
  
  const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  
const BASE_URL = "http://localhost:8080";
const COMPONENT_ARTICLE = "/articles";
class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            article:{
                designation: '',
                prixUnitaire: 0,
            },
            articlesList: [],
            isLoading: false,
            
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });

        axios.get(`${BASE_URL}${COMPONENT_ARTICLE}`)
        .then(response => {
            this.setState(prevState => ({ articlesList: [...response.data], isLoading: false}))
            
        })
        .catch(err => console.log(err));




        //console.log(this.categories);
    }

    
    handleChange = event => {
        const {article} = this.state;
        article[event.target.id] = event.target.value;
        this.setState({
            article, 
        }); 
    }


    onSubmit = e => {
        
        e.preventDefault();
        
        //const data = new FormData(e.target);
        //console.log(data);
        console.log(this.state.article);
        /*axios.post(`${BASE_URL}${COMPONENT_AGENT}`,this.state)
        .catch(err=>console.log(err));*/
    }

    getBadgeClass(prix){
        if(prix < 500 ) return "success";
        else if(prix < 2000 ) return "warning";
        else return "danger";
    }

    getContent(){
        if(this.state.isLoading){
            return (
                Loading()
            );
        }else{
            const {articlesList} = this.state
            return (
                <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" sm="6">
                            <Card>
                                <CardHeader>
                                    <strong>Ajouter un article</strong>
                                </CardHeader>
                                <CardBody>
                                    <Form ref="articleForm" >
                                        <FormGroup>
                                            <Label htmlFor="designation">Designation</Label>
                                            <Input type="text" id="designation" onChange={this.handleChange} placeholder="La designation de l'article" required />
                                            
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="prixUnitaire">Prix Unitaire</Label>
                                            <Input type="number" id="prixUnitaire" onChange={this.handleChange} placeholder="Le prix unitaire de l'article" required />
                                            
                                        </FormGroup>
                                        
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" size="sm" color="primary" onClick={this.onSubmit} ><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs="12" sm="6">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> List des articles
                                </CardHeader>
                                <CardBody>
                                    <Table hover bordered striped responsive size="sm">
                                    <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Designation</th>
                                        <th>Prix Unitaire</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {articlesList.map((item,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{item.code}</td>
                                                    <td>{item.designation}</td>
                                                    
                                                    <td><Badge color={this.getBadgeClass(item.prixUnitaire)}>{item.prixUnitaire}</Badge></td>
    
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    </Table>
                                    <nav>
                                    <Pagination>
                                        <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                                        <PaginationItem active>
                                        <PaginationLink tag="button">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                                        <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
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
}
 
export default Article;