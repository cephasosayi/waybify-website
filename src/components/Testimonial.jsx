import React from 'react'
import { Container, Col, Nav} from 'react-bootstrap'
import styles from './styles/Testimonial.module.css'
import arrow from '../assets/New/arrow.png'


function Testimonial({id}) {
  return (
      <Container id={id} className={`${styles.container} border-1 border-top border-dark`} fluid>
      <Container>
      <div className={` ms-lg-auto me-lg-auto mt-4 `}>
                <h2 className={`${styles.title}`}>Hear the Waybify Experience!</h2>
                <p className={`${styles.desc} `}> 
                Our commitment to reliability and efficiency has earned us the trust of our 
                clients, and we're thrilled to share their stories with you. From startups to 
                established enterprises, our clients have entrusted us with moving items worth more than 2 million naira within our service area. </p>          </div>
                <br/>
       <Col xs={12} sm={12} md={12} lg={12} xl={12} >
      
      <div className={`${styles.frame}`}>
        <iframe height="600px"  className={`${styles.iframe}`}
       id="testimonialto-waybify-testimonials-tag-all-dark-animated" 
       src="https://embed-v2.testimonial.to/w/waybify-testimonials?animated=on&theme=dark&shadowColor=000000&speed=1&tag=all" 
       frameborder="0" scrolling="no" width="100%" title='Waybify Testimonials'></iframe>

       
      </div> </Col>
       <div className={`${styles.linkContainer}`}>
          <Nav.Link target="_blank" href='https://testimonial.to/waybify-testimonials' >  
            <p className={`${styles.linkText}`}>Share your experience! <img src={arrow} alt='arrow sign' /> </p>
          </Nav.Link> 
        </div>
    </Container>
    </Container>
  )
}

export default Testimonial