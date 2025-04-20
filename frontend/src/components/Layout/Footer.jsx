import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; 2024 All Rights Reserved Harsh Palotra</div>
      <div>
        <Link
          target="_blank"
          to={"https://www.instagram.com/harsh_palotra/"}
        >
          <FaSquareInstagram />
        </Link>
        <Link target="_blank" to={"https://github.com/harshpalotra"}>
          <FaSquareGithub />
        </Link>
        <Link target="_blank" to={"https://www.linkedin.com/in/harsh-palotra-619251229/"}>
          <FaLinkedinIn />
        </Link>
        <Link target="_blank" to={"https://x.com/harsh_palotra"}>
          <FaSquareXTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
