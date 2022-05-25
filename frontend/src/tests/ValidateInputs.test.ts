// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import {
  EMPTY_CON_PASS,
  EMPTY_EMAIL,
  EMPTY_PASS,
  INVALID_EMAIL,
  PASS_DO_NOT_MATCH,
  PASS_LENGTH,
  VALID_CON_PASS,
  VALID_EMAIL,
  VALID_PASS,
} from "../Components/Auth/app/ActionsTypes";
import ValidateInputs, {
  ValidateConfirmPassword,
  ValidateEmail,
  ValidatePassword,
} from "../Components/Auth/entities/ValidateInputs";

test("test validate email - valid email", () => {
  expect(ValidateEmail("abc@xyz.com")).toBe(VALID_EMAIL);
});

test("test validate email - invalid email", () => {
  expect(ValidateEmail("abc@xyz")).toBe(INVALID_EMAIL);
});

test("test validate email - invalid email", () => {
  expect(ValidateEmail("abcxyz")).toBe(INVALID_EMAIL);
});

test("test validate email - empty email", () => {
  expect(ValidateEmail("")).toBe(EMPTY_EMAIL);
});

// test("test validate inputs - correct inputs", () => {
//   let email = "abc@xyz.com";
//   let pass = "1223123";
//   let conPass = "1223123";

//   expect(ValidateInputs(email, pass, conPass)).toBe(false);
// });

// test("test validate inputs - wrong inputs", () => {
//   expect(ValidateInputs("", "", "")).toBe(false);
// });

test("test validate password - empty passord", () => {
  expect(ValidatePassword("")).toBe(EMPTY_PASS);
});

test("test validate password - small length of passord", () => {
  expect(ValidatePassword("1234")).toBe(PASS_LENGTH);
});

test("test validate password - valid passord", () => {
  expect(ValidatePassword("12345")).toBe(VALID_PASS);
});

test("test validate confirm password - empty con passord", () => {
  expect(ValidateConfirmPassword("", "")).toBe(EMPTY_CON_PASS);
});

test("test validate password - confirm pass does not match", () => {
  expect(ValidateConfirmPassword("12425", "12345")).toBe(PASS_DO_NOT_MATCH);
});

test("test validate password - valid confirm pass", () => {
  expect(ValidateConfirmPassword("12345", "12345")).toBe(VALID_CON_PASS);
});


