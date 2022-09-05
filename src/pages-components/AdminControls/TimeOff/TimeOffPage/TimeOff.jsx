import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./TimeOff.scss";

const TimeOff = () => {
  return (
    <div id="timeOff">
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
            <h1 style={{ color: "#3A3D65" }}>Time Off</h1>
          </div>
        </div>
        <div>
          <Link to="/dashboard/Offboarding/NewOffboardingTask">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label ml-5">New Policy</span>
            </Button>
          </Link>
          <br />
          <br />
          <Link to="/dashboard/Offboarding/AddNewCategary">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">New Time Off Type</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Time Off </b>
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
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  COVID-19 Related Absence
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>
                    If COVID-19 Related Absence is flexible (e.g. unlimited) no
                    policy is needed.
                  </span>
                </td>
              </tr>
            </tbody>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "users"]}
                    style={{
                      fontSize: "14px",
                      color: "#4AADA4",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  FMLA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>
                    If FMLA is flexible (e.g. unlimited) no policy is needed.
                  </span>
                </td>
              </tr>
            </tbody>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "band-aid"]}
                    style={{
                      fontSize: "14px",
                      color: "#56AFDD",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  Sick
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>Sick Full-Time = 26 employees</span>
                </td>
              </tr>
            </tbody>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "tree"]}
                    style={{
                      fontSize: "16px",
                      color: "#B185DA",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  Vacation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>Vacation Full-Time = 26 employees</span>
                </td>
              </tr>
            </tbody>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "briefcase"]}
                    style={{
                      fontSize: "16px",
                      color: "#3D3E4B",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  Bereavement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>
                    This time off type is currently disabled. It cannot be
                    requested or reported on.
                  </span>
                </td>
              </tr>
            </tbody>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "briefcase"]}
                    style={{
                      fontSize: "16px",
                      color: "#3D3E4B",
                      marginRight: "10px",
                    }}
                    className="display-2"
                  />
                  Comp/In Lieu Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <FontAwesomeIcon
                    icon={["fas", "calendar-alt"]}
                    style={{
                      fontSize: "20px",
                      color: "#527A00",
                      marginRight: "10px",
                      visibility: "hidden",
                    }}
                    className="display-2"
                  />
                  <span>
                    This time off type is currently disabled. It cannot be
                    requested or reported on.
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default TimeOff;
