import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from 'react-router-dom';
import * as Yup from "yup";
import {
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
const Register = () => {

    const paperStyle = {
        padding: 30,
        height: "55vh",
        width: 280,
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
        names:"",
        username: "",
        password: "",
        passwordConfirm:"",
      
      };
      const validationSchema = Yup.object().shape({
          names:Yup.string().required("Please enter Names"),
        username: Yup.string().required("Please enter Username"),
        password: Yup.string().required("Required"),
        passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
      });
     
      const onSubmit = (values, props) => {
        console.log(values);
        
      };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Register</h2>
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
                  label="Names"
                  name="names"
                  placeholder="Enter your Names"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="names" />}
                />
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
                  as={TextField}
                  label="Retype Password"
                  name="passwordConfirm"
                  placeholder="Retype password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="passwordConfirm" />}
                />
               
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={btnStyle}
                  disabled={props.isSubmitting}
                >
                Send
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link to="/" style={forgotStyle}>
              Already Have an Account? Sign In
            </Link>
            
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Register