import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Offboarding.scss";

const Offboarding = () => {
  return (
    <div id="offboarding">
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
            <h1 style={{ color: "#3A3D65" }}>Offboarding</h1>
          </div>
        </div>
        <div>
          <Link to="/dashboard/Offboarding/NewOffboardingTask">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label ml-5">New Task</span>
            </Button>
          </Link>
          <br />
          <br />
          <Link to="/dashboard/Offboarding/AddNewCategary">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label ml-3">New Categary</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Offboarding </b>
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
                <th className="text-left p-3 pl-4">Task Name</th>
                <th className="text-center p-3">Assigned To </th>
                <th className="text-center p-3">Due</th>
                <th className="text-center p-3"></th>
              </tr>
            </thead>
            <div style={{ margin: "20px" }}>
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">New Task</span>
              </Button>
            </div>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Human Resources</th>
                <th className="text-center p-3"></th>
                <th className="text-center p-3"></th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Collect Employee ID Badge</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Schedule Interview</span>
                </td>
                <td className="text-center">
                  <span>Eric Asture </span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Not Qualified</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Over Qualified</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Hired Elsewhere</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={{ margin: "20px" }}>
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">New Task</span>
            </Button>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">IT</th>
                <th className="text-center p-3"></th>
                <th className="text-center p-3"></th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Disable Email Access</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Disable Access to Internal D</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Disable Access to Other</span>
                </td>
                <td className="text-center">
                  <span>Ashley Adams</span>
                </td>
                <td className="text-center">
                  <span>Due on termination date</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div style={{ margin: "20px" }}>
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">New Task</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offboarding;
