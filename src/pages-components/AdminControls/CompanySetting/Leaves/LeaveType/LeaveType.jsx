import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLeaveType,
  createLeaveType,
  disableAssetTypeByID,
  enableAssetTypeByID,
} from "../../../../../actions";

import "./LeaveType.scss";

const LeaveType = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLeaveType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { leaveType } = useSelector((state) => state.LeaveReducer);

  const addLeave = () => {
    const data = {
      name_leave_type: name,
    };
    if (name.length > 0) {
      dispatch(createLeaveType(data)).then(() => {
        dispatch(getAllLeaveType());
      });
    } else {
      alert("Please Fill Name Field");
    }
    setName("");
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableAssetTypeByID(data?.id_leave_type));
    } else {
      dispatch(enableAssetTypeByID(data?.id_leave_type));
    }
  };

  console.log("leaveType", leaveType);
  return (
    <div id="leaveType">
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
            <h1 style={{ color: "#3A3D65" }}>Leave Type</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Leave Type</b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input
                    placeholder="Add New Item"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputGroupAddon
                    addonType="append"
                    onClick={addLeave}
                    style={{ cursor: "pointer" }}
                  >
                    <InputGroupText>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label ml-2">Add</span>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {leaveType?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_leave_type}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ml-2">
                          <Switch
                            checked={data.is_enable}
                            onClick={() => handleToggle(data)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default LeaveType;
