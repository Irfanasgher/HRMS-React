import React, { useState } from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
  CustomInput,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import "./PayrollProcess.scss";

const PayrollProcess = () => {
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  const [startDate, setStartDate] = useState(new Date());
  console.log("Payroll Process", selectValues);
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
    <div id="payrollProcess">
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
            <h1 style={{ color: "#3A3D65" }}>Payroll Process</h1>
          </div>
        </div>
        <div className="d-block d-md-flex flex-column align-items-center">
          <UncontrolledButtonDropdown className="m-2">
            <Button
              href="#/"
              size="m"
              className="py-3"
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
              <span className="btn-wrapper--label ml-4">Export</span>
            </Button>
            <DropdownToggle
              caret
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
                  href="#/"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                >
                  Employee Card
                </a>
              </div>
              <div role="menuitem">
                <a className="dropdown-item" href="#/">
                  Employee Doc
                </a>
              </div>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </div>
      <div className="p-5">
        <div className="p-3 tableContainer1 m-1 selct-pepl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div>
                <Select
                  options={options}
                  placeholder="Company"
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
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Department"
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
              <Button
                size="sm"
                className="m-2"
                color="warning"
                style={{ width: "145px" }}
              >
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
              <div className="ml-3" style={{ width: "140px" }}>
                <FormGroup style={{ marginBottom: "0" }}>
                  <InputGroup className="input-group-seamless">
                    <Input placeholder="Search" type="search" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <FontAwesomeIcon
                          icon={["fas", "search"]}
                          className="mx-auto"
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="m-2"
                color="success"
                style={{ width: "145px" }}
              >
                Bulk Action
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
              <b>Payroll Process </b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={12}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td>
                <th className="text-left p-3 pl-4">Emp Name</th>
                <th className="text-center p-3">Emp I'D </th>
                <th className="text-center p-3">Pay Type </th>
                <th className="text-center p-3">Month</th>
                <th className="text-center p-3">Basics</th>
                <th className="text-center p-3">Net Payable </th>
                <th className="text-center p-3">Status </th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={13}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>Monthly</span>
                </td>
                <td className="text-center">
                  <span>June 2021</span>
                </td>
                <td className="text-center">
                  <span>35000</span>
                </td>
                <td className="text-center">
                  <span>4000</span>
                </td>
                <td className="text-center">
                  <span>Un Paid</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center ml-2">
                      <CustomInput
                        type="checkbox"
                        id={24}
                        className="ml-3"
                        label="&nbsp;"
                      />
                      <p style={{ marginBottom: "0" }}>Paid</p>
                    </div>
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={14}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>Monthly</span>
                </td>
                <td className="text-center">
                  <span>June 2021</span>
                </td>
                <td className="text-center">
                  <span>35000</span>
                </td>
                <td className="text-center">
                  <span>4000</span>
                </td>
                <td className="text-center">
                  <span>Un Paid</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center ml-2">
                      <CustomInput
                        type="checkbox"
                        id={23}
                        className="ml-3"
                        label="&nbsp;"
                      />
                      <p style={{ marginBottom: "0" }}>Paid</p>
                    </div>
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={15}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>Monthly</span>
                </td>
                <td className="text-center">
                  <span>June 2021</span>
                </td>
                <td className="text-center">
                  <span>35000</span>
                </td>
                <td className="text-center">
                  <span>4000</span>
                </td>
                <td className="text-center">
                  <span>Un Paid</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center ml-2">
                      <CustomInput
                        type="checkbox"
                        id={22}
                        className="ml-3"
                        label="&nbsp;"
                      />
                      <p style={{ marginBottom: "0" }}>Paid</p>
                    </div>
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={16}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>012588</span>
                </td>

                <td className="text-center">
                  <span>Monthly</span>
                </td>
                <td className="text-center">
                  <span>June 2021</span>
                </td>
                <td className="text-center">
                  <span>35000</span>
                </td>
                <td className="text-center">
                  <span>4000</span>
                </td>
                <td className="text-center">
                  <span>Un Paid</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center ml-2">
                      <CustomInput
                        type="checkbox"
                        id={21}
                        className="ml-3"
                        label="&nbsp;"
                      />
                      <p style={{ marginBottom: "0" }}>Paid</p>
                    </div>
                    <Button
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
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
export default PayrollProcess;
