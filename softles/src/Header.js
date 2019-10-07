import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask } from 'mdbreact';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Router>
                <MDBNavbar color="orange" dark expand="md" fixed="top">
                    <MDBNavbarBrand href="#">
                        <strong>Navbar</strong>
                    </MDBNavbarBrand>
                    <MDBCollapse navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="#">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">About Us</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Our Services</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Our Work</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#">Contact Us</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        </header>
    );
};

export default Header;