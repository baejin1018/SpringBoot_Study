import styled from "styled-components";

export const WriteContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 25px;
  }
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 870px;
  height: 680px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
  }
`;

export const InputContainer = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
  }
  button {
    border: none;
    margin-top: 5px;
    width: 100px;
    height: 50px;
    &:hover {
      background-color: #e5e5e5;
    }
  }
`;
export const TextAreaContainer = styled.div`
  margin-top: 20px;
`;
export const TextArea = styled.textarea`
  width: 800px;
  height: 370px;
  resize: none;
`;
export const Input = styled.input`
  width: 400px;
  height: 40px;
`;

export const GoLogin = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 30px;
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
