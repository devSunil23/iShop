import React, { useEffect } from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router-dom";
const Profile = ({ openDialog, setopen }) => {
  const navigate = useNavigate();
  const callProfilePage = async () => {
    try {
      const url = "http://localhost:3002";
      const res = await axios.get(`${url}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credential: "include",
      });
      console.log(res);
      if (!res.status === 200) {
        const error = new Error(res.error);
        navigate("/login");
        throw error;
      }
    } catch (error) {}
  };
  useEffect(() => {
    callProfilePage();
  }, []);

  const handleClose = () => {
    setopen(false);
  };
  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogContent className="dialogContent">
          <div className="name commonNameStyling">
            <span className="commonTitle">Name:</span>{" "}
            <span>Sunil kumar Bais</span>
          </div>
          <div className="mobile commonNameStyling">
            <span className="commonTitle">Mobile:</span>
            <span>9399030661</span>
          </div>
          <div className="email commonNameStyling">
            <span className="commonTitle">Email:</span>{" "}
            <span>sunilkumarbais25@gmail.com</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Profile;
