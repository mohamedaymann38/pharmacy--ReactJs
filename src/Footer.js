import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                   
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                      <h4>
                     DawaaMarts.com
                      </h4>
                      <br/>
                      <h6>
                      Dawaamarts is an marketplace for medical suppliers to list their products and offerings in single location where pharmacists can get the best offers for their daily supplies' request

© 2023 DawaaMarts.com. All rights reserved.
A digital marts company
                      </h6>
                        </div>
                    </Col>
                    <Col md="4" sm="12" className='iconsdiv'>
                    <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                        <h5>Connect with us</h5>
                        <br/>
                        <Link to="#" target="_blank"><FacebookIcon /></Link>
                        <Link to="#" target="_blank"><InstagramIcon /></Link>
                        <Link to="#" target="_blank"><LinkedInIcon /></Link>
                        </div>
                    </Col>
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                        <HashLink to="/#t">Home</HashLink> 
                        <br/>
                        <HashLink to="/#">Terms and conditions</HashLink>
                        <br/>
                        <HashLink to="/#">Services</HashLink>
                        <br/>
                        <HashLink to="/#">Contact Us</HashLink>
                        <br/>
                        <Link to="#">Find a medicine</Link>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </footer>
    )
}

export default Footer