import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import Switch from "rc-switch";

import {
  getTimeSlotShift,
  disableRegularShiftByID,
  enableRegularShiftByID,
  disableSeasonalShiftByID,
  enableSeasonalShiftByID,
} from "../../../../actions";
import "./AttendanceSystem.scss";

const AttendanceSystem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getTimeSlotShift());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { attendance } = useSelector((state) => state.AttendanceReducer);

  // console.log("attendance", attendance);

  const handleToggle = (data) => {
    if (data?.regular_shift?.is_enable_regular_shift === true) {
      dispatch(disableRegularShiftByID(data?.regular_shift?.id_regular_shift));
    } else {
      dispatch(enableRegularShiftByID(data?.regular_shift?.id_regular_shift));
    }
  };

  const handleSeasonalToggle = (data) => {
    if (data?.seasonal_shift?.is_enable_seasonal_shift === true) {
      dispatch(
        disableSeasonalShiftByID(data?.seasonal_shift?.id_seasonal_shift)
      );
    } else {
      dispatch(
        enableSeasonalShiftByID(data?.seasonal_shift?.id_seasonal_shift)
      );
    }
  };

  let regularShift = [];

  attendance?.forEach((data) => {
    if (data.regular_shift_id > 0) {
      regularShift.push(data);
    }
  });

  let seasonalShift = [];

  attendance?.forEach((data) => {
    if (data.seasonal_shift_id > 0) {
      seasonalShift.push(data);
    }
  });

  console.log("attendance", attendance);
  return (
    <div id="attendanceSystem">
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
            <h1 style={{ color: "#3A3D65" }}>Attendance System</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>How do employees log time at your company? </b>
            </div>
          </div>
          <div className="p-4">
            <div className="startAndEnd p-5" style={{ height: "200px" }}>
              <div className="d-flex ">
                <AiFillClockCircle size={30} />
                <div style={{ marginTop: "6px" }} className="ml-2">
                  <h6
                    className="font-weight-bold"
                    style={{ marginBottom: 0, fontSize: "20px" }}
                  >
                    Start & End Times
                  </h6>
                  <p style={{ fontSize: "14px", marginTop: "10px" }}>
                    Employees will track their start time and <br /> end times.
                    E.g 8AM - 5PM, 1PM - 5PM, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider" style={{ marginTop: "20px" }} />
          <div className="d-flex align-items-center justify-content-between w-100 p-4">
            <h6
              className="font-weight-medium"
              style={{ marginBottom: 0, fontSize: "20px" }}
            >
              Regular Shift
            </h6>
            <Link to="/dashboard/AttendanceSystem/AddNewShift">
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-2">Add New Shift</span>
              </Button>
            </Link>
          </div>
          <div className="divider" />
          <div className="p-4">
            <div className="startAndEnd" style={{ borderColor: "#D6D7DF" }}>
              <div className="card-header pr-2">
                <div className="card-header--title">
                  <b>List All Regular Shifts </b>
                </div>
              </div>
              <Table
                responsive
                className="table-alternate-spaced text-nowrap mb-0"
                style={{ marginBottom: 0 }}
              >
                <thead
                  className="font-size-sm"
                  style={{ background: "#F3F5FD" }}
                >
                  <tr>
                    <th className="text-left p-3 pl-4">Shift Title</th>
                    <th className="text-center p-3">Time Start</th>
                    <th className="text-center p-3">Time End</th>
                    <th className="text-center p-3">Days</th>
                    <th className="text-center p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {regularShift?.map((data, key) => {
                    var arr = data?.regular_shift?.code_regular_shift;
                    var new1 = arr.split(",");
                    var dayData = new1.length * 4;
                    // console.log("regular shift", new1.length * 4);
                    return (
                      <tr key={key}>
                        <td className="text-left pl-4">
                          <span>{data.regular_shift.name_regular_shift}</span>
                        </td>
                        <td className="text-center">
                          <span>{data.start_time_slot}</span>
                        </td>
                        <td className="text-center">
                          <span>{data.end_time_slot}</span>
                        </td>
                        <td className="text-center">
                          <span>{dayData}</span>
                        </td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <Button
                              onClick={() => {
                                history.push({
                                  pathname: `/dashboard/AttendanceSystem/UpdateRegularShift`,
                                  state: { data: data },
                                });
                              }}
                              style={{ background: "#00c74e", color: "#fff" }}
                              className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                            >
                              <FontAwesomeIcon
                                icon={["far", "eye"]}
                                className="font-size-sm"
                              />
                            </Button>
                            <div className="ml-2">
                              <Switch
                                checked={
                                  data?.regular_shift?.is_enable_regular_shift
                                }
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
          <div className="divider" style={{ marginTop: "20px" }} />
          <div className="d-flex align-items-center justify-content-between w-100 p-4">
            <h6
              className="font-weight-medium"
              style={{ marginBottom: 0, fontSize: "20px" }}
            >
              Seasonal Shift
            </h6>
            <Link to="/dashboard/AttendanceSystem/AddNewSeasonalShift">
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label ml-2">
                  Add New Seasonal Shift
                </span>
              </Button>
            </Link>
          </div>
          <div className="divider" />
          <div className="p-4">
            <div className="startAndEnd" style={{ borderColor: "#D6D7DF" }}>
              <div className="card-header pr-2">
                <div className="card-header--title">
                  <b>List All Seasonal Shifts </b>
                </div>
              </div>
              <Table
                responsive
                className="table-alternate-spaced text-nowrap mb-0"
                style={{ marginBottom: 0 }}
              >
                <thead
                  className="font-size-sm"
                  style={{ background: "#F3F5FD" }}
                >
                  <tr>
                    <th className="text-left p-3 pl-4">Shift Title</th>
                    <th className="text-center p-3">Time Start</th>
                    <th className="text-center p-3">Time End</th>
                    <th className="text-center p-3">Days</th>
                    <th className="text-center p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalShift?.map((data, key) => {
                    var arr = data?.seasonal_shift?.code_seasonal_shift;
                    var new1 = arr.split(",");
                    var dayData = new1.length * 4;
                    // console.log("regular shift", new1.length * 4);
                    return (
                      <tr key={key}>
                        <td className="text-left pl-4">
                          <span>{data.seasonal_shift.name_seasonal_shift}</span>
                        </td>
                        <td className="text-center">
                          <span>{data.start_time_slot}</span>
                        </td>
                        <td className="text-center">
                          <span>{data.end_time_slot}</span>
                        </td>
                        <td className="text-center">
                          <span>{dayData}</span>
                        </td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center">
                            <Button
                              onClick={() => {
                                history.push({
                                  pathname: `/dashboard/AttendanceSystem/UpdateSeasonalShift`,
                                  state: { data: data },
                                });
                              }}
                              style={{ background: "#00c74e", color: "#fff" }}
                              className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                            >
                              <FontAwesomeIcon
                                icon={["far", "eye"]}
                                className="font-size-sm"
                              />
                            </Button>
                            <div className="ml-2">
                              <Switch
                                checked={
                                  data?.seasonal_shift?.is_enable_seasonal_shift
                                }
                                onClick={() => handleSeasonalToggle(data)}
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
          {/* <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button className="btn btn-secondary">Cancel</Button>
            <Button color="primary1" type="submit" className="ml-auto">
              Save
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default AttendanceSystem;
