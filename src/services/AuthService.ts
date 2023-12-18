// AuthService.ts
import axios from "axios";

export async function login(username: string, password: string): Promise<void> {
  try {
    const response = await axios.post("/api/login", {
      username: username,
      password: password,
    });
    console.log(response.data); // 处理登录成功后的响应数据
    // 在这里可以将返回的 token 存储在 localStorage 中等操作
  } catch (error) {
    console.error(error); // 处理登录失败的情况
  }
}
