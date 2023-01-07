import { customAxios } from "../util/customAxios";

class auth {
  public async postRegister(id: string, password: string, name: string) {
    try {
      await customAxios.post("/user/register", {
        id,
        password,
        name,
      });
      location.href = "/login";
    } catch (e) {
      console.log(e);
    }
  }
  public async postLogin(id: string, password: string) {
    try {
      console.log(id, password);

      const result = await customAxios.post("/user/login", {
        id,
        pw: password,
      });
      console.log(result);
      localStorage.setItem("username", result.data.name);
      localStorage.setItem("access_token", result.data.token);
      location.href = "/";
    } catch (e) {
      alert("아이디나 비밀번호가 틀렸습니다");

      console.log(e);
    }
  }
}
export default new auth();
