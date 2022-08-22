import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { authenticateLogin } from "../../services/api";
import { useEffect } from "react";

const CardWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
`;

const Text = styled(TextField)`
  width: 350px;
  margin: 10px;
`;

const Error = styled(Typography)`
  font-size: 16px;
  color: #ff6161;
  line-height: 0;
  margin-bottom: 10px;
  font-weight: 600;
`;

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("username is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginForm() {
  const [error, showError] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/users");
    }
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let response = await authenticateLogin(values);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/addtest");
      } else {
        showError(true);
      }
    },
  });

  return (
    <CardWrapper>
      <Card variant="outlined">
        <form onSubmit={formik.handleSubmit}>
          <CardContent
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              flexFlow: "column",
              width: 400,
            }}
          >
            <Avatar
              icon="pi pi-user-plus"
              size="xlarge"
              shape="circle"
              style={{
                backgroundColor: "#2196F3",
                color: "#ffffff",
                margin: 0,
                padding: 0,
              }}
            />
            <h1>Login Now</h1>
            {error && <Error>Please enter valid username and password</Error>}
            <Text
              id="username"
              name="username"
              label="User Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <Text
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" size="large" type="submit">
                Submit
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </Card>
    </CardWrapper>
  );
}
