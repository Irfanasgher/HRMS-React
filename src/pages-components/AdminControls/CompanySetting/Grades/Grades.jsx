import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetGradeList } from "../../../../actions";

import "./Grades.scss";

const Grades = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGradeList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { grades } = useSelector((state) => state.EmployeeReducer);

  return (
    <div id="grades">
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
            <h1 style={{ color: "#3A3D65" }}>Grades</h1>
          </div>
        </div>
        {/* <Link to="/dashboard/Grades/AddGrade">
          <Button color="primary">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label">Add Grade</span>
          </Button>
        </Link> */}
      </div>
      <div className="p-5">
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Grades </b>
            </div>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Grade</th>
                <th className="text-center p-3">Benefit Group </th>
                <th className="text-center p-3">Employees</th>
                {/* <th className="text-center p-3">Action </th> */}
              </tr>
            </thead>
            <tbody>
              {grades?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.detail.grade_policy_group}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.detail.name_policy_group}</span>
                    </td>

                    <td className="text-center">
                      <span>{data.count}</span>
                    </td>
                    {/* <td className="text-center">
                  <div className="d-flex align-items-center justify-content-center">
                  <Button
                  style={{ background: "#3B74F9", color: "#fff" }}
                  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                  <FontAwesomeIcon
                  icon={["far", "edit"]}
                  className="font-size-sm"
                  />
                  </Button>
                  <Button
                  style={{ background: "#FF0000", color: "#fff" }}
                  className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                  >
                  <FontAwesomeIcon
                  icon={["far", "trash-alt"]}
                  className="font-size-sm"
                  />
                  </Button>
                  </div>
                </td> */}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Grades;
