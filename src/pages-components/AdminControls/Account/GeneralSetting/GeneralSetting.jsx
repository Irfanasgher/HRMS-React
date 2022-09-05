import React from "react";
// import Select from "rc-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, FormGroup, Label, CustomInput, Button } from "reactstrap";

import CreatableSelect from "../../../../layout-components/AddNewCompanyByHaseeb/MyCreatableSelect";
import "./GeneralSetting.scss";

const GeneralSetting = () => {
  return (
    <div id="generalSetting">
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
            <h1 style={{ color: "#3A3D65" }}>General Setting</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>General Setting </b>
            </div>
          </div>

          <div className="divider mt-5 mb-4" />
          <Row className="p-5">
            <Col md="12">
              <div>
                <CustomInput
                  type="checkbox"
                  id={20}
                  className="align-self-start"
                  label="Allow editing and deleting the history line items."
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <CustomInput
                  type="checkbox"
                  id={21}
                  className="align-self-start"
                  label="Allow employees to upload their own photos regardless of other option."
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <CustomInput
                  type="checkbox"
                  id={22}
                  className="align-self-start"
                  label="Allow employees to upload their files in employee upload folder."
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <CustomInput
                  type="checkbox"
                  id={23}
                  className="align-self-start"
                  label="Allow manager to upload the digital signature with manage rights."
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <CustomInput
                  type="checkbox"
                  id={24}
                  className="align-self-start mt-3"
                  label="Allow employees to apply for leave & appraisals."
                />
              </div>
            </Col>
            <Col md="12" style={{ marginTop: "25px" }} />
            <Col md="4">
              <FormGroup>
                <Label for="">Date Input Format</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">Number Format</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">Default Currency</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">Display Name</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">Image Format</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label for="">Upload File Format</Label>
                <CreatableSelect
                  label="unitName"
                  // options={optionUnits[0]}
                  isClearable
                  placeholder={"Country"}
                />
              </FormGroup>
            </Col>

            <Col md="12" style={{ marginTop: "15px" }}>
              <Label>Export Data File Type</Label>
            </Col>
            <Col md="12" style={{ marginTop: "10px" }} />
            <Col md="3">
              <CustomInput
                readOnly
                checked={true}
                type="checkbox"
                id={20}
                className="align-self-start"
                label="Excel"
              />
            </Col>
            <Col md="3">
              <CustomInput
                type="checkbox"
                id={20}
                className="align-self-start"
                label="PDF"
              />
            </Col>
            <Col md="3">
              <CustomInput
                type="checkbox"
                id={20}
                className="align-self-start"
                label="CSV"
              />
            </Col>
            <Col md="3">
              <CustomInput
                type="checkbox"
                id={20}
                className="align-self-start"
                label="Word"
              />
            </Col>
            <Button
              color="primary1"
              type="submit"
              className="ml-auto"
              style={{ marginTop: "30px" }}
            >
              Save Changes
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default GeneralSetting;
