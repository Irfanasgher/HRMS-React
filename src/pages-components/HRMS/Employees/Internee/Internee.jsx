import React, { useState } from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "rc-switch";
import {
  Table,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Input,
} from "reactstrap";
import Select from "react-dropdown-select";
import "./Internee.scss";

const Internee = () => {
  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");
  console.log('Internee', selectValues)
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
    <div id="internee">
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
            <h1 style={{ color: "#3A3D65" }}>Internee</h1>
          </div>
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
              <b>Internee</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead
              className="font-size-sm"
              style={{ background: "#F3F5FD" }}
            >
              <tr>
                <th className="text-left p-3 pl-4">Internee</th>
                <th className="text-center p-3">Title</th>
                <th className="text-center p-3">Internee Code</th>
                <th className="text-center p-3">Branch</th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">Status</th>
                <th className="text-center p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>ABC</span>
                </td>
                <td className="text-center">
                  <span>Social Media</span>
                </td>

                <td className="text-center">
                  <span>54605</span>
                </td>
                <td className="text-center">
                  <span>DHA</span>
                </td>
                <td className="text-center">
                  <span>Phase 8</span>
                </td>
                <td className="text-center">
                  <span>Active</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <div className="ml-2">
                      <Switch
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>ABC</span>
                </td>
                <td className="text-center">
                  <span>Social Media</span>
                </td>

                <td className="text-center">
                  <span>54605</span>
                </td>
                <td className="text-center">
                  <span>DHA</span>
                </td>
                <td className="text-center">
                  <span>Phase 8</span>
                </td>
                <td className="text-center">
                  <span>Active</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <div className="ml-2">
                      <Switch
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>ABC</span>
                </td>
                <td className="text-center">
                  <span>Social Media</span>
                </td>

                <td className="text-center">
                  <span>54605</span>
                </td>
                <td className="text-center">
                  <span>DHA</span>
                </td>
                <td className="text-center">
                  <span>Phase 8</span>
                </td>
                <td className="text-center">
                  <span>Active</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <div className="ml-2">
                      <Switch
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>ABC</span>
                </td>
                <td className="text-center">
                  <span>Social Media</span>
                </td>

                <td className="text-center">
                  <span>54605</span>
                </td>
                <td className="text-center">
                  <span>DHA</span>
                </td>
                <td className="text-center">
                  <span>Phase 8</span>
                </td>
                <td className="text-center">
                  <span>Active</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      //   onClick={() => {
                      //     {
                      //       comp.is_enable_company &&
                      //         history.push({
                      //           pathname: `/dashboard/AddCompanyDetails/${comp.id_company}`,
                      //         });
                      //     }
                      //   }}
                      style={{
                        background: "#00c74e",
                        color: "#fff",
                        // cursor: !comp.is_enable_company
                        //   ? "not-allowed"
                        //   : "",
                      }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "eye"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      //   onClick={() => handleUpdateModalToggle(comp)}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <div className="ml-2">
                      <Switch
                        checked={true}
                        // onClick={() => handleToggle(comp)}
                        className="switch-medium toggle-switch-second"
                      />
                    </div>
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
export default Internee;
