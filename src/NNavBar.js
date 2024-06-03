import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import logo from ''
const NNavBar = () => {
  return (

 <Navbar expand="lg" className=" navbar bg-body-tertiary">
      <Container >
        <Navbar.Brand className='logo' href="#"><img src="/Images/DAWAA PNG.png" width="85px" height="90px"/>Dawaa Marts</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
<Link className='loginto ' to="#" target="blank"><AccountCircleIcon/> <br></br>Log To Account</Link> 
          </Nav>
<Form className=' searchbar justify-content-center d-flex  bd-highlight me-1'>
  <Container>
    <Row>
<Col md={7} sm={12 }className=' searchbar justify-content-center d-flex  bd-highlight me-1' >
<Form.Control className='me-2'
              type="search"
              placeholder="Search"
              // className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
</Col>
    </Row>
  </Container>
</Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NNavBar