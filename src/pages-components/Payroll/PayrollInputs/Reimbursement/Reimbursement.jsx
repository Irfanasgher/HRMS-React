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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
  Form,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./Reimbursement.scss";

const Reimbursement = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);

  const [updateModal, setUpdateModal] = useState(false);
  const updateModalToggle = () => setUpdateModal(!updateModal);

  const [disabled] = useState(false);
  const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  const [startDate, setStartDate] = useState(new Date());
  console.log('Reimbursement', selectValues)
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
    <div id="reimbursement">
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
            <h1 style={{ color: "#3A3D65" }}>Reimbursement</h1>
          </div>
        </div>
        <div className="d-block d-md-flex flex-column align-items-center">
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add Reimbursement</span>
          </Button>
          <UncontrolledButtonDropdown className="m-2">
            <Button
              href="#/"
              size="m"
              className="py-3"
              // onClick={toggle2}
              // color="primary"
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
              <span className="btn-wrapper--label ml-4">Download</span>
              {/* <span className="btn-wrapper--icon ml-3">
                <FontAwesomeIcon icon={["fas", "angle-down"]} />
              </span> */}
            </Button>
            <DropdownToggle
              caret
              // color="primary"
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
                  // to="/dashboard/AddNewEmployee"
                  href="#/"
                  rel="noopener noreferrer"
                  className="dropdown-item"
                  // onClick={(e) => e.preventDefault()}
                >
                  Employee Card
                </a>
              </div>
              <div role="menuitem">
                <a
                  className="dropdown-item"
                  href="#/"
                  // onClick={updateModalToggle}
                >
                  Employee Doc
                </a>
              </div>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="lg"
        >
          <ModalHeader toggle={addModalToggle}>
            New Reimbursement ID
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Employee Name</Label>
                    <CreatableSelect
                      label="unitName"
                      // options={optionUnits[0]}
                      isClearable
                      placeholder={"Country"}
                    />
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
                    <Label for="">Department</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Location</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Reimbursement Details</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <Label for="">Date</Label>
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
                    <Label for="">Type</Label>
                    <CreatableSelect
                      label="unitName"
                      // options={optionUnits[0]}
                      isClearable
                      placeholder={"Country"}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Amount</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Amount in Words</Label>
                    <Input type="text" name="companyName" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Upload the Recipts </Label>
                    <Input type="file" name="companyName" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={addModalToggle}>
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
                  placeholder="Type"
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
                  placeholder="Location"
                  searchable={searchable}
                  disabled={disabled}
                  labelField={labelField}
                  valueField={valueField}
                  // values={[options.find((opt) => opt.username === "Kamren")]}
                  onChange={(values) => setSelectValues(values)}
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
          </div>
        </div>
        <br />
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Reimbursement</b>
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
                <th className="text-center p-3">Department</th>
                <th className="text-center p-3">Location</th>
                <th className="text-center p-3">Reimb I'D</th>
                <th className="text-center p-3">Date</th>
                <th className="text-center p-3">Reimb Type</th>
                <th className="text-center p-3">Amount</th>
                <th className="text-center p-3">Status </th>
                <th className="text-center p-3">Remark </th>
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
                  <span>IT</span>
                </td>
                <td className="text-center">
                  <span>DHA Phase 8</span>
                </td>
                <td className="text-center">
                  <span>98657</span>
                </td>
                <td className="text-center">
                  <span>20-08-2021</span>
                </td>
                <td className="text-center">
                  <span>Fuel Adjustment</span>
                </td>
                <td className="text-center">
                  <span>50000</span>
                </td>
                <td className="text-center">
                  <span>Paid</span>
                </td>
                <td className="text-center">
                  <span>Approved</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={updateModalToggle}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
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
                  <span>IT</span>
                </td>
                <td className="text-center">
                  <span>DHA Phase 8</span>
                </td>
                <td className="text-center">
                  <span>98657</span>
                </td>
                <td className="text-center">
                  <span>20-08-2021</span>
                </td>
                <td className="text-center">
                  <span>Fuel Adjustment</span>
                </td>
                <td className="text-center">
                  <span>50000</span>
                </td>
                <td className="text-center">
                  <span>Paid</span>
                </td>
                <td className="text-center">
                  <span>Approved</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={updateModalToggle}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
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
                  <span>IT</span>
                </td>
                <td className="text-center">
                  <span>DHA Phase 8</span>
                </td>
                <td className="text-center">
                  <span>98657</span>
                </td>
                <td className="text-center">
                  <span>20-08-2021</span>
                </td>
                <td className="text-center">
                  <span>Fuel Adjustment</span>
                </td>
                <td className="text-center">
                  <span>50000</span>
                </td>
                <td className="text-center">
                  <span>Paid</span>
                </td>
                <td className="text-center">
                  <span>Approved</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={updateModalToggle}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
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
                  <span>IT</span>
                </td>
                <td className="text-center">
                  <span>DHA Phase 8</span>
                </td>
                <td className="text-center">
                  <span>98657</span>
                </td>
                <td className="text-center">
                  <span>20-08-2021</span>
                </td>
                <td className="text-center">
                  <span>Fuel Adjustment</span>
                </td>
                <td className="text-center">
                  <span>50000</span>
                </td>
                <td className="text-center">
                  <span>Paid</span>
                </td>
                <td className="text-center">
                  <span>Approved</span>
                </td>
                <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      onClick={updateModalToggle}
                      style={{ background: "#3B74F9", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "edit"]}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button
                      style={{ background: "#FF0000", color: "#fff" }}
                      className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                    >
                      <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        className="font-size-sm"
                      />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
            <Modal
              zIndex={2000}
              centered
              scrollable
              isOpen={updateModal}
              toggle={updateModalToggle}
              size="lg"
            >
              <ModalHeader toggle={updateModalToggle}>
                Reimbursement ID : 2020202
              </ModalHeader>
              <ModalBody>
                <Form onSubmit={console.log("Data of upload")}>
                  <Row className="p-3">
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Employee Name</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Employee Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Employee ID</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Employee ID"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Department</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Department"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Location</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Location"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Reimbursement Details</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Reim details"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <Label for="">Date</Label>
                      <InputGroup>
                        <DatePicker
                          className="form-control"
                          dateFormat={"yyyy-MM-dd"}
                          placeholder={"20/08/1990"}
                          selected={Date.now()}
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
                        <Label for="">Type</Label>
                        <CreatableSelect
                          label="unitName"
                          // options={optionUnits[0]}
                          isClearable
                          placeholder={"Country"}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Amount</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="115450"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Amount in Words</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Amount in Words"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Upload the document </Label>
                        <Input
                          type="file"
                          name="companyName"
                          placeholder="Reimbursement_2020202"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Remarks</Label>
                        <Input
                          type="text"
                          name="companyName"
                          placeholder="Approved"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Comments</Label>
                        <Input type="text" name="companyName" />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <div className="d-flex align-items-center">
                        <CustomInput
                          type="checkbox"
                          checked={true}
                          id={1}
                          className="align-self-start"
                          label="&nbsp;"
                        />
                        <p>Approved</p>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="d-flex align-items-center">
                        <CustomInput
                          type="checkbox"
                          id={2}
                          className="align-self-start"
                          label="&nbsp;"
                        />
                        <p>Rejected</p>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="d-flex align-items-center">
                        <CustomInput
                          type="checkbox"
                          id={3}
                          className="align-self-start"
                          label="&nbsp;"
                        />
                        <p>Hold</p>
                      </div>
                    </Col>
                    <Col md="3">
                      <div className="d-flex align-items-center">
                        <CustomInput
                          type="checkbox"
                          id={4}
                          className="align-self-start"
                          label="&nbsp;"
                        />
                        <p>Send to HOD</p>
                      </div>
                    </Col>
                  </Row>
                </Form>
                <ModalFooter>
                  <Button
                    className="btn btn-secondary"
                    onClick={updateModalToggle}
                  >
                    Cancel
                  </Button>{" "}
                  <Button color="primary1" type="submit" className="ml-auto">
                    Save
                  </Button>
                </ModalFooter>
              </ModalBody>
            </Modal>
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
export default Reimbursement;
