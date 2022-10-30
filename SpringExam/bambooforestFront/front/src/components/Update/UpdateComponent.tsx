import React, { useEffect, useRef, useState } from "react";
import * as U from "./Update.style";
import { useLocation, useNavigate } from "react-router-dom";
import ex from "../../assets/image/background.jpg";
import BoardApi from "../../core/api/Board.api";
const UpdateComponent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState<any>();
  const [title, setTitle] = useState("");
  const [wirter, setWriter] = useState("");

  const textareRef = useRef<any>(null);

  const currentId = Number(pathname.substring(8));
  const getData = async () => {
    const result = await BoardApi.getViewBoard(currentId);
    setData(result);
  };

  const onClickUpdate = async () => {
    const content = textareRef.current.value;
    await BoardApi.updateBoard(currentId, title, content, wirter);
    navigate(`/view/${currentId}`);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeWirter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  return (
    <>
      {data && (
        <U.ViewContainer>
          <U.ImgContainer>
            <img src={ex} />
          </U.ImgContainer>
          <U.PostContainer>
            <U.TitleInput
              type="text"
              onChange={onChangeTitle}
              defaultValue={data.title}
            />
            <div>
              <U.WirterInput
                type="text"
                onChange={onChangeWirter}
                defaultValue={data.writer}
              />
              <span>{data.wdate}</span>
            </div>
            <U.TextArea
              defaultValue={data.content}
              ref={textareRef}
            ></U.TextArea>
            <U.PostImgContainer>
              <img src={ex} />
            </U.PostImgContainer>
            <button onClick={onClickUpdate}>수정</button>
          </U.PostContainer>
        </U.ViewContainer>
      )}
    </>
  );
};

export default UpdateComponent;
