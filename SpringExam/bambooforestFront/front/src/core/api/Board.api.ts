import { customAxios } from "../util/customAxios";

class Board {
  public async getBoards() {
    const result = await customAxios.get("/list");
    return result.data;
  }

  public async postBoard(title: string, content: string, writer: string) {
    customAxios.post("/write", {
      title: title,
      content: content,
      writer: writer,
    });
  }

  public async getViewBoard(id: number) {
    const result = await customAxios.get(`/view/${id}`);
    return result.data;
  }

  public async updateBoard(
    id: number,
    title: string,
    content: string,
    writer: string
  ) {
    customAxios.post(`/update/${id}`, {
      title: title,
      content: content,
      writer: writer,
    });
  }

  public async deletePost(id: number) {
    await customAxios.post(`/delete/${id}`);
  }
}

export default new Board();
