import React from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomInput, Button } from "reactstrap";

import "./CalendarFeed.scss";

const CalendarFeed = () => {
  return (
    <div id="calendarFeed">
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
            <h1 style={{ color: "#3A3D65" }}>I Calendar Feed</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>I Calendar Feed</b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <div className="p-5">
            <p className="editing">
              <b>I Calendar Feed </b>
            </p>
            <p className="editing">
              iCalendar feeds allow users to pull calendar information (who's
              out, birthdays, etc.)
            </p>
          </div>
          <div className="divider mt-5 mb-4" />
          <div className="p-5">
            <p className="editing">
              <b>Allow employees access to iCalendar Feeds</b>
            </p>
            <div className="d-flex align-items-center">
              <CustomInput
                readOnly
                checked={true}
                type="checkbox"
                id={20}
                className="align-self-start"
                label="ON"
              />
              <CustomInput
                type="checkbox"
                id={12}
                className="align-self-start ml-5"
                label="OFF"
              />
            </div>
            <br />
            <p className="editing">
              Note: iCalendar feeds are publicly viewable to anyone.
            </p>
            <Button
              color="primary1"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarFeed;
