import React, { useState, useEffect } from "react";
// import RcPagination from "rc-pagination";
// import localeInfo from "rc-pagination/lib/locale/en_US";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
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
  CustomInput,
  Container,
} from "reactstrap";
// import Switch from "rc-switch";
// import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import {
  GetAllEmployee,
  getAllLeaveBank,
  getEmployeeLeave,
  createEmployeeLeave,
  UpdateEmployeeLeaveByID,
} from "../../../actions";
// import CreatableSelect from "../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./LeaveRecord.scss";

const LeaveRecord = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);

  // const [disabled] = useState(false);
  // const [selectValues, setSelectValues] = useState([]);
  // const [searchable] = useState(true);
  // const [labelField] = useState("username");
  // const [valueField] = useState("email");

  const [employeeID, setEmployeeID] = useState();
  const [leaveBankID, setLeaveBankID] = useState();
  const [startDatee, setStartDatee] = useState();
  const [endDate, setEndDate] = useState();
  const [balance, setBalance] = useState();
  const [reason, setReason] = useState();
  const [notify, setNotify] = useState(false);
  const [approved, setApproved] = useState(false);

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [status, setStatus] = useState("");
  const [date, setDate] = useState();
  const [updateBalance, setUpdateBalance] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllEmployee());
    dispatch(getAllLeaveBank());
    dispatch(getEmployeeLeave());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { employee, employeeLeave } = useSelector(
    (state) => state.EmployeeReducer
  );
  const { leaveBank } = useSelector((state) => state.LeaveReducer);

  const employeeData = employee?.map((role) => {
    return {
      value: role.id_employee_info,
      label: role.first_name_employee_info,
    };
  });

  const leaveBankData = leaveBank?.map((leave) => {
    return {
      value: leave.id_leave_bank,
      label: leave.name_leave_bank,
    };
  });

  const createLeaveRecord = () => {
    const data = {
      employee_id: employeeID,
      leave_type_id: leaveBankID,
      start_date_employee_leave: startDatee,
      end_date_employee_leave: endDate,
      balance_employee_leave: balance,
      reason_employee_leave: reason,
      is_approved_employee_leave: approved,
      is_notified_employee_leave: notify,
    };

    // console.log("createLeaveRecord", data);
    if (
      employeeID > 0 &&
      leaveBankID > 0 &&
      startDatee?.length > 0 &&
      endDate?.length > 0
    ) {
      // alert("First Four Fields Have Been Filedl");
      dispatch(createEmployeeLeave(data)).then(() => {
        addModalToggle();
        dispatch(getEmployeeLeave());
      });
    } else {
      alert("First Four Fields Must Be Fill");
    }
  };

  const handleUpdateToggle = (data) => {
    var arr = data?.start_date_employee_leave;
    var new1 = arr.split("T");
    setStatus(data.is_approved_employee_leave);
    setDate(new1?.length > 0 && new1[0]);
    setUpdateBalance(data.balance_employee_leave);
    setId(data.id_employee_leave);

    updateToggle();
  };
  const updateDepartment = (e) => {
    e.preventDefault();

    const data = {
      start_date_employee_leave: date,
      balance_employee_leave: updateBalance,
      is_approved_employee_leave: status,
    };
    if (date.length > 0 && updateBalance > 0) {
      dispatch(UpdateEmployeeLeaveByID(data, id)).then(() => {
        updateToggle();
      });
    } else {
      alert("All fields must be filled");
    }
  };

  console.log("dat4e", date);

  // const [startDate, setStartDate] = useState(new Date());
  // const options = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //   },
  //   {
  //     id: 3,
  //     name: "Clementine Bauch",
  //     username: "Samantha",
  //     email: "Nathan@yesenia.net",
  //     phone: "1-463-123-4447",
  //     website: "ramiro.info",
  //   },
  //   {
  //     id: 4,
  //     name: "Patricia Lebsack",
  //     username: "Karianne",
  //     email: "Julianne.OConner@kory.org",
  //     phone: "493-170-9623 x156",
  //     website: "kale.biz",
  //   },
  //   {
  //     id: 5,
  //     name: "Chelsey Dietrich",
  //     username: "Kamren",
  //     email: "Lucio_Hettinger@annie.ca",
  //     phone: "(254)954-1289",
  //     website: "demarco.info",
  //   },
  //   {
  //     id: 6,
  //     name: "Glenna Reichert",
  //     username: "Delphine",
  //     email: "Chaim_McDermott@dana.io",
  //     phone: "(775)976-6794 x41206",
  //     website: "conrad.com",
  //   },
  // ];

  console.log("employeeLeave", employeeLeave);
  return (
    <div id="leaveRecord">
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
            <h1 style={{ color: "#3A3D65" }}>Leave Record</h1>
          </div>
        </div>
        <div className="d-block d-md-flex align-items-center">
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add New Record</span>
          </Button>
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
            Add New Leave Request
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Employee Name</Label>
                    <Select
                      options={employeeData}
                      onChange={(e) => setEmployeeID(e[0].value)}
                      isClearable
                      placeholder={"Employee"}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Leave Type</Label>
                    <Select
                      options={leaveBankData}
                      onChange={(e) => setLeaveBankID(e[0].value)}
                      isClearable
                      placeholder={"Leave Type"}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Start Date</Label>
                    <Input
                      type="date"
                      onChange={(e) => setStartDatee(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">End Date</Label>
                    <Input
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col md="12">
                  <FormGroup>
                    <Label for="">Balance</Label>
                    <Input
                      type="number"
                      onChange={(e) => setBalance(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label for="">Reason</Label>
                    <Input
                      type="textarea"
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <br />
                </Col>
                <Col md="6">
                  <CustomInput
                    type="checkbox"
                    id={1212}
                    className="align-self-start"
                    label="Notify to HOD"
                    checked={notify}
                    onChange={() => setNotify(!notify)}
                  />
                </Col>
                <Col md="6">
                  <CustomInput
                    type="checkbox"
                    id={1211}
                    className="align-self-start"
                    label="Approved"
                    checked={approved}
                    onChange={() => setApproved(!approved)}
                  />
                </Col>
              </Row>
            </Form>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={addModalToggle}>
                Cancel
              </Button>{" "}
              <Button
                color="primary1"
                type="submit"
                className="ml-auto"
                onClick={() => createLeaveRecord()}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className="p-5">
        {/* <div className="p-3 tableContainer1 m-1 selct-pepl">
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
                  placeholder="Branch"
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
              <div className="ml-3">
                <Select
                  options={options}
                  placeholder="Leave Type"
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
                  placeholder="Status"
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
        <br /> */}
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Leave Record</b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Emp Name</th>
                <th className="text-center p-3">Emp I'D </th>
                <th className="text-center p-3">Leave Type</th>
                <th className="text-center p-3">Status</th>
                <th className="text-center p-3">Date </th>
                <th className="text-center p-3">Balance </th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {employeeLeave?.map((data, key) => {
                var arr = data?.start_date_employee_leave;
                var new1 = arr.split("T");
                const leave = leaveBank?.filter((dal) => {
                  return dal.id_leave_bank === data.leave_type_id;
                });
                // console.log("leave in map", leave);
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.employee.first_name_employee_info}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.employee.code_employee_info}</span>
                    </td>

                    <td className="text-center">
                      <span>
                        {leave?.length > 0 &&
                          leave[0]?.leave_type?.name_leave_type}
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        {data.is_approved_employee_leave
                          ? "Approved"
                          : "Not Approve"}
                      </span>
                    </td>
                    <td className="text-center">
                      <span>{new1?.length > 0 && new1[0]}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.balance_employee_leave}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          onClick={() => handleUpdateToggle(data)}
                          style={{ background: "#3B74F9", color: "#fff" }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "edit"]}
                            className="font-size-sm"
                          />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Modal
            zIndex={2000}
            centered
            scrollable
            isOpen={updateModal}
            toggle={updateToggle}
          >
            <ModalHeader toggle={updateToggle}>Update Leave Record</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDepartment}>
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Date
                          </Label>
                          <Input
                            type="date"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Balance
                          </Label>
                          <Input
                            type="text"
                            value={updateBalance}
                            onChange={(e) => {
                              setUpdateBalance(e.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <CustomInput
                          type="checkbox"
                          id={1231}
                          className="align-self-start"
                          label="Approved"
                          checked={status}
                          onChange={() => setStatus(!status)}
                        />
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="divider mt-5 mb-4" />

                <ModalFooter>
                  <Button
                    color="link"
                    className="btn-link-dark"
                    onClick={updateToggle}
                  >
                    Close
                  </Button>{" "}
                  <Button color="primary" type="submit" className="ml-auto">
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </Modal>

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
export default LeaveRecord;
