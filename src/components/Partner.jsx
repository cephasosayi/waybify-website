import React from 'react'
import { Container, Button, Col, Row, Card } from 'react-bootstrap'
import styles from './styles/Partner.module.css'
import pickup from '../assets/New/pickup.png'
import load from '../assets/New/loading.png'
import happy from '../assets/New/happy.png'
import arrow from '../assets/New/arrow.png'



function Partner() {
  return (
      <Container fluid className={`${styles.container}`}>
          <Container>
            <div className={`${styles.textContainer}`}>
                <h2 className={`${styles.title} me-auto ms-auto`}>Shipping Process</h2>
            </div>
               <div className={`${styles.descCon}`}>
                 <p className={`${styles.desc} me-auto ms-auto`}>Welcome to Waybify! We're thrilled to have you on board as one of our valued vendors. Our shipping process is designed to be as simple and 
                hassle-free as possible, so you can focus on what you do best – running your business.</p>
            </div>
              <Row sm={1} xs={1} md={3} lg={3} className={`${styles.partRow}`}>
                  <Col  sm={12} xs={12} md={ 4} lg={4}>
                    <Card className={`${styles.card}`}>
                        <Card.Img src={pickup} className={`${styles.cardImg} img-fluid`} 
                              alt='Schedule a pickup' />
                        <Card.Title className={`${styles.cardTitle} `}>Schedule pickup</Card.Title>
                        <Card.Text className={`${styles.cardText} `}>Provide pickup address and preferred date/time
Our team arrives        to collect your securely packaged packages</Card.Text>
                       </Card>
                  </Col>    
                  
                  <Col  sm={12} xs={12} md={ 4} lg={4}>
                    <Card className={`${styles.card}`}>
                        <Card.Img src={load} className={`${styles.cardImg} img-fluid`} 
                              alt='Schedule a pickup' />
                        <Card.Title className={`${styles.cardTitle} `}>We deliver within 48 hours</Card.Title>
                        <Card.Text className={`${styles.cardText} `}>We have a reliable team that will handle all your deliveries, in under 48 hours.</Card.Text>
                       </Card>
                  </Col>    
                  <Col  sm={12} xs={12} md={ 4} lg={4}>
                    <Card className={`${styles.card}`}>
                        <Card.Img src={happy} className={`${styles.cardImg} img-fluid`} 
                              alt='Schedule a pickup' />
                        <Card.Title className={`${styles.cardTitle} `}>Happy Customer</Card.Title>
                        <Card.Text className={`${styles.cardText} `}>Put a smile on your customers face as we do same to you.</Card.Text>
                       </Card>
                  </Col>   
            </Row>
            <div className={`${styles.linkContainer}`}>
                <p className={`${styles.linkText}`}>Let's help you ship  <img src={arrow} /> </p> 
            </div>
          </Container>
          
    </Container>
  )
}

export default Partner