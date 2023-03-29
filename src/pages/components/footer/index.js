import { Box } from "@mui/system";
import React from "react";
import Contact from "./Contact";
import Copyright from "./Copyright";
import ForSignup from "./ForSignup";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box className={styles.container}>
        <Box className={styles.footer__container}>
          <Box className={styles.footer__newsContact}>
            <NewsLetter></NewsLetter>
            <Contact></Contact>
            <ForSignup></ForSignup>
          </Box>
          <Links></Links>
          <Socials></Socials>
          <Box className={styles.flex}>
            <Copyright></Copyright>
            <Payment></Payment>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
