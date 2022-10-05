import React from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './styles/Contact.module.css'
import facebook from '../assets/icons/fb.png'
import whatsapp from '../assets/icons/whatsapp2.png'
import twitter from '../assets/icons/twitter.png'
import call from '../assets/icons/call.png'

function Contact() {
  return (
    <Container className={`${styles.contact}`} id='contact'>
      <h2 className={`${styles.title} mt-4 me-auto`}>React us</h2 >
      <div className={`${styles.row}`}>
        <div>
        <a href='https://wa.me/2348068257152'>
            <img src={whatsapp} alt='whatsapp' className={`${styles.social}`} />
            </a>
        </div>

        <div>
        <a href='#'>
          <img src={twitter} alt='twitter' className={`${styles.social}`} />
        </a>
        </div>

        <div>
          <a href='#'>
            <img src={facebook} alt='facebook' className={`${styles.social}`} />
            </a>
        </div>

        <div className='d-flex fw-bold'>
          <div></div><a href='tel:08068257152'> CLICK TO CALL</a>
        

        </div>
      </div>
      
    </Container>
  )
}

export default Contact