import React from "react";
import style from "./ProfileSection.module.css";
import UserTweet from "./UserTweet/UserTweet";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { forLocalStorageIndex} from "../../../Recoil/Atom"
import { useRecoilValue } from "recoil";
import { VscCalendar } from "react-icons/vsc";


function ProfileSection() {
   const nevigate = useNavigate();
   const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  let Data = JSON.parse(localStorage.getItem("user"));
  console.log(Data)

  return (
    <>
    <div className={style.wrapper} key={Data.id}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/Home") }><WestIcon /></p>
        <h2 className={style.userName}>{Data[getLocalStorageIndex].Name}</h2>
      </div>
        <img className={style.container} alt="img" src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701427125.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            alt="img"
            src="https://cdn2.vectorstock.com/i/1000x1000/58/26/creative-hexagonal-technology-logo-design-vector-26885826.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>
      

<div  className={style.textcontaint}>

        <h2 className={style.nameData}>{`${Data[getLocalStorageIndex].Name}`}</h2>
        <h4 style={{color:'silver'}}>{`${Data[getLocalStorageIndex].Email}`}</h4>
        <h5 style={{marginTop:'1rem',fontSize:'1.2rem'}}></h5>
        <p style={{color:'silver',marginTop:'1rem',fontSize:'0.8rem',paddingBottom:'0.5rem'}}><VscCalendar/> {`${Data[getLocalStorageIndex].Date} ${Data[getLocalStorageIndex].Month} ${Data[getLocalStorageIndex].Year}`}</p>
      <div  className={style.followerscont}> 1000<span  className={style.followers}> Followers</span> 10 <span className={style.followers}>Following</span></div> 
      </div>
    
    </div>
    <UserTweet />
   
    </>
  );
}

export default ProfileSection;
