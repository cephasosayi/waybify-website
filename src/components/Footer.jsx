import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import styles from './styles/Footer.module.css'

function Footer() {
  return (
      <Container fluid className={`${styles.footer}`}>
          <Container  >
              <Row lg={3} md={3} sm={1} xs={1} className={`${styles.footerC}`}>
                  <Col sm={12} xs={12} lg={6} md={4}>
                      <div className='me-auto'>
                      <p className={`${styles.copy} me-auto`}>Copyright 2022</p>
                          <h3 className={`${styles.Ftitle} me-auto`}>About</h3>
                          <p className={`${styles.desc}`}>We are a modern logistics company, we let you
                              focus on growing your business while we handle the packaging 
                        and delivery of your products to your customer outside your reach.
                          </p>
                      </div>
                  </Col>
                  <Col lg={3} sm={12} xs={12} md={4}>
                  <h3 className={`${styles.title}`}>Quick Links</h3>
                  <ListGroup fluid className={`${styles.list}`}>
                      <ListGroupItem className={`${styles.listItem}`} ><a href='#hiws' > How it works</a></ListGroupItem>
                      <ListGroup.Item className={`${styles.listItem}`}> FAQ</ListGroup.Item>
                      <ListGroup.Item className={`${styles.listItem}`}> <a href='https://medium.com/@waybify' >Blog</a></ListGroup.Item>

                  </ListGroup>
                  </Col>

                  <Col lg={3} sm={12} xs={12} md={4} className={`${styles.lastFcol}`} >
                  <h3  className={`${styles.title}`}>React us</h3>
                  <ListGroup className={`${styles.list}`} fluid>
                          <ListGroupItem className={`${styles.listItem}`}>
                              <a href='https://wa.me/2348068257152'>
                         WhatsApp </a></ListGroupItem>
                          <ListGroup.Item className={`${styles.listItem}`}>
                          <a href='https://instagram.com/waybify' >Instagram</a></ListGroup.Item>
                      <ListGroup.Item className={`${styles.listItem}`}><a href='https://twitter.com/waybify' > Twitter </a></ListGroup.Item>

                  </ListGroup>
                  </Col>

              </Row>
        </Container>
    </Container>
  )
}

export default Footer