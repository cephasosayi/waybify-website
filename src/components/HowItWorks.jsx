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
          <div >
              <h2>How Waybify Works</h2>
              <p>Our mobile App is under development, however, this is how we operate for now</p>
          </div>
          <Row className='mt-5 ' styles={{ marginTop: '10%'}}>
              <Col  lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <img src={phone} alt='' className={`${styles.phone}`} />
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className='mt-4'>
              <div className={`${styles.desc}`}>
                  
                  <h2 className={`${styles.title}`}>1. Talk to an Agent on WhatsApp</h2>
                  <p className={`${styles.body}`}>We have trusted agent accross some state, chat them up on whatsapp,
                      the get your message, order desciption, location and then come to your location for pickup
                      </p>
                      <Button variant='success' className={`${styles.btn} `}><img src={whatsapp } className={`${styles.icon}`} alt='' /> Send us a Message Now</Button>
                      </div>
              </Col>
              {/* pickup  */}
              <Col lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <div className={`${styles.desc}`}>
                  <h2 className={`${styles.title} `}>2. Our Agent Come Picks Item</h2>
                  <p className={`${styles.body}`}>We have trusted agent accross some state, chat them up on whatsapp,
                      the get your message, order desciption, location and then come to your location for pickup
                  </p>
                  </div>
              </Col>
              <Col  lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <img src={pickup} alt='' className={`${styles.phone}`} />
              </Col>

              {/* move  */}
              <Col  lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <img src={deliver} alt='' className={`${styles.phone} mt-5`} />
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className='mt-5'>
              <div className={`${styles.desc} mt-4`}>
                  
                  <h2 className={`${styles.title}`}>3. Our Driver Moves items to Agent in Destination  </h2>
                  <p className={`${styles.body}`}>We have trusted agent accross some state, chat them up on whatsapp,
                      the get your message, order desciption, location and then come to your location for pickup
                      </p>
                      </div>
              </Col>

              {/* we deliver */}
               {/* deliver  */}
              <Col lg={6} md={6} sm={12} xs={12} className='mt-5'>
              <div className={`${styles.desc} mt-4`}>
                  
                  <h2 className={`${styles.title}`}>4. We Deliver to your Customer  </h2>
                  <p className={`${styles.body}`}>We have trusted agent accross some state, chat them up on whatsapp,
                      the get your message, order desciption, location and then come to your location for pickup
                      </p>
                      </div>
              </Col>
               <Col  lg={6} md={6} sm={12} xs={12} className='mt-5'>
                  <img src={door} alt='' className={`${styles.phone} mt-5`} />
              </Col>
          </Row>
      </Container>
  )
}

export default HowItWorks