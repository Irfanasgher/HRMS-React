import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { Table, Label, CustomInput } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getALLRollType, createPermissionRole } from "../../../../../actions";

import "./CreateAccessLevel.scss";

const CreateAccessLevel = () => {
  const [dataArray, setDataArray] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLRollType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { roll } = useSelector((state) => state.RollReducer);

  const data = [
    {
      id: 1,
      name: "Dashboard",
      parent: "Dashboard",
    },
    {
      id: 22,
      name: "Overview",
      parent: "Dashboard",
    },
    {
      id: 2,
      name: "HRMS",
      parent: "HRMS",
    },
    {
      id: 3,
      name: "Organization",
      parent: "HRMS",
    },
    {
      id: 4,
      name: "Employees",
      parent: "HRMS",
    },
    {
      id: 5,
      name: "Time & Attendance",
      parent: "Time & Attendance",
    },
    {
      id: 6,
      name: "Overview",
      parent: "Time & Attendance",
    },
    {
      id: 7,
      name: "Attendance",
      parent: "Time & Attendance",
    },
    {
      id: 8,
      name: "Leave Record",
      parent: "Time & Attendance",
    },
    {
      id: 9,
      name: "Leave Calender",
      parent: "Time & Attendance",
    },
    {
      id: 10,
      name: "Payroll",
      parent: "Payroll",
    },
    {
      id: 11,
      name: "Final Statement",
      parent: "Payroll",
    },
    {
      id: 12,
      name: "Admin Controls",
      parent: "Admin Controls",
    },
    // {
    //   id: 13,
    //   name: "Account",
    //   parent: "Admin Controls",
    // },
    {
      id: 14,
      name: "Organization Setting",
      parent: "Admin Controls",
    },
    {
      id: 15,
      name: "Add Org/Company",
      parent: "Admin Controls",
    },
    {
      id: 16,
      name: "Employee",
      parent: "Admin Controls",
    },
  ];
  const history = useHistory();

  const myChange = (e, accessType, data, rollId, targetID) => {
    const field = {
      role_id: rollId,
      name_entity_permission_role: data.parent,
      id_entity_permission_role: targetID,
      name_module_permission_role:
        data.parent === data.name ? "All" : data.name,
      is_viewonly_permission_role: 1,
      is_update_permission_role: accessType === "View" ? 0 : 1,
      is_delete_permission_role: accessType === "View" ? 0 : 1,
    };

    let found = dataArray.filter((dat, i) => {
      return dat.id_entity_permission_role === targetID;
    });

    if (e.target.id.includes("Manage")) {
      var id = e.target.id.replace("Manage", "View");
      document.getElementById(id).checked = false;
    } else {
      var id1 = e.target.id.replace("View", "Manage");
      document.getElementById(id1).checked = false;
    }

    if (found.length > 0) {
      let final = dataArray.filter((dat) => {
        return (
          dat.id_entity_permission_role !== found[0].id_entity_permission_role
        );
      });
      console.log(final, "Fffffffff");

      if (accessType === "Manage" && e.target.checked) {
        setDataArray([...final, field]);
      } else if (accessType === "View" && e.target.checked) {
        setDataArray([...final, field]);
      } else {
        setDataArray([...final]);
      }
    } else {
      setDataArray([...dataArray, field]);
    }
  };
  console.log("dataArray", dataArray);
  // const myChange1 = (accessType, data, rollId) => {};

  const handlePermissionRole = () => {
    dispatch(createPermissionRole(dataArray)).then(() => {
      history.push("/dashboard/AccessLevel");
    });
  };

  const rollData = roll.filter((rol) => {
    return rol.name_role !== "Owner";
  });
  return (
    <div id="createAccessLevel">
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
            <h1 style={{ color: "#3A3D65" }}>Create New Role</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <Label
            className="font-weight-bold pl-4"
            style={{ marginTop: "25px" }}
          >
            Assign Permission to Roles
          </Label>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Module</th>
                {rollData?.map((data, key) => {
                  return (
                    <th className="text-left p-3" key={key}>
                      {data.name_role}
                      {/* <CustomInput
                    type="checkbox"
                    id={12}
                    className="align-self-start"
                    label="Permissions"
                  /> */}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{`${
                        data.parent === data.name
                          ? data.name
                          : `${data.parent} ${data.name}`
                      } View`}</span>
                      <br />
                      <span>{`${
                        data.parent === data.name
                          ? data.name
                          : `${data.parent} ${data.name}`
                      } Manage`}</span>
                    </td>
                    {rollData?.map((ab, key1) => {
                      return (
                        <td className="text-left pl-3" key={key1}>
                          <div
                          // className="d-flex align-items-center justify-content-between"
                          // style={{ marginRight: "55px" }}
                          >
                            <CustomInput
                              type="checkbox"
                              id={`View${key1}${key}`}
                              className="align-self-start"
                              // label="View"
                              onClick={(e) =>
                                myChange(
                                  e,
                                  "View",
                                  data,
                                  ab.id_role,
                                  `${key1}${key}`
                                )
                              }
                            />
                            <CustomInput
                              type="checkbox"
                              id={`Manage${key1}${key}`}
                              className="align-self-start"
                              // label="Manage"
                              onClick={(e) =>
                                myChange(
                                  e,
                                  "Manage",
                                  data,
                                  ab.id_role,
                                  `${key1}${key}`
                                )
                              }
                            />
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* <div className="divider my-5" /> */}
          <div className="button-group d-flex justify-content-end m-4">
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary1 ml-3"
              // disabled={isSubmitting}
              onClick={() => {
                handlePermissionRole();
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccessLevel;
