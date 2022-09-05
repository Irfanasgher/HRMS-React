import React, { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Card,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Button,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import EmployeeSalary from "./EmployeeSalary";
import Allowance from "./Allowance";
import Commission from "./Commission";
import Loan from "./Loan";
import Deduction from "./Deduction";
import Overtime from "./Overtime";
import OtherPayments from "./OtherPayments";
import "./SalaryDetail.scss";

const SalaryDetail = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div id="salaryDetail">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="editContainer">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={["fas", "edit"]} color={"#fff"} />
          </span>
        </div>
        {/* {getAllCompanyListData?.companyDetail?.name_company} */}
        <div className="d-flex align-items-center">
          <div className="box d-flex align-items-center justify-content-center">
            <img src="/logo-2.png" alt="logo" />
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1 className="organizationName">Aneeb Ahmad</h1>
            <div className="d-flex align-items-center">
              <p className="owner">Employee Code:</p>
              <p className="owner ml-1">536541</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Designation :</p>
              <p className="owner ml-1">PM</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Status: </p>
              <p className="owner ml-1">Active</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Department:</p>
              <p className="owner ml-1">Content Creation</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <p className="owner">Father Name:</p>
            <p className="owner ml-1"> M. Ahmad</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Joining Date:</p>
            <p className="owner ml-1">28-2-2018</p>
          </div>

          <UncontrolledButtonDropdown className="m-2">
            <Button
              href="#/"
              size="m"
              className="py-3"
              // onClick={toggle2}
              // color="primary"
              style={{
                backgroundColor: "#00C74E",
                color: "#fff",
                borderColor: "#00C74E",
                boxShadow: "none",
              }}
            >
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "file-download"]} />
              </span>
              <span className="btn-wrapper--label ml-3">Download</span>
              {/* <span className="btn-wrapper--icon ml-3">
                <FontAwesomeIcon icon={["fas", "angle-down"]} />
              </span> */}
            </Button>
            <DropdownToggle
              caret
              // color="primary"
              style={{
                backgroundColor: "#00C74E",
                color: "#fff",
                borderColor: "#00C74E",
                boxShadow: "none",
              }}
            >
              <span className="sr-only">Split button!</span>
            </DropdownToggle>
            <DropdownMenu right>
              <div role="menuitem">
                <a
                  // to="/dashboard/AddNewEmployee"
                  href="#/"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                  // onClick={(e) => e.preventDefault()}
                >
                  Employee Card
                </a>
              </div>
              <div role="menuitem">
                <a
                  className="dropdown-item"
                  href="#/"
                  // onClick={updateModalToggle}
                >
                  Employee Doc
                </a>
              </div>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>
      <Row className="p-5">
        <Col lg="12">
          <Card
            className="shadow-xxl mb-5"
            style={{ paddingTop: "30px", paddingBottom: "20px" }}
          >
            <div className="nav-tabs-success">
              <Nav tabs>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Employee Salary
                    </span>
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
                      Allowance
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Commission
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">Loan</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "5" })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Deduction
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "6" })}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">Overtime</span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "7" })}
                    onClick={() => {
                      toggle("7");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Other payments
                    </span>
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <EmployeeSalary />
              </TabPane>
              <TabPane tabId="2">
                <Allowance />
              </TabPane>
              <TabPane tabId="3">
                <Commission />
              </TabPane>
              <TabPane tabId="4">
                <Loan />
              </TabPane>
              <TabPane tabId="5">
                <Deduction />
              </TabPane>
              <TabPane tabId="6">
                <Overtime />
              </TabPane>
              <TabPane tabId="7">
                <OtherPayments />
              </TabPane>
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default SalaryDetail;
