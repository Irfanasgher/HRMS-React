import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Label,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFindAllPermissions, createNewRole } from "../../../../../actions";

import "./AccessLevelPage.scss";

const AccessLevelPage = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [roleName, setRoleName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFindAllPermissions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { permissions } = useSelector((state) => state.RollReducer);

  // const managerData = permissions?.filter((manager) => {
  //   return manager.role.name_role === "Manager";
  // });
  // const hrData = permissions?.filter((manager) => {
  //   return manager.role.name_role === "HR";
  // });
  // const adminData = permissions?.filter((manager) => {
  //   return manager.role.name_role === "Admin";
  // });

  const handleAddLeaveBank = () => {
    const data = {
      name_role: roleName,
    };

    if (roleName.length > 0) {
      dispatch(createNewRole(data)).then(() => {
        dispatch(getFindAllPermissions());
      });
    } else {
      alert("Please Fill All Fields");
    }

    addModalToggle();
  };

  const arrayData = permissions?.filter((data) => {
    return data.name_role !== "Owner";
  });

  // console.log("permissions", permissions);
  console.log("arrayData", arrayData);
  return (
    <div id="accessLevelPage">
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
            <h1 style={{ color: "#3A3D65" }}>Access Level</h1>
          </div>
        </div>
        <div>
          <Link to="/dashboard/AccessLevel/CreateAccessLevel">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label ml-3">
                Create New Permission
              </span>
            </Button>
          </Link>
          <br />
          <br />
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label ml-5">Add New Role</span>
          </Button>
        </div>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          // size="xl"
        >
          <ModalHeader toggle={addModalToggle}>Add New Role</ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="12">
                  <FormGroup>
                    <Label for="">Name</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setRoleName(e.target.value);
                      }}
                      placeholder="Enter Name..."
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <ModalFooter>
              <Button className="btn btn-secondary" onClick={addModalToggle}>
                Cancel
              </Button>{" "}
              <Button
                onClick={handleAddLeaveBank}
                color="primary1"
                type="submit"
                className="ml-auto"
              >
                Add
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <Label
            className="font-weight-bold pl-4"
            style={{ marginTop: "25px" }}
          >
            Manage Roles
          </Label>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Roll</th>
                <th className="text-left p-3">Permissions</th>
              </tr>
            </thead>
            <tbody>
              {arrayData?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="text-left pl-4">
                      <span>{data.name_role} </span>
                    </td>
                    <td className="text-left pl-3">
                      {data.permission_roles?.map((data, key) => {
                        return (
                          <span key={key} style={{ marginRight: "15px" }}>
                            {`${data.name_entity_permission_role} ${data.name_module_permission_role}`}
                            ,
                          </span>
                        );
                      })}
                    </td>
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
export default AccessLevelPage;
