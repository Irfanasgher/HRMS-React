import React, { useState, useEffect } from "react";
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  Container,
} from "reactstrap";
import { NavLink as NavLinkStrap } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PersonalInformation from "./PersonalInformation";
import EmploymentInformation from "./EmploymentInformation";
import Benefits from "./Benefits";
import Experience from "./Experience";
import Education from "./Education";
import Dependent from "./Dependent";
import Emergency from "./Emergency";
import Assets from "./Assets";
import "./EmployeeDirectoryDetail.scss";
import { GetEmployeeListById, UpdateEmployeeByID } from "../../../../actions";

const EmployeeDirectoryDetail = (props) => {
  const [data, setData] = useState({});

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [code, setCode] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  const employeeId = props.match.params.id;
  const [activeTab, setActiveTab] = useState("1");

  // useEffect(() => {
  //   console.log("hit aaaaaaaaaaaaaaaaaaaaaaaaaa");
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetEmployeeListById(employeeId));
  }, [employeeId]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { singleEmployee } = useSelector((state) => state.EmployeeReducer);

  useEffect(() => {
    setData(singleEmployee?.length > 0 && singleEmployee[4]?.empInfo);
  }, [singleEmployee]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleUpdateToggle = (data) => {
    setName(data[4]?.empInfo?.first_name_employee_info);
    setLastName(data[4]?.empInfo?.last_name_employee_info);
    setFatherName(data[4]?.empInfo?.father_fullname_employee_info);
    setCode(data[4]?.empInfo?.code_employee_info);
    setJoiningDate(data[4]?.empInfo?.joining_date_employee_info);

    updateToggle();
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    const data = {
      first_name_employee_info: name,
      last_name_employee_info: lastName,
      father_fullname_employee_info: fatherName,
      code_employee_info: code,
      joining_date_employee_info: joiningDate,
    };
    if (
      name.length > 0 &&
      lastName.length > 0 &&
      fatherName.length > 0 &&
      code.length > 0 &&
      joiningDate.length > 0
    ) {
      dispatch(UpdateEmployeeByID(data, employeeId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  console.log("singleEmployee", singleEmployee);
  return (
    <div id="employeeDirectoryDetail">
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateToggle}
      >
        <ModalHeader toggle={updateToggle}>Update Employee</ModalHeader>
        <ModalBody>
          <form onSubmit={updateEmployee}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Name
                      </Label>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Father Name
                      </Label>
                      <Input
                        type="text"
                        value={fatherName}
                        onChange={(e) => {
                          setFatherName(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Code
                      </Label>
                      <Input
                        type="text"
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Joining Date
                      </Label>
                      <Input
                        type="date"
                        value={joiningDate}
                        onChange={(e) => {
                          setJoiningDate(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button
                color="link"
                className="btn-link-dark"
                onClick={updateToggle}
              >
                Close
              </Button>{" "}
              <Button color="primary" type="submit" className="ml-auto">
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div
          className="editContainer"
          onClick={() => handleUpdateToggle(singleEmployee)}
        >
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
            <h1 className="organizationName">
              {singleEmployee?.length > 0 &&
                `${singleEmployee[4]?.empInfo?.first_name_employee_info} ${singleEmployee[4]?.empInfo?.last_name_employee_info}`}
            </h1>
            <div className="d-flex align-items-center">
              <p className="owner">Employee Code:</p>
              <p className="owner ml-1">
                {singleEmployee?.length > 0 &&
                  singleEmployee[4]?.empInfo?.code_employee_info}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Designation :</p>
              <p className="owner ml-1">
                {singleEmployee?.length > 0 &&
                  singleEmployee[0]?.designation?.name_designation}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Status: </p>
              <p className="owner ml-1">
                {singleEmployee?.length > 0 &&
                  singleEmployee[4]?.empInfo?.marital_status}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Department:</p>
              <p className="owner ml-1">
                {singleEmployee?.length > 0 &&
                  singleEmployee[1]?.department?.name_department}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <p className="owner">Father Name:</p>
            <p className="owner ml-1">
              {singleEmployee?.length > 0 &&
                singleEmployee[4]?.empInfo?.father_fullname_employee_info}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">Joining Date:</p>
            <p className="owner ml-1">
              {singleEmployee?.length > 0 &&
                singleEmployee[4]?.empInfo?.joining_date_employee_info}
            </p>
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
                      Personal Information
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
                      Employment Information
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
                    <span className="px-3 py-2 font-weight-bold">Benefits</span>
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
                      Work Experience
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
                    <span className="px-3 py-2 font-weight-bold">
                      Education
                    </span>
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
                      Dependents
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "8" })}
                    onClick={() => {
                      toggle("8");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Emergency Contact
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "9" })}
                    onClick={() => {
                      toggle("9");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">Assets</span>
                  </NavLinkStrap>
                </NavItem>
                {/* <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "10" })}
                    onClick={() => {
                      toggle("10");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Digital Signature
                    </span>
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap
                    className={clsx({ active: activeTab === "11" })}
                    onClick={() => {
                      toggle("11");
                    }}
                  >
                    <span className="px-3 py-2 font-weight-bold">
                      Employees Document
                    </span>
                  </NavLinkStrap>
                </NavItem> */}
              </Nav>
            </div>
            <TabContent activeTab={activeTab}>
              <TabPane
                tabId="1"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <PersonalInformation data={data} employeeId={employeeId} />
              </TabPane>

              {/* ------------------------------SECOND TAB-------------------------------- */}

              <TabPane
                tabId="2"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <EmploymentInformation
                  data={singleEmployee}
                  employeeId={employeeId}
                />
              </TabPane>

              {/* ----------------------------policy tab--------------------------- */}

              <TabPane
                tabId="3"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Benefits
                  data={
                    singleEmployee?.length > 0 && singleEmployee[6]?.empPolicies
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              <TabPane
                tabId="4"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <PersonalInformation />
              </TabPane>
              <TabPane
                tabId="5"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Experience
                  data={
                    singleEmployee?.length > 0 && singleEmployee[4]?.empInfo
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              <TabPane
                tabId="6"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Education
                  data={
                    singleEmployee?.length > 0 && singleEmployee[4]?.empInfo
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              <TabPane
                tabId="7"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Dependent
                  data={
                    singleEmployee?.length > 0 && singleEmployee[4]?.empInfo
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              <TabPane
                tabId="8"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Emergency
                  data={
                    singleEmployee?.length > 0 && singleEmployee[4]?.empInfo
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              <TabPane
                tabId="9"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <Assets
                  data={
                    singleEmployee?.length > 0 && singleEmployee[3]?.empAssets
                  }
                  employeeId={employeeId}
                />
              </TabPane>
              {/* <TabPane
                tabId="10"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <PersonalInformation />
              </TabPane>
              <TabPane
                tabId="11"
                style={{ paddingTop: "30px", paddingBottom: "20px" }}
              >
                <PersonalInformation />
              </TabPane> */}
            </TabContent>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default EmployeeDirectoryDetail;
