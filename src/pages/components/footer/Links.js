import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../../public/images/logo.png";
import { Box } from "@mui/material";
const links = [
  {
    heading: "logo",
    links: [
      {
        id: 1,
        name: "You don’t have to spend much money on overhead when you run an e-commerce business compared to a brick-and-mortar store, and it gives you access to a worldwide audience.",
        link: "",
      },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      {
        id: 1,
        name: "About us",
        link: "",
      },
      {
        id: 2,
        name: "How to shop on Molla",
        link: "",
      },
      {
        id: 3,
        name: "FAQ",
        link: "",
      },
      {
        id: 4,
        name: "Contact us",
        link: "",
      },
      {
        id: 5,
        name: "Log in",
        link: "",
      },
    ],
  },
  {
    heading: "Customer Service",
    links: [
      {
        id: 1,
        name: "Payment Methods",
        link: "",
      },
      {
        id: 2,
        name: "Money-back guarantee!",
        link: "",
      },
      {
        id: 3,
        name: "Returns",
        link: "",
      },
      {
        id: 5,
        name: "Shipping",
        link: "",
      },
      {
        id: 6,
        name: "Terms and conditions",
        link: "",
      },
      {
        id: 7,
        name: "Privacy Policy",
        link: "",
      },
    ],
  },
  {
    heading: "My Account",
    links: [
      {
        id: 1,
        name: "Sign In",
        link: "",
      },
      {
        id: 2,
        name: "View Cart",
        link: "",
      },
      {
        id: 3,
        name: "My Wishlist",
        link: "",
      },
      {
        id: 4,
        name: "Track My Order",
        link: "",
      },
      {
        id: 5,
        name: "Help",
        link: "",
      },
    ],
  },
];
export default function Links() {
  return (
    <Box className={styles.footer__links}>
      {links.map((link, i) => (
        <ul>
          {i === 0 ? (
            <Image src={logo} alt="" className="img"></Image>
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((link) => (
            <li>
              <Link href={link.link} key={link.id}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </Box>
  );
}
