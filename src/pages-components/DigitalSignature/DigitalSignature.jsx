import React from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "rc-switch";
import { Table, Button } from "reactstrap";

import "./DigitalSignature.scss";

const DigitalSignature = () => {
  return (
    <div id="digitalSignature">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "building"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Digital Signature</h1>
          </div>
        </div>
        <div className="d-block d-md-flex align-items-center">
          {/* <Link to="/dashboard/addOrganization"> */}
          <Button
            // href="#/"
            size="m"
            className="m-2 py-3"
            //   onClick={addModalToggle}
            color="primary"
          >
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Request Signature</span>
          </Button>
          {/* </Link> */}
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Digital Signature</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead
              className="font-size-sm"
              style={{ background: "#F3F5FD" }}
            >
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Created on</th>
                <th className="text-center p-3">File</th>
                <th className="text-center p-3">Associated</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>03/05/2021</span>
                </td>

                <td className="text-center">
                  <span>Test1.PNG</span>
                </td>
                <td className="text-center">
                  <span>Clearance</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
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
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>03/05/2021</span>
                </td>

                <td className="text-center">
                  <span>Test1.PNG</span>
                </td>
                <td className="text-center">
                  <span>Clearance</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
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
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>03/05/2021</span>
                </td>

                <td className="text-center">
                  <span>Test1.PNG</span>
                </td>
                <td className="text-center">
                  <span>Clearance</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
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
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>03/05/2021</span>
                </td>

                <td className="text-center">
                  <span>Test1.PNG</span>
                </td>
                <td className="text-center">
                  <span>Clearance</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
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
          <div className="p-3 d-flex align-items-center justify-content-end my-4">
            <RcPagination
              //   prevIcon={"Previous"}
              //   selectComponentClass={Select}
              //   showQuickJumper
              //   showSizeChanger
              defaultPageSize={50}
              //   defaultCurrent={5}
              total={150}
              locale={localeInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DigitalSignature;
