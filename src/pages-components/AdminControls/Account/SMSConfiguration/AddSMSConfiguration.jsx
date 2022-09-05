import React from "react";
import { Formik } from "formik";
import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Label, FormGroup, Input, Button, Form } from "reactstrap";
import "./index.scss";

const AddSMSConfiguration = (props) => {
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
    <div id="addSMSConfiguration">
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
            <h1 style={{ color: "#3A3D65" }}>Add SMS Configuration</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add SMS Configuration</b>
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
                        <Label for="">Company Name</Label>
                        <Input
                          type="text"
                          name="orgName"
                          onChange={handleChange}
                          placeholder="CressetTech"
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
                        <Label for="">Name</Label>
                        <Input
                          type="text"
                          placeholder="Cresset Technology HRMS"
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
                        <Label for="">URL</Label>
                        <Input
                          type="text"
                          placeholder="https://Cressettech.com"
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
                        <Label for="">User Name</Label>
                        <Input
                          type="text"
                          placeholder="Abaid.rahman@cressettech.co"
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
                        <Label for="">Password</Label>
                        <Input
                          type="text"
                          placeholder="123456789"
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
                        <Label for="">Masking</Label>
                        <Input
                          type="text"
                          placeholder="0300-00000000"
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
                        <Label for="">Status</Label>
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
                    {/* <Col md="12" style={{ marginTop: "30px" }}>
              <Button
                href="#/"
                size="m"
                className="mt-3 py-3"
                // onClick={addModalToggle}
                color="primary"
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-4">Add Location</span>
              </Button>
            </Col> */}
                  </Row>
                </Form>
              );
            }}
          </Formik>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button color="primary1" type="submit" className="ml-auto">
              Update
            </Button>
            <Button color="primary1" type="submit" className="ml-auto">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddSMSConfiguration;
