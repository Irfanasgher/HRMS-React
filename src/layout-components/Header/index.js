import React from "react";

import clsx from "clsx";

import { connect } from "react-redux";

import { setSidebarToggleMobile } from "../../reducers/ThemeOptions";

// import HeaderDots from "../../layout-components/HeaderDots";
import HeaderUserbox from "../../layout-components/HeaderUserbox";

const Header = (props) => {
  const {
    headerShadow,
    headerBgTransparent,
    sidebarToggleMobile,
    setSidebarToggleMobile,
  } = props;

  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div
        className={clsx("app-header", {
          "app-header--shadow": headerShadow,
          "app-header--opacity-bg": headerBgTransparent,
        })}
      >
        <div className="app-header--pane ml-3">
          <button
            className={clsx(
              "navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn",
              { "is-active": sidebarToggleMobile }
            )}
            onClick={toggleSidebarMobile}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
          {/* <HeaderSearch /> */}
          {/* <HeaderMenu /> */}
        </div>
        <div className="app-header--pane pr-5">
          {/* <HeaderDots /> */}
          <HeaderUserbox />
          {/* <HeaderDrawer /> */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow,
  headerBgTransparent: state.ThemeOptions.headerBgTransparent,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
