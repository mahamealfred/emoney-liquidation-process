import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
    Button,
    Grid,
    Paper,
    TextField,
  } from "@material-ui/core";
const ChangePassword = () => {

    const paperStyle = {
        padding: 30,
        height: "50vh",
        width: 280,
        margin: "80px auto",
      };

      const btnStyle = {
        margin: "8px 0px",
      };
      const textStyle = {
        margin: "30px 0px",
      };
      const initialValues = {
        username: "",
        password: "",
        newpassword:"",
      };
      const validationSchema = Yup.object().shape({
        username: Yup.string().required("Please enter  Username"),
        password: Yup.string().required("Please Enter Old Password"),
        newpassword: Yup.string().required("Please Enter New Password"),
      });
      const onSubmit = (values, props) => {
        console.log(values);
        // dispatch(loginAction(values, history));
        
      };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Change Password</h2>
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
                  as={TextField}
                  label="New Password"
                  name="newpassword"
                  placeholder="Enter New password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="newpassword" />}
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
          
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ChangePassword