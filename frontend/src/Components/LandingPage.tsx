import { Button, Card } from "@mui/material";
import { Register } from "./Auth/Register";
import background from "../assets/BlueClock.jpg";
import { useState } from "react";
import { Login } from "./Auth/Login";
import useWindowDimensions from "../Hooks/WindowsDimensions";

export const LandingPage = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  const LoadLoginPage = () => {
    setShowLoginPage(true);
  };

  const { width, height } = useWindowDimensions();

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
      {showLoginPage ? <Login /> : <Register />}
    </div>
  );
};
