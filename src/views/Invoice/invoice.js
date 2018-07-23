import React, { Component } from 'react';
import axios from 'axios';
import {
    Badge,
  } from 'reactstrap';
  const BASE_URL = "http://localhost:8080";
  const COMPONENT_COMMANDS = "/commands/1";
class Invoice extends Component {
    state = { 
        commande:{
            codeCommande: 0,
            prixTotal: 0,
            dateCreation: '',
            agent:{

                categorie:{
                    
                }
            },
            articleCommands:[],

        },
        isLoading: true,
    }

    componentDidMount(){
        axios.get(`${BASE_URL}${COMPONENT_COMMANDS}`)
        .then(response => {
            this.setState(
                {
                    commande:{
                        agent: response.data.agent,
                        articleCommands: [...response.data.articleCommands], 
                        codeCommande: response.data.codeCommande,
                        prixTotal: response.data.prixTotal,
                        dateCreation: response.data.dateCreation,
                    },
                    isLoading: false,
                }, 
            );
            console.log(response.data);
        })
        .catch(err => console.log(err));
    }
    getContent = () => {
        if(this.state.isLoading){
            return (
                <React.Fragment>
                    <img src={'/assets/snim_load.gif'} alt="Loading...." />
                </React.Fragment>
            );
        }else{
            const {commande} = this.state;
            return (
                <React.Fragment>
                
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                Facture
                                <strong>{commande.codeCommande}/{commande.dateCreation}</strong> 
                                <Badge color="success" className="float-right"><strong>Etat:</strong> En attente</Badge>
                            </div>
                            <div className="card-body">
                                <div className="row mb-4">
                                    <div className="col-sm-6">
                                        <h6 className="mb-3">De:</h6>
                                        <div>
                                            <strong>Economat SNIM NDB</strong>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <h6 className="mb-3">Pour:</h6>
                                        <div>
                                            <strong>{commande.agent.nom}</strong>
                                        </div>
                                        <div>Mat: {commande.agent.matricule}</div>
                                        <div>Service: {commande.agent.service}</div>
                                        <div>Categorie: {commande.agent.categorie.designation}</div>
                                    </div>



                                </div>

                                <div className="table-responsive-sm">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th className="center">#</th>
                                                <th>Article</th>

                                                <th className="right">Prix Unitaire</th>
                                                <th className="center">Quantite</th>
                                                <th className="right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                commande.articleCommands.map((facture, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td className="center">{index+1}</td>
                                                            <td className="left strong">{facture.article.designation}</td>
                    
                                                            <td className="right">{facture.article.prixUnitaire}</td>
                                                            <td className="center">{facture.quantite}</td>
                                                            <td className="right">{facture.article.prixUnitaire * facture.quantite}</td>
                                                        </tr>
                                                    );
                                                
                                                })
                                            }
                                        
                                    
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-5">
                                    </div>

                                    <div className="col-lg-4 col-sm-5 ml-auto">
                                    <table className="table table-clear">
                                    <tbody>
                                    {}
                                    <tr>
                                    <td className="left">
                                    <strong>Total</strong>
                                    </td>
                                    <td className="right">
                                    <strong>{commande.prixTotal}</strong>
                                    </td>
                                    </tr>
                                    </tbody>
                                    </table>

                                </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
    render() { 
        

        return ( 
            this.getContent()
            
         );
    }
}
 
export default Invoice;