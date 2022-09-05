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
import "./NewOffboardingTask.scss";

const NewOffboardingTask = () => {
  return (
    <div id="newOffboardingTask">
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
            <h1 style={{ color: "#3A3D65" }}>New Offboarding Task</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>New Offboarding Task</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Form>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Task Name</Label>
                  <Input
                    type="text"
                    name="orgName"
                    // placeholder="e.g. Invitation to phone screen"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Assigned to</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>

              <Col md="12" style={{ marginBottom: "10px" }}>
                <Label for="" style={{ marginBottom: "15px" }}>
                  Due Date
                </Label>
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio1"
                    name="customRadio"
                    label="None"
                  />
                </FormGroup>
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio2"
                    name="customRadio"
                    label="On Termination Date"
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="">Before</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="">Weeks</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="">After</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="6" style={{ alignSelf: "center" }}>
                <Label for="" style={{ marginBottom: "0" }}>
                  Termination Date
                </Label>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Category</Label>
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
                  <Label for="">Send Assignment Notifications...</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label for="">Description</Label>
                  <Input type="textarea" name="orgName" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Attach File(s)</Label>
                  <br />
                  <Input type="file" name="orgName" />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label for="">This is required for...</Label>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <FontAwesomeIcon
                    icon={["fas", "users"]}
                    style={{ fontSize: "16px", color: "#4F5157" }}
                    className="display-2"
                  />
                  <Label for="" className="ml-2">
                    All Employees
                    <span
                      style={{
                        textDecoration: "underline",
                        marginLeft: "10px",
                      }}
                    >
                      Edit
                    </span>
                  </Label>
                </FormGroup>
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
        </div>
      </div>
    </div>
  );
};
export default NewOffboardingTask;
