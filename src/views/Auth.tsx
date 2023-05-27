import React from "react";
import "../styles/Auth.scss";
import Login from "../components/auth/Login";
import { Container } from "@nextui-org/react";
import Register from "../components/auth/Register";
import { useAuth } from "../contexts/Auth";

const Auth: React.FC<{ auth: string }> = ({ auth }) => {
  return (
    <div className="auth" style={{ backgroundImage: `url(/bg-auth.jpg)` }}>
      <Container>
        <div className="form">
          <div className="title">
            {auth === "login"
              ? "Namitoy Paradise"
              : "Chào mừng (⁠ ͡⁠°⁠ ͜⁠ʖ⁠ ͡⁠°⁠)\n"}
          </div>
          {auth === "login" ? <Login /> : <Register />}
        </div>
      </Container>
    </div>
  );
};

export default Auth;
