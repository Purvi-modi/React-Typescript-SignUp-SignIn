import { LoggedIn, LoggedOut } from "./Actions";

export interface loggedInState {
  loggedIn: boolean;
}

const initialState = {
  loggedIn: false,
};

type Action = LoggedIn | LoggedOut;

export const Reducer = (
  state: loggedInState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "LOGGED_IN": {
      console.log("case LOGGED_IN");
      return { ...state, loggedIn: true };
    }

    case "LOGGED_OUT": {
      console.log("case logged out");
      return { ...state, loggedIn: false };
    }

    default: {
      return state;
    }
  }
};
