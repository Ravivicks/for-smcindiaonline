import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { addUser } from "../../services/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

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
const validationSchema = yup.object({
  fname: yup
    .string("Enter your Firstname")
    .min(4, "Firstname should be minimum 4 characters length")
    .max(15, "Firstname should be maximum 15 characters length ")
    .required("Firstname is required"),
  lname: yup
    .string("Enter your Lastname")
    .min(4, "Lastname should be minimum 4 characters length")
    .max(15, "Lastname should be maximum 15 characters length ")
    .required("Lastname is required"),
  username: yup
    .string("Username your email")
    .min(4, "Username should be minimum 4 characters length")
    .required("Username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
    mobile: yup
    .number("Enter your Mobile No")
    .min(10,"Enter Minimum 10 digit Mobile Number")
    .required("Mobile Number is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function SignupForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const handleClose = () => {
    setOpen(false);
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addUser(values);
      setOpen(true);
      resetForm({ values: "" });
    },
  });
  return (
    <CardWrapper>
      <Card variant="outlined">
        <form onSubmit={formik.handleSubmit}>
          <Dialog
            style={{ textAlign: "center" }}
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogContent>
              <CheckCircleIcon
                style={{ fontSize: 60, color: "var(--green-500)" }}
              />
              <h3>User Added Successful!</h3>
              <p>{formik.values.fname}</p>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ display: "flex", alignItems: "center" }}
                autoFocus
                onClick={handleClose}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
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
            <h1>Add New User Form</h1>
            <Text
              id="fname"
              name="fname"
              label="First Name"
              value={formik.values.fname}
              onChange={formik.handleChange}
              error={formik.touched.fname && Boolean(formik.errors.fname)}
              helperText={formik.touched.fname && formik.errors.fname}
            />
            <Text
              id="lname"
              name="lname"
              label="Last Name"
              value={formik.values.lname}
              onChange={formik.handleChange}
              error={formik.touched.lname && Boolean(formik.errors.lname)}
              helperText={formik.touched.lname && formik.errors.lname}
            />
            <Text
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <Text
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Text
              id="mobile"
              name="mobile"
              label="Mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
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
