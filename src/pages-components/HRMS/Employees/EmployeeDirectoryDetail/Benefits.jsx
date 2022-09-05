import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Benefits = ({ data, employeeId }) => {
  const [viewModal, setViewModal] = useState(false);
  const viewToggle = () => setViewModal(!viewModal);
  const [factorData, setFactorData] = useState([]);

  const handleViewFactors = (data) => {
    setFactorData(data);
    viewToggle();
  };
  return (
    <>
      {/* <div className="p-5">
        <div className="panel-title">
          <b>
            {data?.length > 0 && data[2]?.gradeAndBenefits?.name_policy_group}
          </b>
        </div>
        <br />
        <div>
          {data?.length > 0 &&
            data[2]?.gradeAndBenefits?.mapping_policy_groups.map(
              (data, key) => {
                // console.log("hiiiiiii", data);
                return (
                  //   <div className="d-flex align-items-center" key={key}>
                  //     <p className="editing">{data.policy.name_policy}</p>
                  //   </div>
                  <div className="d-flex align-items-center" key={key}>
                    <p className="editing" style={{ width: "40px" }}>
                      {key + 1}:
                    </p>
                    <p className="editing">{data.policy.name_policy}</p>
                  </div>
                );
              }
            )}
        </div>
      </div> */}
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
          <tr>
            <th className="text-left p-3 pl-4">Name</th>
            <th className="text-center p-3">Adjustment</th>
            <th className="text-center p-3">Description</th>
            <th className="text-center p-3">Action </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data?.map((data, key) => {
              return (
                <tr key={key}>
                  <td className="text-left pl-4">
                    <span>{data.name_policy}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.policy_type_policy_type.name_policy_type}</span>
                  </td>
                  <td className="text-center">
                    <span>{data.description_policy}</span>
                  </td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={() => handleViewFactors(data.factors)}
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
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={viewModal}
        toggle={viewToggle}
      >
        <ModalHeader toggle={viewToggle}>Factors</ModalHeader>
        <ModalBody>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              {/* <tr>
                <th className="text-left p-3 pl-4">Code Factor</th>
                <th className="text-center p-3">Target</th>
                <th className="text-center p-3">Period</th>
                <th className="text-center p-3">Start Period</th>
                <th className="text-center p-3">End Period</th>
                <th className="text-center p-3">Adjustment</th>
                <th className="text-center p-3">Value</th>
                <th className="text-center p-3">Note</th>
              </tr> */}
            </thead>
            <tbody>
              {factorData?.length > 0 &&
                factorData?.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-left pl-4">
                        <span>
                          {data.code_factor ? data.code_factor : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.target_factor ? data.target_factor : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.period_factor ? data.period_factor : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.start_period_factor
                            ? data.start_period_factor
                            : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.end_period_factor
                            ? data.end_period_factor
                            : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.adjustment_factor
                            ? data.adjustment_factor
                            : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.value_factor ? data.value_factor : "Null"}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>
                          {data.note_factor ? data.note_factor : "Null"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </>
  );
};
export default Benefits;
