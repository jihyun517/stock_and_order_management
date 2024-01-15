import React from "react";
import styles from "./Footer.module.scss";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <a href="https://github.com">
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
