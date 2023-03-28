import { Box } from '@mui/system'
import React from 'react'
import styles from "./styles.module.scss";
import { ImHeadphones } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
export default function Contact() {
  return (
    <Box className={styles.footer__contact}>
      <Box className={styles.contactInfo}>
        <Box className={styles.icon}>
          <ImHeadphones></ImHeadphones>
        </Box>
        <Box className={styles.callInfo}>
            <h5>Call On Order ? Call us 24/7</h5>
            <h5>+8801546870321</h5>
        </Box>
      </Box>
      <Box className={styles.info}>
      <Box className={styles.orderInfo}>
        <p className={styles.infoIcon}><MdLocationOn></MdLocationOn> </p>
        <span>No. 1259 Freedom, Liberty, St , New York, 11111</span>
      
      </Box>
      <Box className={styles.orderInfo}>
      <p className={styles.infoIcon}><AiOutlineMail></AiOutlineMail> </p>
      <span>sales@yourcompany.com</span>
      </Box>
      </Box>
      
    </Box>
  )
}
