import React,{useEffect} from 'react'
import MenuItems from "../../Components/Sections/Left/MenuItems"
import ProfileSection from '../../Components/Sections/ProfileSection/ProfileSection'
import RightSide from '../../Components/Sections/Right/RightSide'
import style from "./Profile.module.css"
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom";
import { useNavigate } from "react-router-dom";
import MobileIcons from '../../Atom/MobileIcons/MobileIcons'
function Profile() {

    const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const nevigate = useNavigate();

    


    useEffect(() => {
      if (!isUserLoggedIn) {
        nevigate("/");
      }
    });

  return (
    <div>
          <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
      <ProfileSection />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
 <MobileIcons />
    </div>
    </div>

  )
}

export default Profile
