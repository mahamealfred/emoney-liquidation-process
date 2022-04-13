import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { loginAction } from "../../redux/actions/userLoginAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const history = useHistory();
    const paperStyle = {
        padding: 20,
        height: "50vh",
        width: 300,
        margin: "80px auto",
      };

      const btnStyle = {
        margin: "8px 0px",
      };
      const textStyle = {
        margin: "30px 0px",
      };
      const forgotStyle = {
        textDecoration: "none",
      };
      const initialValues = {
        username: "",
        password: "",
        remember: false,
      };
      const validationSchema = Yup.object().shape({
        username: Yup.string().required("Please enter  Username"),
        password: Yup.string().required("Required"),
      });
      
      const onSubmit = (values, props) => {
           console.log("values",values);
         dispatch(loginAction(values, history));
        // history.push('/authorizedtransfer')
      };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Sign In</h2>
        </Grid>
        <Grid style={textStyle}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter Username"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="username" />}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
               
                 {
                  !userLogin.error ? null:
                  <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert variant="filled" severity="error">
                  {userLogin.error}
                   </Alert>
                   </Stack>
                   
                }
               
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={btnStyle}
                  // disabled={props.isSubmitting}
                 
                >
               {userLogin.loading ? "Loading" : "Send"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link to="/changepassword" style={forgotStyle}>
              Change password?
            </Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Login