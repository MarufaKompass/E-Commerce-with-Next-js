import { Box } from "@mui/material";
import React from "react";
import TopBanner from "./TopBanner";
import styles from "./styles.module.scss";
import Top from "./Top";
export default function Header() {
  return (
    <Box className={styles.header}>
      <Box className={styles.header__container}>
        <TopBanner></TopBanner>
        <Top></Top>
      </Box>
    </Box>
  );
}
