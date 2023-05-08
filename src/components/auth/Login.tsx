import React, { useState } from "react";
import { Button, FormElement, Grid, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AuthCredential, useAuth } from "../../contexts/Auth";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const { login, loading, error } = useAuth();
  const [input, setInput] = useState<AuthCredential>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid.Container gap={2} justify="center">
        <Grid className="form__control">
          <Input
            clearable
            label="Tài khoản"
            name="username"
            onChange={handleChange}
            required={true}
          />
        </Grid>
        <Grid className="form__control">
          <Input.Password
            clearable
            type="password"
            label="Mật khẩu"
            name="password"
            onChange={handleChange}
            required={true}
            contentLeft={<FaLock />}
          />
        </Grid>
        <Grid xs={8}>
          <Button type="submit" color="success" className="form__btn" auto>
            Đăng Nhập
          </Button>
        </Grid>
        <Grid>
          <div>
            <Link to="/register" style={{ color: "#fff" }}>
              Chưa có tài khoản?&nbsp;
              <strong style={{ color: "#4598F8" }}>Đăng ký</strong>
            </Link>
          </div>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default Login;
