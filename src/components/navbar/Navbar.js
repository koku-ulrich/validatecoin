import React, {useState} from 'react'
import {Button} from '../button/Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Navbar() {
    
    return (
      <div class='menu'>
        <div class='container'>
          <div class='row'>
            <div className='col-md-4'>
              <Nav.Item href='/' >
                <Nav.Link  href='/' >
                <i class="fab fa-btc"></i> <span className='nav-links'>  Validate Coin </span>
                </Nav.Link>
              </Nav.Item>
            </div>
            <div className='col-md-8'>
        <Nav variant="pills" className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='nav-links'  href='/'>
            Accueil
          </Nav.Link>
        </Nav.Item>
        <NavDropdown className='nav-links'  title="Tokens" id="nav-dropdown">
          <NavDropdown.Item className='nav-links'  href='create-token'>Create Token</NavDropdown.Item>
          <NavDropdown.Item className='nav-links'  href='view-tokens'>View Tokens</NavDropdown.Item>
          <NavDropdown.Item className='nav-links'  href='buy-token'>Buy Tokens</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className='nav-links'  title="Sale" id="nav-sale">
          <NavDropdown.Item className='nav-links'  href='put-sale'>Put on sale</NavDropdown.Item>
          <NavDropdown.Item className='nav-links'  href='remove-sale'>Remove on sale</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link className='nav-links'  href='/contact-us'>
            Contact us
          </Nav.Link>
        </Nav.Item>
        </Nav>
        </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;