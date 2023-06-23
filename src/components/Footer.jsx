import {MapPin} from 'react-feather'
import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Nav, Row } from 'react-bootstrap'
import styles from './styles/Footer.module.css'
import logo from '../assets/New/logo.png';

function Footer() {
  return (
      <Container className={`${styles.footer} `}>
              <Row  sm={1} className={`${styles.footerC} w-100`}>
                  <Col sm={12} xs={12} lg={6} md={6} className={`${styles.ColContainer} mb-2`}>
                    <div> 
                        <img src={logo} className={`${styles.logo}`}/>
                    </div>
                    <div className={`${styles.socialContainer}`}>
                        <Nav.Link className={`${styles.iconBox}`}>
                            {/* <img src={ig} className={`${styles.icon}`}  alt='Instagram'/> */}
                              <i color='gray' class="bi bi-instagram "></i> 
                        </Nav.Link>

                        <Nav.Link className={`${styles.iconBox}`}>
                            {/* <img src={fb} className={`${styles.icon}`} alt='facebook' /> */}
                            <i color='gray' class="bi bi-instagram "></i> 

                        </Nav.Link>

                        <Nav.Link className={`${styles.iconBox}`}>
                        <i color='gray' class="bi bi-twitter"></i> 
                            {/* <img src={twitter} className={`${styles.icon}`} alt='twitter' /> */}
                        </Nav.Link>

                        <Nav.Link className={`${styles.iconBox}`}>
                        <i color='gray' class="bi bi-linkedin"></i> 
                            {/* <img src={linkedin} className={`${styles.icon}`} alt='linkedin' /> */}
                        </Nav.Link>

                    </div>
                  </Col>
                  <Container  className='border border-1 border-dark mb-2 w-100 border-bottom '><div></div> </Container>
                  <Col sm={12} xs={12} md={4} lg={3} className={`${styles.ColContainer}`}>
                    <div className={`${styles.linksContainer} p-0 m-0`} > 
                        <Nav.Link className={`${styles.links}`}>Terms of service</Nav.Link>
                        <Nav.Link className={`${styles.links}`}>FAQs</Nav.Link>
                        <Nav.Link className={`${styles.links}`}>Support</Nav.Link>
                        <Nav.Link className={`${styles.links}`}>Careers</Nav.Link>
                      </div> <br/>
                      <div className={`${styles.copyright} mt-2`}>
                        <p className={`${styles.link}`}> Copyright © 2023 Waybify. All rights reserved.</p>
                      </div>
                  
                  </Col>
             </Row>
    </Container>
  )
}

export default Footer