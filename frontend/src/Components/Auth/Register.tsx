import { useDispatch } from "react-redux";
import { store } from "./app/store";
import { Card, Button, Grid, Typography, TextField, Box } from "@mui/material";
import { useState } from "react";
import { DataFetcher } from "../../Entities/DataFetcher";
import background from "../../assets/BlueClock.jpg";
import useWindowDimensions from "../../Hooks/WindowsDimensions";
import { reset_errors } from "./app/Actions";
import ValidateInputs from "./entities/ValidateInputs";
import { DUPLICATE_ENTRY, SUCCESSFULLY_REGISTERED } from "../../constants";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const { width, height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors]: any = useState([]);
  const history = useHistory();

  const dispatch = useDispatch();

  const LoadLoginPage = () => {
    history.push("login");
  };

  const register_user = () => {
    dispatch(reset_errors());

    if (ValidateInputs(email, password, confirmPassword, dispatch)) {
      DataFetcher.register(email, password).then((response) => {
        if (response === DUPLICATE_ENTRY) {
          alert("User already exists. Try logging in!");
        } else if (response === SUCCESSFULLY_REGISTERED) {
          alert("User Successfully Registered!");
        }
      });
    } else {
      setErrors(store.getState().errors);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: height,
        width: width,
        backgroundPosition: "center",
        backgroundRepeat: "norepeat",
        backgroundSize: "cover",
        margin: "-10px",
        padding: "0px",
      }}
    >
      <Button
        style={{
          float: "right",
          marginTop: "15px",
          marginRight: "15px",
          color: "#191970",
          background: "white",
          textTransform: "none",
          borderColor: "transparent",
          borderRadius: 10,
        }}
        variant="outlined"
        size="large"
        onClick={LoadLoginPage}
      >
        <b>Already a User?</b>
      </Button>
      <Box
        sx={{
          justifyContent: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            left: "50%",
            color: "white",
            marginBottom: "20px",
          }}
          fontSize={40}
        >
          <b>Create Account</b>
        </Typography>

        <Card
          sx={{
            height: "430px",
            width: "400px",
            borderRadius: "6%",
          }}
        >
          <Grid
            container
            sx={{
              marginLeft: "30px",
              marginTop: "5px",
            }}
          >
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography
                fontSize={15}
                sx={{ color: "#87CEFA", marginBottom: "5px" }}
              >
                <b>Email</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                size="small"
                id="outlined-basic"
                error={
                  errors.includes("EMPTY_EMAIL") ||
                  errors.includes("INVALID_EMAIL")
                    ? true
                    : false
                }
                helperText={
                  errors.includes("EMPTY_EMAIL")
                    ? "This field is required"
                    : errors.includes("INVALID_EMAIL")
                    ? "Invalid Email Id"
                    : ""
                }
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>
            <br></br>
            <Grid item md={12} xs={12} sx={{ marginTop: "20px" }}>
              <Typography
                fontSize={15}
                sx={{ color: "#87CEFA", marginBottom: "5px" }}
              >
                <b>Password</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                size="small"
                required
                type="password"
                autoComplete="current-password"
                id="outlined-basic"
                error={
                  errors.includes("EMPTY_PASS") ||
                  errors.includes("PASS_LENGTH")
                }
                helperText={
                  errors.includes("EMPTY_PASS")
                    ? "This field is required"
                    : errors.includes("PASS_LENGTH")
                    ? "Password length should be atleast 5"
                    : ""
                }
              />
            </Grid>
            <br></br>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ marginTop: "20px", marginBottom: "5px" }}
            >
              <Typography fontSize={15} sx={{ color: "#87CEFA" }}>
                <b>Confirm Password</b>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                type="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                size="small"
                required
                id="outlined-basic"
                error={
                  errors.includes("EMPTY_CONFIRM_PASS") ||
                  errors.includes("PASS_DO_NOT_MATCH")
                }
                helperText={
                  errors.includes("EMPTY_CONFIRM_PASS")
                    ? "This field is required"
                    : errors.includes("PASS_DO_NOT_MATCH")
                    ? "Passwords don't match"
                    : ""
                }
              />
            </Grid>
            <br></br>
            <Button
              style={{
                textTransform: "none",
                color: "white",
                background: "#191970",
                marginTop: "30px",
                marginBottom: "20px",
                left: "17%",
                width: "200px",
                borderRadius: 50,
              }}
              size="large"
              onClick={register_user}
            >
              Register
            </Button>
          </Grid>
        </Card>
      </Box>
    </div>
  );
};
