import React, { useState } from "react";
import auth from "../../core/api/auth";
import * as R from "./Register.style";

const RegisterComponent = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const onClickRegister = () => {
    auth.postRegister(id, password, name);
  };

  return (
    <R.Container>
      <h1>회원가입</h1>
      <h1>ID</h1>
      <R.Input type="text" onChange={(e: any) => setId(e.target.value)} />
      <h1>비밀번호</h1>
      <R.Input
        type="password"
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <h1>비밀번호 확인</h1>
      <R.Input
        type="password"
        onChange={(e: any) => setPasswordCheck(e.target.value)}
      />
      <h1>이름</h1>
      <R.Input type="text" onChange={(e: any) => setName(e.target.value)} />
      <button onClick={onClickRegister}>회원가입</button>
    </R.Container>
  );
};

export default RegisterComponent;
