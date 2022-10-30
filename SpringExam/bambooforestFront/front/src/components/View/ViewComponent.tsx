import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardApi from "../../core/api/Board.api";
import * as V from "./View.style";
import ex from "../../assets/image/background.jpg";
import { AiFillEye } from "react-icons/ai";
interface dataType {
  content: string;
  id: number;
  title: string;
  wdate: string;
  writer: string;
  view: number;
}
const ViewComponent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState<dataType>();

  const currentId = Number(pathname.substring(6));
  const getData = async () => {
    const result = await BoardApi.getViewBoard(currentId);
    setData(result);
  };

  const onClickModify = () => {
    navigate(`/update/${currentId}`);
  };

  const onClickDelete = async () => {
    await BoardApi.deletePost(currentId);
    navigate("/");
  };
  return (
    <>
      {data && (
        <V.ViewContainer>
          <V.ImgContainer>
            <img src={ex} />
          </V.ImgContainer>
          <V.PostContainer>
            <V.TitleViewContainer>
              <div>
                <h1>{data.title}</h1>
              </div>
              <div>
                <AiFillEye />
                <span>{data.view}</span>
              </div>
            </V.TitleViewContainer>
            <div>
              <span>{data.writer}</span>
              <span>{data.wdate}</span>
            </div>
            <p>{data.content}</p>
            <V.PostImgContainer>
              <img src={ex} />
            </V.PostImgContainer>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              글 목록
            </button>
            <button onClick={onClickModify}>수정</button>
            <button className="deleteBtn" onClick={onClickDelete}>
              삭제
            </button>
          </V.PostContainer>
        </V.ViewContainer>
      )}
    </>
  );
};

export default ViewComponent;
