import { Button } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import styles from "./styles.module.scss";
export default function NewsLetter() {
  return (
    <Box className={styles.footer__newsletter}>
        <h3>Sign up for Newsletter</h3>
        <Box className={styles.footer__inputField}>
        <input type="text"></input>
        <Button className={styles.btn_primary}>Button</Button>
        </Box>
    </Box>
  )
}
