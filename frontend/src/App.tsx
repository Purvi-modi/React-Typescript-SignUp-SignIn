import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Register } from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import { Provider } from "react-redux";
import { loginStore } from "./Components/app/store";

function App() {
  return (
    <Provider store={loginStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/dashboard1"
            component={() => <UserDashboard authorized={false} />}
          />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/"
            component={() => <Redirect to={"/register"} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
