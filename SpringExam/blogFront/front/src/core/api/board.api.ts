import axios from "axios";
import { customAxios } from "../util/customAxios";

class Board {
  public async getBoards() {
    const result = await customAxios.get("/board/list");
    return result.data;
  }

  public async postBoard(title: string, content: string, frm: any, token: any) {
    customAxios
      .post("/board/write", {
        title: title,
        content: content,
        // writer: writer,
      })
      .then((response) => {
        axios.post(`http://localhost:8080/board/image/${response.data}`, frm, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        });
      });
  }

  public async getViewBoard(id: number) {
    const result = await customAxios.get(`/board/view/${id}`);
    return result.data;
  }

  public async updateBoard(
    id: number,
    title: string,
    content: string,
    writer: string
  ) {
    customAxios.post(`/board/update/${id}`, {
      title: title,
      content: content,
      writer: writer,
    });
  }

  public async deletePost(id: number) {
    await customAxios.post(`/board/delete/${id}`);
  }
}

export default new Board();
