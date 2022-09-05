import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Collapse } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
// import { FaChartLine } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { ChevronRight } from "react-feather";
import { useDispatch, useSelector } from "react-redux";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";
import SidebarUserbox from "../SidebarUserbox";

import { getCompanyList } from "../../actions";

const SidebarMenu = (props) => {
  let a = JSON.parse(localStorage.getItem("userData"));
  console.log("SidebarMenu", a);
  const orgID = a?.organization?.value_employee_allocation;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyList(orgID));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { company } = useSelector((state) => state.CompanyReducer);
  // route to be extract

  // const { setSidebarToggleMobile, sidebarUserbox } = props;

  // const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const toggleDashboard = (event) => {
    setDashboardOpen(!dashboardOpen);
    event.preventDefault();
  };

  const [elementsOpen, setElementsOpen] = useState(false);
  const toggleElements = (event) => {
    setElementsOpen(!elementsOpen);
    event.preventDefault();
  };

  const [applicationOpen, setApplicationOpen] = useState(false);
  const toggleApplication = (event) => {
    setApplicationOpen(!applicationOpen);
    event.preventDefault();
  };

  // const [blocksOpen, setBlocksOpen] = useState(false);
  // const toggleBlocks = (event) => {
  //   setBlocksOpen(!blocksOpen);
  //   event.preventDefault();
  // };

  const [widgetsOpen, setWidgetsOpen] = useState(false);
  const toggleWidgets = (event) => {
    setWidgetsOpen(!widgetsOpen);
    event.preventDefault();
  };

  const [uiKitComponentsOpen, setUiKitComponents] = useState(false);
  const toggleUiKitComponents = (event) => {
    setUiKitComponents(!uiKitComponentsOpen);
    event.preventDefault();
  };

  const [employeesOpen, setEmployeesOpen] = useState(false);
  const toggleEmployees = (e) => {
    setEmployeesOpen(!employeesOpen);
    e.preventDefault();
  };
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const toggleOrganization = (event) => {
    setOrganizationOpen(!organizationOpen);
    event.preventDefault();
  };
  // const [payrollInputsOpen, setPayrollInputsOpen] = useState(false);
  // const togglePayrollInputs = (e) => {
  //   setPayrollInputsOpen(!payrollInputsOpen);
  //   e.preventDefault();
  // };

  // const [revisionOpen, setRevisionOpen] = useState(false);
  // const toggleRevision = (e) => {
  //   setRevisionOpen(!revisionOpen);
  //   e.preventDefault();
  // };

  // const [accountOpen, setAccountOpen] = useState(false);
  // const toggleAccount = (e) => {
  //   setAccountOpen(!accountOpen);
  //   e.preventDefault();
  // };
  const [companyOpen, setCompanyOpen] = useState(false);
  const toggleCompany = (e) => {
    setCompanyOpen(!companyOpen);
    e.preventDefault();
  };

  const [employeeDirectoryOpen, setEmployeeDirectoryOpen] = useState(false);
  const toggleEmployeeDirectory = (e) => {
    setEmployeeDirectoryOpen(!employeeDirectoryOpen);
    e.preventDefault();
  };
  // const [approvalsOpen, setApprovalsOpen] = useState(false);
  // const toggleApprovals = (e) => {
  //   setApprovalsOpen(!approvalsOpen);
  //   e.preventDefault();
  // };
  // const [notificationOpen, setNotificationOpen] = useState(false);
  // const toggleNotification = (e) => {
  //   setNotificationOpen(!notificationOpen);
  //   e.preventDefault();
  // };
  // const [hiringOpen, setHiringOpen] = useState(false);
  // const toggleHiring = (e) => {
  //   setHiringOpen(!hiringOpen);
  //   e.preventDefault();
  // };

  const dataArray = [
    {
      id: 1,
      name: "Dashboard",
      toggle: toggleDashboard,
      open: dashboardOpen,
      icon: FaTachometerAlt,
      child: [
        {
          name: "Overview",
          path: "Overview",
        },
      ],
    },
    {
      id: 2,
      name: "HRMS",
      toggle: toggleWidgets,
      open: widgetsOpen,
      icon: FaUsers,
      child: [
        {
          name: "Organization",
          toggle: toggleOrganization,
          open: organizationOpen,
          child: [
            {
              name: "Organization List",
              path: "OrganizationList",
            },
          ],
        },
        {
          name: "Employees",
          toggle: toggleEmployees,
          open: employeesOpen,
          child: [
            {
              name: "Overview",
              path: "Overview",
            },
            {
              name: "Employee Directory",
              path: "EmployeeDirectory",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Time & Attendance",
      toggle: toggleApplication,
      open: applicationOpen,
      icon: AiFillSchedule,
      child: [
        // {
        //   name: "Overview",
        //   path: "Overview",
        // },
        // {
        //   name: "Attendance",
        //   path: "Attendance",
        // },
        {
          name: "Leave Record",
          path: "LeaveRecord",
        },
        // {
        //   name: "Leave Calender",
        //   path: "LeaveCalender",
        // },
      ],
    },
    {
      id: 4,
      name: "Payroll",
      toggle: toggleElements,
      open: elementsOpen,
      icon: FaHandHoldingUsd,
      child: [
        {
          name: "Final Statement",
          path: "FinalStatement",
        },
      ],
    },
    {
      id: 5,
      name: "Admin Controls",
      toggle: toggleUiKitComponents,
      open: uiKitComponentsOpen,
      icon: FaUserCog,
      child: [
        // {
        //   name: "Account",
        //   toggle: toggleAccount,
        //   open: accountOpen,
        //   child: [
        //     {
        //       name: "Account Info",
        //       path: "AccountInfo",
        //     },
        //     {
        //       name: "General Setting",
        //       path: "GeneralSetting",
        //     },
        //     {
        //       name: "I Calendar Feed",
        //       path: "CalendarFeed",
        //     },
        //     {
        //       name: "Email Configuration",
        //       path: "EmailConfiguration",
        //     },
        //     {
        //       name: "SMS Configuration",
        //       path: "SMSConfiguration",
        //     },
        //   ],
        // },
        {
          name: "Organization Setting",
          toggle: toggleCompany,
          open: companyOpen,
          child: [
            {
              name: "Organization Info",
              path: "OrganizationInfo",
            },
            {
              name: "Designations",
              path: "Designations",
            },
            {
              name: "Departments",
              path: "Departments",
            },
            {
              name: "Policies",
              path: "Policies",
            },
            {
              name: "Attendance",
              path: "AttendanceSystem",
            },
            {
              name: "Assets",
              path: "Assets",
            },
            {
              name: "Asset Category",
              path: "AssetCategory",
            },
            {
              name: "Leave Bank",
              path: "LeaveBank",
            },
            {
              name: "Leave Type",
              path: "LeaveType",
            },
            {
              name: "Access Level",
              path: "AccessLevel",
            },
          ],
        },
        {
          name: "Add Org/Company",
          path: "Organization",
        },
        {
          name: "Employee",
          toggle: toggleEmployeeDirectory,
          open: employeeDirectoryOpen,
          child: [
            {
              name: "Degree",
              path: "EmployeeDegree",
            },
            {
              name: "Emergency Contact",
              path: "EmergencyContact",
            },
            {
              name: "Employee Statuses",
              path: "EmployeeStatuses",
            },
          ],
        },
      ],
    },
  ];

  let routes = [];
  a?.rabc?.role?.permission_roles.forEach((role) => {
    if (role.name_module_permission_role === "All") {
      routes.push({ module: role.name_entity_permission_role, child: true });
    } else {
      var moduleToBeChanged;
      routes.forEach((route, index) => {
        if (route.module === role.name_entity_permission_role) {
          moduleToBeChanged = index;
        }
      });

      if (routes[moduleToBeChanged]?.module) {
        routes[moduleToBeChanged]?.child.push(role.name_module_permission_role);
      } else {
        let child = [];
        child.push(role.name_module_permission_role);
        routes.push({ module: role.name_entity_permission_role, child });
      }
    }
  });

  console.log(routes, "Rrrrrr");
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].module === routes[i + 1]?.module && i + 1 <= routes.length) {
      if (routes[i].child === true) {
        routes.splice(i + 1, 1);
      } else {
        routes.splice(i, 1);
      }
    }
  }

  let finalData = [];
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < dataArray.length; j++) {
      if (routes[i].module === dataArray[j]?.name) {
        if (routes[i].child === true) {
          finalData.push(dataArray[j]);
        } else {
          const childArray = [];
          for (let c = 0; c < routes[i].child.length; c++) {
            for (let d = 0; d < dataArray[j]?.child?.length; d++) {
              if (routes[i].child[c] === dataArray[j]?.child[d]?.name) {
                childArray.push(dataArray[j]?.child[d]);
              }
            }
          }
          const data = {
            name: dataArray[j]?.name,
            toggle: dataArray[j]?.toggle,
            open: dataArray[j]?.open,
            icon: dataArray[j]?.icon,
            child: childArray,
          };
          finalData.push(data);
        }
      }
    }
  }

  console.log(routes, "Rrr");
  console.log("finalData", finalData);

  // route to be extract terminated
  const Owner = a?.rabc?.role?.name_role;

  const { sidebarUserbox } = props;
  // const allow = false;
  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          {/* <div className="sidebar-header">
            <span>Navigation menu</span>
          </div> */}
          <ul>
            {Owner === "Owner"
              ? dataArray.map((data, key) => {
                  return (
                    <li
                      key={key}
                      // style={{
                      //   cursor: "not-allowed",
                      // }}
                    >
                      <a
                        href="#/"
                        onClick={company?.length > 0 && data.toggle}
                        className={clsx({ active: data.open })}
                      >
                        <span className="sidebar-icon">
                          <data.icon size={30} />
                        </span>
                        <span className="sidebar-item-label">{data.name}</span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse isOpen={data.open}>
                        <ul>
                          {data.child.map((chi, key) => {
                            return chi?.child?.length > 0 ? (
                              <li key={key}>
                                <a
                                  href="#/"
                                  onClick={chi.toggle}
                                  className={clsx(
                                    { active: chi.open },
                                    chi.open ? "box-shadow-on-li" : ""
                                  )}
                                >
                                  <span
                                    className={
                                      "sidebar-item-label sidebar-item-label-by-haseeb"
                                    }
                                  >
                                    {chi.name}
                                  </span>
                                  <span className="sidebar-icon-indicator">
                                    <ChevronRight />
                                  </span>
                                </a>
                                <Collapse
                                  className="collapse-div"
                                  isOpen={chi.open}
                                >
                                  <ul>
                                    {chi?.child?.length > 0 &&
                                      chi.child.map((e, index) => {
                                        return (
                                          <li className="kkk" key={index}>
                                            <NavLink
                                              to={`/dashboard/${e.path}`}
                                            >
                                              <span> {e.name}</span>
                                            </NavLink>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </Collapse>
                              </li>
                            ) : (
                              <li className="kkk" key={key}>
                                <NavLink to={`/dashboard/${chi.path}`}>
                                  <span> {chi.name}</span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapse>
                    </li>
                  );
                })
              : finalData?.length > 0 &&
                finalData?.map((data, key) => {
                  return (
                    <li key={key}>
                      <a
                        href="#/"
                        onClick={data.toggle}
                        className={clsx({ active: data.open })}
                      >
                        <span className="sidebar-icon">
                          <data.icon size={30} />
                        </span>
                        <span className="sidebar-item-label">{data.name}</span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse isOpen={data.open}>
                        <ul>
                          {data.child.map((chi, key) => {
                            return chi?.child?.length > 0 ? (
                              <li key={key}>
                                <a
                                  href="#/"
                                  onClick={chi.toggle}
                                  className={clsx(
                                    { active: chi.open },
                                    chi.open ? "box-shadow-on-li" : ""
                                  )}
                                >
                                  <span
                                    className={
                                      "sidebar-item-label sidebar-item-label-by-haseeb"
                                    }
                                  >
                                    {chi.name}
                                  </span>
                                  <span className="sidebar-icon-indicator">
                                    <ChevronRight />
                                  </span>
                                </a>
                                <Collapse
                                  className="collapse-div"
                                  isOpen={chi.open}
                                >
                                  <ul>
                                    {chi?.child?.length > 0 &&
                                      chi.child.map((e, index) => {
                                        return (
                                          <li className="kkk" key={index}>
                                            <NavLink
                                              to={`/dashboard/${e.path}`}
                                            >
                                              <span> {e.name}</span>
                                            </NavLink>
                                          </li>
                                        );
                                      })}
                                  </ul>
                                </Collapse>
                              </li>
                            ) : (
                              <li className="kkk" key={key}>
                                <NavLink to={`/dashboard/${chi.path}`}>
                                  <span> {chi.name}</span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapse>
                    </li>
                  );
                })}
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
