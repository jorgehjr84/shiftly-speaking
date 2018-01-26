import React, { Component } from 'react';

import '../App.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';


class HeaderComponent extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">Shiftly Speaking</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem eventKey={1} href="#">Hello, Jorge</NavItem>
                    <NavItem eventKey={1} href="#">Log Out</NavItem>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default HeaderComponent;

