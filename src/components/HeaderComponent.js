import React, { Component } from 'react';
import '../App.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button, Badge
} from 'reactstrap';
import fire from '../config/firebase';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <>
                <Navbar expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}><span className='fa fa-bars fa-md'></span></NavbarToggler>
                        <NavbarBrand className='mr-auto' href="/home">
                            <span className="fa fa-book fa-lg" aria-hidden="true"></span> E-Books
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='ml-auto align-items-center' navbar>
                                <NavItem>
                                    <Badge className='userdetails' color='light' pill><span className='fa fa-user'> {this.props.user}</span></Badge>
                                </NavItem>
                                <NavItem>
                                    <Button onClick={this.logout} className='logoutbtn'>
                                        <span className='fa fa-sign-in fa-lg'></span> Logout
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;