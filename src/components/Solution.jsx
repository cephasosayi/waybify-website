import React from 'react'
import styles from './styles/Solution.module.css';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import photo from '../assets/New/info.png'

const Solution = ({id}) => {
  return (
    <Container fluid id={id} className={`${styles.topContainer} ms-lg-0`}>
    <Container className={`${styles.container}`}>
      <Row className='d-flex justify-content-center' >
        <Col sm={12} xs={12} md={6} lg={6}  className={`${styles.col1}`}>
            <h2 className={`${styles.title}`}>Shipping Solutions for Social Vendors</h2>
            <p className={`${styles.desc}`}>
            We understand that shipping can be a hassle, with issues like missing packages, driving going beyond the delivery park, lack of tracking, and unreliable drivers all too common.
            <br/>
            That's why Waybify is committed to providing solutions to these problems, with:
            Streamlined waybilling and tracking to ensure your packages 
            are always accounted for:
            <br/>
            <ul className={`${styles.list}`}>   
                <li>  Reliable and professional drivers Door-to-door delivery for added convenience</li>
                <li>  Convenient pickup locations and flexible scheduling to fit your busy lifestyle. </li>
            </ul>
            So why wait? Sign up today and experience the difference for yourself!
            </p>
            <Button  
            target="_blank" href='https://forms.gle/DbMQLzbLJR5ZLRcx8' 
            variant='primary' className={`${styles.btn} me-auto me-lg-0 me-md-0 me-xl-0 pt-3`}>Let's get started</Button>
        </Col>
        <Col sm={12} xs={12} md={6} lg={6}   className={`${styles.col2}`}>
            <Image src={photo} className={`${styles.img} ms-lg-5 img-fluid`} />
        </Col>
      </Row>
    </Container>
    </Container>
  )
}

export default Solution

