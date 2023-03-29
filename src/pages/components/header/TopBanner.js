import { Box } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import styles from "./styles.module.scss";
import topBanner from "../../../../public/images/topbanner.png"
export default function TopBanner() {
  return (
    <Box className={styles.footer__topbanner}>
        <Image src={topBanner} alt=""></Image>
    </Box>
  )
}
