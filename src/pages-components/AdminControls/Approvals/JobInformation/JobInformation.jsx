import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Switch from "rc-switch";
import "./JobInformation.scss";

const JobInformation = () => {
  return (
    <div id="jobInformation">
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
            <h1 style={{ color: "#3A3D65" }}>Job Information</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Job Information</b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-5">
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Heebo",
                color: "#3B4064",
              }}
            >
              Use this approval for requesting an employment status change for
              an employee. The approval form contains all fields from the
              Employment Status table. Additional fields may also be added.
            </p>
            <Link to="/dashboard/JobInformation/AddNewJobInformation">
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">
                  Add New Job Information
                </span>
              </Button>
            </Link>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            // style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Title</th>
                <th className="text-center p-3">Created By</th>
                <th className="text-center p-3">Fields</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Fuel Compensation</span>
                </td>
                <td className="text-center">
                  <span>Admin</span>
                </td>
                <td className="text-center">
                  <span>9 Fields</span>
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
                  <span>Fuel Compensation</span>
                </td>
                <td className="text-center">
                  <span>Admin</span>
                </td>
                <td className="text-center">
                  <span>9 Fields</span>
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
                  <span>Fuel Compensation</span>
                </td>
                <td className="text-center">
                  <span>Admin</span>
                </td>
                <td className="text-center">
                  <span>9 Fields</span>
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
                  <span>Fuel Compensation</span>
                </td>
                <td className="text-center">
                  <span>Admin</span>
                </td>
                <td className="text-center">
                  <span>9 Fields</span>
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
export default JobInformation;
