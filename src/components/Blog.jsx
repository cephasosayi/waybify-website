import React from 'react'
import { Col, Container, Nav } from 'react-bootstrap'
import styles from '../components/styles/Blog.module.css';
import arrow from '../assets/New/arrow.png'


const Blog = () => {
  return (
    <Container fluid className='bg-dark d-flex justify-content-center text-center'>
    <Container >
      {/* <p>Testimonial</p> */}
      <h2 className={`${styles.title} mt-4 ms-auto me-auto`}>Waybify Newsroom</h2>
      <p className={`${styles.desc}  ms-auto me-auto`}>
        Our features, journey, tips and us being us. </p>      
      <Col sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center'>
      <iframe title='blog' src='https://widgets.sociablekit.com/medium-publication-feed/iframe/158723' 
      frameborder='0' width='100%' height='580'></iframe>

      </Col>
        <div className={`${styles.linkContainer}`}>
          <Nav.Link target="_blank" href='https://waybify.medium.com/' >  
            <p className={`${styles.linkText}`}>See more articles <img src={arrow} alt='arrow sign' /> </p>
          </Nav.Link> 
        </div>
    </Container>
    </Container>
  )
}

export default Blog

