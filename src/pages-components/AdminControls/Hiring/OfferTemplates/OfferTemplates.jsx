import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./OfferTemplates.scss";

const OfferTemplates = () => {
  return (
    <div id="offerTemplates">
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
            <h1 style={{ color: "#3A3D65" }}>Offer Templates</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Offer Templates </b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-5">
            <p
              style={{
                fontSize: "15px",
                fontFamily: "Heebo",
                color: "#3B4064",
              }}
            >
              Offer templates help bridge the gap between the applicant tracking
              system and employee self-onboarding
            </p>
            <Link to="/dashboard/OfferTemplates/AddOfferTemplate">
              <Button color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "plus"]} />
                </span>
                <span className="btn-wrapper--label">Add Template</span>
              </Button>
            </Link>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            // style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left pl-4">
                  <span>Full-Time - At Will</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Full-Time - At Will</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Full-Time - At Will</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="text-left pl-4">
                  <span>Full-Time - At Will</span>
                </td>
                <td className="text-center">
                  <Button
                    style={{ background: "#FF0000", color: "#fff" }}
                    className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={["far", "trash-alt"]}
                      className="font-size-sm"
                    />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default OfferTemplates;
