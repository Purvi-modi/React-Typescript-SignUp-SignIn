import Axios, { AxiosResponse } from "axios";

export class DataFetcher {
  static async register(email: string, password: string): Promise<string> {
    const response = await Axios.post("http://localhost:8000/register", {
      email: email,
      password: password,
    });

    if (typeof response !== "undefined" && response.status === 200) {
      console.log(response.data);
      return response.data;
    }
    return "error";
  }

  static async login(email: string, password: string): Promise<string> {
    const response = await Axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    });

    if (typeof response !== "undefined" && response.status === 200) {
      return response.data;
    }
    return "error";
  }
}
