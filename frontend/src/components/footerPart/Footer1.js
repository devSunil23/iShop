import React from "react";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
export const Footer1 = () => {
  return (
    <>
      <div className="footer1">
        <div className="footer1Left footer1Common">
          <h2 className="footerIshopHeader">iSHOP</h2>
          <p className="footerIshopPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="footer1Mid footer1Common">
          <h3 className="footerMidHead">Follow Us</h3>
          <p className="footerMidPara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
          <div className="socialIcontf">
            <img src={facebook} alt="facebook" className="facebook" />
            <img src={twitter} alt="twitter" className="twitter" />
          </div>
        </div>
        <div className="footer1Right footer1Common">
          <h3 className="contactus">Contact Us</h3>
          <p className="contactpara">
            iShop: address @building 124 Call us now: 0123-456-789 Email:
            support@whatever.com
          </p>
        </div>
      </div>
    </>
  );
};
