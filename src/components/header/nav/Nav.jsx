import React from "react";
import { FaCartArrowDown, FaCheckToSlot } from "react-icons/fa6";
import { FaShippingFast, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.nav_icon}>
            <Link to={"/order-request"}>
              <FaCartArrowDown title="주문 요청" />
            </Link>
          </div>
        </li>

        <li>
          <div className={styles.nav_icon}>
            <Link to={"/order-completed"}>
              <FaShippingFast title="주문 완료" />
            </Link>
          </div>
        </li>

        <li>
          <div className={styles.nav_icon}>
            <Link to={"/delivery-completed"}>
              <FaCheckToSlot title="배송 완료" />
            </Link>
          </div>
        </li>

        <li>
          <FaSignOutAlt className={styles.nav_sign_out} title="로그아웃" />
          <Link to={"/login"}>
            <FaSignInAlt title="로그인" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
