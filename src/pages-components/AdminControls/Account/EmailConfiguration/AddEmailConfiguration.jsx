import React from "react";
import { Formik } from "formik";
import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Form,
  CustomInput,
} from "reactstrap";
import "./index.scss";

const AddEmailConfiguration = (props) => {
  const { setFieldValue, setFieldTouched } = props;

  const initialValues = {
    orgName: "",
    orgLegalName: "",
    orgCode: "",
    ntnNumber: "",
    website: "",
    logo: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    divisionName: "",
    districtName: "",
    tehsilName: "",
    cityName: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.orgName) {
      errors.orgName = "Please Enter Organization Name";
    }
    if (!values.orgLegalName) {
      errors.orgLegalName = "Please Enter Organization Legal Name";
    }
    if (!values.orgCode) {
      errors.orgCode = "Please Enter Organization Code";
    }
    if (!values.ntnNumber) {
      errors.ntnNumber = "Please Enter Organization NTN#";
    }
    if (!values.website) {
      errors.website = "Please Enter Website";
    }
    if (!values.logo) {
      errors.logo = "Please Select Logo";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Please Enter Phone Number";
    }
    if (!values.email) {
      errors.email = "Please Enter Email";
    }
    if (!values.country) {
      errors.country = "Please Select Country";
    }
    if (!values.state) {
      errors.state = "Please Select State";
    }
    if (!values.divisionName) {
      errors.divisionName = "Please Enter Division Name";
    }
    if (!values.districtName) {
      errors.districtName = "Please Enter District Name";
    }
    if (!values.tehsilName) {
      errors.tehsilName = "Please Enter Tehsil Name";
    }
    if (!values.cityName) {
      errors.cityName = "Please Enter City Name";
    }

    return errors;
  };
  return (
    <div id="addEmailConfiguration">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "user"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Add Email Configuration</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add Email Configuration</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Formik
            initialValues={initialValues}
            validate={validate}
            // onSubmit={() => alert("data comes!...........")}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
              } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <Row className="p-5">
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Email Address</Label>
                        <Input
                          type="text"
                          name="orgName"
                          onChange={handleChange}
                          //   placeholder="CressetTech"
                          touched={touched.orgName}
                          value={values.orgName}
                          onBlur={handleBlur}
                          error={errors.orgName}
                        />
                        {errors.orgName && touched.orgName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.orgName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Email Display Name</Label>
                        <Input
                          type="text"
                          //   placeholder="Cresset Technology HRMS"
                          name="orgLegalName"
                          onChange={handleChange}
                          touched={touched.orgLegalName}
                          value={values.orgLegalName}
                          onBlur={handleBlur}
                          error={errors.orgLegalName}
                        />
                        {errors.orgLegalName && touched.orgLegalName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.orgLegalName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Host</Label>
                        <Input
                          type="text"
                          //   placeholder="https://Cressettech.com"
                          name="orgCode"
                          onChange={handleChange}
                          touched={touched.orgCode}
                          value={values.orgCode}
                          onBlur={handleBlur}
                          error={errors.orgCode}
                        />
                        {errors.orgCode && touched.orgCode && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.orgCode}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Port</Label>
                        <Input
                          type="number"
                          //   placeholder="Abaid.rahman@cressettech.co"
                          name="website"
                          onChange={handleChange}
                          touched={touched.website}
                          value={values.website}
                          onBlur={handleBlur}
                          error={errors.website}
                        />
                        {errors.website && touched.website && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.website}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">User Name</Label>
                        <Input
                          type="text"
                          //   placeholder="123456789"
                          name="email"
                          onChange={handleChange}
                          touched={touched.email}
                          value={values.email}
                          onBlur={handleBlur}
                          error={errors.email}
                        />
                        {errors.email && touched.email && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Password</Label>
                        <Input
                          type="text"
                          //   placeholder="0300-00000000"
                          name="ntnNumber"
                          onChange={handleChange}
                          touched={touched.ntnNumber}
                          value={values.ntnNumber}
                          onBlur={handleBlur}
                          error={errors.ntnNumber}
                        />
                        {errors.ntnNumber && touched.ntnNumber && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.ntnNumber}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Server</Label>
                        <CreatableSelect
                          label="country"
                          //   options={optionCountry[0]}
                          isClearable
                          placeholder={"Country"}
                          // name="country"
                          // onChange={handleChange}
                          touched={touched.country}
                          value={values.country}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                          error={errors.country}
                        />
                        {errors.country && touched.country && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.country}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Input Port</Label>
                        <Input
                          type="text"
                          //   placeholder="0300-00000000"
                          name="ntnNumber"
                          onChange={handleChange}
                          touched={touched.ntnNumber}
                          value={values.ntnNumber}
                          onBlur={handleBlur}
                          error={errors.ntnNumber}
                        />
                        {errors.ntnNumber && touched.ntnNumber && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.ntnNumber}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <div style={{ marginTop: "10px" }}>
                        <CustomInput
                          type="checkbox"
                          id={20}
                          className="align-self-start"
                          label="SSL"
                        />
                      </div>
                    </Col>
                    <Col md="12">
                      <div style={{ marginTop: "10px" }}>
                        <CustomInput
                          type="checkbox"
                          id={20}
                          className="align-self-start"
                          label="Use Default Credential"
                        />
                      </div>
                    </Col>
                    <Col md="12">
                      <div
                        className="pt-4 pb-2 d-flex align-items-center"
                        style={{ marginTop: "25px" }}
                      >
                        <Button color="primary1" type="submit">
                          Save
                        </Button>
                        <Button
                          color="primary1"
                          type="submit"
                          className="ml-auto"
                        >
                          Cancel
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
          <div className="divider my-5" />
          <div className="p-5">
            <p className="editing">
              <b>Allow employees access to iCalendar Feeds</b>
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <Col md="4" style={{ paddingLeft: "0" }}>
                <FormGroup>
                  <Label for="">Send Test to</Label>
                  <Input
                    type="text"
                    placeholder="Testemail@gmail.com"
                    name="orgLegalName"
                  />
                </FormGroup>
              </Col>
              <Button color="primary1" type="submit" className="ml-auto">
                Send Test Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmailConfiguration;
