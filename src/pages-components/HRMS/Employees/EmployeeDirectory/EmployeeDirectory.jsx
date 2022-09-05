import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
// import RcPagination from "rc-pagination";
// import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "rc-switch";
import {
  Table,
  Button,
  DropdownToggle,
  DropdownMenu,
  UncontrolledButtonDropdown,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
} from "reactstrap";
import Select from "react-dropdown-select";
import { useDispatch, useSelector } from "react-redux";
import {
  GetEmployeeList,
  enableEmployeeListByID,
  disableEmployeeListID,
} from "../../../../actions";
import "./EmployeeDirectory.scss";

const EmployeeDirectory = () => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  console.log("EmployeeDirectory", selectValues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetEmployeeList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { employeeData } = useSelector((state) => state.EmployeeReducer);
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
  const history = useHistory();
  console.log("employeeData", employeeData);

  const handleToggle = (data) => {
    if (data?.empDetail.is_enable_employee_info === true) {
      dispatch(disableEmployeeListID(data?.empDetail.id_employee_info));
    } else {
      dispatch(enableEmployeeListByID(data?.empDetail.id_employee_info));
    }
  };

  return (
    <div id="employeeDirectory">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["fas", "user"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Employee Directory</h1>
          </div>
        </div>
        <div className="d-block d-md-flex align-items-center">
          <UncontrolledButtonDropdown className="m-2">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">Add New Employee</span>
            </Button>
            <DropdownToggle caret color="primary">
              <span className="sr-only">Split button!</span>
            </DropdownToggle>
            <DropdownMenu right>
              <div role="menuitem">
                <Link
                  to="/dashboard/EmployeeDirectory/AddNewEmployee"
                  className="dropdown-item"
                  // onClick={(e) => e.preventDefault()}
                >
                  Add Manual
                </Link>
              </div>
              <div role="menuitem">
                <a
                  className="dropdown-item"
                  href="#/"
                  onClick={updateModalToggle}
                >
                  Import CSV
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
              <div className="ml-3">
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
              <Select
                options={options}
                placeholder="Sort by"
                searchable={searchable}
                disabled={disabled}
                labelField={labelField}
                valueField={valueField}
                // values={[options.find((opt) => opt.username === "Kamren")]}
                onChange={(values) => setSelectValues(values)}
              />
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ marginTop: "10px" }}
          >
            <div className="d-flex align-items-center">
              <div>
                <Select
                  options={options}
                  placeholder="Salary Unit"
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
                  placeholder="Cost Center"
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
            </div>
            <div className="ml-3" style={{ width: "140px" }}>
              <FormGroup>
                <InputGroup className="input-group-seamless mb-4">
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
        </div>
        <br />
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Employee Directory</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Emp Name</th>
                <th className="text-center p-3">Emp Code </th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">Department</th>
                <th className="text-center p-3">Designation </th>
                <th className="text-center p-3">Grade</th>
                <th className="text-center p-3">Assets</th>
                <th className="text-center p-3">Digital Signature</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeData?.map((data, key) => {
                return (
                  data.empDetail.first_name_employee_info !== "sabh" && (
                    <tr key={key}>
                      <td className="text-left pl-4">
                        <span>
                          {`${data.empDetail.first_name_employee_info}
                          ${data.empDetail.last_name_employee_info}`}
                        </span>
                      </td>
                      <td className="text-center">
                        <span>{data.empDetail.code_employee_info}</span>
                      </td>

                      <td className="text-center">
                        <span>
                          {
                            data.department[0]?.mapping_department_locaitons[0]
                              ?.location?.name_location
                          }
                        </span>
                      </td>
                      <td className="text-center">
                        <span>{data.department[0]?.name_department}</span>
                      </td>
                      <td className="text-center">
                        <span>{data.designation[0]?.name_designation}</span>
                      </td>
                      <td className="text-center">
                        <span>{data.grade[0]?.value_employee_allocation}</span>
                      </td>
                      <td className="text-center">
                        <span>Null</span>
                      </td>
                      <td className="text-center">
                        <span>Null</span>
                      </td>
                      <td className="text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            onClick={() => {
                              data?.empDetail?.is_enable_employee_info &&
                                history.push({
                                  pathname: `/dashboard/EmployeeDirectory/EmployeeDirectoryDetail/${data?.empDetail?.id_employee_info}`,
                                });
                            }}
                            style={{
                              background: "#00c74e",
                              color: "#fff",
                              cursor: !data?.empDetail?.id_employee_info
                                ? "not-allowed"
                                : "",
                            }}
                            className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={["far", "eye"]}
                              className="font-size-sm"
                            />
                          </Button>
                          {/* <Button
                          onClick={() => {
                            history.push({
                              pathname: `/dashboard/EmployeeDirectory/EmployeeDirectoryUpdate/${data?.empDetail?.id_employee_info}`,
                            });
                          }}
                          style={{ background: "#3B74F9", color: "#fff" }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "edit"]}
                            className="font-size-sm"
                          />
                        </Button> */}
                          <div className="ml-2">
                            <Switch
                              checked={data.empDetail.is_enable_employee_info}
                              onClick={() => handleToggle(data)}
                              className="switch-medium toggle-switch-second"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </Table>
          {/* <div className="p-3 d-flex align-items-center justify-content-end my-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default EmployeeDirectory;
