import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap';
import cx from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../validations/validations';
import InputField from '../commons/InputField/InputField';
import InputError from '../commons/InputError/InputError';
import styles from './Register.module.scss';
import userAccess from '../../config/userAccessConfig';
import { registerUser } from '../../actions';

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
    nic: '',
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(
    false
  );

  // Visibility click
  const passwordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // confirm password Visibility click
  const confirmPasswordVisibilityChange = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  const formSubmit = (data) => {
    const {
      firstName,
      lastName,
      password,
      age,
      phone,
      address,
      email,
      nic,
    } = data;
    const userData = {
      name: `${firstName.toString().trim()} ${lastName.toString().trim()}`,
      age,
      nic,
      address,
      password,
      email,
      phone,
      role: userAccess.userRoles.customer,
    };

    dispatch(registerUser(userData));
  };

  return (
    <>
      <main className={styles.mainWrapper}>
        <section className={cx('section section-shaped', styles.bgWrapper)}>
          <div
            id={styles.background}
            className="shape shape-style-1 bg-gradient-default"
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container id={styles.foreground}>
            <div className={styles.rowWrapper}>
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white">
                      <div
                        className={cx(
                          'font-weight-bold text-center',
                          styles.titleText
                        )}
                      >
                        Sign Up
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={formSubmit}
                        validationSchema={registerSchema}
                      >
                        <Form>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i
                                    className="fa fa-user-o"
                                    aria-hidden="true"
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="firstName">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="first name"
                                    type="text"
                                    id="firstName"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="firstName"
                              component={InputError}
                            />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i
                                    className="fa fa-user-o"
                                    aria-hidden="true"
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="lastName">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="last name"
                                    type="text"
                                    id="lastName"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="lastName"
                              component={InputError}
                            />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i
                                    className="fa fa-user-o"
                                    aria-hidden="true"
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="nic">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="N.I.C number"
                                    type="text"
                                    id="nic"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage name="nic" component={InputError} />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="age">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="age"
                                    type="number"
                                    id="age"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage name="age" component={InputError} />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="email">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="email"
                                    type="text"
                                    id="email"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage name="email" component={InputError} />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-building" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="address">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="address"
                                    type="text"
                                    id="address"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="address"
                              component={InputError}
                            />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-mobile-button" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="phone">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    placeholder="phone"
                                    type="text"
                                    id="phone"
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage name="phone" component={InputError} />
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <VpnKeyOutlinedIcon
                                    style={{ fontSize: '1rem' }}
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="password">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    visibility={passwordVisibility}
                                    placeholder="password"
                                    type="password"
                                    id="password"
                                    onClick={passwordVisibilityChange}
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="password"
                              component={InputError}
                            />
                          </FormGroup>

                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <VpnKeyOutlinedIcon
                                    style={{ fontSize: '1rem' }}
                                  />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Field name="confirmPassword">
                                {(props) => (
                                  <InputField
                                    {...props}
                                    visibility={confirmPasswordVisibility}
                                    placeholder="confirm password"
                                    type="password"
                                    id="confirmPassword"
                                    onClick={confirmPasswordVisibilityChange}
                                  />
                                )}
                              </Field>
                            </InputGroup>
                            <ErrorMessage
                              name="confirmPassword"
                              component={InputError}
                            />
                          </FormGroup>

                          <div className="col-md-12 row d-flex justify-content-between align-items-center pt-2  px-0 mx-0">
                            <div className="col-12 px-0 d-flex justify-content-center">
                              <Button
                                id="signupButton"
                                className="py-2"
                                outline
                                color="primary"
                                type="submit"
                              >
                                Sign up
                              </Button>
                            </div>
                          </div>
                        </Form>
                      </Formik>
                    </CardBody>
                  </Card>
                  <Row className="my-3">
                    <Col className="text-center" xs="12">
                      <Link to="/login" className="text-light">
                        <small>Already have an account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Register;
