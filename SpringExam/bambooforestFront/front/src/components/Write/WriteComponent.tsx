import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardApi from "../../core/api/Board.api";
import * as W from "./Write.style";
const WriteComponent = () => {
  const navigate = useNavigate();

  const [textarea, setTextarea] = useState("");
  const [imgFile, setImgFile] = useState<any>();

  const titleRef = useRef<any>(null);
  const writerRef = useRef<any>(null);

  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    console.log(files);
    if (files) {
      setImgFile(URL.createObjectURL(files[0]));
    }
  };

  const onClickSave = async () => {
    const title = titleRef.current.value;
    const writer = writerRef.current.value;
    await BoardApi.postBoard(title, textarea, writer);
    navigate("/");
  };

  return (
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
            <W.Input type="text" ref={writerRef} />
          </div>
          <button onClick={onClickSave}>저장</button>
        </W.InputContainer>
      </W.WriteBox>
    </W.WriteContainer>
  );
};

export default WriteComponent;
