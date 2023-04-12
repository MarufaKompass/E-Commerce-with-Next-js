import React from 'react'
import styles from "./styles.module.scss";
import { CiSearch } from 'react-icons/ci';
import { Box, FormControl,OutlinedInput, Button } from '@mui/material';
export default function SearchBar() {
  return (
    <Box className={styles.header__inputField}>
        <FormControl fullWidth>
          <OutlinedInput
          className={styles.searchbar}
            id="input"
            placeholder="Search...."
          />
        </FormControl>
        <Box className={styles.searchIcon}>
        <CiSearch></CiSearch>
        </Box>
        <Box className={styles.button}>
        <Button className={styles.btn_primary}>Search</Button>
        </Box>
    </Box>
  )
}
