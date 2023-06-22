import React from 'react'
import { Container, Col, Row, Button, Nav} from 'react-bootstrap';
import styles from './styles/Hero.module.css';
import partner from '../assets/New/octamile.png';



function Hero() {
  return (<><Container fluid className={`${styles.hero}`}>
      <Container className={`${styles.box}`}>
              <Row  className={`${styles.heroInfoContainer} w-100`}>
                  <Col sm={6} xs={6} md={6} lg={12} xl={12} className={`${styles.info} ms-auto me-auto`}>
                       <div className={`${styles.textCon}`}> 
                        <h1 className={`${styles.title} ms-auto me-auto`}>Sell on social media, Ship with us.</h1>                  
                        <h1 className={`${styles.tagline} me-auto ms-auto`}>From your screen to your customers  doorstep, we deliver.</h1>

                    </div>
                        <div className={`${styles.tagdescCon} me-lg-auto ms-lg-auto`}>                        
                          <p className={`${styles.desc} me-auto ms-auto`} >Want stress-free shipping? Look no further than Waybify! 
                        Our fast and easy shipping options are perfect for social vendors
                        </p>
                        </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={12} xl={12} className={`${styles.btngroup} ms-auto me-auto`}>
                      <Button variant='primary' target="_blank" href='https://forms.gle/DbMQLzbLJR5ZLRcx8' 
                      className={`${styles.btn} d-flex justify-content-center`}>
                        Schedule a Pickup
                      </Button>
                   </Col>
      </Row>
</Container>
      <div className={`${styles.freebox}`}></div>
     
</Container>
 {/* partner section  */}
 <div className={`${styles.partners}`}>
        <div className={`${styles.firstSec}`}>
          <p className={`${styles.secTitle}`}>Our Partner</p>
          <img src={partner} className={`${styles.Pimg}`} alt='partner'/>
        </div>
        <div className={`${styles.secondSec}`}>
            <div>  <p className={`${styles.secTitle2}`}>Service Area</p></div>
            <div> <p className={`${styles.secDesc}`}> Abuja,Jos & Lafia</p></div>

        </div>
        <Nav>  <div className={`${styles.thirdSec} ms-auto me-auto`}>
        <Nav.Link href='https://facebook.com/waybify' target="_blank"> 
        <i  className={`${styles.social} bi bi-facebook`} target="_blank" ></i> </Nav.Link>
       <Nav.Link href='https://instagram.com/waybify' target="_blank"> 
       <i className={`${styles.social} bi bi-instagram`} ></i></Nav.Link>
       <Nav.Link href='https://twitter.com/waybify' target="_blank">
        <i className={`${styles.social} bi bi-twitter`} ></i> 
        </Nav.Link>
        <Nav.Link href='https://wa.me/2348068257152' target="_blank">
          <i className={`${styles.social} bi bi-whatsapp`}></i></Nav.Link>
          {/* <img alt='facebook' src={fb} className={`${styles.social}`}/>
          <img alt='instgram' src={ig}  className={`${styles.social}`}/>
          <img alt='twitter' src={twitter} className={`${styles.social}`} /> */}

        </div>
</Nav>
      </div>
</>
  )
}

export default Hero;