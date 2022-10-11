import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './styles/HowItWorks.module.css'
import phone from '../assets/img/phone.png';
import pickup from '../assets/img/pickup.jpg';
import deliver from '../assets/img/deliver.jpg';
import door from '../assets/img/door.jpg';
import whatsapp from '../assets/icons/whatsapp.png';



function HowItWorks() {
  return (
      <Container className={`${styles.hiws} mb-5 h-100`} id='hiws'>
          <div className='ms-lg-auto me-lg-auto'>
              <h2 className='ms-lg-auto me-lg-auto'>How Waybify Works</h2>
              <p className={`${styles.hiwsdesc} ms-lg-auto me-lg-auto`}>Our mobile App is under development, however, this is how we operate now</p>
          </div>
          <Row className='mt-5 ' styles={{ marginTop: '10%'}}>
              <Col  lg={6} md={6} sm={12} xs={12} className='mt-lg-5'>
                  <img src={phone} alt='' className={`${styles.phone}`} />
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className='mt-lg-4'>
              <div className={`${styles.desc}`}>
                  
                  <h2 className={`${styles.title}`}>1. Talk to an Agent on WhatsApp</h2>
                      <p className={`${styles.body}`}>We have trusted agents accross our delivery routes, chat them up on WhatsApp,
                          they get your message, order description, and location and then come to your location for pickup
                      </p>
                      <Button variant='success' className={`${styles.hiwbtn} `}>
                          <img src={whatsapp} className={`${styles.htwicon}`} alt='' />
                          Send us a Message Now</Button>
                      </div>
              </Col>
              {/* pickup  */}
              <Col lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <div className={`${styles.desc}`}>
                  <h2 className={`${styles.title} `}>2. Our Agent Come Picks up Item</h2>
                      <p className={`${styles.body}`}>After your conversation with our agent, we make the next move,
                          by coming to your item location to pick up the item and then prepare it for delivery. <br /><br />
                  </p>
                  <p className={`${styles.body2} `}> PS: Make sure you share your item location with our agent on WhatsApp. </p>
                  </div>
              </Col>
              <Col  lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <img src={pickup} alt='' className={`${styles.phone}`} />
              </Col>

              {/* move  */}
              <Col  lg={6} md={6} sm={12} xs={12} className={`${styles.mv} mt-lg-5`}>
                  <img src={''} alt='' className={`${styles.phone} mt-5`} />
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className={`${styles.mov} mt-lg-5`}>
              <div className={`${styles.desc} mt-lg-4 mt-xs-2 mt-sm-2`}>
                  
                  <h2 className={`${styles.title}`}>3. Drivers Delivers to Agent in Destination  </h2>
                      <p className={`${styles.body}`}>We package your item and then pass it on to our drivers for delivery.
                          <br />
                      </p>
                      <p className={`${styles.body2} `}>  You will receive a status update as we journey
                          to your customer's destination. </p>
                      </div>
              </Col>
              <Col  lg={6} md={6} sm={12} xs={12} className={`${styles.mvv} mt-lg-5`}>
                  <img src={deliver} alt='' className={`${styles.phone} mt-5`} />
              </Col>

              {/* we deliver */}
               {/* deliver  */}
              <Col lg={6} md={6} sm={12} xs={12} className='mt-lg-5'>
              <div className={`${styles.desc} mt-lg-4`}>
                  
                  <h2 className={`${styles.title}`}>4. We Deliver to your Customer  </h2>
                      <p className={`${styles.body}`}>We deliver to your customer in less than 48 hours. 
                          {/* <br /> */}
                          <br />
                      </p>
                      <p className={`${styles.body2} `}> 
Note: All delivery to customers takes place in a public place</p>
                      </div>
              </Col>
               <Col  lg={6} md={6} sm={12} xs={12} className='mt-lg-5'>
                  <img src={door} alt='' className={`${styles.phone} mt-5`} />
              </Col>
          </Row>
      </Container>
  )
}

export default HowItWorks