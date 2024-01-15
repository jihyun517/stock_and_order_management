import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <h2>제고 체크 및 발주 관리 서비스</h2>
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
