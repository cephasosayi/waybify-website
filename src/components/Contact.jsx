import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './styles/Contact.module.css'

function Contact() {
  return (
    <Container fluid className={`${styles.container}`} id='contact'>
           <Container>
            <Row>
            <Col xs={12} sm={12} md={7} lg={7}>
              <h2 className={`${styles.heading}`}>Drive for Waybify</h2>
              <p className={`${styles.desc}`}>Do you driver out of state a lot?, 
              you can earn extra income as you travel. Apply today and start earning with Waybify</p>
            </Col>
            <Col xs={12} sm={12} md={5} lg={5} className={`${styles.btnContainer}`}>
              <Button variant='primary' 
              className={`${styles.btn} d-flex ms-auto`}>
                Join the Team!
                </Button>
            </Col>
            </Row>
           </Container>
    </Container>
  )
}

export default Contact