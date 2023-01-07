import styled from "styled-components";

export const LoginContaienr = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 40px;
  }
  a {
    text-decoration: none;
  }
  button {
    width: 326px;
    height: 42px;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }
`;

export const Input = styled.input`
  width: 326px;
  height: 42px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;
