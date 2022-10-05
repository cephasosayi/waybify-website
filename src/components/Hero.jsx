import React from 'react'
import { Container, Col, Row, Button, Image} from 'react-bootstrap';
import styles from './styles/Hero.module.css';
import deliveryman from '../assets/img/deliveryman.jpg';
import whatsapp from '../assets/icons/whatsapp.png';
import collect from '../assets/icons/collect.png';
import deliver from '../assets/icons/deliver.png';
import box from '../assets/icons/package.png';



import {ArrowRight} from 'react-feather'
function Hero() {
  return (
      <Container className={`${styles.hero}`} >
          <Row className={`mt-3`}>
          <Col lg={6} sm={12} md={6} className={`${styles.col1} mt-1`}>
                  <h1 className={`${styles.text1}`}>Let's Help you meet your Business Goals!</h1>                  
                  <h1 className={`${styles.text2}`}>We fulfil all delivery in less than 48hours</h1>

                  <p className={`${styles.Herodesc} me-auto`} >Waybify is an on-demand delivery service, we connect businesses with drivers,
                   helping you meet your business goals.
                  </p>
                  <small className={`${styles.small}`}>Need us, WhatsApp us NOW! </small>
                  <div className={`${styles.btngroup} d-flex gap-2`}>
            <Button variant='success' href='https://wa.me/2348068257152' className={`${styles.btn1} me-2`}>
              <img src={whatsapp} alt='' className={`${styles.whatsapp} me-3`} />
                  WhatsApp us</Button>
                      <Button variant='link' href='tel:08068257152' className={`${styles.btn2} mt-1`}>Call us <ArrowRight color='black' size={16}/> </Button>

          </div>
          {/* why us  */}

          <div className={`${styles.whyus}`}>
            <h3>Why us</h3>
            <div className={`${styles.feature} gap-lg-5`}>
              <div className='d-flex '>
                <img src={collect} alt='collect' className={`${styles.ficon} `} />
                <p className={`${styles.whyustext} mt-lg-4 p-1`} style={{ fontSize: 12, color: '#64748b'}}> We Collect</p>
              </div>
              <div className='d-flex'>
                <img src={box} alt='package' className={`${styles.ficon}`} />
                <p className={`${styles.whyustext} mt-lg-4 p-1`} style={{ fontSize: 12, color: '#64748b' }}> We Package</p> </div>
              <div className='d-flex'>
                <img src={deliver} alt='deliver' className={`${styles.ficon}`} />
                <p className={`${styles.whyustext} mt-lg-4 p-1`} style={{ fontSize: 12, color: '#64748b' }}>We Deliver</p> </div>
              
            </div>
          </div>
          </Col>    
              <Col lg={6} sm={12} md={6} className='ms-auto'>
                  <div className={`${styles.imgCon} mt-5 ms-lg-5`}>
                      <Image src={deliveryman} alt='delivery man' className={`${styles.img}`} />
                      </div>

           {/* blur divs */}
           <div className='blur' style={{ background: 'rgba(0, 51, 146, 0.502)'}}></div>
           
          </Col> 
              </Row>    
    </Container>
  )
}

export default Hero