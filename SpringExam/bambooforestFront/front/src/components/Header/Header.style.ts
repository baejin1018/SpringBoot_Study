import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #fff;
  padding: 0 100px 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const NavContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
`;

export const NavTitle = styled.h3`
  text-decoration: underline solid white;
  font-size: 1.5rem;
`;
