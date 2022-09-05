import React from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, Form, Input, Label, Row, Col, Button } from "reactstrap";
import CreatableSelect from "../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./AddOfficeShift.scss";

const AddOfficeShift = () => {
  return (
    <div id="addOfficeShift">
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
            <h1 style={{ color: "#3A3D65" }}>Add Office Shift</h1>
          </div>
        </div>
        {/* <div className="d-block d-md-flex align-items-center">
          <Button color="primary" onClick={updateModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add Office Shift</span>
          </Button>
        </div> */}
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add Office Shift</b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Form onSubmit={console.log("Data of upload")}>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Company</Label>
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
                  <Label for="">Shift</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Shift Name"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Monday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Monday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label for="">Tuesday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Tuesday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Wednesday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Wednesday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Thursday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Thursday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Friday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Friday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Saturday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Saturday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Sunday</Label>
                  <Input type="text" name="companyName" placeholder="In Time" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Sunday</Label>
                  <Input
                    type="text"
                    name="companyName"
                    placeholder="Out Time"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button color="primary1" type="submit" className="ml-auto">
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddOfficeShift;
