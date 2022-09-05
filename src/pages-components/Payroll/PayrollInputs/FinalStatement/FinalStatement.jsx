import React, { useState, useEffect, useMemo } from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  // CustomInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
  FormGroup,
  Input,
  Container,
} from "reactstrap";
// import DatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import countryList from "react-select-country-list";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStatement,
  getIncrementType,
  createIncrement,
  getDeductionType,
  createDeduction,
  UpdatedPeriodPayment,
} from "../../../../actions";
import "./FinalStatement.scss";

const FinalStatement = () => {
  const countryData = useMemo(() => countryList().getData(), []);

  const [disabled] = useState(false);
  // const [selectValues, setSelectValues] = useState([]);
  const [searchable] = useState(true);
  const [labelField] = useState("username");
  const [valueField] = useState("email");

  // const [startDate, setStartDate] = useState(new Date());

  // console.log("FinalStatement", selectValues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStatement());
    dispatch(getIncrementType());
    dispatch(getDeductionType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { allStatement, incrementType, deductionType } = useSelector(
    (state) => state.PayrollReducer
  );

  const data = {
    label: "Palestine",
    value: "PS",
  };
  var filtered = countryData.filter(function (el) {
    return el.label !== "Israel" && el.label !== "Palestine, State of";
  });
  filtered.push(data);
  console.log("filtered", filtered);

  const [incrementModal, setIncrementModal] = useState(false);
  const incrementToggle = () => setIncrementModal(!incrementModal);

  const [deductionModal, setDeductionModal] = useState(false);
  const deductionToggle = () => setDeductionModal(!deductionModal);

  const [periodPaymentId, setPeriodPaymentId] = useState(null);
  const [paymentTypeId, setPaymentTypeId] = useState(null);
  const [amountPayable, setAmountPayable] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amount, setAmount] = useState();

  const incrementData = incrementType?.map((pdes) => {
    return {
      id: pdes.id_increment_type,
      username: pdes.name_increment,
    };
  });

  const handlePaymentToggle = (data) => {
    setPeriodPaymentId(data.salaryInfo.id_period_payment);
    setAmountPayable(data.salaryInfo.paid_amount_period_payment);
    setTotalAmount(data.salaryInfo.paid_amount_period_payment);
  };

  const handlePaymentType = (options) => {
    console.log("options", options);
    setPaymentTypeId(options[0].id);
  };
  const createIncrementF = (e) => {
    e.preventDefault();

    const data = {
      period_payment_id: periodPaymentId,
      increment_type_id: paymentTypeId,
      amount_increment: amount,
      is_enable: 1,
    };

    const totalAmountData = {
      paid_amount_period_payment: totalAmount,
    };
    if (amount.length > 0 && paymentTypeId > 0) {
      dispatch(UpdatedPeriodPayment(totalAmountData, periodPaymentId));
      dispatch(createIncrement(data)).then(() => {
        dispatch(getAllStatement());
      });
    } else {
      alert("All fields must be filled");
    }
    console.log("function", data);
    incrementToggle();
  };

  const deductionData = deductionType?.map((pdes) => {
    return {
      id: pdes.id_deduction_type,
      username: pdes.name_deduction_type,
    };
  });

  const createDeductionF = (e) => {
    e.preventDefault();

    const data = {
      period_payment_id: periodPaymentId,
      deduction_type_id: paymentTypeId,
      amount_deduction: amount,
      is_enable: 1,
    };

    const totalAmountData = {
      paid_amount_period_payment: totalAmount,
    };

    if (amount.length > 0 && paymentTypeId > 0) {
      dispatch(UpdatedPeriodPayment(totalAmountData, periodPaymentId));
      dispatch(createDeduction(data)).then(() => {
        dispatch(getAllStatement());
      });
    } else {
      alert("All fields must be filled");
    }
    console.log("function", data);
    deductionToggle();
  };

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

  console.log("amountPayable", amountPayable);
  console.log("totalAmount", totalAmount);

  return (
    <div id="finalStatement">
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
            <h1 style={{ color: "#3A3D65" }}>Final Month Statement </h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        {/* <div className="p-4 tableContainer1 m-1 selct-pepl">
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
              <div style={{ width: "140px" }} className="ml-3">
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
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Button size="sm" color="success">
                  Export
                  <span className="ml-2">
                    <FontAwesomeIcon
                      icon={["fas", "file-download"]}
                      className="mx-auto"
                    />
                  </span>
                </Button>
              </div>
              <div className="ml-3">
                <Button size="sm" color="warning">
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
          </div>
        </div>
        <br /> */}
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Final Month Statement </b>
            </div>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: 0 }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                {/* <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                  <CustomInput
                    type="checkbox"
                    id={12}
                    className="align-self-start"
                    label="&nbsp;"
                  />
                </td> */}
                <th className="text-left p-3 pl-4">Emp Detail</th>
                <th className="text-center p-3">Pay Slip No </th>
                <th className="text-center p-3">Process</th>
                <th className="text-center p-3">Salary Details</th>
                <th className="text-center p-3">Month</th>
                <th className="text-center p-3">Payment Date </th>
                <th className="text-center p-3">Payment Type </th>
                <th className="text-center p-3">Export </th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {allStatement?.map((data, key) => {
                // console.log("data", data);
                // var days = [
                //   "Sunday",
                //   "Monday",
                //   "Tuesday",
                //   "Wednesday",
                //   "Thursday",
                //   "Friday",
                //   "Saturday",
                // ];
                var monthsData = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ];
                var yearData = new Date(
                  data?.salaryInfo?.start_date_period_payment
                );
                var month = monthsData[yearData.getMonth()];
                var year = yearData.getFullYear();
                // console.log("day", days[yearData.getDay()]);
                // console.log("day", yearData.toDateString());
                // console.log("dataaaaaaaa", yearData);
                return (
                  <tr key={key}>
                    {/* <td className="text-left p-3 pl-4" style={{ width: "5%" }}>
                      <CustomInput
                        type="checkbox"
                        id={data.empInfo.empDetail.id_employee_info}
                        className="align-self-start"
                        label="&nbsp;"
                      />
                    </td> */}
                    <td className="text-left pl-4">
                      <span>
                        {`${data.empInfo.empDetail.first_name_employee_info} 
                        ${data.empInfo.empDetail.last_name_employee_info}`}
                      </span>
                      <p className="insideRow">
                        Company: <span>Cressettech</span>
                      </p>
                      <p className="insideRow">
                        Department:{" "}
                        <span>
                          {data.empInfo.department[0]?.name_department}
                        </span>
                      </p>
                      <p className="insideRow">
                        Emp Code:{" "}
                        <span>{data.empInfo.empDetail.code_employee_info}</span>
                      </p>
                    </td>
                    <td className="text-center">
                      <span>{data.salaryInfo.id_period_payment}</span>
                    </td>

                    <td className="text-center">
                      <span>Bank Transfer</span>
                    </td>
                    <td className="text-center">
                      <span>
                        Basic : {data.salaryInfo.salary_amount_period_payment}
                      </span>
                      <p className="insideRow">+ Increment</p>
                      {data.salaryInfo.increments?.map((data, key) => {
                        return (
                          <p className="insideRow" key={key}>
                            {data.increment_type.name_increment}:{" "}
                            <span>{data.amount_increment}</span>
                          </p>
                        );
                      })}
                      <p className="insideRow">- Deduction</p>
                      {data.salaryInfo.deductions?.map((data, key) => {
                        return (
                          <p className="insideRow" key={key}>
                            {data.deduction_type.name_deduction_type}:{" "}
                            <span>{data.amount_deduction}</span>
                          </p>
                        );
                      })}
                      <p className="insideRow">
                        Net Payable:{" "}
                        <span>
                          {data.salaryInfo.paid_amount_period_payment}
                        </span>
                      </p>
                    </td>
                    <td className="text-center">
                      <span>
                        {month}, {year}
                      </span>
                    </td>
                    <td className="text-center">
                      <span>12/05/2021</span>
                    </td>
                    <td className="text-center">
                      <span>
                        {data.salaryInfo.payment_type.name_payment_type}
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div>
                          <Button
                            style={{ background: "#E85656", color: "#fff" }}
                            className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={["far", "file-excel"]}
                              className="font-size-m"
                            />
                          </Button>
                          <p style={{ marginBottom: 0, marginTop: "5px" }}>
                            Excel
                          </p>
                        </div>
                        <div>
                          <Button
                            style={{ background: "#3347AD", color: "#fff" }}
                            className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={["far", "file-pdf"]}
                              className="font-size-m"
                            />
                          </Button>
                          <p style={{ marginBottom: 0, marginTop: "5px" }}>
                            PDF
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div>
                          <Button
                            onClick={() => {
                              handlePaymentToggle(data);
                              incrementToggle();
                            }}
                            style={{ background: "#3B74F9", color: "#fff" }}
                            className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={["fas", "plus"]}
                              className="font-size-sm"
                            />
                          </Button>

                          <p
                            style={{
                              marginBottom: 0,
                              marginTop: "5px",
                              visibility: "hidden",
                            }}
                          >
                            PDF
                          </p>
                        </div>
                        <div>
                          <Button
                            onClick={() => {
                              handlePaymentToggle(data);
                              deductionToggle();
                            }}
                            style={{ background: "#3B74F9", color: "#fff" }}
                            className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                          >
                            <FontAwesomeIcon
                              icon={["fas", "minus"]}
                              className="font-size-sm"
                            />
                          </Button>
                          <p
                            style={{
                              marginBottom: 0,
                              marginTop: "5px",
                              visibility: "hidden",
                            }}
                          >
                            PDF
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
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

          <Modal
            zIndex={2000}
            // size="xl"
            centered
            scrollable
            isOpen={incrementModal}
            toggle={incrementToggle}
          >
            <ModalHeader toggle={incrementToggle}>Increment</ModalHeader>
            <ModalBody>
              <form onSubmit={createIncrementF}>
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label for="">Increment Type</Label>
                          {/* <Select
                            options={parentDepartment[0]}
                            closeMenuOnSelect={true}
                            onChange={handleChangeData}
                          /> */}
                          <Select
                            options={incrementData}
                            placeholder="Select Type"
                            searchable={searchable}
                            disabled={disabled}
                            labelField={labelField}
                            valueField={valueField}
                            // values={[options.find((opt) => opt.username === "Kamren")]}
                            onChange={(values) => handlePaymentType(values)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Amount
                          </Label>
                          <Input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                              setAmount(e.target.value);
                            }}
                            onBlur={(e) => {
                              setTotalAmount(
                                Number(amountPayable) + Number(e.target.value)
                              );
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Total Amount: {totalAmount}
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="divider mt-5 mb-4" />

                <ModalFooter>
                  <Button
                    color="link"
                    className="btn-link-dark"
                    onClick={incrementToggle}
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

          <Modal
            zIndex={2000}
            // size="xl"
            centered
            scrollable
            isOpen={deductionModal}
            toggle={deductionToggle}
          >
            <ModalHeader toggle={deductionToggle}>Deduction</ModalHeader>
            <ModalBody>
              <form onSubmit={createDeductionF}>
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Deduction Type
                          </Label>
                          <Select
                            options={deductionData}
                            placeholder="Select Type"
                            searchable={searchable}
                            disabled={disabled}
                            labelField={labelField}
                            valueField={valueField}
                            // values={[options.find((opt) => opt.username === "Kamren")]}
                            onChange={(values) => handlePaymentType(values)}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Amount
                          </Label>
                          <Input
                            type="number"
                            value={amount}
                            onChange={(e) => {
                              setAmount(e.target.value);
                            }}
                            onBlur={(e) => {
                              setTotalAmount(amountPayable - e.target.value);
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Total Amount: {totalAmount}
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="divider mt-5 mb-4" />

                <ModalFooter>
                  <Button
                    color="link"
                    className="btn-link-dark"
                    onClick={deductionToggle}
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
        </div>
      </div>
    </div>
  );
};
export default FinalStatement;
