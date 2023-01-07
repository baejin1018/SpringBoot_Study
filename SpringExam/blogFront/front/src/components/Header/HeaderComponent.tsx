import * as H from "./Header.style";
import { Link } from "react-router-dom";
import React from "react";
const HeaderComponent = () => {
  const token = localStorage.getItem("access_token");

  const onClickLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
  };
  return (
    <H.HeaderContainer>
      <h1>JLog</h1>
      <H.NavContainer>
        <Link to="/">
          <H.NavTitle>Home</H.NavTitle>
        </Link>
        <Link to="/write">
          <H.NavTitle>Write</H.NavTitle>
        </Link>
        {token ? (
          <Link to={"/"}>
            <H.NavTitle onClick={onClickLogOut}>
              {localStorage.getItem("username")}님 로그아웃
            </H.NavTitle>
          </Link>
        ) : (
          <Link to={"/login"}>
            <H.NavTitle>로그인</H.NavTitle>
          </Link>
        )}
      </H.NavContainer>
    </H.HeaderContainer>
  );
};

export default HeaderComponent;
