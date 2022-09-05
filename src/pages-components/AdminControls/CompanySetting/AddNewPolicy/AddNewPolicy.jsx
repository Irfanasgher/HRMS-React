import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label, Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import CreatableSelect from "react-select/creatable";

import { addPolicy, findAllPolicies } from "../../../../actions";

import "./AddNewPolicy.scss";

const AddGrade = () => {
  const [adjustment, setAdjustment] = useState();
  const [target, setTarget] = useState("");
  const [period, setPeriod] = useState("");
  const [valueData, setValueData] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllPolicies());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { policies } = useSelector((state) => state.PolicyReducer);

  const adjustmentData = policies?.map((pdes) => {
    return { value: pdes.id_policy_type, label: pdes.name_policy_type };
  });

  const targetList = [
    {
      id: "salary",
      name: "Salary",
    },
    {
      id: "payroll",
      name: "Payroll",
    },
  ];

  const targetData = targetList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const periodList = [
    {
      id: "monthly",
      name: "Monthly",
    },
    {
      id: "yearly",
      name: "Yearly",
    },
  ];

  const periodData = periodList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });

  const valueList = [
    {
      id: "percentage",
      name: "Percentage",
    },
    {
      id: "actual",
      name: "Actual",
    },
  ];

  const valueDataList = valueList?.map((pdes) => {
    return { value: pdes.id, label: pdes.name };
  });
  const addPlanData = (values) => {
    const data = {
      createdBy: "Irfan",
      policy_type: adjustment,
      name_policy: values.planName,
      description_policy: values.planScope,
      code_factor: values.planCode,
      target_factor: target,
      period_factor: period,
      start_period_factor: values.effectiveDate,
      end_peroid_factor: values.termenateDate,
      adjustment_factor: valueData,
      value_factor: values.valueFactor,
    };
    console.log("dsafhaaaaaaaaaa", data);
    if (
      adjustment > 0 &&
      target.length > 0 &&
      period.length > 0 &&
      valueData.length > 0
    ) {
      dispatch(addPolicy(data)).then(() => {
        history.push("/dashboard/Policies");
      });
    } else {
      alert("Please Select All DropdownMenu");
    }
  };

  const handleAdjustmentData = (options) => {
    setAdjustment(options.value);
  };

  const handleTargetData = (options) => {
    setTarget(options.label);
  };

  const handlePeriodData = (options) => {
    setPeriod(options.label);
  };

  const handleValueData = (options) => {
    setValueData(options.label);
  };

  const initialValues = {
    planName: "",
    planScope: "",
    planCode: "",
    valueFactor: "",
    effectiveDate: "",
    termenateDate: "",
  };

  const validate = Yup.object().shape({
    planName: Yup.string().required("Required"),
    planScope: Yup.string().required("Required"),
    planCode: Yup.string().required("Required"),
    // targetFactor: Yup.string().required("Required"),
    valueFactor: Yup.number().positive().required("Required"),
    effectiveDate: Yup.string().required("Required"),
    termenateDate: Yup.string().required("Required"),
  });

  console.log("target", target);
  console.log("adjustment", adjustment);
  console.log("value", valueData);
  console.log("period", period);
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
              <b>Add New Policy Plan</b>
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
                        <Label for="">Plan Title</Label>
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
                        <Label for="">Adjustment</Label>
                        <CreatableSelect
                          options={adjustmentData}
                          closeMenuOnSelect={true}
                          onChange={handleAdjustmentData}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="">Plan Scope</Label>
                        <Input
                          type="text"
                          name="planScope"
                          placeholder="Enter Description"
                          onChange={handleChange}
                          value={values.planScope}
                          onBlur={handleBlur}
                          error={errors.planScope}
                        />
                        {errors.planScope && touched.planScope && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.planScope}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Plan Code</Label>
                        <Input
                          type="text"
                          name="planCode"
                          placeholder="Enter Code Factor"
                          onChange={handleChange}
                          value={values.planCode}
                          onBlur={handleBlur}
                          error={errors.planCode}
                        />
                        {errors.planCode && touched.planCode && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.planCode}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Target</Label>
                        {/* <Input
                          type="text"
                          name="targetFactor"
                          placeholder="Enter Target Factor"
                          onChange={handleChange}
                          value={values.targetFactor}
                          onBlur={handleBlur}
                          error={errors.targetFactor}
                        /> */}
                        <CreatableSelect
                          name="targetFactor"
                          options={targetData}
                          closeMenuOnSelect={true}
                          onChange={handleTargetData}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Period</Label>
                        <CreatableSelect
                          options={periodData}
                          closeMenuOnSelect={true}
                          onChange={handlePeriodData}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label for="">Value</Label>
                        <Input
                          type="number"
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
                    <Col md="2">
                      <FormGroup>
                        <Label for="" style={{ visibility: "hidden" }}>
                          A
                        </Label>
                        <CreatableSelect
                          options={valueDataList}
                          closeMenuOnSelect={true}
                          onChange={handleValueData}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Effective Date</Label>
                        <Input
                          type="date"
                          name="effectiveDate"
                          onChange={handleChange}
                          value={values.effectiveDate}
                          onBlur={handleBlur}
                          error={errors.effectiveDate}
                        />
                        {errors.effectiveDate && touched.effectiveDate && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.effectiveDate}
                          </div>
                        )}
                        {/* <InputGroup>
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
                        </InputGroup> */}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Termination Date</Label>
                        <Input
                          type="date"
                          name="termenateDate"
                          onChange={handleChange}
                          value={values.termenateDate}
                          onBlur={handleBlur}
                          error={errors.termenateDate}
                        />
                        {errors.termenateDate && touched.termenateDate && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.termenateDate}
                          </div>
                        )}
                        {/* <InputGroup>
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
                        </InputGroup> */}
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
