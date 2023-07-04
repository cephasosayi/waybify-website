import styles from './Faq.module.css';
import React from 'react'
import { Col, Container, Button,Accordion } from 'react-bootstrap';



export const Faq = ({id}) => {
  return (<Container id={id} fluid className={`${styles.faqcontainer} border-top border-dark border-1`}>
        <Container className={`${styles.section} `}>
            <Col lg={12} xs={12} sm={12} md={12} >
            <div className={` ms-auto me-auto ${styles.caption}`}>
                <h2 className={`${styles.title}`}> Need help with something?</h2>
                <p className={`${styles.desc}`}>  See our FAQs, it’s possible we already have an answer to your question.</p>

            </div>

            <div className={`${styles.faq} ms-auto me-auto`}>
           <Accordion className={` ${styles.acc} ms-auto me-auto`}>


  <Accordion.Item eventKey="1" className={`${styles.accItem} `}>
    <Accordion.Header className={`bg-dark text-dark ${styles.accTitle}`}>
    How does Waybify work?
    </Accordion.Header>
    <Accordion.Body className={`${styles.accbody}`}>

    Waybify is a logistics platform that <b>connects social media sellers with drivers </b> to facilitate faster and more efficient delivery of their products. Sellers can schedule pickups and track their orders 
    through our platform, while drivers can accept delivery requests and earn income by fulfilling them.
    </Accordion.Body>
</Accordion.Item>

  <Accordion.Item eventKey="2" className={`${styles.accItem} `}>
    <Accordion.Header className={` bg-dark text-dark ${styles.accTitle}`}>What areas do you operate in?</Accordion.Header>
    <Accordion.Body className={`${styles.accbody}`}>
    Currently, Waybify operates in <b> Abuja, Jos and Lafia </b> in Nigeria. We are continuously 
    expanding our coverage to serve more locations in the near future.
    </Accordion.Body>
  </Accordion.Item> 

  <Accordion.Item eventKey="3" className={`${styles.accItem} mb-3 mb-md-0 mb-lg-0 mb-xl-0`}>
    <Accordion.Header className={`bg-dark text-dark  ${styles.accTitle}`}>    
What products can I deliver through Waybify?</Accordion.Header>
    <Accordion.Body className={`${styles.accbody} `}>
    We handle a wide range of products, including but not limited to fashion items, 
    gadgets, and cosmetic/health products. However, <b> there may be certain restrictions on prohibited 
    items such as perishable goods </b>or those that require specialized handling. 
    Please refer customer care for more details.
    </Accordion.Body>
  </Accordion.Item>  

  <Accordion.Item eventKey="4" className={`${styles.accItem} mt-1 mt-lg-0 mt-xl-0 mt-md-0`}>
    <Accordion.Header className={`bg-dark text-dark ${styles.accTitle}`}>
    How do I schedule a pickup?</Accordion.Header>
    <Accordion.Body className={`${styles.accbody}`}>
    Scheduling a pickup is easy!,<b> click on the "Schedule a pickup" button </b> and Simply fill out our online pickup request form to provide the necessary details, such as your contact information, pickup location,
     and preferred pickup date and time. Our team will review your request and confirm the pickup accordingly.
    </Accordion.Body>
  </Accordion.Item>  
  
  <Accordion.Item eventKey="5" className={`${styles.accItem}`}>
    <Accordion.Header className={`bg-dark text-dark ${styles.accTitle}`}>
    How fast are your deliveries?</Accordion.Header>
    <Accordion.Body className={`${styles.accbody}`}>
    At Waybify, we are committed to providing fast and reliable deliveries to our customers. We understand 
    the importance of timely service, and we strive to deliver all packages <b>within 48 hours after pickup.</b>
<br/>
<br/>
    It's important to note that the <b> 48-hour delivery timeframe is our standard service level agreement</b> for deliveries within our service areas. However, please keep in mind that factors such as distance, traffic conditions, and order volume may influence the actual delivery time. We continuously monitor and optimize 
    our operations to maintain the highest level of service and meet or exceed our delivery commitments.
    </Accordion.Body>
  </Accordion.Item>  
  

</Accordion>
            </div>
            
            </Col>
        </Container>
    </Container>
  )
}
