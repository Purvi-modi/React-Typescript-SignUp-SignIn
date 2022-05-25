import axios from "axios";
import { DataFetcher } from "../Entities/DataFetcher";
jest.mock("axios");

test("login", async () => {
  const mockedAxios = axios as jest.Mocked<any>;
  let data = "abc@xyz.co";
  const mockedPost = mockedAxios.post.mockReturnValueOnce(data);
  const result = await DataFetcher.login("asdq", "Adasd");
  expect(axios.post).toHaveBeenCalled();
});

test("register", async () => {
  const mockedAxios = axios as jest.Mocked<any>;
  let data = "abc@xyz.co";
  const mockedPost = mockedAxios.post.mockReturnValueOnce(data);
  const result = await DataFetcher.register("asdq", "Adasd");
  expect(axios.post).toHaveBeenCalled();
});
