import { Box } from "@mui/system";
import React from "react";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box className={styles.footer__container}>
        <Box className={styles.newsContact}>
          <NewsLetter></NewsLetter>
          <Contact></Contact>
        </Box>
        <Links></Links>
        <Socials></Socials>
        <Box className={styles.flex}>
          <Copyright></Copyright>
          <Payment></Payment>
        </Box>
      </Box>
    </Box>
  );
}
