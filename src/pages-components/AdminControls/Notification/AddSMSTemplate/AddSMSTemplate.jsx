import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  Form,
  CustomInput,
} from "reactstrap";
import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./AddSMSTemplate.scss";

const AddSMSTemplate = () => {
  return (
    <div id="addSMSTemplate">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "user"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Add New SMS Template</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add New SMS Template</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Form>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Title</Label>
                  <Input
                    type="text"
                    name="orgName"
                    // placeholder="e.g. Invitation to phone screen"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">BCC:</Label>
                  <Input type="text" name="orgName" />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label for="">Message</Label>
                  <Input type="text" name="orgName" />
                </FormGroup>
              </Col>
              <Col md="12" style={{ marginBottom: "10px" }}>
                <Label for="">Associate Benefit Group </Label>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio1"
                    name="customRadio"
                    label="Leave"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio2"
                    name="customRadio"
                    label="Payroll"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio3"
                    name="customRadio"
                    label="Time & Attendance"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio4"
                    name="customRadio"
                    label="Announcement"
                  />
                </FormGroup>
              </Col>
              <Col md="7" />
              <Col md="6">
                <FormGroup>
                  <Label for="">Template Available For</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Send to</Label>
                </FormGroup>
                <Row>
                  <Col md="4">
                    <FormGroup>
                      <CustomInput
                        checked={true}
                        className="mb-3"
                        type="checkbox"
                        id="exampleCustomRadio41"
                        name="customRadio"
                        label="Employee"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <CustomInput
                        className="mb-3"
                        type="checkbox"
                        id="exampleCustomRadio42"
                        name="customRadio"
                        label="Employee & HOD"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <CustomInput
                        className="mb-3"
                        type="checkbox"
                        id="exampleCustomRadio43"
                        name="customRadio"
                        label="Manager"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button className="btn btn-secondary">Cancel</Button>
            <Button color="primary1" type="submit" className="ml-auto">
              Save
            </Button>
          </div>
          <div className="divider mt-5 mb-4" />
          <div className="p-5">
            <div className="d-flex align-items-center justify-content-between">
              <Col md="6" style={{ paddingLeft: "0" }}>
                <FormGroup>
                  <Label for="">Send Test SMS</Label>
                  <Input
                    type="text"
                    placeholder="Enter Number Here"
                    name="orgLegalName"
                  />
                </FormGroup>
              </Col>
              <Button
                color="primary1"
                type="submit"
                className="ml-auto"
                style={{ marginTop: "15px" }}
              >
                Send Test Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddSMSTemplate;
