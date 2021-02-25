import React from 'react';
import '../../../App.css';
import './Accueil.css';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import TabPane from 'react-bootstrap/TabPane'
import TabContent from 'react-bootstrap/TabContent'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Accueil() {
  return (
    <>
      <div className='section'>
        <Container >
        <h1 className='page-title'>Validate Coin</h1>
      
        <div className="bg-white box-shadow">
        <Tabs defaultActiveKey="Tokens" id="uncontrolled-tab-example" >
          <Tab eventKey="Tokens" title="Tokens" className='m-3' >
          <div className='pb-3'></div>
          <Table  striped bordered hover variant="dark">
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
                <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
          </Table>
          <div className='pb-3'></div>
          </Tab>
          
          <Tab eventKey="profile" title="Profile">
          <div className='pt-15'></div>

          <div className='pt-15'></div>
          </Tab>
      </Tabs>
        </div>
        
          </Container>
      </div>
      
    </>
  );
}