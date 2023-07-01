import React from 'react'
import styles from './styles/Header.module.css'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/New/logo.png'
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
 
  return ( <>
    {[false,].map((expand) => (
    <Navbar  key={'lg'} expand='lg' className={`${styles.navbar} p-0 mb-0`} variant='dark'>
      <Container className={`${styles.navCon} mb-0 `} style={{ marginTop: '-40px'}}>
        <Navbar.Brand href="https://waybify.com">
          <img src={logo} alt='waybify logo' className={`${styles.logo}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}className={`${styles.navToggle}`} />
        <Navbar.Offcanvas 
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        className={`${styles.Offcanvas}`}>
         <Offcanvas.Header  closeButton className={`${styles.btnclose}`}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav className={`${styles.menu} d-flex  ms-lg-auto mt-lg-2 justify-content-lg-center justify-content-lg-between gap-4`} >
            <Nav.Link href="#hiws" className={`${styles.link}`} >About</Nav.Link>
            <Nav.Link href="#contact" className={`${styles.link}`}>FAQs</Nav.Link>
            <Nav.Link href="www.medium.com/@waybify" target='_blank' className={`${styles.link}`}>Blog</Nav.Link>           
            <Nav.Link href="#link" className={`${styles.link}`}>Contact</Nav.Link>           
                  </Nav>
                  
            <div className={`${styles.navbtn} ms-auto  `}>
                <Button variant='primary' target="_blank" href='https://forms.gle/DbMQLzbLJR5ZLRcx8' className={`${styles.btn} `}>
                      Schedule a pickup                  
                  </Button>     

            <Nav className={`${styles.menu2} d-flex gap-2 mt-3 d-lg-none d-xl-none `} >
              <h6>Reach us</h6>
              <Nav.Link href='https://wa.me/2348068257152' className={`${styles.link} ms-2`} ><i color='white' class="bi bi-whatsapp me-1"></i> WhatsApp</Nav.Link>
              <Nav.Link href="https://facebook.com/waybify" className={`${styles.link} ms-2`} ><i color='white' class="bi bi-facebook me-1"></i> Facebook</Nav.Link>
              <Nav.Link href="https://instagram.com/waybify" className={`${styles.link} ms-2`} ><i color='white' class="bi bi-twitter me-1"></i>Twitter</Nav.Link>
            </Nav>         
                      
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