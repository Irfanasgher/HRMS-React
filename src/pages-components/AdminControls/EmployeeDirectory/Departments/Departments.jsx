import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
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
import "./Departments.scss";

const Departments = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  return (
    <div id="departments">
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
            <h1 style={{ color: "#3A3D65" }}>Departments</h1>
          </div>
        </div>
        <Button color="primary" onClick={addModalToggle}>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </span>
          <span className="btn-wrapper--label">Add Grade</span>
        </Button>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="lg"
        >
          <ModalHeader toggle={addModalToggle}>Add Department</ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Location</Label>
                    <Input
                      type="text"
                      name="companyName"
                      //   placeholder="ABCDEF"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Title</Label>
                    <Input
                      type="text"
                      name="companyName"
                      //   placeholder="450640"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Code</Label>
                    <Input
                      type="text"
                      name="companyName"
                      //   placeholder="ABCDEF"
                    />
                  </FormGroup>
                </Col>
                <Col md="6" style={{ alignSelf: "center" }}>
                  <CustomInput
                    checked={true}
                    type="checkbox"
                    id={20}
                    className="align-self-start"
                    label="is Ative"
                  />
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
              <b>Departments </b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input placeholder="Add New Item" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label ml-2">Add</span>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            // style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Department</th>
                <th className="text-center p-3">Code </th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Customer Support</span>
                </td>
                <td className="text-center p-3">
                  <span>01</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>IT</span>
                </td>
                <td className="text-center p-3">
                  <span>02</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Tech Support</span>
                </td>
                <td className="text-center p-3">
                  <span>03</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Finance</span>
                </td>
                <td className="text-center p-3">
                  <span>04</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Human Resources</span>
                </td>
                <td className="text-center p-3">
                  <span>05</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Marketing</span>
                </td>
                <td className="text-center p-3">
                  <span>06</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Sales</span>
                </td>
                <td className="text-center p-3">
                  <span>07</span>
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
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
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
export default Departments;
