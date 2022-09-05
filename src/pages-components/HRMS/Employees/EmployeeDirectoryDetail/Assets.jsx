import React from "react";
import { Table } from "reactstrap";

const Assets = ({ data }) => {
  console.log("dataaaaaaaaa", data);
  return (
    <>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
          <tr>
            <th className="text-left p-3 pl-4">Asset Name</th>
            <th className="text-center p-3">Asset ID</th>
            <th className="text-center p-3">Serial# </th>
            <th className="text-center p-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data?.map((data, key) => {
              return (
                <tr key={key}>
                  <td className="text-left pl-4">
                    <span>{data.name_asset}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.id_asset}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.serial_number_asset}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.detail_asset}</span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};
export default Assets;
