import React, { useState } from "react";
import ishop from "../assets/ishoplogo.svg";
import { NavLink } from "react-router-dom";
import Showlist from "../home/Showlist.js";
import "../../responsive.css";
import ResponsiveHeader from "./ResponsiveHeader";
const HeaderSecond = () => {
  const [showListitems, setshowListitems] = useState(false);
  const [showmenu, setShowmenu] = useState(false);
  const showList = () => {
    setshowListitems(true);
  };
  const dontShowList = () => {
    setshowListitems(false);
  };
  const ShowMenu = () => {
    setShowmenu(!showmenu);
  };
  return (
    <>
      <div className="headerSecond">
        <div className="logoIshop">
          <img src={ishop} alt="ishop" />
          <i class="fa-solid fa-bars" onClick={ShowMenu}></i>
        </div>
        <div className={showmenu ? "responsivemenuBar" : "menuBar"}>
          <ResponsiveHeader />
          <NavLink
            activeClassName="active"
            to="/"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            HOME
          </NavLink>
          <NavLink
            to="/store"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            STORE
          </NavLink>
          <NavLink
            to="/iphone"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            IPHONE
          </NavLink>
          <NavLink
            to="/ipad"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            IPAD
          </NavLink>
          <NavLink
            to="/macbook"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            MACBOOK
          </NavLink>
          <NavLink
            to="/accesories"
            className="menuItems"
            onMouseOver={showList}
            onMouseOut={dontShowList}
          >
            ACCESORIES
          </NavLink>
        </div>
        {showListitems ? <Showlist /> : null}
      </div>
    </>
  );
};

export default HeaderSecond;
