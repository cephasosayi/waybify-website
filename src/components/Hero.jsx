import React from 'react'
import { Container, Col, Row, Button, Image} from 'react-bootstrap';
import styles from './styles/Hero.module.css';
import partner from '../assets/New/octamile.png';
import fb from '../assets/New/fb.png';
import ig from '../assets/New/ig.png';
import twitter from '../assets/New/twitter.png';
import box from '../assets/icons/package.png';



import {ArrowRight} from 'react-feather'
function Hero() {
  return (<Container fluid className={`${styles.hero}`}>
      <Container className={`${styles.box}`}>
              <div className={`${styles.heroInfoContainer} `}>
                  <div className={`${styles.info}`}>
                        <h1 className={`${styles.title}`}>Sell on social media, Ship with us.</h1>                  
                        <h1 className={`${styles.tagline} me-auto ms-auto`}>From your screen to your customers  doorstep, we deliver.</h1>

                        <p className={`${styles.desc} me-auto ms-auto`} >Want stress-free shipping? Look no further than Waybify! 
                        Our fast and easy shipping options are perfect for social vendors
                        </p>
                  </div>
                  <div className={`${styles.btngroup}`}>
                      <Button variant='primary' href='https://wa.me/2348068257152' 
                      className={`${styles.btn} d-flex justify-content-center`}>
                        Book your pickup
                      </Button>
                   </div>
      </div>
</Container>
      <div className={`${styles.freebox}`}></div>
      {/* partner section  */}
      <div className={`${styles.partners}`}>
        <div className={`${styles.firstSec}`}>
          <p className={`${styles.secTitle}`}>Our Partner</p>
          <img src={partner} />
        </div>
        <div className={`${styles.secondSec}`}>
            <div>  <p className={`${styles.secTitle2}`}>Service Area</p></div>
            <div> <p className={`${styles.secDesc}`}>Abuja, Jos, & Lafia. NG.</p></div>

        </div>
        <div className={`${styles.thirdSec} ms-auto me-auto`}>
          <img src={fb} className={`${styles.social}`}/>
          <img src={ig}  className={`${styles.social}`}/>
          <img src={twitter} className={`${styles.social}`} />


        </div>
      </div>
</Container>
  )
}

export default Hero;