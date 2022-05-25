export interface InvalidEmail {
  type: "INVALID_EMAIL";
}

export interface EmptyEmail {
  type: "EMPTY_EMAIL";
}

export interface EmptyPass {
  type: "EMPTY_PASS";
}

export interface EmptyConPass {
  type: "EMPTY_CONFIRM_PASS";
}

export interface PassDoNotMatch {
  type: "PASS_DO_NOT_MATCH";
}

export interface PassLength {
  type: "PASS_LENGTH";
}

export interface ResetErrors {
  type: "RESET_ERRORS";
}

export const invalidEmail = (): InvalidEmail => ({
  type: "INVALID_EMAIL",
});

export const emptyEmail = (): EmptyEmail => ({
  type: "EMPTY_EMAIL",
});

export const emptyPass = (): EmptyPass => ({
  type: "EMPTY_PASS",
});
export const emptyConPass = (): EmptyConPass => ({
  type: "EMPTY_CONFIRM_PASS",
});

export const passDoNotMatch = (): PassDoNotMatch => ({
  type: "PASS_DO_NOT_MATCH",
});

export const passLength = (): PassLength => ({
  type: "PASS_LENGTH",
});

export const reset_errors = (): ResetErrors => ({
  type: "RESET_ERRORS",
});
