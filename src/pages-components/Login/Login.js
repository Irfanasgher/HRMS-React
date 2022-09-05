import React, { useState } from "react";
import toast from "react-toast-notification";
import { connect, useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Row, Col, Container, FormGroup, Input, Button } from "reactstrap";
import { loginUser } from "../../actions";

import illustration1 from "../../assets/images/illustrations/pack1/authentication.svg";

function Login() {
  const [userName, setUserName] = useState("zaid@admin.com");
  const [userPassword, setUserPassword] = useState("pass1234");

  // const [userName, setUserName] = useState("irfan.asgher@eis.sg");
  // const [userPassword, setUserPassword] = useState("pass1234");

  const history = useHistory();

  const { path_name } = useSelector((state) => state.UserLoggedIn);
  // console.log("PATH NAME: ", path_name);
  if (path_name) {
    history.push(path_name);
  }

  const dispatch = useDispatch();

  const login = (e) => {
    toast.info("Processing ...");
    e.preventDefault();

    const data = {
      email: userName,
      password: userPassword,
      history,
    };

    // console.log("user", data);
    dispatch(loginUser(data));
  };
  return (
    <>
      <div className="app-wrapper bg-white min-vh-100">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-content--inner d-flex align-items-center">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content py-5">
                  <Container>
                    <Row>
                      <Col lg="6" className="d-flex align-items-center">
                        <div className="divider-v d-none d-lg-block divider-v-md" />
                        <div className="w-100 pr-0 pr-lg-5">
                          <div className="text-black mt-3">
                            <span className="text-center">
                              <h1 className="display-4 mb-1 font-weight-bold">
                                Login to your account
                              </h1>
                              <p className="font-size-lg mb-0 text-black-50">
                                We're glad you're working on your app. Login
                                below to continue.
                              </p>
                            </span>
                            <div>
                              <form onSubmit={login}>
                                <FormGroup>
                                  <label className="font-weight-bold">
                                    Email address
                                  </label>
                                  <Input
                                    placeholder="yourname@yourmail.com"
                                    type="email"
                                    value={userName}
                                    onChange={(e) => {
                                      setUserName(e.target.value);
                                    }}
                                  />
                                </FormGroup>
                                <div className="form-group mb-4">
                                  <div className="d-flex justify-content-between">
                                    <label className="font-weight-bold">
                                      Password
                                    </label>
                                    <Link to="/PageRecover">
                                      Forgot password?
                                    </Link>
                                  </div>
                                  <Input
                                    placeholder="Enter your password"
                                    type="password"
                                    value={userPassword}
                                    onChange={(e) => {
                                      setUserPassword(e.target.value);
                                    }}
                                  />
                                </div>

                                <Button
                                  size="lg"
                                  className="btn-block text-uppercase font-weight-bold font-size-sm"
                                  color="primary"
                                  type="submit"
                                >
                                  Sign in
                                </Button>
                              </form>
                            </div>
                            <div className="text-center pt-4 text-black-50">
                              Don't have an account?{" "}
                              <Link to="/SignUp">Create an Account</Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg="6"
                        className="d-none d-lg-flex align-items-center"
                      >
                        <img
                          alt="..."
                          className="w-100 mx-auto d-block img-fluid"
                          src={illustration1}
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default compose(withRouter, connect(null, { loginUser }))(Login);
