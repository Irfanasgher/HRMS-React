import React, { useState } from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button, CustomInput } from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import "./SelectedEmployees.scss";

const SelectedEmployees = () => {
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  const [startDate, setStartDate] = useState(new Date());
  console.log('SelectedEmployees', selectValues)
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
    <div id="selectedEmployees">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["fas", "money-bill-alt"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Salary</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Selected Employees</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead
              className="font-size-sm"
              style={{ background: "#F3F5FD" }}
            >
              <tr>
                <th className="text-left p-3 pl-4">Emp Name</th>
                <th className="text-center p-3">Emp I'D </th>
                <th className="text-center p-3">Net Salary</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>56406</span>
                </td>
                <td className="text-center">
                  <span>25000</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>56406</span>
                </td>
                <td className="text-center">
                  <span>25000</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>56406</span>
                </td>
                <td className="text-center">
                  <span>25000</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>56406</span>
                </td>
                <td className="text-center">
                  <span>25000</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <div className="p-4 tableContainer1 m-1 selct-pepl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <Select
                  options={options}
                  placeholder="Pay Through"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
                />
              </div>
              <div style={{ width: "140px" }} className="ml-3">
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
              <div className="ml-3 d-flex align-items-center">
                <CustomInput
                  type="checkbox"
                  checked={true}
                  id={1212}
                  className="ml-3"
                  label="&nbsp;"
                />
                <p style={{ marginBottom: "0" }}>Tax Dedication </p>
              </div>
            </div>
            <div className="ml-3">
              <Button color="primary1" type="submit" className="ml-auto py-5">
                Send to Approval
              </Button>
              <Button type="submit" className="btn btn-secondary ml-3">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedEmployees;
