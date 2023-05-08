import React, { useState } from "react";
import { Button, FormElement, Grid, Input, Loading } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { UserSignup } from "../../contexts/Auth/types";

const Register = () => {
  const { register, loading, error } = useAuth();
  const [input, setInput] = useState<UserSignup>({
    name: "",
    password: "",
    passwordConfirmation: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    register(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid.Container gap={2} justify="center">
        <Grid className="form__control">
          <Input
            clearable
            // helperText="Please enter your name"
            label="Tên"
            name="name"
            onChange={handleChange}
            required={true}
          />
        </Grid>
        <Grid className="form__control">
          <Input
            clearable
            // helperText="Please enter your name"
            label="Tài khoản"
            name="username"
            onChange={handleChange}
          />
        </Grid>
        <Grid className="form__control">
          <Input.Password
            clearable
            helperText={error?.password}
            type="password"
            label="Mật khẩu"
            name="password"
            required={true}
            onChange={handleChange}
          />
        </Grid>
        <Grid className="form__control">
          <Input.Password
            clearable
            helperText={error?.passwordConfirmation}
            type="password"
            label="Xác nhận mật khẩu"
            name="passwordConfirmation"
            required={true}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={8}>
          <Button
            disabled={loading}
            color="success"
            className="form__btn"
            type="submit"
            auto
          >
            {loading ? <Loading color="currentColor" size="sm" /> : "Đăng ký"}
          </Button>
        </Grid>
        <Grid>
          <div>
            <Link to="/login" style={{ color: "#fff" }}>
              Đã có tài khoản?&nbsp;
              <strong style={{ color: "#4598F8" }}>Đăng Nhập</strong>
            </Link>
          </div>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default Register;
