import React from "react"
import { FaHouseUser, FaHashtag} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { VscBellDot } from "react-icons/vsc";
import style from "./MobileIcons.module.css"
import {Link} from "react-router-dom"

export default function MobileIcons(){

    return(
       <div className={style.icons}>
       <div>
       <Link to="/Home">
         <FaHouseUser className={style.icon1} style={{color:"white"}}/>
         </Link>
         </div>
         <div>
         <FaHashtag className={style.icon2}/>
         </div>
         <div>
         <VscBellDot className={style.icon3}/>
         </div>
         <div>
         <HiOutlineMail className={style.icon4}/>
         </div>
       </div>

    )
}