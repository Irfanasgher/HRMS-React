import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // Badge,
  // ListGroup,
  // ListGroupItem,
  // Nav,
  // NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  // DropdownMenu,
} from "reactstrap";
// import { NavLink as NavLinkStrap } from "reactstrap";
// import avatar4 from "../../assets/images/avatars/avatar4.jpg";

const HeaderUserbox = () => {
  let a = JSON.parse(localStorage.getItem("userData"));
  // console.log("HeaderUserbox", a);
  return (
    <>
      <UncontrolledDropdown
        className="position-relative ml-2"
        style={{ marginRight: "20px" }}
      >
        <DropdownToggle
          color="link"
          className="p-0 text-left d-flex btn-transition-none align-items-center"
        >
          {/* <div className="d-block p-0 avatar-icon-wrapper">
            <Badge color="success" className="badge-circle p-top-a">
              Online
            </Badge>
            <div className="avatar-icon rounded">
              <img src={avatar4} alt="..." />
            </div>
          </div> */}
          {/* <div className="d-none d-md-block pl-2"> */}
          <div className="pl-2">
            <div className="font-weight-bold">
              {`${a?.details?.first_name_employee_info} ${a?.details?.last_name_employee_info}`}
            </div>
            {/* <span className="text-black-50">Senior Developer</span> */}
          </div>
          {/* <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={["fas", "angle-down"]}
              className="opacity-5"
            />
          </span> */}
        </DropdownToggle>
        {/* <DropdownMenu
          right
          className="dropdown-menu-lg overflow-hidden p-0"
          style={{ borderRadius: "20px" }}
        >
          <ListGroup flush className="text-left bg-transparent">
            <ListGroupItem className="rounded-top">
              <Nav pills className="nav-neutral-primary flex-column">
                <NavItem className="nav-header d-flex text-primary pt-1 pb-2 font-weight-bold align-items-center">
                  <div>Profile options</div>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    My Account
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Profile settings
                  </NavLinkStrap>
                </NavItem>
                <NavItem>
                  <NavLinkStrap href="#/" onClick={(e) => e.preventDefault()}>
                    Active tasks
                  </NavLinkStrap>
                </NavItem>
              </Nav>
            </ListGroupItem>
          </ListGroup>
        </DropdownMenu> */}
      </UncontrolledDropdown>
    </>
  );
};

export default HeaderUserbox;
