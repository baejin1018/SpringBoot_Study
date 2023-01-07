import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/image/background.jpg";
import boardApi from "../../core/api/board.api";
import * as H from "./Home.style";
import { AiFillEye } from "react-icons/ai";

const HomeComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await boardApi.getBoards();
    setData(result);
  };

  const onClickPost = (id: number) => {
    navigate(`/view/${id}`);
  };

  return (
    <>
      <H.ImgContinaer>
        <img src={background} />
      </H.ImgContinaer>
      <H.AllPostTitle>All Post</H.AllPostTitle>
      <H.BoardContainer>
        <H.AllPostContainer>
          {data.map((item, i) => (
            <H.PostContainer key={i} onClick={() => onClickPost(item.id)}>
              <H.PostTextContainer>
                <div>
                  <h1>{item.title}</h1>
                  {item.content && item.content.length > 20 ? (
                    <p>{item.content.substring(0, 20)}</p>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
                <div>
                  <hr />
                  <H.PostViewDateContainer>
                    <div>{item.wdate}</div>
                    <div>
                      <AiFillEye />
                      {item.view}
                    </div>
                  </H.PostViewDateContainer>
                </div>
              </H.PostTextContainer>
            </H.PostContainer>
          ))}
        </H.AllPostContainer>
      </H.BoardContainer>
    </>
  );
};

export default HomeComponent;
