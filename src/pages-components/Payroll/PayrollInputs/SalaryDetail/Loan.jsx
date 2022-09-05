import React from "react";
import { Table } from "reactstrap";

const Loan = () => {
  return (
    <div className="pt-3 pb-3 tableContainer1">
      <div className="card-header pr-2">
        <div className="card-header--title p-3">
          <b>Loan</b>
        </div>
      </div>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead
          className="font-size-sm"
          style={{ background: "#F3F5FD" }}
        >
          <tr>
            <th className="text-left p-3 pl-4">Date</th>
            <th className="text-center p-3">Loan Type </th>
            <th className="text-center p-3">Amount </th>
            <th className="text-center p-3">Installment</th>
            <th className="text-center p-3">Loan Time</th>
            <th className="text-center p-3">Paid</th>
            <th className="text-center p-3">Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Medical Loan</span>
            </td>
            <td className="text-center">
              <span>2,00000</span>
            </td>
            <td className="text-center">
              <span>20000</span>
            </td>
            <td className="text-center">
              <span>1 Year</span>
            </td>
            <td className="text-center">
              <span>1,40000</span>
            </td>
            <td className="text-center">
              <span>60,000</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Medical Loan</span>
            </td>
            <td className="text-center">
              <span>2,00000</span>
            </td>
            <td className="text-center">
              <span>20000</span>
            </td>
            <td className="text-center">
              <span>1 Year</span>
            </td>
            <td className="text-center">
              <span>1,40000</span>
            </td>
            <td className="text-center">
              <span>60,000</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Medical Loan</span>
            </td>
            <td className="text-center">
              <span>2,00000</span>
            </td>
            <td className="text-center">
              <span>20000</span>
            </td>
            <td className="text-center">
              <span>1 Year</span>
            </td>
            <td className="text-center">
              <span>1,40000</span>
            </td>
            <td className="text-center">
              <span>60,000</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>June - 2021</span>
            </td>
            <td className="text-center">
              <span>Medical Loan</span>
            </td>
            <td className="text-center">
              <span>2,00000</span>
            </td>
            <td className="text-center">
              <span>20000</span>
            </td>
            <td className="text-center">
              <span>1 Year</span>
            </td>
            <td className="text-center">
              <span>1,40000</span>
            </td>
            <td className="text-center">
              <span>60,000</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Loan;
