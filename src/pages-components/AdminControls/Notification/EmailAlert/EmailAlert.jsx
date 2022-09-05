import React, { useState } from "react";
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
  CustomInput,
} from "reactstrap";
import { Link } from "react-router-dom";
import Switch from "rc-switch";
import "./EmailAlert.scss";

const EmailAlert = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  return (
    <div id="emailAlert">
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
            <h1 style={{ color: "#3A3D65" }}>Email Alert</h1>
          </div>
        </div>
        <div>
          <Link to="/dashboard/EmailAlert/AddEmailTemplate">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">New Email Template</span>
            </Button>
          </Link>
          <br />
          <br />
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label ml-5">New Categary</span>
          </Button>
        </div>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="lg"
        >
          <ModalHeader toggle={addModalToggle}>
            Add New Email Category
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Title</Label>
                    <Input
                      type="text"
                      name="companyName"
                      //   placeholder="ABCDEF"
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label for="">Associated With</Label>
                  </FormGroup>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="3" style={{ alignSelf: "center" }}>
                      <CustomInput
                        checked={true}
                        type="checkbox"
                        id={19}
                        className="align-self-start"
                        label="Employee"
                      />
                    </Col>
                    <Col md="3" style={{ alignSelf: "center" }}>
                      <CustomInput
                        type="checkbox"
                        id={20}
                        className="align-self-start"
                        label="Employment"
                      />
                    </Col>
                    <Col md="2" style={{ alignSelf: "center" }}>
                      <CustomInput
                        type="checkbox"
                        id={21}
                        className="align-self-start"
                        label="Custom"
                      />
                    </Col>
                    <Col md="4" style={{ alignSelf: "center" }}>
                      <CustomInput
                        type="checkbox"
                        id={22}
                        className="align-self-start"
                        label="Time & Attendance"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={addModalToggle}>
                Cancel
              </Button>
              <Button color="primary1" type="submit" className="ml-auto">
                Add
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Email Alert </b>
            </div>
          </div>
          <div className="divider" />
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            // style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Title</th>
                <th className="text-center p-3">Send To</th>
                <th className="text-center p-3">Eligibility</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Birthday</span>
                </td>
                <td className="text-center">
                  <span>Employee</span>
                </td>
                <td className="text-center">
                  <span>All Employee</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
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
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Birthday</span>
                </td>
                <td className="text-center">
                  <span>Employee</span>
                </td>
                <td className="text-center">
                  <span>All Employee</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
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
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Birthday</span>
                </td>
                <td className="text-center">
                  <span>Employee</span>
                </td>
                <td className="text-center">
                  <span>All Employee</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
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
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Birthday</span>
                </td>
                <td className="text-center">
                  <span>Employee</span>
                </td>
                <td className="text-center">
                  <span>All Employee</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
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
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default EmailAlert;
