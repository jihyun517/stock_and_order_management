import React from "react";
import SignUp from "../RegisterPage/sign-up/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="page">
      <div className="form_container">
        <h2> 회원가입 </h2>
        <SignUp />
        <p>
          이미 계정이 있습니까? <Link to={"/login"}>로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
