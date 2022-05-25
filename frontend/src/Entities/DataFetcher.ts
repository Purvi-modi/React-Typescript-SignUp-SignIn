import Axios, { AxiosResponse } from "axios";

export class DataFetcher {
  static async register(email: string, password: string): Promise<[]> {
    const response = await Axios.post("http://localhost:8000/register", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      return response.data;
    }
    return [];
  }

  static async login(email: string, password: string): Promise<string> {
    const response = await Axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      return response.data[0]["email"];
    }
    return "";
  }
}
