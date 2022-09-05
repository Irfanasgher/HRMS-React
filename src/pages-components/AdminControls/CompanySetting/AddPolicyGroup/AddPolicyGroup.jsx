import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import DualListbox from "./DualListbox";
import { getAllPoliciesForDropDown } from "../../../../actions";
import "./AddPolicyGroup.scss";

const AddPolicyGroup = () => {
  const [groupName, setGroupName] = useState();
  const [grade, setGrade] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPoliciesForDropDown());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { dropDownPolicies } = useSelector((state) => state.PolicyReducer);

  return (
    <>
      <div id="addBenefitGroup">
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
              <h1 style={{ color: "#3A3D65" }}>Add Policy Group</h1>
            </div>
          </div>
        </div>
        <div className="card card-box m-5">
          <div className="card-header">
            <div className="card-header--title">
              <b>Add Policy Group</b>
            </div>
          </div>
          <div className="wizard-steps horizontal">
            <div className="p-4">
              <p
                className="editing mb-4"
                style={{ fontSize: "15px", marginBottom: "0" }}
              >
                Select the Employees you would like to add to this Group.
                Remember, Employees can only be in one Group at a time. If you
                move them from another Group, they will lose the benefits of
                their previous group.
              </p>
            </div>
            <div className="divider my-5" />
            <div className="p-4">
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Group Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name..."
                      onChange={(e) => {
                        setGroupName(e.target.value);
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Grade</Label>
                    <Input
                      type="text"
                      placeholder="Enter name..."
                      onChange={(e) => {
                        setGrade(e.target.value);
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="divider my-5" />
            <div className="p-4">
              <p
                className="editing mb-4"
                style={{ fontSize: "15px", marginBottom: "0" }}
              >
                Drag the Plans you would like to apply to this group. When you
                add the plan, we will ask you when employees in this Group will
                become eligible, as well as the employee cost for each coverage
                option.
              </p>
            </div>
            <div className="divider my-5" />
            <Row className="p-4">
              <Col md="12">
                <DualListbox
                  groupName={groupName}
                  grade={grade}
                  plan={dropDownPolicies}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPolicyGroup;
