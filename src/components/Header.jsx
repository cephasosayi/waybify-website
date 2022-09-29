import React from 'react'
import styles from './styles/Header.module.css'
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import whatsapp from '../assets/icons/whatsapp.png'

// import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp-alt'

// import call from '@iconscout/react-unicons/icons/uil-phone'

function Header() {
 
  return (
    <Navbar bg="white" expand="lg" className={`${styles.navbar}`}>
      <Container>
        <Navbar.Brand href="#home">Waybify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto me-auto justify-content-center justify-content-between ">
            <Nav.Link href="#home" className={`${styles.link}`} >How it works</Nav.Link>
            <Nav.Link href="#link" className={`${styles.link}`}>Contack us</Nav.Link>
            <Nav.Link href="#link" className={`${styles.link}`}>FAQ</Nav.Link>           
                  </Nav>
                  
                  <div className={`${styles.navbtn} ms-auto justify-content-between `}>
                      <Button variant='primary' className={`${styles.btn} me-1 `}><Image src={whatsapp} alt='' className={`${styles.whatsapp}`} /> Whatsapp us</Button>
                      {/* <Button variant='danger' className={`${styles.btn}`}>Call us</Button> */}
                      
                </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header