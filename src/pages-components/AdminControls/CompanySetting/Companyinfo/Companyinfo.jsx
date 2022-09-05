import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./Companyinfo.scss";

const Companyinfo = () => {
  return (
    <div id="companyinfo">
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
            <h1 style={{ color: "#3A3D65" }}>Organization Info</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Organization Info </b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Company</th>
                <th className="text-center p-3">Email</th>
                <th className="text-center p-3">Country</th>
                <th className="text-center p-3">City</th>
                <th className="text-center p-3">Ph#</th>
                <th className="text-center p-3">Website </th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <Link to="/dashboard/Companyinfo/CompanyinfoDetail">
                    <span style={{ textDecoration: "underline" }}>Test 1</span>
                  </Link>
                </td>
                <td className="text-center">
                  <span>Test@gmail.com</span>
                </td>

                <td className="text-center">
                  <span>Pakistan</span>
                </td>
                <td className="text-center">
                  <span>LHR</span>
                </td>
                <td className="text-center">
                  <span>0300 0000000</span>
                </td>
                <td className="text-center">
                  <span>www.test.com</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
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
                  <Link to="/dashboard/Companyinfo/CompanyinfoDetail">
                    <span style={{ textDecoration: "underline" }}>Test 1</span>
                  </Link>
                </td>
                <td className="text-center">
                  <span>Test@gmail.com</span>
                </td>

                <td className="text-center">
                  <span>Pakistan</span>
                </td>
                <td className="text-center">
                  <span>LHR</span>
                </td>
                <td className="text-center">
                  <span>0300 0000000</span>
                </td>
                <td className="text-center">
                  <span>www.test.com</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
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
                  <Link to="/dashboard/Companyinfo/CompanyinfoDetail">
                    <span style={{ textDecoration: "underline" }}>Test 1</span>
                  </Link>
                </td>
                <td className="text-center">
                  <span>Test@gmail.com</span>
                </td>

                <td className="text-center">
                  <span>Pakistan</span>
                </td>
                <td className="text-center">
                  <span>LHR</span>
                </td>
                <td className="text-center">
                  <span>0300 0000000</span>
                </td>
                <td className="text-center">
                  <span>www.test.com</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
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
                  <Link to="/dashboard/Companyinfo/CompanyinfoDetail">
                    <span style={{ textDecoration: "underline" }}>Test 1</span>
                  </Link>
                </td>
                <td className="text-center">
                  <span>Test@gmail.com</span>
                </td>

                <td className="text-center">
                  <span>Pakistan</span>
                </td>
                <td className="text-center">
                  <span>LHR</span>
                </td>
                <td className="text-center">
                  <span>0300 0000000</span>
                </td>
                <td className="text-center">
                  <span>www.test.com</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
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
export default Companyinfo;
