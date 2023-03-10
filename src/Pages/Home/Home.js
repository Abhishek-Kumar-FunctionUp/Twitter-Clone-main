import React, { useEffect } from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import style from "./Home.module.css";
import { useRecoilValue } from "recoil";
import RightSide from "../../Components/Sections/Right/RightSide";
import MiddleContainer from "../../Components/Sections/Middle/MiddleContainer";
import { isLoginAtom } from "../../Recoil/Atom";
import { useNavigate } from "react-router-dom";
import MobileIcons from "../../Atom/MobileIcons/MobileIcons";
import Drawer from "../../Components/Drawer/Drawer";
import FloatingActionButtons from "../../Atom/FloatingButton/FloatingButton";

function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/");
    }
  });

  return (
    <>
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
        <MiddleContainer />
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
      <div className={style.floatingBtn}>
     <FloatingActionButtons />
     </div>
    </div>
    <div className={style.mobileIcons}>
        <MobileIcons />
      </div>
      </>
  );
}

export default Home;
