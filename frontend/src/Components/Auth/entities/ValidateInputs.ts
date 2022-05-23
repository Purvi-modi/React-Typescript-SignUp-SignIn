import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emptyConPass,
  emptyEmail,
  emptyPass,
  invalidEmail,
  passDoNotMatch,
  passLength,
} from "../app/Actions";

export const ValidateEmail = (mail: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
};

function ValidateInputs(
  mail: string,
  password: string,
  confirmPassword: string,
  dispatch: Dispatch<any>
  // errors: string[]
) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) &&
    password.length > 4
  ) {
    return true;
  } else {
    if (!ValidateEmail(mail)) {
      dispatch(invalidEmail());
    }
    if (mail.length === 0) {
      dispatch(emptyEmail());
    }
    if (password.length === 0) {
      dispatch(emptyPass());
    }
    if (password.length > 0 && password.length < 5) {
      dispatch(passLength());
    }
    if (confirmPassword.length === 0) {
      dispatch(emptyConPass());
    }
    if (confirmPassword !== password) {
      dispatch(passDoNotMatch());
    }

    return false;
  }
}

export default ValidateInputs;
