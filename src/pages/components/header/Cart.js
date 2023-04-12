import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import styles from "./styles.module.scss";
import { AiOutlineUser,AiOutlineHeart } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';

export default function Cart() {
  return (
    <Box className={styles.header__cart}>

      <ul>
        <li>
          <Box>
          <Tooltip title="My Account">
          <IconButton>
          <AiOutlineUser></AiOutlineUser>
          </IconButton>
          </Tooltip>
            
          </Box>
        </li>
        <li>
         <Box>
          <Tooltip title="Wishlist">
          <IconButton>
            <AiOutlineHeart></AiOutlineHeart>
          </IconButton>
          </Tooltip>
          </Box>
        </li>

  <p className={styles.wishlist}>0</p>

        <li>
          <Box>
             <Tooltip title="My cart">
          <IconButton>
          <BsCart3></BsCart3>
          </IconButton>
          </Tooltip>
            
          </Box>
        </li>

  <p className={styles.cart}>0</p>

      </ul>
    </Box>
  )
}
