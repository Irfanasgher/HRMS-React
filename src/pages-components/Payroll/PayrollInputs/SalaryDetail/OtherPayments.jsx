import React from "react";
import { Table } from "reactstrap";

const OtherPayments = () => {
  return (
    <div className="pt-3 pb-3 tableContainer1">
      <div className="card-header pr-2">
        <div className="card-header--title p-3">
          <b>Other Payments</b>
        </div>
      </div>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead
          className="font-size-sm"
          style={{ background: "#F3F5FD" }}
        >
          <tr>
            <th className="text-left p-3 pl-4">Date</th>
            <th className="text-center p-3">Tittle</th>
            <th className="text-center p-3">Amount </th>
            <th className="text-center p-3">Type </th>
            <th className="text-center p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Provident Fund</span>
            </td>
            <td className="text-center">
              <span>1200</span>
            </td>
            <td className="text-center">
              <span>Adjustment</span>
            </td>
            <td className="text-center">
              <span>Paid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Provident Fund</span>
            </td>
            <td className="text-center">
              <span>1200</span>
            </td>
            <td className="text-center">
              <span>Adjustment</span>
            </td>
            <td className="text-center">
              <span>Paid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Provident Fund</span>
            </td>
            <td className="text-center">
              <span>1200</span>
            </td>
            <td className="text-center">
              <span>Adjustment</span>
            </td>
            <td className="text-center">
              <span>Paid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Provident Fund</span>
            </td>
            <td className="text-center">
              <span>1200</span>
            </td>
            <td className="text-center">
              <span>Adjustment</span>
            </td>
            <td className="text-center">
              <span>Paid</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default OtherPayments;
