import styled from "styled-components";

export const ViewContainer = styled.div`
  height: 120vh;
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
  height: 1000px;
  background-color: #fff;
  box-shadow: 4px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 50px;
  h1 {
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 30px;
  }
  p {
    margin-top: 50px;
    width: 830px;
    word-wrap: break-word;
    height: auto;
    font-size: 18px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  .deleteBtn {
    margin-left: 500px;
  }
  button {
    border: none;
    margin-top: 50px;
    margin-right: 10px;
    width: 100px;
    height: 50px;
    &:hover {
      background-color: #e5e5e5;
    }
  }
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

export const TitleViewContainer = styled.div`
  p {
    width: 20px;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
