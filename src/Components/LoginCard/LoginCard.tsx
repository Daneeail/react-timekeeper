import React from 'react';
import './LoginCard.scss';
import Card from '@material-ui/core/Card';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, CardContent, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "375px",
      width: "800px",
      justifyContent: "center",
      alignContent: "center"
    },
    textfield: {
      width: "350px"
    },
    button: {
      fontWeight: "bolder"
    }
  })
);

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('Password is required'),
});

const LoginCard = () => {
  const classes = useStyles();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      history.push('/main')
    }
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Row className="mt-3">
          <Col className="card-title text-center">
            Timekeeper <ScheduleIcon />
          </Col>
        </Row>
        <Row>
          <Col>
            <form onSubmit={formik.handleSubmit}>
              <Row>
                <Col className="text-center">
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    className={classes.textfield} 
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className="textfield text-center">
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={classes.textfield}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className="text-center">
                  <Button variant="outlined" className={classes.button} type="submit">Sign In</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
};

export default LoginCard;