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
      <div>&copy; 2024 All Rights Reserved Manish Patidar</div>
      <div>
        <Link
          target="_blank"
          to={"https://www.instagram.com/_.manish.patidar._/"}
        >
          <FaSquareInstagram />
        </Link>
        <Link target="_blank" to={"https://github.com/ManishMay20"}>
          <FaSquareGithub />
        </Link>
        <Link target="_blank" to={"https://www.linkedin.com/in/manish-may20/"}>
          <FaLinkedinIn />
        </Link>
        <Link target="_blank" to={"https://twitter.com/manish_may20"}>
          <FaSquareXTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
