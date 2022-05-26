import axios from "axios";
import ValidateInputs from "../Components/Auth/entities/ValidateInputs";
import { DUPLICATE_ENTRY, SUCCESSFULLY_REGISTERED } from "../constants";
import { DataFetcher } from "../Entities/DataFetcher";
// jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

test("login", async () => {
  let email = "abc@xyz.co";
  let pass = "12345";

  // mockedAxios.post.mockRejectedValue("Network error: Something went wrong");
  // mockedAxios.post.mockResolvedValue(email);

  const response = await axios.post("http://localhost:8000/login", {
    email: email,
    password: pass,
  });

  expect(response.data).toEqual(email);
});

describe("test register function", () => {
  test("register", async () => {
    let email = "abc@xyz.co";
    let pass = "12345";

    // mockedAxios.post.mockRejectedValue("Network error: Something went wrong");
    // mockedAxios.post.mockResolvedValue(email);

    const response = await axios.post("http://localhost:8000/register", {
      email: email,
      password: pass,
    });

    if (response.data !== DUPLICATE_ENTRY) {
      expect(response.data).toEqual(SUCCESSFULLY_REGISTERED);
    } else {
      expect(response.data).toEqual(DUPLICATE_ENTRY);
    }
  }, 60000);
});
