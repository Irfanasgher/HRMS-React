import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Label, FormGroup, Input, Button, Form } from "reactstrap";
import "./AddOfferTemplate.scss";

const AddOfferTemplate = () => {
  return (
    <div id="addOfferTemplate">
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
            <h1 style={{ color: "#3A3D65" }}>Add New Email Template</h1>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Add New Email Template</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Form>
            <Row className="p-5">
              <Col md="6">
                <FormGroup>
                  <Label for="">Template Name</Label>
                  <Input
                    type="text"
                    name="orgName"
                    placeholder="e.g. Invitation to phone screen"
                  />
                </FormGroup>
              </Col>
            </Row>

            <div className="divider mt-5 mb-4" />
            <Row className="p-5">
              <Col md="12">
                <div
                  className="card-header pr-2"
                  style={{ padding: "0", marginBottom: "10px" }}
                >
                  <div className="card-header--title">
                    <b>Offer Letter</b>
                  </div>
                </div>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label for="">
                    Type or paste the full offer letter details below. Drag in
                    placeholders to be filled when the offer letter is sent.
                  </Label>
                  <Input
                    type="textarea"
                    placeholder="Email Subject"
                    name="orgLegalName"
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <div
                  className="card-header pr-2"
                  style={{
                    padding: "0",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  <div className="card-header--title">
                    <b>Offer Email</b>
                  </div>
                </div>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label for="">
                    This is the email the candidate will receive notifying them
                    of their offer.
                  </Label>
                  <Input
                    type="textarea"
                    placeholder="Email Subject"
                    name="orgLegalName"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <div className="divider my-5" />
          <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
            <Button className="btn btn-secondary">Cancel</Button>
            <Button color="primary" type="submit" className="ml-auto">
              Save Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddOfferTemplate;
