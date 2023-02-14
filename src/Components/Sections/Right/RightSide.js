import React from "react";
import style from "./RightSide.module.css";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2";
import Trends from "../../rightContainer/RightContainer1/Trends";
import Search from "../../../Atom/Search/search";

function RightSide() {
  return (
    <div className={style.container}>
      <div>
        <Search />
      </div>
      <div>
        <Trends />
      </div>
      <div>
        <RightContainer2 />
      </div>
      <div className={style.copyright}>
        <h5>
          <a href="https://twitter.com/en/tos">Terms of Service</a> &nbsp;&nbsp;<a href="https://twitter.com/en/privacy">Privacy Policy</a>&nbsp;&nbsp;
          <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
            Cookie Policy{" "}
          </a>
          <a href="https://help.twitter.com/en/resources/accessibility">
            Accessibility{" "}
          </a>&nbsp;&nbsp;
          <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">
            Ads info
          </a>&nbsp;&nbsp; More... &nbsp;&nbsp;<span>© 2023 </span> Twitter,
          Inc.
        </h5>
      </div>
    </div>
  );
}

export default RightSide;
