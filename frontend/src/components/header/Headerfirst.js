import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import manager from "../assets/manager.png";
import bagIcons from "../assets/bag_icon.svg";
import Badge from "@material-ui/core/Badge";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import "../../responsive.css";
const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 8,
    minWidth: 5,
    height: 12,
    paddingInline: 3,
  },
}));
const Headerfirst = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  const [open, setopen] = useState(false);
  const openDialog = () => {
    setopen(!open);
  };
  const classes = useStyles();
  return (
    <>
      <div className="headerfirst">
        <div className="headerFirstLeft">
          <div className="headerFirstLeft1">
            <select name="language" id="language">
              <option value="1">EN</option>
              <option value="2">HN</option>
            </select>
          </div>
          <div className="headerFirstLeft2">
            <select name="payment" id="payment">
              <option value="1">$</option>
              <option value="2">IN R</option>
            </select>
          </div>
        </div>

        <div className="headerFirstRight">
          <div className="headerFirstRight1">
            <NavLink className="LoginButton" to="/login">
              Login
            </NavLink>
            <img
              src={manager}
              alt="profileImage"
              className="profileImage"
              onClick={openDialog}
              style={{ cursor: "pointer" }}
            />
            <p
              className="profileName"
              onClick={openDialog}
              style={{ cursor: "pointer" }}
            >
              My profile
            </p>
          </div>
          <div className="headerFirstRight2">
            <NavLink to="/cart">
              <Badge
                badgeContent={getData.length}
                className="badge"
                color="secondary"
                classes={{ badge: classes.badge }}
              >
                <img src={bagIcons} alt="bag" className="bagImage" />
              </Badge>
            </NavLink>
            <span className="itemQty"> 2 items</span>
            <span className="priceItems">$998</span>
          </div>
          <div className="headerFirstRight3">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <Profile openDialog={open} setopen={setopen} />
    </>
  );
};

export default Headerfirst;
