import React from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import styles from './styles/Partner.module.css'
import drive from '../assets/icons/drive.png'
import agent from '../assets/icons/agent.png'
import app from '../assets/icons/app.png'

import g1 from '../assets/img/g1.png'


function Partner() {
  return (
      <Container fluid className={`${styles.top}`}>
          <Container>
              <Row sm={1} xs={1} md={3} lg={3} className={`${styles.partRow}`}>
                  <Col className={`${styles.part1}`} sm={12} xs={12} md={ 4} lg={4}>
                      <div className={`${styles.part1}`}>
                          <div className={`${styles.imgbg} d-flex justify-content-center`}>
                                <div className={`${styles.g1}`}></div>
                              <img src={drive} alt='driver' />
                              </div>
                      <h2>Become a Driver</h2>
                      <p>As a Delivery driver, you'll make reliable money moving items to our agents</p>
                      <Button variant='link' className={`${styles.btn}`}>Start today</Button>
                      </div>
                  </Col>    
                  
                  <Col className={`${styles.part2}`} sm={12} xs={12} md={ 4} lg={4}>
                  <div className={`${styles.imgbg} d-flex justify-content-center`}>
                  <div className={`${styles.g2}`}></div>
                      
                          <img src={agent} alt='driver' />
                          </div>
                      <h2>Be an Agent</h2>
                      <p>As an agent, you get to earn while delivering and picking up items for us.</p>
                      <Button variant='link' className={`${styles.btn}`} >Sign up today</Button>
                  </Col>  

                  <Col className={`${styles.part3}`} sm={12} xs={12} md={ 4} lg={4}>
                  <div className={`${styles.imgbg} d-flex justify-content-center`}>
                  <div className={`${styles.g3}`}></div>                      
                          <img src={app} alt='driver' />
                          </div>
                      <h2>Try the App</h2>
                      <p className='fw-bold text-danger'>COMING SOON</p>
                      <p>For your orders, chat with our agents</p>
                      <Button variant='link' className={`${styles.btn}`} >Send a Message</Button>
                  {/* </Col>   */}
                  </Col>
                  </Row>
          </Container>
          
    </Container>
  )
}

export default Partner