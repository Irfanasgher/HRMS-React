import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  Input,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Form,
  FormGroup,
  Container,
} from "reactstrap";
import Switch from "rc-switch";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllLeaveType,
  createLeaveBank,
  getAllLeaveBank,
  UpdateLeaveBank,
  enableLeaveBank,
  disableLeaveBank,
} from "../../../../../actions";

import "./LeaveBank.scss";

const Assets = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [leaveName, setLeaveName] = useState("");
  const [code, setCode] = useState("");
  const [note, setNote] = useState("");
  const [totalDay, setTotalDay] = useState(null);
  const [leaveTypeListId, setLeaveTypeListId] = useState(null);

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [updateCode, setUpdateCode] = useState("");
  const [updateNote, setUpdateNote] = useState("");
  const [updateTotalDay, setUpdateTotalDay] = useState("");
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLeaveType());
    dispatch(getAllLeaveBank());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { leaveType, leaveBank } = useSelector((state) => state.LeaveReducer);

  const leaveTypeList = leaveType?.map((pdes) => {
    return {
      value: pdes.id_leave_type,
      label: pdes.name_leave_type,
    };
  });

  const handleleaveTypeList = (options) => {
    setLeaveTypeListId(options.value);
  };

  const handleAddLeaveBank = (e) => {
    e.preventDefault();
    const data = {
      leave_type_id: leaveTypeListId,
      name_leave_bank: leaveName,
      code_leave_bank: code,
      note_leave_bank: note,
      total_day_leave_bank: totalDay,
    };

    if (
      leaveTypeListId > 0 &&
      leaveName.length > 0 &&
      code.length > 0 &&
      note.length > 0 &&
      totalDay > 0
    ) {
      dispatch(createLeaveBank(data)).then(() => {
        dispatch(getAllLeaveBank());
      });
    } else {
      alert("Please Fill All Fields");
    }
    addModalToggle();
  };

  const handleUpdateToggle = (data) => {
    setName(data.name_leave_bank);
    setUpdateCode(data.code_leave_bank);
    setUpdateNote(data.note_leave_bank);
    setUpdateTotalDay(data.total_day_leave_bank);
    setId(data.id_leave_bank);

    updateToggle();
  };

  const updateDepartment = (e) => {
    e.preventDefault();

    const data = {
      name_leave_bank: name,
      code_leave_bank: updateCode,
      note_leave_bank: updateNote,
      total_day_leave_bank: updateTotalDay,
    };
    if (
      name.length > 0 &&
      updateCode.length > 0 &&
      updateNote.length > 0 &&
      updateTotalDay > 0
    ) {
      dispatch(UpdateLeaveBank(data, id));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.is_enable_leave_bank === true) {
      dispatch(disableLeaveBank(data?.id_leave_bank));
    } else {
      dispatch(enableLeaveBank(data?.id_leave_bank));
    }
  };

  return (
    <div id="assets">
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
            <h1 style={{ color: "#3A3D65" }}>Leave Bank</h1>
          </div>
        </div>
        <div>
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label ml-3">Add Leave Bank</span>
          </Button>
        </div>
      </div>
      <Modal
        zIndex={2000}
        centered
        scrollable
        isOpen={addModal}
        toggle={addModalToggle}
        size="lg"
      >
        <ModalHeader toggle={addModalToggle}>Add Leave Bank</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddLeaveBank}>
            <Row className="p-3">
              <Col md="6">
                <FormGroup>
                  <Label for="">Name</Label>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setLeaveName(e.target.value);
                    }}
                    placeholder="Enter Name..."
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Code</Label>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    placeholder="4506"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Note</Label>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                    placeholder="Note"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Total Days</Label>
                  <Input
                    type="number"
                    onChange={(e) => {
                      setTotalDay(e.target.value);
                    }}
                    placeholder="4"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Leave Type</Label>
                  <Select
                    options={leaveTypeList}
                    closeMenuOnSelect={true}
                    onChange={handleleaveTypeList}
                  />
                </FormGroup>
              </Col>
            </Row>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={addModalToggle}>
                Cancel
              </Button>{" "}
              <Button color="primary1" type="submit" className="ml-auto">
                Add
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Leave Bank </b>
            </div>
          </div>
          <div className="divider" />
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Total Days</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">Description</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {leaveBank?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_leave_bank}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.total_day_leave_bank}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.code_leave_bank}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.note_leave_bank}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          onClick={() => handleUpdateToggle(data)}
                          style={{ background: "#3B74F9", color: "#fff" }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "edit"]}
                            className="font-size-sm"
                          />
                        </Button>
                        <div className="ml-2">
                          <Switch
                            checked={data.is_enable_leave_bank}
                            onClick={() => handleToggle(data)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Modal
            zIndex={2000}
            centered
            scrollable
            isOpen={updateModal}
            toggle={updateToggle}
          >
            <ModalHeader toggle={updateToggle}>Update Asset</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDepartment}>
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Name
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            placeholder="Enter Name..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Code
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={updateCode}
                            onChange={(e) => {
                              setUpdateCode(e.target.value);
                            }}
                            placeholder="Serial #..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Note
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={updateNote}
                            onChange={(e) => {
                              setUpdateNote(e.target.value);
                            }}
                            placeholder="Value..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Total Days
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={updateTotalDay}
                            onChange={(e) => {
                              setUpdateTotalDay(e.target.value);
                            }}
                            placeholder="Value..."
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
                    onClick={updateToggle}
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
    </div>
  );
};
export default Assets;
