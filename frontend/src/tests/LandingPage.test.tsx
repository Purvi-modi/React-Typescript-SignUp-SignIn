import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";

import { LandingPage } from "../Components/LandingPage";

// it("should render the Notification component if state.error is true", () => {
//   const loginComponent = shallow(<LandingPage />);
//   loginComponent.setState({ showLoginPage: true });
//   expect(loginComponent.find(Notification).length).toBe(1);
// });

beforeEach(() => {
  render(<LandingPage />);
});

it("should show a button ", () => {
  expect(screen.getByRole("button")).toBeInTheDocument();
});
