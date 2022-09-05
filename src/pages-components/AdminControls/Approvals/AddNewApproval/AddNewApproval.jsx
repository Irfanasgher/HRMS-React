import React from "react";
import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Label, FormGroup, Input, Button, Form } from "reactstrap";
import AccordianData from "../AddApproval/AccordianData";
import "./AddNewApproval.scss";

const AddNewApproval = () => {
  return (
    <div id="addNewApproval">
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
            <h1 style={{ color: "#3A3D65" }}>Add New Approval</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add New Approval</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Form>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Approval Name</Label>
                  <Input
                    type="text"
                    name="orgName"
                    //   placeholder="CressetTech"
                  />
                </FormGroup>
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
              <Col md="12">
                <FormGroup>
                  <Label for="">Approval Description </Label>
                  <Input
                    type="textarea"
                    // placeholder="Cresset Technology HRMS"
                    name="orgLegalName"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label for="">Department</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label for="">Designation</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label for="">Location</Label>
                  <CreatableSelect
                    label="country"
                    //   options={optionCountry[0]}
                    isClearable
                    placeholder={"Country"}
                  />
                </FormGroup>
              </Col>
              <Col md="12" style={{ marginTop: "20px" }}>
                <Button color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={["fas", "plus"]} />
                  </span>
                  <span className="btn-wrapper--label">
                    Add New Approval Form
                  </span>
                </Button>
              </Col>
            </Row>

            <div className="divider mt-5 mb-4" />

            <Row className="p-5">
              <Col md="12">
                <p
                  style={{
                    color: "#3B4064",
                    fontSize: "15px",
                    fontFamily: "Heebo",
                  }}
                >
                  The Following fields can be added to this approval form.
                </p>
              </Col>
              <Col md="12">
                <div
                  className="card-header pr-2"
                  style={{ padding: "0", marginBottom: "10px" }}
                >
                  <div className="card-header--title">
                    <b>Browse Fields</b>
                  </div>
                </div>
                <AccordianData />
              </Col>
            </Row>
          </Form>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button className="btn btn-secondary">Cancel</Button>
            <Button color="primary" type="submit" className="ml-auto">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewApproval;
