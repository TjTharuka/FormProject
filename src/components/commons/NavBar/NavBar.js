import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'headroom.js';
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../actions';
import { Add } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const NavBar = ({addPaperState, setAddPaperState}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const headroom = new Headroom(document.getElementById('navbar-main'));
    headroom.init();
  }, []);


  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              Form
            </NavbarBrand>

            {/* NAV */}
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-block ml-lg-4">
                  {/* Logout button */}
                  <Button
                    className="btn-icon"
                    color="danger"
                    size="sm"
                    onClick={() => dispatch(logoutUser())}
                  >
                    <span className="btn-inner--icon text-white ">
                      <i className="fa fa-sign-out mr-2" />
                    </span>
                    <span className="text-capitalize text-white ml-1">
                      Logout
                    </span>
                  </Button>
                </NavItem>


                 {/* add icon */}
                 <Add 
                  className='cursor-pointer text-white mr-2'
                  onClick={()=>setAddPaperState(!addPaperState)}
                  ></Add>
                  
                  {/* Avatar */}
                  <Avatar className='cursor-pointer '></Avatar>
              </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavBar;
