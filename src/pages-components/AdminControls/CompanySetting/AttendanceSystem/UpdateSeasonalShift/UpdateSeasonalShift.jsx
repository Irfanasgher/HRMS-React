import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { AiFillClockCircle } from "react-icons/ai";
import "./UpdateSeasonalShift.scss";
import {
  UpdateSeasonalShiftData,
  UpdateShiftTimeSlot,
  UpdateShiftBreakBank,
} from "../../../../../actions";

const UpdateSeasonalShift = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  let chk_label1 = "Overtime is Applicable on this Shift";
  console.log("location", location);

  let finalDays = [];
  let codeSeasonal = location?.state?.data?.seasonal_shift?.code_seasonal_shift;
  let daysData = codeSeasonal?.split(",");
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  days.map((chk) =>
    finalDays.push({
      label: chk,
      value: daysData?.includes(chk) ? true : false,
    })
  );
  // console.log("finalDays", finalDays);

  let startDate = location?.state?.data?.seasonal_shift?.start_date_seasonal_shift?.split(
    "T"
  );
  let endDate = location?.state?.data?.seasonal_shift?.end_date_seasonal_shift?.split(
    "T"
  );

  const [updateBreakModal, setUpdateBreakModal] = useState(false);
  const updateBreakToggle = () => setUpdateBreakModal(!updateBreakModal);
  const [breakName, setBreakName] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [breakFrequency, setBreakFrequency] = useState(null);
  const [breakBankId, setBreakBankId] = useState(null);

  const handleUpdateBreakToggle = (data) => {
    setBreakName(data?.name_break_bank);
    setBreakTime(data?.duration_break_bank);
    setBreakFrequency(data?.frequency_break_bank);
    setBreakBankId(data?.id_break_bank);

    updateBreakToggle();
  };

  const updateBreakBank = (e) => {
    e.preventDefault();

    const data = {
      name_break_bank: breakName,
      duration_break_bank: breakTime,
      frequency_break_bank: breakFrequency,
    };
    if (breakName.length > 0 && breakTime.length > 0 && breakFrequency > 0) {
      dispatch(UpdateShiftBreakBank(data, breakBankId)).then((e) => {
        history.push({
          pathname: `/dashboard/AttendanceSystem`,
        });
      });
    } else {
      alert("All fields must be filled");
    }
    updateBreakToggle();
  };

  const [updateDurationModal, setUpdateDurationModal] = useState(false);
  const updateDurationToggle = () =>
    setUpdateDurationModal(!updateDurationModal);
  const [durationStartTime, setDurationStartTime] = useState("");
  const [durationEndTime, setDurationEndTime] = useState("");
  const [earlyFactor, setEarlyFactor] = useState(null);
  const [graceFactor, setGraceFactor] = useState(null);
  const [lateFactor, setLateFactor] = useState(null);
  const [overTime, setOverTime] = useState(false);
  const [idTimeSlot, setIdTimeSlot] = useState(false);

  const handleUpdateDurationToggle = (data) => {
    setDurationStartTime(data?.start_time_slot);
    setDurationEndTime(data?.end_time_slot);
    setEarlyFactor(data?.early_factor_time_slot);
    setGraceFactor(data?.grace_factor_overtime_time_slot);
    setLateFactor(data?.late_factor_time_slot);
    setOverTime(data?.is_over_time_slot);
    setIdTimeSlot(data?.id_time_slot);

    updateDurationToggle();
  };

  const updateTimeSlot = (e) => {
    e.preventDefault();

    const data = {
      start_time_slot: durationStartTime,
      end_time_slot: durationEndTime,
      early_factor_time_slot: earlyFactor,
      grace_factor_overtime_time_slot: graceFactor,
      late_factor_time_slot: lateFactor,
      is_over_time_slot: overTime,
    };

    // console.log("data", durationStartDate.length);
    if (
      durationStartTime.length > 0 &&
      durationEndTime.length > 0 &&
      earlyFactor > 0 &&
      graceFactor > 0 &&
      lateFactor > 0
    ) {
      dispatch(UpdateShiftTimeSlot(data, idTimeSlot)).then((e) => {
        history.push({
          pathname: `/dashboard/AttendanceSystem`,
        });
      });
    } else {
      alert("All fields must be filled");
    }
    updateDurationToggle();
  };

  const [updateNameModal, setUpdateNameModal] = useState(false);
  const updateNameToggle = () => setUpdateNameModal(!updateNameModal);
  const [name, setName] = useState("");
  const [durationStartDate, setDurationStartDate] = useState("");
  const [durationEndDate, setDurationEndDate] = useState("");
  const [nameId, setNameId] = useState("");

  const handleUpdateNameToggle = (data) => {
    let startDate1 = data?.start_date_seasonal_shift.split("T");
    let endDate1 = data?.end_date_seasonal_shift.split("T");
    setName(data?.name_seasonal_shift);
    setDurationStartDate(startDate1[0]);
    setDurationEndDate(endDate1[0]);
    setNameId(data?.id_seasonal_shift);

    updateNameToggle();
  };

  const handleArrayUpdate = (index, value) => {
    finalDays[index].value = !value;
    console.log("finalDays", finalDays);

    // res.map((chk, i) => arr.push(res[i].label));
    // console.log("arr", arr);
  };

  const updateName = (e) => {
    e.preventDefault();

    let res = finalDays.filter((ar) => {
      return ar.value === true;
    });

    let arr = [];

    for (let i = 0; i < res.length; i++) {
      arr.push(res[i].label);
    }
    let days = arr.toString();

    const data = {
      start_date_seasonal_shift: durationStartDate,
      end_date_seasonal_shift: durationEndDate,
      name_seasonal_shift: name,
      code_seasonal_shift: days,
    };

    console.log("data on submit", data);
    if (
      durationStartDate.length > 0 &&
      durationEndDate.length > 0 &&
      name.length > 0 &&
      days.length > 0
    ) {
      dispatch(UpdateSeasonalShiftData(data, nameId)).then((e) => {
        history.push({
          pathname: `/dashboard/AttendanceSystem`,
        });
      });
    } else {
      alert("All fields must be filled");
    }
    updateNameToggle();
  };

  console.log("finalDays line 210", finalDays);
  return (
    <div id="addNewSeasonalShift">
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateNameModal}
        toggle={updateNameToggle}
      >
        <ModalHeader toggle={updateNameToggle}>
          Seasonal Shift Duration
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateName}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label for="" className="font-weight-bold">
                        Name
                      </Label>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        From
                      </Label>
                      <Input
                        type="date"
                        value={durationStartDate}
                        onChange={(e) => {
                          setDurationStartDate(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        To
                      </Label>
                      <Input
                        type="date"
                        value={durationEndDate}
                        onChange={(e) => {
                          setDurationEndDate(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col
                    md="12"
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  >
                    <Label for="">Selected Days</Label>
                  </Col>
                  <Col md="12">
                    <Row
                      role="group"
                      className="selec-dat"
                      aria-labelledby="checkbox-group"
                    >
                      {finalDays?.map((data, key) => (
                        <Col md="1" key={key}>
                          <FormGroup>
                            <CustomInput
                              className="mb-3"
                              label={data.label}
                              type="checkbox"
                              id={data.label}
                              // readOnly
                              defaultChecked={data.value}
                              onClick={() => handleArrayUpdate(key, data.value)}
                            />
                          </FormGroup>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button
                color="link"
                className="btn-link-dark"
                onClick={updateNameToggle}
              >
                Close
              </Button>{" "}
              <Button color="primary" type="submit" className="ml-auto">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateDurationModal}
        toggle={updateDurationToggle}
      >
        <ModalHeader toggle={updateDurationToggle}>
          Seasonal Shift Duration
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateTimeSlot}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Start Timing
                      </Label>
                      <Input
                        type="time"
                        value={durationStartTime}
                        onChange={(e) => {
                          setDurationStartTime(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        End Timing
                      </Label>
                      <Input
                        type="time"
                        value={durationEndTime}
                        onChange={(e) => {
                          setDurationEndTime(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="" className="font-weight-bold">
                        Early Time Factor
                      </Label>
                      <Input
                        type="number"
                        value={earlyFactor}
                        onChange={(e) => {
                          setEarlyFactor(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="" className="font-weight-bold">
                        Overtime Grace Factor
                      </Label>
                      <Input
                        type="number"
                        value={graceFactor}
                        onChange={(e) => {
                          setGraceFactor(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="" className="font-weight-bold">
                        Late Factor
                      </Label>
                      <Input
                        type="number"
                        value={lateFactor}
                        onChange={(e) => {
                          setLateFactor(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckbox"
                        defaultChecked={overTime}
                        label={chk_label1}
                        className="mb-3"
                        onChange={() => {
                          setOverTime(!overTime);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button
                color="link"
                className="btn-link-dark"
                onClick={updateDurationToggle}
              >
                Close
              </Button>{" "}
              <Button color="primary" type="submit" className="ml-auto">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
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
            <h1 style={{ color: "#3A3D65" }}>Update Seasonal Shift</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Form>
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
              <Row>
                <Col
                  md="12"
                  style={{ marginTop: "15px", marginBottom: "15px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6
                      className="font-weight-medium"
                      style={{ marginBottom: 0, fontSize: "20px" }}
                    >
                      Seasonal Shift
                    </h6>
                    <div
                      className="editContainer"
                      onClick={() =>
                        handleUpdateNameToggle(
                          location?.state?.data?.seasonal_shift
                        )
                      }
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={["fas", "edit"]}
                          color={"#3b3e66"}
                        />
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Shift Name</Label>
                    <Input
                      type="text"
                      readOnly
                      defaultValue={
                        location?.state?.data?.seasonal_shift
                          ?.name_seasonal_shift
                      }
                    />
                  </FormGroup>
                </Col>
                <Col
                  md="12"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <Label for="">Seasonal Shift Duration</Label>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label for="">From</Label>
                    <Input
                      type="date"
                      readOnly
                      defaultValue={startDate?.length > 0 && startDate[0]}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">To</Label>
                    <Input
                      type="date"
                      readOnly
                      defaultValue={endDate?.length > 0 && endDate[0]}
                    />
                  </FormGroup>
                </Col>
                <Col md="8"></Col>
                <Col
                  md="12"
                  style={{ marginTop: "15px", marginBottom: "15px" }}
                >
                  <Label for="">Selected Days</Label>
                </Col>
                <Col md="12">
                  <Row
                    role="group"
                    className="selec-dat"
                    aria-labelledby="checkbox-group"
                  >
                    {finalDays?.map((data, key) => (
                      <Col md="1" key={key}>
                        <FormGroup>
                          <CustomInput
                            className="mb-3"
                            label={data.label}
                            type="checkbox"
                            id={key}
                            readOnly
                            checked={data.value}
                          />
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>
                </Col>
                <Col md="12"></Col>
                <Col
                  md="12"
                  style={{ marginTop: "15px", marginBottom: "15px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="information">
                      <Label for="">Seasonal Shift Timing</Label>
                    </div>
                    <div
                      className="editContainer"
                      onClick={() =>
                        handleUpdateDurationToggle(location?.state?.data)
                      }
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon
                          icon={["fas", "edit"]}
                          color={"#3b3e66"}
                        />
                      </span>
                    </div>
                  </div>
                </Col>

                <Col md="6">
                  <FormGroup>
                    <Label for="">Start Timing</Label>
                    <Input
                      type="time"
                      readOnly
                      defaultValue={location?.state?.data?.start_time_slot}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">End Timing</Label>
                    <Input
                      type="time"
                      readOnly
                      defaultValue={location?.state?.data?.end_time_slot}
                    />
                  </FormGroup>
                </Col>
                <Col md="12"></Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Early Time Factor</Label>
                    <Input
                      type="number"
                      readOnly
                      defaultValue={
                        location?.state?.data?.early_factor_time_slot
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Overtime Grace Factor</Label>
                    <Input
                      type="number"
                      readOnly
                      defaultValue={
                        location?.state?.data?.grace_factor_overtime_time_slot
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Late Factor</Label>
                    <Input
                      type="number"
                      readOnly
                      defaultValue={
                        location?.state?.data?.late_factor_time_slot
                      }
                    />
                  </FormGroup>
                </Col>

                <Col md="12">
                  <FormGroup>
                    <CustomInput
                      className="mb-3"
                      label={chk_label1}
                      type="checkbox"
                      id="check11"
                      readOnly
                      checked={location?.state?.data?.is_over_time_slot}
                    />
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
              <div className="startAndEnd" style={{ borderColor: "#D6D7DF" }}>
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
                      <th className="text-center p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {location?.state?.data?.break_banks?.map((data, key) => {
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
                          <td className="text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              <Button
                                onClick={() => handleUpdateBreakToggle(data)}
                                style={{ background: "#3B74F9", color: "#fff" }}
                                className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                              >
                                <FontAwesomeIcon
                                  icon={["far", "edit"]}
                                  className="font-size-sm"
                                />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="divider mt-5 mb-4" />
          </div>
        </Form>
        <Modal
          zIndex={2000}
          // size="xl"
          centered
          scrollable
          isOpen={updateBreakModal}
          toggle={updateBreakToggle}
        >
          <ModalHeader toggle={updateBreakToggle}>
            Update Break Banking
          </ModalHeader>
          <ModalBody>
            <form onSubmit={updateBreakBank}>
              <Container>
                <div className="py-4">
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Title
                        </Label>
                        <Input
                          type="text"
                          value={breakName}
                          onChange={(e) => {
                            setBreakName(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Duration
                        </Label>
                        <Input
                          type="time"
                          value={breakTime}
                          onChange={(e) => {
                            setBreakTime(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="font-weight-bold" for="">
                          Frequency
                        </Label>
                        <Input
                          type="number"
                          value={breakFrequency}
                          onChange={(e) => {
                            setBreakFrequency(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="divider mt-5 mb-4" />

              <ModalFooter>
                <Button
                  color="link"
                  className="btn-link-dark"
                  onClick={updateBreakToggle}
                >
                  Close
                </Button>{" "}
                <Button color="primary" type="submit" className="ml-auto">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
export default UpdateSeasonalShift;
