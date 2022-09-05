import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Row, Col, Label, FormGroup, Input, Form, Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Select from "react-select";

import "./SignUp.scss";

const SignUp = () => {
  const history = useHistory();
  // const salutationList = [
  //   {
  //     id: "mr",
  //     name: "Mr",
  //   },
  //   {
  //     id: "mrs",
  //     name: "Mrs",
  //   },
  //   {
  //     id: "miss",
  //     name: "Miss",
  //   },
  // ];

  const genderList = [
    {
      id: "male",
      name: "Male",
    },
    {
      id: "female",
      name: "Female",
    },
  ];

  const maritalList = [
    {
      id: "married",
      name: "Married",
    },
    {
      id: "unmarried",
      name: "Unmarried",
    },
  ];

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const salutationData = salutationList?.map((pdes) => {
  //   return { value: pdes.id, label: pdes.name };
  // });

  const genderData = genderList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const maritalData = maritalList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const initialValues = {
    // Salutation: "",
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    personalEmail: "",
    phone: "",
    Gender: "",
    Marital: "",
    cnicNumber: "",
    datePicker: "",
  };

  const validate = Yup.object().shape({
    // Salutation: Yup.object().shape({
    //   label: Yup.string().required("Please Select Salutation"),
    //   value: Yup.string().required("Please Select Salutation"),
    // }),

    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    fatherName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    personalEmail: Yup.string().email().required("Required"),
    phone: Yup.number().positive().required("Required"),
    // Gender: Yup.object().required("Required"),
    Gender: Yup.object().shape({
      label: Yup.string().required("Please Select Gender"),
      value: Yup.string().required("Please Select Gender"),
    }),
    // Marital: Yup.object().required("Required"),
    Marital: Yup.object().shape({
      label: Yup.string().required("Please Select Marital"),
      value: Yup.string().required("Please Select Marital"),
    }),
    cnicNumber: Yup.number().positive().required("Required"),
    datePicker: Yup.date().required("Date is Required").nullable(),
  });

  // employee_type_id : 1

  const addEmployeeInfo = (values) => {
    console.log("values", values);

    history.push({
      pathname: "/OrganizationProcess",
      state: { data: values },
    });
  };
  return (
    <div id="organization">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-center p-5">
        <span className="text-center">
          <h1 className="display-4 mb-1 font-weight-bold">Create account</h1>
          <p className="font-size-lg mb-0 text-black-50">
            Start using our tools right away! Create an account today!
          </p>
        </span>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Create account</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <div className="wizard-steps horizontal">
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={addEmployeeInfo}
            >
              {(formik) => {
                const {
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                  setFieldValue,
                  setFieldTouched,
                } = formik;
                return (
                  <Form onSubmit={handleSubmit} className="d-flex flex-column">
                    <Row className="p-5">
                      {/* <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Salutation
                          </Label>
                          <Select
                            label="Salutation"
                            options={salutationData}
                            isClearable
                            placeholder={"Salutation"}
                            touched={touched.Salutation}
                            value={values.Salutation}
                            onChange={(value) => {
                              setFieldValue("Salutation", value);
                              // handleChangeData(value);
                              console.log("value", value);
                            }}
                            onBlur={handleBlur}
                            error={errors.Salutation}
                          />
                          {errors.Salutation && touched.Salutation && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.Salutation.label}
                            </div>
                          )}
                        </FormGroup>
                      </Col> */}
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            First Name
                          </Label>
                          <Input
                            type="text"
                            placeholder={"First Name"}
                            name="firstName"
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                            error={errors.firstName}
                          />
                          {errors.firstName && touched.firstName && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.firstName}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Last Name{" "}
                          </Label>
                          <Input
                            type="text"
                            placeholder={"Last Name"}
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}
                            error={errors.lastName}
                          />
                          {errors.lastName && touched.lastName && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.lastName}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Father/Husband Name
                          </Label>
                          <Input
                            type="text"
                            placeholder="Enter name..."
                            name="fatherName"
                            onChange={handleChange}
                            value={values.fatherName}
                            onBlur={handleBlur}
                            error={errors.fatherName}
                          />
                          {errors.fatherName && touched.fatherName && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.fatherName}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Official Email
                          </Label>
                          <Input
                            type="email"
                            placeholder={"Enter Email"}
                            name="email"
                            onChange={handleChange}
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
                          <Label for="" className="font-weight-bold">
                            Personal Email
                          </Label>
                          <Input
                            type="email"
                            placeholder={"Enter Email"}
                            name="personalEmail"
                            onChange={handleChange}
                            value={values.personalEmail}
                            onBlur={handleBlur}
                            error={errors.personalEmail}
                          />
                          {errors.personalEmail && touched.personalEmail && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.personalEmail}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Phone
                          </Label>
                          <Input
                            type="number"
                            placeholder={"Phone"}
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            onBlur={handleBlur}
                            error={errors.phone}
                          />
                          {errors.phone && touched.phone && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.phone}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Label for="" className="font-weight-bold">
                          Date Of Birth{" "}
                        </Label>
                        <Input
                          type="date"
                          placeholder={"Date Picker"}
                          name="datePicker"
                          onChange={handleChange}
                          value={values.datePicker}
                          onBlur={handleBlur}
                          error={errors.datePicker}
                        />
                        {errors.datePicker && touched.datePicker && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.datePicker}
                          </div>
                        )}
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Gender
                          </Label>
                          <Select
                            options={genderData}
                            isClearable
                            placeholder={"Gender"}
                            onChange={(value) => {
                              setFieldValue("Gender", value);
                              // handleChangeData(value);
                              console.log("value", value);
                            }}
                            onBlur={setFieldTouched}
                            value={values.Gender}
                            touched={touched.Gender}
                            error={errors.Gender}
                            isMulti={false}
                          />
                          {errors.Gender && touched.Gender && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.Gender.label}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            Marital
                          </Label>
                          <Select
                            label="Marital"
                            options={maritalData}
                            isClearable
                            //   placeholder={"Marital"}
                            onChange={(value) => {
                              setFieldValue("Marital", value);
                              // handleChangeData(value);
                              console.log("value", value);
                            }}
                            //   onBlur={setFieldTouched}
                            value={values.Marital || ""}
                            touched={touched.Marital}
                            error={errors.Marital}
                            //   isMulti={false}
                          />
                          {errors.Marital && touched.Marital && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.Marital.label}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="" className="font-weight-bold">
                            CNIC
                          </Label>
                          <Input
                            type="number"
                            placeholder={"35202-0000000-0"}
                            name="cnicNumber"
                            onChange={handleChange}
                            value={values.cnicNumber}
                            onBlur={handleBlur}
                            error={errors.cnicNumber}
                          />
                          {errors.cnicNumber && touched.cnicNumber && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.cnicNumber}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="divider my-5" />
                    <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
                      <Button
                        color="primary1"
                        type="submit"
                        className="ml-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
