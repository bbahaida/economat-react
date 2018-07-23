import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import './AppNavbar.css';

class AppNavbar extends Component {
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
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">Accueil</NavItem>
                        <NavDropdown eventKey={2} title="Agent" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} componentClass={Link} href="/agents" to="/agents">Afficher</MenuItem>
                            <MenuItem eventKey={2.2} componentClass={Link} href="/add-agent" to="/add-agent">Ajouter</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Article" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} componentClass={Link} href="/" to="/">Afficher</MenuItem>
                            <MenuItem eventKey={3.2} componentClass={Link} href="/" to="/">Ajouter</MenuItem>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;