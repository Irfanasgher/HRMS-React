import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  CustomInput,
  Button,
} from "reactstrap";

import DualListbox from "../AddPolicyGroup/DualListbox";
import "./AddGrade.scss";

const AddGrade = () => {
  return (
    <div id="addGrade">
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
            <h1 style={{ color: "#3A3D65" }}>Add Grade</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add Grade </b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Form onSubmit={console.log("Data of upload")}>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Title</Label>
                  <Input
                    type="text"
                    name="companyName"
                    // placeholder="Graphic Designer"
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Code</Label>
                  <Input type="text" name="companyName" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="">Short Form</Label>
                  <Input
                    type="text"
                    name="companyName"
                    //   placeholder="450640"
                  />
                </FormGroup>
              </Col>
              <Col md="6" style={{ alignSelf: "center" }}>
                <CustomInput
                  checked={true}
                  type="checkbox"
                  id={20}
                  className="align-self-start"
                  label="is Ative"
                />
              </Col>
              <Col md="12" style={{ marginTop: "10px" }} />
              <Col md="3">
                <Label for="">Associate Benefit Group </Label>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio1"
                    name="customRadio"
                    label="A"
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
                    label="B"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio3"
                    name="customRadio"
                    label="C"
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
                    label="D"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio5"
                    name="customRadio"
                    label="E"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio6"
                    name="customRadio"
                    label="F"
                  />
                </FormGroup>
              </Col>
              <Col md="1">
                <FormGroup>
                  <CustomInput
                    className="mb-3"
                    type="radio"
                    id="exampleCustomRadio7"
                    name="customRadio"
                    label="G"
                  />
                </FormGroup>
              </Col>

              <Col md="12" style={{ marginTop: "10px" }} />
              <Col md="6">
                <h5 className="font-size-sm font-weight-bold">
                  Available Employees
                </h5>
              </Col>
              <Col md="6">
                <h5 className="font-size-sm font-weight-bold">
                  Selected Employees
                </h5>
              </Col>
              <Col md="12">
                <DualListbox />
              </Col>
            </Row>
          </Form>
          <div className="divider mt-5 mb-4" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button color="primary1" type="submit" className="ml-auto">
              Save
            </Button>
            <Button color="primary1" type="submit" className="ml-auto">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddGrade;
