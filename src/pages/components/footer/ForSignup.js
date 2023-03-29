import { Box, Button } from '@mui/material'
import React from 'react'
import styles from "./styles.module.scss";
import { BsArrowRightShort } from 'react-icons/bs';
export default function ForSignup() {
  return (
   <Box className={styles.footer__forSignup}>
       <Box className={styles.signup}>
        <h1>Sign Up & Get 10% Off</h1>
        <p>Rengvo presents the best products</p>
       </Box>
       <Box className={styles.button}>
       <Button type="text">Sign Up <BsArrowRightShort className={styles.icon}></BsArrowRightShort></Button>
       </Box>
   </Box>
  )
}
