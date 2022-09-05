import React from "react";
import { Table } from "reactstrap";

const EmployeeSalary = () => {
  return (
    <div className="pt-3 pb-3 tableContainer1">
      <div className="card-header pr-2">
        <div className="card-header--title p-3">
          <b>Employee Salary</b>
        </div>
      </div>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead
          className="font-size-sm"
          style={{ background: "#F3F5FD" }}
        >
          <tr>
            <th className="text-left p-3 pl-4">Month</th>
            <th className="text-center p-3">Pay Slip </th>
            <th className="text-center p-3">Salary </th>
            <th className="text-center p-3">Working Hours</th>
            <th className="text-center p-3">Overtime</th>
            <th className="text-center p-3">Tax</th>
            <th className="text-center p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left pl-4">
              <span>Mar</span>
            </td>
            <td className="text-center">
              <span>Monthly</span>
            </td>
            <td className="text-center">
              <span>25000</span>
            </td>
            <td className="text-center">
              <span>190 Hrs</span>
            </td>
            <td className="text-center">
              <span>20 Hrs</span>
            </td>
            <td className="text-center">
              <span>Exampt</span>
            </td>
            <td className="text-center">
              <span>Unpaid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>Mar</span>
            </td>
            <td className="text-center">
              <span>Monthly</span>
            </td>
            <td className="text-center">
              <span>25000</span>
            </td>
            <td className="text-center">
              <span>190 Hrs</span>
            </td>
            <td className="text-center">
              <span>20 Hrs</span>
            </td>
            <td className="text-center">
              <span>Exampt</span>
            </td>
            <td className="text-center">
              <span>Unpaid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>Mar</span>
            </td>
            <td className="text-center">
              <span>Monthly</span>
            </td>
            <td className="text-center">
              <span>25000</span>
            </td>
            <td className="text-center">
              <span>190 Hrs</span>
            </td>
            <td className="text-center">
              <span>20 Hrs</span>
            </td>
            <td className="text-center">
              <span>Exampt</span>
            </td>
            <td className="text-center">
              <span>Unpaid</span>
            </td>
          </tr>
          <tr>
            <td className="text-left pl-4">
              <span>Mar</span>
            </td>
            <td className="text-center">
              <span>Monthly</span>
            </td>
            <td className="text-center">
              <span>25000</span>
            </td>
            <td className="text-center">
              <span>190 Hrs</span>
            </td>
            <td className="text-center">
              <span>20 Hrs</span>
            </td>
            <td className="text-center">
              <span>Exampt</span>
            </td>
            <td className="text-center">
              <span>Unpaid</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default EmployeeSalary;
