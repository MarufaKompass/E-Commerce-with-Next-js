import React from "react";
import { FaFacebookF, FaSnapchatGhost } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import styles from "./styles.module.scss";
import { Box } from "@mui/material";
export default function Socials() {
  return (
    <Box className={styles.footer__socials}>
      <section>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="">
              <FaFacebookF></FaFacebookF>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <AiFillYoutube></AiFillYoutube>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <BsPinterest></BsPinterest>
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="">
              <FaSnapchatGhost></FaSnapchatGhost>
            </a>
          </li>
         
        </ul>
      </section>
    </Box>
  );
}
