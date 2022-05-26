import {
  EmptyConPass,
  EmptyEmail,
  EmptyPass,
  InvalidEmail,
  PassDoNotMatch,
  PassLength,
  ResetErrors,
} from "./Actions";

export interface errorsState {
  errors: string[];
}



const initialState = {
  errors: [],
};

type Action =
  | InvalidEmail
  | EmptyEmail
  | EmptyPass
  | EmptyConPass
  | PassDoNotMatch
  | PassLength
  | ResetErrors;

export const Reducer = (state: errorsState = initialState, action: Action) => {
  switch (action.type) {
    case "RESET_ERRORS": {
      return { ...state, errors: [] };
    }
    case "INVALID_EMAIL": {
      return { ...state, errors: [...state.errors, action.type] };
    }
    case "EMPTY_EMAIL": {
      console.log("empty email case");
      return { ...state, errors: [...state.errors, action.type] };
    }
    case "EMPTY_PASS": {
      return { ...state, errors: [...state.errors, action.type] };
    }
    case "EMPTY_CONFIRM_PASS": {
      return { ...state, errors: [...state.errors, action.type] };
    }

    case "PASS_LENGTH": {
      return { ...state, errors: [...state.errors, action.type] };
    }
    case "PASS_DO_NOT_MATCH": {
      return { ...state, errors: [...state.errors, action.type] };
    }

    default: {
      return state;
    }
  }
};
