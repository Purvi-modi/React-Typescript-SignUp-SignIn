import Axios, { AxiosResponse } from "axios";

export class DataFetcher {
  static async register(email: string, password: string): Promise<[]> {
    const response = await Axios.post("http://localhost:8000/register", {
      email: email,
      password: password,
    });

    if (typeof response !== "undefined" && response.status === 200) {
      return response.data;
    }
    return [];
  }

  static async login(email: string, password: string): Promise<string> {
    const response = await Axios.post("http://127.0.0.1:8000/login", {
      email: email,
      password: password,
    });
    if (typeof response !== "undefined" && response.status === 200) {
      return response.data[0]["email"];
    }
    return "";
  }
}
