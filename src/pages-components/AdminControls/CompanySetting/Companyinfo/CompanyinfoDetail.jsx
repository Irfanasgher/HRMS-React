import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import "./CompanyinfoDetail.scss";

const CompanyinfoDetail = () => {
  return (
    <div id="companyinfoDetail">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-between p-5">
        <div className="editContainer">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={["fas", "edit"]} color={"#fff"} />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div className="box d-flex align-items-center justify-content-center">
            <img src="/logo-2.png" alt="logo" />
          </div>
          <div className="ml-5 app-page-title--heading">
            <h1 className="organizationName">Cresset Technologies</h1>
            <div className="d-flex align-items-center">
              <p className="owner">Company Type:</p>
              {/* <p className="owner ml-1">536541</p> */}
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Contact No: </p>
              <p className="owner ml-1">+92 00 0000 000</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Email Address: </p>
              <p className="owner ml-1"> info@Cressettech.com</p>
            </div>
            <div className="d-flex align-items-center">
              <p className="owner">Website:</p>
              <p className="owner ml-1"> Cressettech.com</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center">
            <p className="owner">Reg# : </p>
            <p className="owner ml-1">762015</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="owner">NTN# : </p>
            <p className="owner ml-1">4520152</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Locations/Branches </b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <div className="p-4">
            <div className="d-flex align-items-center">
              <p className="editing" style={{ width: "60px" }}>
                i)
              </p>
              <p className="editing" style={{ width: "150px" }}>
                DHA Phase 1
              </p>
              <p className="editing" style={{ textDecoration: "underline" }}>
                Edit
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="editing" style={{ width: "60px" }}>
                ii)
              </p>
              <p className="editing" style={{ width: "150px" }}>
                Gulberg
              </p>
              <p className="editing" style={{ textDecoration: "underline" }}>
                Edit
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="editing" style={{ width: "60px" }}>
                iii)
              </p>
              <p className="editing" style={{ width: "150px" }}>
                Link Road
              </p>
              <p className="editing" style={{ textDecoration: "underline" }}>
                Edit
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="editing" style={{ width: "60px" }}>
                iv)
              </p>
              <p className="editing" style={{ width: "150px" }}>
                Mall Road
              </p>
              <p className="editing" style={{ textDecoration: "underline" }}>
                Edit
              </p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">Add More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyinfoDetail;
