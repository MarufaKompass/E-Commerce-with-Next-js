import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { TiFlashOutline } from "react-icons/ti";
import styles from "./styles.module.scss";
export default function Top() {
  return (
    <Box className={styles.header__top}>
      <Box className={styles.container}>
        <section className={styles.topleft}>
          <ul>
            <li>Language : English</li>
            <li>Currency : BDT</li>
            <li>
              <Link href="http://">
                <MdOutlineSpatialTracking></MdOutlineSpatialTracking> Track Your
                Order
              </Link>
            </li>
          </ul>
        </section>
        <section className={styles.topright}>
          <ul>
            <li>
              <TiFlashOutline></TiFlashOutline> Flash Sale
            </li>
            <li>About Us</li>
            <li>
              <Link href="http://">FAQs</Link>
            </li>
          </ul>
        </section>
      </Box>
    </Box>
  );
}
