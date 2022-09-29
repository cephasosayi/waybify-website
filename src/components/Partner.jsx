import React from 'react'
import { Container, Button } from 'react-bootstrap'
import styles from './styles/Partner.module.css'
import drive from '../assets/icons/drive.png'
import agent from '../assets/icons/agent.png'
import app from '../assets/icons/app.png'

import g1 from '../assets/img/g1.png'


function Partner() {
  return (
      <Container>
          <Container>
              <div className={`${styles.partner}`}>
                  <div className={`${styles.part1}`}>
                      <div className={`${styles.g1}`}></div>
                      <img src={drive} alt='driver' />
                      <h2>Become a Waybifier Driver</h2>
                      <p>As a Delivery driver, you'll make reliable money moving items to our agents</p>
                      <Button variant='link' className={`${styles.btn}`}>Start today</Button>
                  </div>  
                  
                  <div className={`${styles.part2}`}>
                  <div className={`${styles.g2}`}></div>
                      
                      <img src={agent} alt='driver' />
                      <h2>Be an Agent</h2>
                      <p>As an agent, you get to earn while delivering and picking up items for us.</p>
                      <Button variant='link' className={`${styles.btn}`} >Sign up today</Button>
                  </div>  

                  <div className={`${styles.part3}`}>
                  <div className={`${styles.g3}`}></div>                      
                      <img src={app} alt='driver' />
                      <h2>Try the App</h2>
                      <p>COMING SOON</p>
                      <p>For your orders, chat with our agents</p>
                      <Button variant='link' className={`${styles.btn}`} >Send a Message</Button>
                  </div>  
              </div>
          </Container>
          
    </Container>
  )
}

export default Partner