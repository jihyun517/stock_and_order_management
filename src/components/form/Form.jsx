import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  const emailRules = {
    required: "이메일을 입력해주세요.",
    pattern: {
      value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      message: "올바르지 않은 이메일 형식입니다.",
    },
  };

  const passwordRules = {
    required: "비밀번호를 입력해주세요.",
    minLength: {
      value: 4,
      message: "4자 이상 입력해주세요.",
    },
    maxLength: {
      value: 15,
      message: " 16자 이하로 입력해주세요.",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input type="email" placeholder="E-mail" {...register("email", emailRules)} />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors.email.message}</span>
          </div>
        )}
      </div>

      <div>
        <input type="password" placeholder="Password" {...register("password", passwordRules)} />

        {errors?.password && (
          <div>
            <span className={styles.form_error}>{errors.password.message}</span>
          </div>
        )}
      </div>

      <button type="submit">{title}</button>

      <span className={styles.form_error}></span>
    </form>
  );
};

export default Form;
