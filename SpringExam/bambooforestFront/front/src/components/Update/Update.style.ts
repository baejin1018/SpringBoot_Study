import styled from "styled-components";

export const ViewContainer = styled.div`
  height: 130vh;
  overflow-x: hidden;
  position: relative;
  display: flex;
  justify-content: center;
`;
export const PostContainer = styled.div`
  position: absolute;
  z-index: 333;
  bottom: 0;
  width: 50%;
  height: 1200px;
  background-color: #fff;
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 50px;

  p {
    font-size: 18px;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
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

export const WirterInput = styled.input`
  border: none;
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 850px;
  height: 200px;
`;
export const TitleInput = styled.input`
  border: none;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const PostImgContainer = styled.div`
  margin-top: 50px;
  height: 300px;
`;

export const ImgContainer = styled.div`
  position: absolute;
  overflow: hidden;
  height: 300px;
`;
