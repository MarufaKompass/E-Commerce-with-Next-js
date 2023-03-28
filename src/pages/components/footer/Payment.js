import { Box } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import card from "../../../../public/images/payment/cards.png";

import Image from "next/image";
export default function Payment() {
  return (
    <Box className={styles.footer__payment}>
      <Image src={card} alt=""></Image>

    </Box>
  );
}
