import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import {
  emptyConPass,
  emptyEmail,
  emptyPass,
  invalidEmail,
  passDoNotMatch,
  passLength,
} from "../app/Actions";
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
} from "../app/ActionsTypes";

export const ValidateEmail = (mail: string) => {
  if (mail.length === 0) return EMPTY_EMAIL;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return VALID_EMAIL;
  }

  return INVALID_EMAIL;
};

export const ValidatePassword = (pass: string) => {
  if (pass.length === 0) {
    return EMPTY_PASS;
  } else if (pass.length < 5) {
    return PASS_LENGTH;
  }

  return VALID_PASS;
};

export const ValidateConfirmPassword = (pass: string, conpass: string) => {
  if (conpass.length === 0) {
    return EMPTY_CON_PASS;
  } else if (pass !== conpass) {
    return PASS_DO_NOT_MATCH;
  }

  return VALID_CON_PASS;
};

function ValidateInputs(
  mail: string,
  password: string,
  confirmPassword: string,
  dispatch: Dispatch<any>
) {
  const validateEmail = ValidateEmail(mail);
  const validatePassword = ValidatePassword(password);
  const validateConfirmPassword = ValidateConfirmPassword(
    password,
    confirmPassword
  );

  if (
    validateEmail === VALID_EMAIL &&
    validatePassword === VALID_PASS &&
    validateConfirmPassword === VALID_CON_PASS
  ) {
    return true;
  } else {
    if (validateEmail === EMPTY_EMAIL) {
      dispatch(emptyEmail());
    } else if (validateEmail === INVALID_EMAIL) {
      dispatch(invalidEmail());
    }

    if (validatePassword === EMPTY_PASS) {
      dispatch(emptyPass());
    }
    if (validatePassword === PASS_LENGTH) {
      dispatch(passLength());
    }
    if (validateConfirmPassword === EMPTY_CON_PASS) {
      dispatch(emptyConPass());
    }
    if (validateConfirmPassword === PASS_DO_NOT_MATCH) {
      dispatch(passDoNotMatch());
    }

    return false;
  }
}

export default ValidateInputs;
