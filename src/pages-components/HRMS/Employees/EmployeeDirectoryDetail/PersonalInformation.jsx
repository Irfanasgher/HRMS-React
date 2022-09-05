import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { UpdateEmployeeByID, UpdateEmpAddress } from "../../../../actions";

import "./index.css";

const PersonalInformation = ({ data, employeeId }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [personalEmail, setPersonalEmail] = useState("");
  const [personalNumber, setPersonalNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [gender, setGender] = useState("");
  const [idCardNumber, setIdCardNumber] = useState();
  const [bloodGroup, setBloodGroup] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const [updateAddressModal, setUpdateAddressModal] = useState(false);
  const updateAddressToggle = () => setUpdateAddressModal(!updateAddressModal);
  const [presentAddress, setPresentAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressId, setAddressId] = useState("");

  const dispatch = useDispatch();

  const handleUpdateToggle = (data) => {
    setEmail(data?.official_email_employee_info);
    setNumber(data?.official_mobile_employee_info);
    setPersonalEmail(data?.personal_email_employee_info);
    setPersonalNumber(data?.personal_mobile_employee_info);
    setDateOfBirth(data?.dob_employee_info);
    setGender(data?.gender_employee_info);
    setIdCardNumber(data?.cnic_number_employee_info);
    setBloodGroup(data?.blood_group_emloyee_info);
    setMaritalStatus(data?.marital_status);

    updateToggle();
  };

  const handleUpdateAddressToggle = (data) => {
    setPresentAddress(data?.employee_addresses[0]?.full_name_employee_address);
    setCountry(data?.employee_addresses[0]?.country_employee_address);
    setState(data?.employee_addresses[0]?.province_employee_address);
    setCity(data?.employee_addresses[0]?.city_employee_address);
    setPostalCode(data?.employee_addresses[0]?.postal_code_employee_address);
    setAddressId(data?.employee_addresses[0]?.id_employee_address);

    updateAddressToggle();
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    const data = {
      official_email_employee_info: email,
      official_mobile_employee_info: number,
      personal_email_employee_info: personalEmail,
      personal_mobile_employee_info: personalNumber,
      dob_employee_info: dateOfBirth,
      gender_employee_info: gender,
      cnic_number_employee_info: idCardNumber,
      blood_group_emloyee_info: bloodGroup,
      marital_status: maritalStatus,
    };
    if (
      email.length > 0 &&
      number.length > 0 &&
      personalEmail.length > 0 &&
      number.length > 0 &&
      dateOfBirth.length > 0 &&
      gender.length > 0 &&
      idCardNumber.length > 0 &&
      bloodGroup.length > 0 &&
      maritalStatus.length > 0
    ) {
      dispatch(UpdateEmployeeByID(data, employeeId));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const updateAddressEmployee = (e) => {
    e.preventDefault();

    const data = {
      full_name_employee_address: presentAddress,
      country_employee_address: country,
      province_employee_address: state,
      city_employee_address: city,
      postal_code_employee_address: postalCode,
    };
    if (
      presentAddress.length > 0 &&
      country.length > 0 &&
      state.length > 0 &&
      city.length > 0 &&
      postalCode.length > 0
    ) {
      dispatch(UpdateEmpAddress(data, addressId, employeeId));
    } else {
      alert("All fields must be filled");
    }
    updateAddressToggle();
  };

  return (
    <div className="wizard-steps horizontal">
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateToggle}
      >
        <ModalHeader toggle={updateToggle}>Update Employee</ModalHeader>
        <ModalBody>
          <form onSubmit={updateEmployee}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Official Email
                      </Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Official Number
                      </Label>
                      <Input
                        type="number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Personal Email
                      </Label>
                      <Input
                        type="email"
                        value={personalEmail}
                        onChange={(e) => {
                          setPersonalEmail(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Personal Number
                      </Label>
                      <Input
                        type="number"
                        value={personalNumber}
                        onChange={(e) => {
                          setPersonalNumber(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Date Of Birth
                      </Label>
                      <Input
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => {
                          setDateOfBirth(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Gender
                      </Label>
                      <Input
                        type="text"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        CNIC
                      </Label>
                      <Input
                        type="number"
                        value={idCardNumber}
                        onChange={(e) => {
                          setIdCardNumber(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Blood Group
                      </Label>
                      <Input
                        type="text"
                        value={bloodGroup}
                        onChange={(e) => {
                          setBloodGroup(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Marital Status
                      </Label>
                      <Input
                        type="text"
                        value={maritalStatus}
                        onChange={(e) => {
                          setMaritalStatus(e.target.value);
                        }}
                      />
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

      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateAddressModal}
        toggle={updateAddressToggle}
      >
        <ModalHeader toggle={updateAddressToggle}>Update Employee</ModalHeader>
        <ModalBody>
          <form onSubmit={updateAddressEmployee}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Present Address
                      </Label>
                      <Input
                        type="text"
                        value={presentAddress}
                        onChange={(e) => {
                          setPresentAddress(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Country
                      </Label>
                      <Input
                        type="text"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Province / State
                      </Label>
                      <Input
                        type="text"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        City
                      </Label>
                      <Input
                        type="text"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Postal Code
                      </Label>
                      <Input
                        type="text"
                        value={postalCode}
                        onChange={(e) => {
                          setPostalCode(e.target.value);
                        }}
                      />
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
                onClick={updateAddressToggle}
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
      <Form className="d-flex flex-column">
        <Row className="p-5">
          <Col md="12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="information"></div>
              <div
                className="editContainer"
                onClick={() => handleUpdateToggle(data)}
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "edit"]} color={"#3b3e66"} />
                </span>
              </div>
            </div>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Official Email</Label>
              <Input
                type="email"
                // placeholder="Officialemail@gmail.com"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.official_email_employee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Official Phone#</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.official_mobile_employee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Personal Email</Label>
              <Input
                type="email"
                // placeholder="Officialemail@gmail.com"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.personal_email_employee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Personal Phone#</Label>
              <Input
                type="text"
                // placeholder="032100000000"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.personal_mobile_employee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <Label for="">Date Of Birth </Label>
            <Input
              type="date"
              // placeholder="032100000000"
              style={{ cursor: "pointer" }}
              readOnly
              defaultValue={data?.dob_employee_info}
            />
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">Gender</Label>
              <Input
                type="text"
                // placeholder="032100000000"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.gender_employee_info}
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">CNIC</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.cnic_number_employee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Blood Group</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.blood_group_emloyee_info}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Marital Status</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={data?.marital_status}
              />
            </FormGroup>
          </Col>
          <Col md="12">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="information">Address Information</h5>
              <div
                className="editContainer"
                onClick={() => handleUpdateAddressToggle(data)}
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "edit"]} color={"#3b3e66"} />
                </span>
              </div>
            </div>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label for="">Present Address</Label>
              <Input
                type="text"
                // placeholder="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, "
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.employee_addresses?.length > 0
                    ? data?.employee_addresses[0]?.full_name_employee_address
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Country</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.employee_addresses?.length > 0
                    ? data?.employee_addresses[0]?.country_employee_address
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Province / State</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.employee_addresses?.length > 0
                    ? data?.employee_addresses[0]?.province_employee_address
                    : ""
                }
              />
            </FormGroup>
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">City</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.employee_addresses?.length > 0
                    ? data?.employee_addresses[0]?.city_employee_address
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Postal Code</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.employee_addresses?.length > 0
                    ? data?.employee_addresses[0]?.postal_code_employee_address
                    : ""
                }
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default PersonalInformation;
