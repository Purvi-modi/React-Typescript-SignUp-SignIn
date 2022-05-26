export interface LoggedIn {
  type: "LOGGED_IN";
}

export interface LoggedOut {
  type: "LOGGED_OUT";
}

export const loggedIn = (): LoggedIn => ({
  type: "LOGGED_IN",
});

export const loggedOut = (): LoggedOut => ({
  type: "LOGGED_OUT",
});
