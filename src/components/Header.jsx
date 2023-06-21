import React from 'react'
import styles from './styles/Header.module.css'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/New/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
 
  return ( <>
    {[false,].map((expand) => (
    <Navbar  key={'lg'} expand='lg' className={`${styles.navbar} p-0 mb-0`} variant='dark'>
      <Container className={`${styles.navCon} mt-0`}>
        <Navbar.Brand href="https://waybify.com">
          <img src={logo} alt='waybify logo' className={`${styles.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}className={`${styles.navToggle}`} />
        <Navbar.Offcanvas 
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        className={`${styles.Colp}`}>
         <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
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
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    ))}

    
    </>
  );
}

export default Header