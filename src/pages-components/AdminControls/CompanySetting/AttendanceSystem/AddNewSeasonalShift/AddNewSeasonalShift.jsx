import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Label,
  Row,
  Col,
  FormGroup,
  Input,
  Form,
  CustomInput,
  Table,
} from "reactstrap";
import { AiFillClockCircle } from "react-icons/ai";
import "./AddNewSeasonalShift.scss";
import { createSeasonalShift } from "../../../../../actions";

const AddNewSeasonalShift = () => {
  const [timeFactor, setTimeFactor] = useState();
  const [graceFactor, setGraceFactor] = useState();
  const [lateFactor, setLateFactor] = useState();
  const [checkOvertime, setCheckOvertime] = useState(false);
  const [checkOvertime1, setCheckOvertime1] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [frequency, setFrequency] = useState();

  let chk_label = "Leave is Applicable on this Shift";
  let chk_label1 = "Overtime is Applicable on this Shift";

  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    shiftName: "",
    my_checked: [],
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    // timeFactor: "",
    // graceFactor: "",
    // lateFactor: "",
    // checkOvertime: false,
    // checkOvertime1: false,
    // title: "",
    // duration: "",
    // frequency: "",
  };
  const validate = Yup.object().shape({
    shiftName: Yup.string().required("Required"),
    startDate: Yup.date().required("Start Date is Required").nullable(),
    endDate: Yup.date().required("End Date is Required").nullable(),
    my_checked: Yup.array().test({
      name: "my_checked",
      exclusive: true,
      message: "At least select one",
      test: (value) => value.length > 0,
    }),
    startTime: Yup.string().required("Required"),
    endTime: Yup.string().required("Required"),
    // timeFactor: Yup.number().positive().required("Required"),
    // graceFactor: Yup.number().positive().required("Required"),
    // lateFactor: Yup.number().positive().required("Required"),
    // checkOvertime: Yup.boolean()
    //   .notRequired()
    //   .when("confirm2", {
    //     is: (val) => val !== true,
    //     then: Yup.boolean().oneOf([true], "Field must be checked"),
    //     otherwise: Yup.boolean().required(),
    //   }),
    // checkOvertime1: Yup.boolean()
    //   .notRequired()
    //   .when("confirm2", {
    //     is: (val) => val !== true,
    //     then: Yup.boolean().oneOf([true], "Field must be checked"),
    //     otherwise: Yup.boolean().required(),
    //   }),
    // title: Yup.string().required("Required"),
    // duration: Yup.string().required("Required"),
    // frequency: Yup.number().positive().required("Required"),
  });

  const addRegularShift = (values) => {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let checked = values.my_checked;

    let final = [];

    days.map((chk) =>
      final.push({
        label: chk,
        value: checked.includes(chk) ? true : false,
      })
    );

    // console.log("values", values);
    let days1 = checked.toString();
    const data = [
      {
        name_seasonal_shift: values.shiftName,
        code_seasonal_shift: days1,
        start_date_seasonal_shift: values.startDate,
        end_date_seasonal_shift: values.endDate,
        time_slots: [
          {
            is_over_time_slot: checkOvertime1,
            start_time_slot: values.startTime,
            end_time_slot: values.endTime,
            early_factor_time_slot: timeFactor,
            late_factor_time_slot: lateFactor,
            grace_factor_overtime_time_slot: graceFactor,
            break_banks: dataArray,
          },
        ],
      },
    ];

    // let finalData = [];
    // checked?.map((day) =>
    //   finalData.push({
    //     name_seasonal_shift: values.shiftName,
    //     code_seasonal_shift: day,
    //     start_date_seasonal_shift: values.startDate,
    //     end_date_seasonal_shift: values.endDate,
    //     time_slots: {
    //       start_time_slot: values.startTime,
    //       end_time_slot: values.endTime,
    //       early_factor_time_slot: values.timeFactor,
    //       late_factor_time_slot: values.lateFactor,
    //       grace_factor_overtime_time_slot: values.graceFactor,
    //       break_banks: dataArray,
    //     },
    //   })
    // );

    console.log("data", data);
    dispatch(createSeasonalShift(data)).then(() => {
      history.push({
        pathname: `/dashboard/AttendanceSystem`,
      });
    });
  };

  const addBreakBank = () => {
    const data = {
      break_type_id: 1,
      name_break_bank: title,
      frequency_break_bank: frequency,
      duration_break_bank: duration,
    };
    // setFieldValue("break_banks", [...dataArray, data]);
    if (title?.length > 0 && frequency > 0 && duration > 0) {
      setDataArray([...dataArray, data]);
    } else {
      alert("Please Fill All Break Bank Feilds...");
    }
  };

  return (
    <div id="addNewSeasonalShift">
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
            <h1 style={{ color: "#3A3D65" }}>Attendance System</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={addRegularShift}
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
                <div className="pt-3 tableContainer m-1">
                  <div className="card-header pr-2">
                    <div className="card-header--title">
                      <b>How do employees log time at your company? </b>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="startAndEnd p-5">
                      <div className="d-flex ">
                        <AiFillClockCircle size={30} />
                        <div style={{ marginTop: "6px" }} className="ml-2">
                          <h6
                            className="font-weight-bold"
                            style={{ marginBottom: 0, fontSize: "20px" }}
                          >
                            Start & End Times
                          </h6>
                          <p style={{ fontSize: "14px", marginTop: "10px" }}>
                            Employees will track their start time and <br /> end
                            times. E.g 8AM - 5PM, 1PM - 5PM, etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider" style={{ marginTop: "20px" }} />
                  <div className="p-4">
                    <h6
                      className="font-weight-medium"
                      style={{ marginBottom: 0, fontSize: "20px" }}
                    >
                      Seasonal Shift
                    </h6>
                    <br />
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="">Shift Name</Label>
                          <Input
                            type="text"
                            placeholder="Shift Name"
                            name="shiftName"
                            onChange={handleChange}
                            value={values.shiftName}
                            onBlur={handleBlur}
                            error={errors.shiftName}
                          />
                          {errors.shiftName && touched.shiftName && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.shiftName}
                            </div>
                          )}
                        </FormGroup>
                      </Col>
                      <Col md="8"></Col>
                      <Col
                        md="12"
                        style={{ marginTop: "15px", marginBottom: "10px" }}
                      >
                        <Label for="">Select Days</Label>
                      </Col>
                      <Col md="12">
                        <Row
                          role="group"
                          className="selec-dat"
                          aria-labelledby="checkbox-group"
                        >
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Mon"
                              />
                              &nbsp; &nbsp;Mon
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Tue"
                              />
                              &nbsp; &nbsp;Tue
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Wed"
                              />
                              &nbsp; &nbsp;Wed
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Thu"
                              />
                              &nbsp; &nbsp;Thu
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Fri"
                              />
                              &nbsp; &nbsp;Fri
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Sat"
                              />
                              &nbsp; &nbsp;Sat
                            </label>
                          </Col>
                          <Col md="1">
                            <label>
                              <Field
                                className="checkbox-input"
                                type="checkbox"
                                name="my_checked"
                                value="Sun"
                              />
                              &nbsp; &nbsp;Sun
                            </label>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="12">
                        {errors.my_checked && touched.my_checked && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.my_checked}
                          </div>
                        )}
                      </Col>
                      <Col md="12"></Col>
                      <Col md="6">
                        <Row>
                          <Col
                            md="12"
                            style={{ marginTop: "15px", marginBottom: "10px" }}
                          >
                            <Label for="">Seasonal Shift Duration</Label>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label for="">From</Label>
                              <Input
                                type="date"
                                placeholder={"Date Picker"}
                                name="startDate"
                                onChange={handleChange}
                                value={values.startDate}
                                onBlur={handleBlur}
                                error={errors.startDate}
                              />
                              {errors.startDate && touched.startDate && (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {errors.startDate}
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label for="">To</Label>
                              <Input
                                type="date"
                                placeholder={"Date Picker"}
                                name="endDate"
                                onChange={handleChange}
                                value={values.endDate}
                                onBlur={handleBlur}
                                error={errors.endDate}
                              />
                              {errors.endDate && touched.endDate && (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginTop: "0.5rem",
                                  }}
                                >
                                  {errors.endDate}
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="6">
                        <Row>
                          <Col
                            md="12"
                            style={{ marginTop: "15px", marginBottom: "10px" }}
                          >
                            <Label for="">Seasonal Shift Timing</Label>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label for="">Start Timing</Label>
                              <Input
                                type="time"
                                placeholder="Start Timing"
                                name="startTime"
                                onChange={handleChange}
                                value={values.startTime}
                                onBlur={handleBlur}
                                error={errors.startTime}
                              />
                              {errors.startTime && touched.startTime && (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginTop: "0.5rem",
                                  }}
                                  className={"formikError"}
                                >
                                  {errors.startTime}
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Label for="">End Timing</Label>
                              <Input
                                type="time"
                                placeholder="End Timing"
                                name="endTime"
                                onChange={handleChange}
                                value={values.endTime}
                                onBlur={handleBlur}
                                error={errors.endTime}
                              />
                              {errors.endTime && touched.endTime && (
                                <div
                                  style={{
                                    color: "red",
                                    fontSize: "14px",
                                    marginTop: "0.5rem",
                                  }}
                                  className={"formikError"}
                                >
                                  {errors.endTime}
                                </div>
                              )}
                            </FormGroup>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="12"></Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="">Early Time Factor</Label>
                          <Input
                            type="number"
                            onChange={(e) => setTimeFactor(e.target.value)}
                            // name="timeFactor"
                            // onChange={handleChange}
                            // value={values.timeFactor}
                            // onBlur={handleBlur}
                            // error={errors.timeFactor}
                          />
                          <Label>
                            Leaving before the shift ends in minutes
                          </Label>
                          {/* {errors.timeFactor && touched.timeFactor && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.timeFactor}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="">Overtime Grace Factor</Label>
                          <Input
                            type="number"
                            onChange={(e) => setGraceFactor(e.target.value)}
                            // name="graceFactor"
                            // onChange={handleChange}
                            // value={values.graceFactor}
                            // onBlur={handleBlur}
                            // error={errors.graceFactor}
                          />
                          <Label>Min After Ending the Shift</Label>
                          {/* {errors.graceFactor && touched.graceFactor && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.graceFactor}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Label for="">Late Factor</Label>
                          <Input
                            type="number"
                            onChange={(e) => setLateFactor(e.target.value)}
                            // name="lateFactor"
                            // onChange={handleChange}
                            // value={values.lateFactor}
                            // onBlur={handleBlur}
                            // error={errors.lateFactor}
                          />
                          <Label>Minutes after starting the shift</Label>
                          {/* {errors.lateFactor && touched.lateFactor && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.lateFactor}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <CustomInput
                            className="mb-3"
                            label={chk_label}
                            type="checkbox"
                            id="check10"
                            onChange={() => setCheckOvertime(!checkOvertime)}
                            checked={checkOvertime}
                            // name="checkOvertime"
                            // onChange={handleChange}
                            // value={values.checkOvertime}
                            // onBlur={handleBlur}
                            // error={errors.checkOvertime}
                          />
                          {/* {errors.checkOvertime && touched.checkOvertime && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.checkOvertime}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <CustomInput
                            className="mb-3"
                            label={chk_label1}
                            type="checkbox"
                            id="check11"
                            onChange={() => setCheckOvertime1(!checkOvertime1)}
                            checked={checkOvertime1}
                            // name="checkOvertime1"
                            // onChange={handleChange}
                            // value={values.checkOvertime1}
                            // onBlur={handleBlur}
                            // error={errors.checkOvertime1}
                          />
                          {/* {errors.checkOvertime1 && touched.checkOvertime1 && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.checkOvertime1}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100 p-4">
                    <h6
                      className="font-weight-medium"
                      style={{ marginBottom: 0, fontSize: "20px" }}
                    >
                      Break Bank
                    </h6>
                  </div>
                  <div className="p-4">
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <Label for="">Title</Label>
                          <Input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            // name="title"
                            // onChange={handleChange}
                            // value={values.title}
                            // onBlur={handleBlur}
                            // error={errors.title}
                          />
                          {/* {errors.title && touched.title && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.title}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Label for="">Duration (Hours)</Label>
                          <Input
                            type="number"
                            onChange={(e) => setDuration(e.target.value)}
                            // name="duration"
                            // onChange={handleChange}
                            // value={values.duration}
                            // onBlur={handleBlur}
                            // error={errors.duration}
                          />
                          {/* {errors.duration && touched.duration && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.duration}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Label for="">Frequency</Label>
                          <Input
                            type="number"
                            onChange={(e) => setFrequency(e.target.value)}
                            // name="frequency"
                            // onChange={handleChange}
                            // value={values.frequency}
                            // onBlur={handleBlur}
                            // error={errors.frequency}
                          />
                          {/* {errors.frequency && touched.frequency && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                              className={"formikError"}
                            >
                              {errors.frequency}
                            </div>
                          )} */}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="d-flex align-items-center justify-content-end w-100 p-4">
                    <Button
                      color="primary"
                      onClick={() => addBreakBank(values)}
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label ml-2">
                        Add Break Bank
                      </span>
                    </Button>
                  </div>
                  <div className="p-4">
                    <div
                      className="startAndEnd"
                      style={{ borderColor: "#D6D7DF" }}
                    >
                      <Table
                        responsive
                        className="table-alternate-spaced text-nowrap mb-0"
                        style={{ marginBottom: 0 }}
                      >
                        <thead
                          className="font-size-sm"
                          style={{ background: "#F3F5FD" }}
                        >
                          <tr>
                            <th className="text-left p-3 pl-4">Title</th>
                            <th className="text-center p-3">Break Duration</th>
                            <th className="text-center p-3">Frequency </th>
                            {/* <th className="text-center p-3">Action</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          {dataArray?.map((data, key) => {
                            // console.log("dataaaaaaaa", data);
                            return (
                              <tr key={key}>
                                <td className="text-left pl-4">
                                  <span>{data.name_break_bank}</span>
                                </td>
                                <td className="text-center">
                                  <span>{data.duration_break_bank}</span>
                                </td>
                                <td className="text-center">
                                  <span>{data.frequency_break_bank}</span>
                                </td>
                                {/* <td className="text-center">
                                  <span>Action</span>
                                </td> */}
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  <div className="divider mt-5 mb-4" />
                  <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
                    <Button className="btn btn-secondary">Cancel</Button>
                    <Button
                      color="primary1"
                      type="submit"
                      className="ml-auto"
                      // style={{
                      //   cursor: dataArray?.length === 0 && "not-allowed",
                      // }}
                      // disabled={dataArray?.length === 0}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default AddNewSeasonalShift;
