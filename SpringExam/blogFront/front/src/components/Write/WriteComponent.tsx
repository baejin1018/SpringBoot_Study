import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import boardApi from "../../core/api/board.api";
import { customAxios } from "../../core/util/customAxios";
import * as W from "./Write.style";
const WriteComponent = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");

  const [textarea, setTextarea] = useState("");
  const [imgFile, setImgFile] = useState<any>(null);

  const [img, setImg] = useState<any>();

  const titleRef = useRef<any>(null);
  // const writerRef = useRef<any>(null);

  const write = localStorage.getItem("username");
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };
  // React.ChangeEvent<HTMLInputElement>
  const onChangeImage = (e: any) => {
    // const target = e.target as HTMLInputElement;
    // const files = target.files;
    const file = e.target.files[0];
    setImg(file);
    console.log(file);
    // if (file) {
    //   setImgFile(URL.createObjectURL(file[0]));
    // }
  };

  useEffect(() => {
    console.log(img);
  }, [img]);

  const onClickSave = async () => {
    const title = titleRef.current.value;
    // const writer = writerRef.current.value;
    let form = null;
    if (img) {
      form = new FormData();
      form.append("preview", img);
    }

    await boardApi.postBoard(title, textarea, form, token);
    navigate("/");
  };

  return (
    <>
      {token ? (
        <W.WriteContainer>
          <h1>Write</h1>
          <W.WriteBox>
            <W.InputContainer>
              <div>
                <h2>제목</h2>
                <W.Input type="text" maxLength={100} ref={titleRef} />
              </div>
              <div>
                <h2>썸네일</h2>
                <input type="file" onChange={onChangeImage} />
                <img src={imgFile} />
              </div>
            </W.InputContainer>
            <W.TextAreaContainer>
              <h2>내용</h2>
              <W.TextArea onChange={onChangeTextArea} maxLength={1000} />
              <p>{textarea.length}/1000</p>
            </W.TextAreaContainer>
            <W.InputContainer>
              <div>
                <h2>글쓴이</h2>
                {write}
                {/* <W.Input type="text" ref={writerRef} /> */}
              </div>
              <button onClick={onClickSave}>저장</button>
            </W.InputContainer>
          </W.WriteBox>
        </W.WriteContainer>
      ) : (
        <W.GoLogin>
          <h1>로그인 후 이용가능한 기능입니다</h1>
          <Link to={"/login"}>로그인 하러가기</Link>
        </W.GoLogin>
      )}
    </>
  );
};

export default WriteComponent;
