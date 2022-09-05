import React from "react";
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
} from "reactstrap";
import "./JobHistory.scss";

const JobHistory = () => {
  return (
    <div id="jobHistory">
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
            <h1 style={{ color: "#3A3D65" }}>Job History Fields</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Job History Fields</b>
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
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Designation</span>
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
                  <span>Duration</span>
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
                  <span>Employment Status</span>
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
                  <span>Title</span>
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
                  <span>Salary</span>
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
                  <span>Job Responsability</span>
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
export default JobHistory;
