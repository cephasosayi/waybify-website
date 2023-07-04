import React from 'react'
import { Container, Col} from 'react-bootstrap'
import styles from './styles/Locations.module.css'


function Locations() {
  return (
      <Container className={`${styles.container} border-1 border-top border-dark`} fluid>
      <Container>
       <Col sm={12} md={12} lg={12} xl={12}>
       <div className={` ms-lg-auto me-lg-auto `}>
                <h2 className={`${styles.title}`}>Hear the Waybify Experience!</h2>
                <p className={`${styles.desc} `}> 
                Our commitment to reliability and efficiency has earned us the trust of our 
                clients, and we're thrilled to share their stories with you. From startups to 
                established enterprises, our clients have entrusted us with moving items worth more than 2 million naira within our service area. </p>          </div>
                <br/>
       <br/>
       <br/>
       <br/>
       <iframe height="600px" 
       id="testimonialto-waybify-testimonials-tag-all-dark-animated" 
       src="https://embed-v2.testimonial.to/w/waybify-testimonials?animated=on&theme=dark&shadowColor=000000&speed=1&tag=all" 
       frameborder="0" scrolling="no" width="100%"></iframe>
       </Col>
    </Container>
    </Container>
  )
}

export default Locations