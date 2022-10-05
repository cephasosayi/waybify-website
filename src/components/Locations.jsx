import React from 'react'
import { Container, Row} from 'react-bootstrap'
import styles from './styles/Locations.module.css'
import {MapPin} from 'react-feather'
function Locations() {
  return (
      <Container className={`${styles.placetop} bg-light`} fluid>
      <Container  >

              <h2 className={`${styles.title} mt-lg-3 `}>Our Routes</h2>
          <div className={`${styles.placeCont}`}>
              <div className={`${styles.place} gap-3 d-flex`}>                  
                  <p className={`${styles.placeName}  `}><MapPin color='#003392 ' size={23}/> Abuja</p>                  
              </div>

              <div className={`${styles.place} gap-3 d-flex`}>
                   <p className={`${styles.placeName}`}> <MapPin color='#003392 ' size={23}/> Jos</p>                  
              </div>

              <div className={`${styles.place} gap-3 d-flex`}>
                   <p className={`${styles.placeName}`}> <MapPin color='#003392 ' size={23}/>  Lafia</p>                  
              </div>
          </div>
    </Container>
    </Container>
  )
}

export default Locations