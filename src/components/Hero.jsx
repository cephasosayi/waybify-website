import React from 'react'
import { Container, Col, Row, Button} from 'react-bootstrap';
import styles from './styles/Hero.module.css';
import partner from '../assets/New/octamile.png';
import fb from '../assets/New/fb.png';
import ig from '../assets/New/ig.png';
import twitter from '../assets/New/twitter.png';



function Hero() {
  return (<><Container fluid className={`${styles.hero}`}>
      <Container className={`${styles.box}`}>
              <Row  className={`${styles.heroInfoContainer} `}>
                  <Col xs={6} sm={6} md={6} lg={12} className={`${styles.info} ms-auto me-auto`}>
                       <div> 
                        <h1 className={`${styles.title} ms-auto me-auto`}>Sell on social media, Ship with us.</h1>                  
                        <h1 className={`${styles.tagline} me-auto ms-auto`}>From your screen to your customers  doorstep, we deliver.</h1>

                        <p className={`${styles.desc} me-auto ms-auto`} >Want stress-free shipping? Look no further than Waybify! 
                        Our fast and easy shipping options are perfect for social vendors
                        </p>
                    </div>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={12} className={`${styles.btngroup} ms-auto me-auto`}>
                      <Button variant='primary' href='https://wa.me/2348068257152' 
                      className={`${styles.btn} d-flex justify-content-center`}>
                        Book your pickup
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
            <div> <p className={`${styles.secDesc}`}> Abuja, Jos and Lafia.</p></div>

        </div>
        <div className={`${styles.thirdSec} ms-auto me-auto`}>
          <img alt='facebook' src={fb} className={`${styles.social}`}/>
          <img alt='instgram' src={ig}  className={`${styles.social}`}/>
          <img alt='twitter' src={twitter} className={`${styles.social}`} />


        </div>
      </div>
</>
  )
}

export default Hero;