import React, { useState, useEffect } from 'react';
import styles from  '../components/styles/FloatingButton.module.css'; // Create a CSS file for styling the floating button
import notificationSound from '../assets/New/notification.wav';

export const FloatingButton = () => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const audio = new Audio(notificationSound);
        audio.play();
    
        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);

    return (
      <div className={`${styles.floatingbuttoncontainer}`}>
        { showMessage && <div className={`${styles.floatingbuttonmessage}`}> 
            Send us a message</div> }
        <a href='https://wa.me/2348068257152' target="_blank" rel='noreferrer'>
          <div className={`${styles.floatingbutton}`} >
          <i  className={`${styles.whatsapp} bi bi-whatsapp`} ></i> 
          </div>
        </a>
      </div>
    );
  };
  