import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Table,
  Button,
} from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPlans, GetAllPolicyGroup } from "../../../../actions";

import AccordianData from "./AccordianData";
import "./Policies.scss";

const Policies = () => {
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPlans());
    dispatch(GetAllPolicyGroup());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { policyGroup } = useSelector((state) => state.PlanReducer);
  const { dropDownPolicies } = useSelector((state) => state.PolicyReducer);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div id="policies">
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
            <h1 style={{ color: "#3A3D65" }}>Policies</h1>
          </div>
        </div>
        <Link to="/dashboard/Policies/AddNewPolicyGroup">
          <Button color="primary">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add New Policy Type</span>
          </Button>
        </Link>
      </div>
      <Row className="p-5">
        <Col lg="12">
          <Card className="shadow-xxl mb-5" style={{ paddingTop: "30px" }}>
            <div className="nav-tabs-success">
              <Nav tabs>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">Policies</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Policy Group
                    </span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1" style={{ marginTop: "30px" }}>
                <Table
                  responsive
                  className="table-alternate-spaced text-nowrap mb-0"
                >
                  <thead
                    className="font-size-sm"
                    style={{ background: "#F3F5FD" }}
                  >
                    <tr>
                      <th className="text-left p-3 pl-4">Insurance Plan</th>
                      <th className="text-center p-3">Descriptiopn</th>
                      <th className="text-center p-3">Created By </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dropDownPolicies?.map((data, key) => {
                      return (
                        <tr key={key}>
                          <td className="text-left pl-4">
                            <span>{data.name_policy}</span>
                            {/* <br /> */}
                            {/* <span>200k Per Year</span> */}
                          </td>
                          <td className="text-center">
                            <span>{data.description_policy}</span>
                          </td>
                          <td className="text-center">
                            <span>
                              {data.createdBy}
                              {/* Employee + <br />
                              Employee Spouee */}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="p-5">
                  <Link to="/dashboard/Policies/AddNewPolicy">
                    <Button color="primary">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label">Add More</span>
                    </Button>
                  </Link>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <AccordianData data={policyGroup} />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Policies;
