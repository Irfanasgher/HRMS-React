import React, { useState } from "react";
import RcPagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  FormGroup,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CustomInput,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";
import CreatableSelect from "../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./ShiftRoster.scss";

const ShiftRoster = () => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);

  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  const [startDate, setStartDate] = useState(new Date());
  console.log("ShiftRosters", selectValues);
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
    <div id="shiftRoster">
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
            <h1 style={{ color: "#3A3D65" }}>Shift Roster</h1>
          </div>
        </div>
        <div className="d-block d-md-flex align-items-center">
          <Link to="/dashboard/ShiftRoster/AddOfficeShift">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">Add Office Shift</span>
            </Button>
          </Link>
        </div>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={updateModal}
          toggle={updateModalToggle}
          size="lg"
        >
          <ModalHeader toggle={updateModalToggle}>
            Add New Leave Request{" "}
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Employee Name</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Employee ID</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Salutation</Label>
                    <CreatableSelect
                      label="unitName"
                      // options={optionUnits[0]}
                      isClearable
                      placeholder={"Country"}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <Label for="">End Date</Label>
                  <InputGroup>
                    <DatePicker
                      className="form-control"
                      dateFormat={"yyyy-MM-dd"}
                      placeholder={"20/08/1990"}
                      // selected={startDate}
                      // onChange={(date) => {
                      //   setStartDate(date);
                      // }}
                      // startDate={startDate}
                      // endDate={endDate}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>

                <Col md="6">
                  <Label for="">Start Date</Label>
                  <InputGroup>
                    <DatePicker
                      className="form-control"
                      dateFormat={"yyyy-MM-dd"}
                      placeholder={"20/08/1990"}
                      // selected={startDate}
                      // onChange={(date) => {
                      //   setStartDate(date);
                      // }}
                      // startDate={startDate}
                      // endDate={endDate}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <FontAwesomeIcon icon={["far", "calendar-alt"]} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Balance</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Days Count</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Sandwich Count</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <div className="d-flex align-items-center">
                    <CustomInput
                      type="checkbox"
                      id={1212}
                      className="align-self-start"
                      label="&nbsp;"
                    />
                    <p>Notify to HOD</p>
                  </div>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label for="">Reason</Label>
                    <Input type="textarea" name="companyName" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={updateModalToggle}>
                Cancel
              </Button>{" "}
              <Button color="primary1" type="submit" className="ml-auto">
                Save
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
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
              <div style={{ width: "140px" }}>
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  customInput={
                    <Button size="sm" block color="first">
                      <span className="btn-wrapper--label">Month</span>
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
                  placeholder="Employee"
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
                  placeholder="Category"
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
              <b>Shift Roster</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Emp</th>
                <th className="text-center p-3">WD </th>
                <th className="text-center p-3">Off </th>
                <th className="text-center p-3">1</th>
                <th className="text-center p-3">2</th>
                <th className="text-center p-3">3</th>
                <th className="text-center p-3">4 </th>
                <th className="text-center p-3">5 </th>
                <th className="text-center p-3">6 </th>
                <th className="text-center p-3">7 </th>
                <th className="text-center p-3">8 </th>
                <th className="text-center p-3">9 </th>
                <th className="text-center p-3">10 </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>22</span>
                </td>

                <td className="text-center">
                  <span>2</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>E</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>22</span>
                </td>

                <td className="text-center">
                  <span>2</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>E</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>22</span>
                </td>

                <td className="text-center">
                  <span>2</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>E</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Test 1</span>
                </td>
                <td className="text-center">
                  <span>22</span>
                </td>

                <td className="text-center">
                  <span>2</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>E</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>M</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>N</span>
                </td>
                <td className="text-center">
                  <span>OFF</span>
                </td>
                <td className="text-center">
                  <span>M</span>
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
export default ShiftRoster;
