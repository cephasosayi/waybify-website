import React from 'react'
import styles from './styles/Header.module.css'
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import whatsapp from '../assets/icons/whatsapp.png'
import logo from '../assets/icons/logo.png'


// import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp-alt'

// import call from '@iconscout/react-unicons/icons/uil-phone'

function Header() {
 
  return (
    <Navbar bg="white" expand="lg" className={`${styles.navbar} `} >
      <Container className={`${styles.navCon}`}>
        <Navbar.Brand href="#home">
          <img src={logo} alt='waybify logo' className={`${styles.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.navToggle}`} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.Colp}`}>
          <Nav className=" ms-auto  justify-content-center justify-content-between ">
            <Nav.Link href="#hiws" className={`${styles.link}`} >How it works</Nav.Link>
            <Nav.Link href="#contact" className={`${styles.link}`}>Contack us</Nav.Link>
            <Nav.Link href="#link" className={`${styles.link}`}>FAQ</Nav.Link>           
                  </Nav>
                  
                  <div className={`${styles.navbtn} ms-auto  `}>
            <Button variant='primary' href='https://wa.me/2348068257152' className={`${styles.btn} `}>
              <img src={whatsapp} alt='' className={`${styles.whatsapp} me-1`} />  Whatsapp us</Button>
                      {/* <Button variant='danger' className={`${styles.btn}`}>Call us</Button> */}
                      
                </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header