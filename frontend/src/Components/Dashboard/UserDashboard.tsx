import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { loggedOut } from "../app/Actions";
import { loginStore } from "../app/store";

const UserDashboard = (props: { authorized: boolean }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(loggedOut());
    history.push("login");
  };

  if (loginStore.getState().loggedIn === true) {
    console.log(loginStore.getState());
    console.log("login action set true");

    return (
      <div>
        hello from dashobard
        <Button
          style={{
            float: "right",
            marginTop: "15px",
            marginRight: "15px",
            // color: "#191970",
            // background: "white",
            textTransform: "none",
            borderColor: "transparent",
            borderRadius: 10,
          }}
          variant="contained"
          size="large"
          onClick={handleLogOut}
        >
          <b>Log Out</b>
        </Button>
      </div>
    );
  } else {
    return <Redirect to="login" />;
  }
};

export default UserDashboard;
