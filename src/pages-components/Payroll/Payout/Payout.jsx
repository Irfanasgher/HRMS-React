import React from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, CustomInput } from "reactstrap";

import "./Payout.scss";

const Payout = () => {
  return (
    <div id="payout">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["fas", "money-bill-alt"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Payout</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Account JV </b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Title</th>
                <th className="text-center p-3">Account </th>
                <th className="text-center p-3">Debit</th>
                <th className="text-center p-3">Credit</th>
                <th className="text-center p-3">Employee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center">
                  <span>20</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <span>20</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center">
                  <span>20</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <span>20</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center">
                  <span>20</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Cash</span>
                </td>
                <td className="text-center">
                  <span>0257986540356</span>
                </td>
                <td className="text-center">
                  <CustomInput
                    type="checkbox"
                    id={21}
                    checked={true}
                    className="ml-3"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-center"></td>
                <td className="text-center">
                  <span>20</span>
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
export default Payout;
