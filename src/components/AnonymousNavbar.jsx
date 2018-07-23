import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import './AppNavbar.css';

class AnonymousNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Economat
                            <img src="assets/snim.png" className="logo" alt="Logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                
            </Navbar>
        );
    }
}

export default AnonymousNavbar;