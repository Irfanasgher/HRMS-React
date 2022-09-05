import React from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { Row, Col } from "reactstrap";

import ChartsApex1 from "../../../../example-components/ChartsApex/ChartsApex1";
import { ExampleWrapperSimple } from "../../../../layout-components";
import ChartsApex3 from "../../../../example-components/ChartsApex/ChartsApex3";
import ChartsApex7 from "../../../../example-components/ChartsApex/ChartsApex7";

import ListGroupItemC from "./ListGroupItem";

import "./Overview.scss";

const Overview = () => {
  return (
    <div id="overview">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="app-page-title--first">
          <div className="app-page-title--iconbox d-70">
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FaTachometerAlt
                size={30}
                style={{ fontSize: "20px", color: "#3C44B1" }}
              />
            </div>
          </div>
          <div className="app-page-title--heading">
            <h1 style={{ color: "#3A3D65" }}>Employee Overview</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col md={12}>
            <ExampleWrapperSimple
              sectionHeading={"Month Wise Employee Headcount"}
            >
              <ChartsApex1 />
            </ExampleWrapperSimple>
          </Col>
          <Col md={12} style={{ marginTop: "40px" }}></Col>
          <Col md={6}>
            <ExampleWrapperSimple
              sectionHeading={"Headcount by Location"}
              height={"450px"}
            >
              <ChartsApex3 height={420} />
            </ExampleWrapperSimple>
          </Col>
          <Col md={6}>
            <ExampleWrapperSimple
              sectionHeading={"Employee Job Detials"}
              height={"450px"}
            >
              <ChartsApex7 height={420} />
            </ExampleWrapperSimple>
          </Col>

          <Col md={12} style={{ marginTop: "40px" }}></Col>
          <Col md={6}>
            <ListGroupItemC color={"#03A9F4"} heading="Birthday This Month" />
          </Col>
          <Col md={6}>
            <ListGroupItemC color={"#00C74E"} heading="New Hiring" />
          </Col>

          <Col md={12} style={{ marginTop: "40px" }}></Col>
          <Col md={12}>
            <ListGroupItemC color={"#00C74E"} heading="Joining Anniversary" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Overview;
