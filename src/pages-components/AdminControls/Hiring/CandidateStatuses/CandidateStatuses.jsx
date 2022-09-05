import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import "./CandidateStatuses.scss";

const CandidateStatuses = () => {
  return (
    <div id="candidateStatuses">
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
            <h1 style={{ color: "#3A3D65" }}>Candidate Statuses</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Candidate Statuses </b>
            </div>
          </div>
          <div className="divider" />
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#EBECF0" }}>
              <tr>
                <th className="text-left p-3 pl-4">Active Name</th>
                <th className="text-center p-3"> </th>
              </tr>
            </thead>
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Active Statuses</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Reviewed</span>
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
                  <span>Schedule Phone</span>
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
                  <span>Phone Screened</span>
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
                  <span>Interview</span>
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
              <span className="btn-wrapper--label">Add Status</span>
            </Button>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Not Hired Because...</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Not a Fit</span>
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
                  <span>Declined Offer</span>
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
              <span className="btn-wrapper--label">Add Status</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CandidateStatuses;
