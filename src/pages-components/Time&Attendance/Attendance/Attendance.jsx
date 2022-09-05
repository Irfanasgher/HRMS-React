import React, { useState } from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import "./Attendance.scss";

const Attendance = () => {
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  const [startDate, setStartDate] = useState(new Date());
  console.log("Attendance", selectValues);
  const options = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
    },
  ];
  return (
    <div id="attendance">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["fas", "calendar"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Attendance Record</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="p-3 tableContainer1 m-1 selct-pepl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div style={{ width: "140px" }}>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={
                    <Button size="sm" block color="first">
                      <span className="btn-wrapper--label">Date</span>
                      <span className="btn-wrapper--icon ml-5">
                        <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                      </span>
                    </Button>
                  }
                />
              </div>
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Select Company"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Location"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
            </div>
            <div className="ml-3">
              <Button size="sm" className="m-2" color="warning">
                Run
                <span className="ml-4">
                  <FontAwesomeIcon
                    icon={["fas", "arrow-circle-right"]}
                    className="mx-auto"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            // style={{ marginTop: "10px" }}
          >
            <div className="d-flex align-items-center">
              <div>
                <Select
                  options={options}
                  placeholder="Branch"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Designation"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Employee"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
            </div>
            <div className="ml-3">
              <Button size="sm" className="m-2" color="success">
                Export
                <span className="ml-2">
                  <FontAwesomeIcon
                    icon={["fas", "file-download"]}
                    className="mx-auto"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Attendance Record</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Emp Name</th>
                <th className="text-center p-3">Emp I'D </th>
                <th className="text-center p-3">Designation</th>
                <th className="text-center p-3">Date</th>
                <th className="text-center p-3">Time In</th>
                <th className="text-center p-3">Time Out </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>IT Expert</span>
                </td>
                <td className="text-center">
                  <span>06/08/2021</span>
                </td>
                <td className="text-center">
                  <span>10:00 AM</span>
                </td>
                <td className="text-center">
                  <span>07:00 PM</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>IT Expert</span>
                </td>
                <td className="text-center">
                  <span>06/08/2021</span>
                </td>
                <td className="text-center">
                  <span>10:00 AM</span>
                </td>
                <td className="text-center">
                  <span>07:00 PM</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>IT Expert</span>
                </td>
                <td className="text-center">
                  <span>06/08/2021</span>
                </td>
                <td className="text-center">
                  <span>10:00 AM</span>
                </td>
                <td className="text-center">
                  <span>07:00 PM</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>IT Expert</span>
                </td>
                <td className="text-center">
                  <span>06/08/2021</span>
                </td>
                <td className="text-center">
                  <span>10:00 AM</span>
                </td>
                <td className="text-center">
                  <span>07:00 PM</span>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="p-3 d-flex align-items-center justify-content-end my-4">
            <RcPagination
              //   prevIcon={"Previous"}
              //   selectComponentClass={Select}
              //   showQuickJumper
              //   showSizeChanger
              defaultPageSize={50}
              //   defaultCurrent={5}
              total={150}
              locale={localeInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Attendance;
