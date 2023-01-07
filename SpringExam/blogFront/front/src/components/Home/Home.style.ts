import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* overflow: scroll; */
  /* &:-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 막대 설정*/
  &:-webkit-scrollbar-thumb {
    height: 17%;
    background-color: rgba(255, 255, 255, 1);
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;
  }

  /* 스크롤바 뒷 배경 설정*/
  &:-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
export const ImgContinaer = styled.div`
  margin-bottom: 80px;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;
export const AllPostTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  margin-left: 535px;
  margin-bottom: 20px;
`;
export const AllPostContainer = styled.div`
  width: 50%;
  display: grid;
  place-items: center;
  grid-template-columns: 400px 400px;
  grid-template-columns: repeat(2, 1fr);
`;
export const PostContainer = styled.div`
  padding: 15px;
  width: 400px;
  height: 150px;
  margin: 0 30px 30px 30px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 1s;
  }
`;

export const PostTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  h1 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 5px;
  }
  hr {
    border: 1px solid #e6e6e6;
  }
`;

export const PostViewDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
