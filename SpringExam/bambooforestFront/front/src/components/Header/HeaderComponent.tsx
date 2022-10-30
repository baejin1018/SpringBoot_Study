import * as H from "./Header.style";
import { Link } from "react-router-dom";
import React from "react";
const HeaderComponent = () => {
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
      </H.NavContainer>
    </H.HeaderContainer>
  );
};

export default HeaderComponent;
