import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../core/api/auth";
import * as L from "./Login.style";
const LoginComponent = () => {
  const [id, setId] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const onClickLogin = () => {
    auth.postLogin(id, passwordState);
  };
  return (
    <L.LoginContaienr>
      <h1>Login</h1>
      <h2>Id</h2>
      <L.Input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <h2>비밀번호</h2>
      <L.Input
        type="password"
        onChange={(e) => {
          setPasswordState(e.target.value);
        }}
      />
      <button onClick={onClickLogin}>로그인</button>
      <Link to={"/register"}>회원가입</Link>
    </L.LoginContaienr>
  );
};

export default LoginComponent;
