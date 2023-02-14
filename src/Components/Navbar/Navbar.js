import React from "react";
import { FaTwitter } from "react-icons/fa";
import { Avatar } from "@mui/material";
import style from "./Navbar.module.css";
import Drawer from "../Navbar/Navbar"
import Drawers from "../Drawer/Drawer";
function Navbar() {
  return (
    <>
      <div className={style.feed__header}>
        <h2 className={style.home}>Home</h2>
        <div className={style.drawer}><Avatar
                  alt="Remy Sharp"
                  src="https://cdn2.vectorstock.com/i/1000x1000/58/26/creative-hexagonal-technology-logo-design-vector-26885826.jpg"
                  className={style.avatar}
                />
        <FaTwitter className={style.twitty}/>
        </div>
        <div className={style.innercontainer}>
        <h3>For you</h3>
        <h3>Following</h3>
        {/* <Drawers /> */}
      </div>
      </div>
      
     
    </>
  );
}
export default Navbar;

