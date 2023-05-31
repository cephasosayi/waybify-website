import React from 'react'
import styles from './styles/Header.module.css'
import { Container, Navbar, Nav, Button, Image } from 'react-bootstrap';
import whatsapp from '../assets/icons/whatsapp.png'
import logo from '../assets/New/logo.png'


// import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp-alt'

// import call from '@iconscout/react-unicons/icons/uil-phone'

function Header() {
 
  return (
    <Navbar expand="lg" className={`${styles.navbar} `} >
      <Container className={`${styles.navCon}`}>
        <Navbar.Brand href="#home">
          <img src={logo} alt='waybify logo' className={`${styles.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${styles.navToggle}`} />
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.Colp}`}>
          <Nav className=" ms-auto  justify-content-center justify-content-between gap-4" >
            <Nav.Link href="#hiws" className={`${styles.link}`} >About</Nav.Link>
            <Nav.Link href="#contact" className={`${styles.link}`}>FAQs</Nav.Link>
            <Nav.Link href="#link" className={`${styles.link}`}>Blog</Nav.Link>           
            <Nav.Link href="#link" className={`${styles.link}`}>Contact</Nav.Link>           
                  </Nav>
                  
            <div className={`${styles.navbtn} ms-auto  `}>
                <Button variant='primary' href='https://wa.me/2348068257152' className={`${styles.btn} `}>
                      Book your pickup                  
                  </Button>              
                      
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header