import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, NavItem, Button } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

import { ChevronRight } from "react-feather";
import { Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "../../pages-components/PrivateRoute";
// import { lazy } from "react";
import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

import "./index.css";

// const Dashboard = lazy(() =>
//   import("../../pages-components/Dashboard/Dashboard")
// );

// const AddCompanyDetails = lazy(() =>
//   import("../../layout-components/AddCompanyDetails")
// );
// const AddNewCompanyByHaseeeb = lazy(() =>
//   import("../../layout-components/AddNewCompanyByHaseeb/index")
// );
// const Setting = lazy(() => import("../../layout-components/SettingTab/index"));
// const UnitDetails = lazy(() => import("../../layout-components/UnitDetails"));
// const Companies = lazy(() => import("../../pages-components/Companies"));

// const Setting = lazy(() => import("../../pages-components/settingcomp"));
// console.log("refresh");
var triggerDropDownAndDropUpOfEmployeesTab = 0;
var triggerDropDownAndDropUpOfOrganizationTab = 0;
export default function PageChat() {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const [organizationOpen, setOrganizationOpen] = useState(false);
  const toggleOrganization = (event) => {
    setOrganizationOpen(!organizationOpen);
    event.preventDefault();
  };
  const [employeesOpen, setEmployeesOpen] = useState(false);
  const toggleEmployees = (e) => {
    setEmployeesOpen(!employeesOpen);
    e.preventDefault();
  };

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(false);
  };

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  triggerDropDownAndDropUpOfEmployeesTab++;
  triggerDropDownAndDropUpOfOrganizationTab++;

  // console.log("a", triggerDropDownAndDropUpOfEmployeesTab);
  // console.log("d", triggerDropDownAndDropUpOfOrganizationTab);

  //useEffect trigger on clicking any sub tab of Employee
  useEffect(() => {
    if (
      triggerDropDownAndDropUpOfEmployeesTab >
      triggerDropDownAndDropUpOfOrganizationTab
    ) {
      triggerDropDownAndDropUpOfOrganizationTab = 0;
    }
    if (
      triggerDropDownAndDropUpOfOrganizationTab >
      triggerDropDownAndDropUpOfEmployeesTab
    ) {
      triggerDropDownAndDropUpOfEmployeesTab = 0;
    }
    if (
      triggerDropDownAndDropUpOfOrganizationTab ==
      triggerDropDownAndDropUpOfEmployeesTab
    ) {
      triggerDropDownAndDropUpOfOrganizationTab = 0;
      triggerDropDownAndDropUpOfEmployeesTab = 0;
    }
    triggerDropDownAndDropUpOfEmployeesTab > 1 && setEmployeesOpen(true);
    triggerDropDownAndDropUpOfOrganizationTab > 1 && setOrganizationOpen(true);
    // console.log("useEffect1");
    //toggleOnsubButton1
    // console.log("b",b)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //useEffect trigger on clicking any sub tab of Organization
  // useEffect(() => {
  // console.log("useEffect2")
  //toggleOnsubButton2
  // }, []);

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed ">
        <div className="btn-md-pane d-lg-none px-4 order-0">
          <Button
            onClick={toggleSidebarMenu}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40"
          >
            <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
          </Button>
          <Button
            onClick={toggleSidebarMenu2}
            size="sm"
            color="primary"
            className="p-0 btn-icon d-40"
          >
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </Button>
        </div>
        <div
          className={clsx(
            "app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__lg order-1",
            { "layout-sidebar-open": isSidebarMenuOpen }
          )}
        >
          <PerfectScrollbar>
            <div className="px-4 pt-4 sidebar-navigation ">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="d-flex pt-1 pb-3 justify-content-between">
                  <div className="ml-auto font-size-xs">
                    {/* <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      id="AddChannelTooltip1"
                    ></a> */}

                    <h1 className="h1-hrms-heading">HRMS</h1>
                  </div>
                </NavItem>

                <div className="sidebar-navigation ">
                  <ul>
                    <div className="divider my-3" />
                    {/*Employees Tab start*/}
                    <li>
                      <a
                        href="#/"
                        onClick={toggleEmployees}
                        className={clsx(
                          { active: employeesOpen },
                          employeesOpen ? "box-shadow-on-li" : ""
                        )}
                      >
                        <span
                          className={
                            "sidebar-item-label sidebar-item-label-by-haseeb"
                          }
                        >
                          Employees
                        </span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse className="collapse-div" isOpen={employeesOpen}>
                        <ul>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfOrganizationTab = 0;
                                // console.log(
                                //   "d in overview",
                                //   triggerDropDownAndDropUpOfOrganizationTab
                                // );
                              }}
                              to="/dashboard/Overview"
                            >
                              <p> &#8226; </p>
                              <span> Overview</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfOrganizationTab = 0;
                              }}
                              to="/dashboard/Directory"
                            >
                              <p> &#8226; </p>
                              <span> Directory</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfOrganizationTab = 0;
                              }}
                              to="/dashboard/Profile"
                            >
                              <p> &#8226; </p>
                              <span> Profile</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfOrganizationTab = 0;
                              }}
                              to="/dashboard/Position "
                            >
                              <p> &#8226; </p>
                              <span> Position History</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfOrganizationTab = 0;
                              }}
                              to="/dashboard/Internee"
                            >
                              <p> &#8226; </p>
                              <span> Internee</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Collapse>
                    </li>

                    {/*employees tab close*/}
                    <div className="divider my-3" />
                    {/*Organization Tab start*/}
                    <li>
                      <a
                        href="#/"
                        onClick={toggleOrganization}
                        className={clsx(
                          { active: organizationOpen },
                          organizationOpen ? "box-shadow-on-li" : ""
                        )}
                      >
                        <span
                          className={
                            "sidebar-item-label sidebar-item-label-by-haseeb"
                          }
                        >
                          Organization
                        </span>
                        <span className="sidebar-icon-indicator">
                          <ChevronRight />
                        </span>
                      </a>
                      <Collapse
                        className="collapse-div"
                        isOpen={organizationOpen}
                      >
                        <ul>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/Overview"
                            >
                              <p> &#8226; </p>
                              <span> Overview</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/Company"
                            >
                              <p> &#8226; </p>
                              <span> Company</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/OrgChart"
                            >
                              <p> &#8226; </p>
                              <span> Org Chart</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/Policies"
                            >
                              <p> &#8226; </p>
                              <span> Policies</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/Managenent"
                            >
                              <p> &#8226; </p>
                              <span> Management</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/DigitalSignatures"
                            >
                              <p> &#8226; </p>
                              <span> Digital Signatures</span>
                            </NavLink>
                          </li>
                          <li className="kkk">
                            <NavLink
                              onClick={() => {
                                toggleSidebarMobile();

                                triggerDropDownAndDropUpOfEmployeesTab = 0;
                              }}
                              to="/dashboard/Setting"
                            >
                              <p> &#8226; </p>
                              <span>Setting</span>
                            </NavLink>
                          </li>
                        </ul>
                      </Collapse>
                    </li>

                    {/*Organization Tab Close */}
                  </ul>

                  <div className="divider my-3" />
                </div>
              </Nav>

              {/* <div className="divider my-3" /> */}
            </div>
          </PerfectScrollbar>
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <PerfectScrollbar>
            {/*write all the components you wnat to show in page chat component here in switch */}

            {/* <Switch>
              <Route
                path="/dashboard/Overview"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/Overview"
                    {...props}
                    component={Dashboard}
                    exact
                  />
                )}
              />
              <Route
                path="/Company/:id"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/Company/:id"
                    {...props}
                    component={Companies}
                    exact
                  />
                )}
              />
              <Route
                path="/dashboard/Setting"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/Setting"
                    {...props}
                    component={Setting}
                    exact
                  />
                )}
              />
              <Route
                path="/dashboard/AddCompanyDetails/:id"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/AddCompanyDetails/:id"
                    {...props}
                    component={AddCompanyDetails}
                    exact
                  />
                )}
              />
              <Route
                path="/dashboard/:compid/UnitDetail/:id"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/:compid/UnitDetail/:id"
                    {...props}
                    component={UnitDetails}
                    exact
                  />
                )}
              />
              <Route
                path="/dashboard/basicDetails/:id"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/basicDetails/:id"
                    {...props}
                    component={AddNewCompanyByHaseeeb}
                    exact
                  />
                )}
              />
              <Route
                path="/dashboard/Setting"
                exact
                render={(props) => (
                  <PrivateRoute
                    path="/dashboard/Setting"
                    {...props}
                    component={Setting}
                    exact
                  />
                )}
              />
            </Switch> */}
          </PerfectScrollbar>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx("sidebar-inner-layout-overlay", {
            active: isSidebarMenuOpen,
          })}
        />
        <div
          onClick={toggleSidebarMenu2}
          className={clsx("sidebar-inner-layout-overlay", {
            active: isSidebarMenuOpen2,
          })}
        />
      </div>
    </>
  );
}
