import React from 'react'
import styles from './styles/App.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import store from '../assets/New/mobile.png'

const OurApp = () => {
  return (
    <Container fluid className={`${styles.container} p-0 m-0`}>
     <Container fluid className={`${styles.overly}`}>
     <Container >
            <Col xs={12} sm={12} md={6} lg={6} className={`${styles.colContainer}`}>
              <h2 className={`${styles.title}`}>Our app has more to offer</h2>
              <p className={`${styles.desc}`}>We made our app with our customers in mind.</p>
              
              <img src={store} className={`${styles.img} img-fluid`} />
              <Button target='_blank' href='https://forms.gle/DudMQ2zax5S3v2od6' variant='primary' className={`${styles.btn} mt-4 pt-2`}>Join our waitlist</Button>
            </Col>
     </Container>
     </Container>
    </Container>
  )
}

export default OurApp
