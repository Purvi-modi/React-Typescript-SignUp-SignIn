import { Card, Button, Grid, Typography, TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Axios from "axios";
import { DataFetcher } from "../../Entities/DataFetcher";
import { shallowEqual } from "react-redux";

import ValidateInputs from "./entities/ValidateInputs";
import { useSelector } from "react-redux";
import { errorsState } from "./app/Reducer";
import { useDispatch } from "react-redux";
import { store } from "./app/store";
import { reset_errors } from "./app/Actions";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors]: any = useState([]);

  // const errors = useSelector<errorsState, errorsState["errors"]>(
  //   (state) => state.errors
  // );

  const dispatch = useDispatch();

  const register_user = () => {
    // Flush previous errors list
    dispatch(reset_errors());

    if (ValidateInputs(email, password, confirmPassword, dispatch)) {
      DataFetcher.register(email, password).then((response) => {
        alert("User Successfully Registered!");
      });
    } else {
      setErrors(store.getState().errors);
    }
  };

  return (
    <>
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
    </>
  );
};
