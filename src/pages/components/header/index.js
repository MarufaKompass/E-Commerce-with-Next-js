import { Box } from "@mui/material";
import React from "react";
import TopBanner from "./TopBanner";
import styles from "./styles.module.scss";
import Top from "./Top";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Cart from "./Cart";
import Categories from "./Categories";
import MenuList from "./MenuList";
import NavNotes from "./NavNotes";
export default function Header() {
  return (
    <Box className={styles.header}>
      <Box className={styles.header__container}>
        <TopBanner></TopBanner>
        <Top></Top>
        <Box className={styles.search_navbar}>
        <Logo></Logo> 
        <SearchBar></SearchBar>
        <Cart></Cart>
        </Box>
        <Box className={styles.navbar}>
          <Categories></Categories>
          <MenuList></MenuList>
          <NavNotes></NavNotes>
        </Box>
      </Box>
    </Box>
  );
}
