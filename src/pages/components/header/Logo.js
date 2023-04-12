import { Box } from '@mui/material'
import React from 'react'
import logo from '../../../../public/images/logo.png'
import Image from 'next/image'
import styles from "./styles.module.scss";
export default function Logo() {
  return (
    <Box className={styles.header__logo}>
     <Image src={logo} alt="" />
    </Box>
  )
}
