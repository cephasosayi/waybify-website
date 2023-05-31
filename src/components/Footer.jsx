import {MapPin} from 'react-feather'
import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import styles from './styles/Footer.module.css'
import logo from '../assets/New/logo.png';
import ig from '../assets/New/ig.png';
import fb from '../assets/New/fb.png';
import twitter from '../assets/New/twitter.png';
import linkedin from '../assets/New/linkedin.png';

function Footer() {
  return (
      <Container className={`${styles.footer} `}>
              <Row className={`${styles.footerC} w-100`}>
                  <Col sm={12} xs={12} lg={6} md={6} className={`${styles.ColContainer} mb-2`}>
                    <div> 
                        <img src={logo} className={`${styles.logo}`}/>
                    </div>
                    <div className={`${styles.socialContainer}`}>
                        <div className={`${styles.iconBox}`}>
                            <img src={ig} className={`${styles.icon}`} />
                        </div>

                        <div className={`${styles.iconBox}`}>
                            <img src={fb} className={`${styles.icon}`} />
                        </div>

                        <div className={`${styles.iconBox}`}>
                            <img src={twitter} className={`${styles.icon}`} />
                        </div>

                        <div className={`${styles.iconBox}`}>
                            <img src={linkedin} className={`${styles.icon}`} />
                        </div>

                    </div>
                  </Col>
                  <Container  className='border border-1 border-dark mb-2 w-100 border-bottom '><div></div> </Container>
                  <Col lg={3} sm={12} xs={12} md={4} className={`${styles.ColContainer}`}>
                  <div className={`${styles.linksContainer}`} > 
                  <p className={`${styles.links}`}>Terms of service</p>
                  <p className={`${styles.links}`}>FAQs</p>
                       <p className={`${styles.links}`}>Support</p>
                  <p className={`${styles.links}`}>Careers</p>
                    </div>
                    <div className={`${styles.socialContainer}`}>
                       <p className={`${styles.links}`}> Copyright © 2023 Waybify. All rights reserved.</p>

                    </div>
                  
                  </Col>
             </Row>
    </Container>
  )
}

export default Footer