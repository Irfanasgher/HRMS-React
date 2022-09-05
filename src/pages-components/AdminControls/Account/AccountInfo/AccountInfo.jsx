import React from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, FormGroup, Label, Input, Progress } from "reactstrap";

import "./AccountInfo.scss";

const AccountInfo = () => {
  return (
    <div id="accountInfo">
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
            <h1 style={{ color: "#3A3D65" }}>Account Info</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Account Info </b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Row className="p-5">
            <Col md="6">
              <FormGroup>
                <Label for="">Account Owner Name </Label>
                <Input type="text" name="companyName" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Account Name </Label>
                <Input type="text" name="companyName" placeholder="name" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Active Employee </Label>
                <Input type="text" name="companyName" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Open Job Posting </Label>
                <Input type="text" name="companyName" placeholder="25" />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">File Storage </Label>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#4F5157",
                    marginBottom: 0,
                  }}
                >
                  150MB of 1500MB
                </p>
                <div className="d-block mb-4">
                  <Progress value="25" color="success" />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </div>

        <div className="pt-3 pb-3 tableContainer" style={{ marginTop: "35px" }}>
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Organization Info </b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Row className="p-5">
            <Col md="6">
              <FormGroup>
                <Label for="">Organization Name</Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Evolve Innovative Solutions"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">NTN#</Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="54684684AD"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Contact Number</Label>
                <Input
                  type="number"
                  name="companyName"
                  placeholder="0321-0000000"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="">Company URL </Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="www.eis.sg"
                />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label for="">Organization Address </Label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Test 123 Street 09 - POBOX #123, Pakistan Lahore"
                />
              </FormGroup>
            </Col>
          </Row>
        </div>
        <div className="pt-3 pb-3 tableContainer" style={{ marginTop: "35px" }}>
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Childe Companies</b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <div className="p-4">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={["fas", "arrow-right"]}
                style={{ fontSize: "14px", color: "#3B4064" }}
                className="display-2"
              />
              <h3 className="cressetTechnologies ml-3">Cresset Technologies</h3>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginTop: "15px" }}
            >
              <FontAwesomeIcon
                icon={["fas", "arrow-right"]}
                style={{ fontSize: "14px", color: "#3B4064" }}
                className="display-2"
              />
              <h3 className="cressetTechnologies ml-3">Buyzzila,PK</h3>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginTop: "15px" }}
            >
              <FontAwesomeIcon
                icon={["fas", "arrow-right"]}
                style={{ fontSize: "14px", color: "#3B4064" }}
                className="display-2"
              />
              <h3 className="cressetTechnologies ml-3">Radius Digital</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
