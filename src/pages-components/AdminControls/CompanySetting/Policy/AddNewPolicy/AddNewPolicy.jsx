import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import DatePicker from "react-datepicker";

import { addPolicy } from "../../../../../actions";

import "./AddNewPolicy.scss";

const AddGrade = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  let history = useHistory();
  const dispatch = useDispatch();

  const addPlanData = (values) => {
    const data = {
      name_policy: values.planName,
      description_policy: values.planDescription,
      createdBy: values.planCreatedBy,
      code_factor: values.codeFactor,
      target_factor: values.targetFactor,
      period_factor: values.periodFactor,
      adjustment_factor: values.adjustmentFactor,
      value_factor: values.valueFactor,
      note_factor: values.noteFactor,
      start_period_factor: startDate,
      end_peroid_factor: endDate,
    };
    console.log("dsafhaaaaaaaaaa", data);

    dispatch(addPolicy(data)).then(() => {
      history.push("/dashboard/Policies");
    });
  };

  const initialValues = {
    planName: "",
    planCreatedBy: "",
    planDescription: "",
    codeFactor: "",
    targetFactor: "",
    periodFactor: "",
    valueFactor: "",
    adjustmentFactor: "",
    noteFactor: "",
  };

  const validate = Yup.object().shape({
    planName: Yup.string().required("Required"),
    planCreatedBy: Yup.string().required("Required"),
    planDescription: Yup.string().required("Required"),
    codeFactor: Yup.string().required("Required"),
    targetFactor: Yup.string().required("Required"),
    periodFactor: Yup.string().required("Required"),
    valueFactor: Yup.string().required("Required"),
    adjustmentFactor: Yup.string().required("Required"),
    noteFactor: Yup.string().required("Required"),
  });

  return (
    <div id="addNewBenefits">
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
            <h1 style={{ color: "#3A3D65" }}>Policy</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add New Policy</b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={addPlanData}
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
                        <Label for="">Name</Label>
                        <Input
                          type="text"
                          name="planName"
                          placeholder="Enter name..."
                          onChange={handleChange}
                          value={values.planName}
                          onBlur={handleBlur}
                          error={errors.planName}
                        />
                        {errors.planName && touched.planName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.planName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Created By</Label>
                        <Input
                          type="text"
                          name="planCreatedBy"
                          placeholder="Enter name of Creatot"
                          onChange={handleChange}
                          value={values.planCreatedBy}
                          onBlur={handleBlur}
                          error={errors.planCreatedBy}
                        />
                        {errors.planCreatedBy && touched.planCreatedBy && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.planCreatedBy}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="">Plan Description</Label>
                        <Input
                          type="textarea"
                          name="planDescription"
                          placeholder="Enter Description"
                          onChange={handleChange}
                          value={values.planDescription}
                          onBlur={handleBlur}
                          error={errors.planDescription}
                        />
                        {errors.planDescription && touched.planDescription && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.planDescription}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Code Factor</Label>
                        <Input
                          type="text"
                          name="codeFactor"
                          placeholder="Enter Code Factor"
                          onChange={handleChange}
                          value={values.codeFactor}
                          onBlur={handleBlur}
                          error={errors.codeFactor}
                        />
                        {errors.codeFactor && touched.codeFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.codeFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Target Factor</Label>
                        <Input
                          type="text"
                          name="targetFactor"
                          placeholder="Enter Target Factor"
                          onChange={handleChange}
                          value={values.targetFactor}
                          onBlur={handleBlur}
                          error={errors.targetFactor}
                        />
                        {errors.targetFactor && touched.targetFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.targetFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Period Factor</Label>
                        <Input
                          type="text"
                          name="periodFactor"
                          placeholder="Enter Period Factor"
                          onChange={handleChange}
                          value={values.periodFactor}
                          onBlur={handleBlur}
                          error={errors.periodFactor}
                        />
                        {errors.periodFactor && touched.periodFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.periodFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Value Factor</Label>
                        <Input
                          type="text"
                          name="valueFactor"
                          placeholder="Enter Value Factor"
                          onChange={handleChange}
                          value={values.valueFactor}
                          onBlur={handleBlur}
                          error={errors.valueFactor}
                        />
                        {errors.valueFactor && touched.valueFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.valueFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Start Factor</Label>
                        <InputGroup>
                          <DatePicker
                            className="form-control"
                            dateFormat={"yyyy-MM-dd"}
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                            }}
                            startDate={startDate}
                            endDate={endDate}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Start Factor</Label>
                        <InputGroup>
                          <DatePicker
                            className="form-control"
                            dateFormat={"yyyy-MM-dd"}
                            selected={endDate}
                            onChange={(date) => {
                              setEndDate(date);
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Adjustment Factor</Label>
                        <Input
                          type="text"
                          name="adjustmentFactor"
                          placeholder="Enter Adjustment Factor"
                          onChange={handleChange}
                          value={values.adjustmentFactor}
                          onBlur={handleBlur}
                          error={errors.adjustmentFactor}
                        />
                        {errors.adjustmentFactor && touched.adjustmentFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.adjustmentFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="">Note Factor</Label>
                        <Input
                          type="textarea"
                          name="noteFactor"
                          placeholder="Enter Note Factor"
                          onChange={handleChange}
                          value={values.noteFactor}
                          onBlur={handleBlur}
                          error={errors.noteFactor}
                        />
                        {errors.noteFactor && touched.noteFactor && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.noteFactor}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="divider mt-5" />
                  <div className="p-4 px-5 d-flex align-items-center justify-content-end">
                    <Button color="primary" type="submit" className="ml-auto">
                      Save
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default AddGrade;
