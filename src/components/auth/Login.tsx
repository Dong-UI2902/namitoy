import React, { useState } from "react";
import {
  Button,
  FormElement,
  Grid,
  Input,
  Loading,
  Text,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AuthCredential, useAuth } from "../../contexts/Auth";
import { FaLock, FaUser } from "react-icons/fa";

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

  document.title = `Đăng nhập`;

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
            contentLeft={<FaUser />}
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
        {error && (
          <Grid xs={8} justify="center">
            <Text size="$md" color="error">
              {error}
            </Text>
          </Grid>
        )}
        <Grid xs={8}>
          <Button
            type="submit"
            color="success"
            className="form__btn"
            disabled={loading}
            auto
          >
            {loading ? (
              <Loading type="points" color="currentColor" size="sm" />
            ) : (
              "Đăng Nhập"
            )}
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
