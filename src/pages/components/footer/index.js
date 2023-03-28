import { Box } from "@mui/system";
import React from "react";
import Copyright from "./Copyright";
import Links from "./Links";
import Payment from "./Payment";
import Socials from "./Socials";
import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Box className={styles.footer__container}>
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
