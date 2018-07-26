import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from 'reactstrap';
import Invoice from '../Invoice/invoice';



class Commande extends Component {
    state = { 
        modal: false,
        large: false,
     }
     toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      }
      toggleLarge = () => {
        this.setState({
          large: !this.state.large,
        });
      }
     
    render() { 
        return ( 
        <React.Fragment>
          <Button onClick={this.toggleLarge} className="mr-1">Facturer</Button>
              <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                className={'modal-lg ' + this.props.className}>
                <ModalHeader toggle={this.toggleLarge}>Facture</ModalHeader>
                <ModalBody>
                  <Invoice />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggleLarge}>Imprimer</Button>{' '}
                  <Button color="secondary" onClick={this.toggleLarge}>Annuler</Button>
                </ModalFooter>
              </Modal>
        </React.Fragment> 
        );
    }
}
 
export default Commande;