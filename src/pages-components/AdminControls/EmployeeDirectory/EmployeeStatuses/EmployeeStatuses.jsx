import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Container,
} from "reactstrap";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllEmployeeType,
  CreateEmployeeType,
  disableEmployeeTypeByID,
  enableEmployeeTypeByID,
  UpdateEmployeeTypeByID,
} from "../../../../actions";
import "./EmployeeStatuses.scss";

const EmployeeStatuses = () => {
  const [status, setStatus] = useState("");

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllEmployeeType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableEmployeeTypeByID(data?.id_employee_type));
    } else {
      dispatch(enableEmployeeTypeByID(data?.id_employee_type));
    }
  };

  const addStatus = () => {
    const data = {
      name_employee_type: status,
    };
    if (status.length > 0) {
      dispatch(CreateEmployeeType(data)).then(() => {
        dispatch(GetAllEmployeeType());
        setStatus("");
      });
    } else {
      alert("Input Field should not ne empty");
    }
  };

  const handleUpdateToggle = (data) => {
    setName(data.name_employee_type);
    setId(data.id_employee_type);

    updateToggle();
  };

  const updateStatus = (e) => {
    e.preventDefault();

    const data = {
      name_employee_type: name,
    };
    if (name.length > 0) {
      dispatch(UpdateEmployeeTypeByID(data, id)).then(() => {
        dispatch(GetAllEmployeeType());
      });
    } else {
      alert("Input Field should not ne empty");
    }
    updateToggle();
  };

  const { employeeType } = useSelector((state) => state.EmployeeReducer);

  return (
    <div id="employeeStatuses">
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
            <h1 style={{ color: "#3A3D65" }}>Employment Status</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Employment Status</b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input
                    placeholder="Add New Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <InputGroupAddon
                    addonType="append"
                    onClick={addStatus}
                    style={{ cursor: "pointer" }}
                  >
                    <InputGroupText>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label ml-2">Add</span>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            // style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Employment Status</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {employeeType?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_employee_type}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <Button
                          onClick={() => handleUpdateToggle(data)}
                          style={{ background: "#3B74F9", color: "#fff" }}
                          className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center"
                        >
                          <FontAwesomeIcon
                            icon={["far", "edit"]}
                            className="font-size-sm"
                          />
                        </Button>
                        <div className="ml-2">
                          <Switch
                            checked={data.is_enable}
                            onClick={() => handleToggle(data)}
                            className="switch-medium toggle-switch-second"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Modal
            zIndex={2000}
            centered
            scrollable
            isOpen={updateModal}
            toggle={updateToggle}
          >
            <ModalHeader toggle={updateToggle}>Update Status</ModalHeader>
            <ModalBody>
              <form onSubmit={updateStatus}>
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Name
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            placeholder="Enter Name..."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Container>
                <div className="divider mt-5 mb-4" />

                <ModalFooter>
                  <Button
                    color="link"
                    className="btn-link-dark"
                    onClick={updateToggle}
                  >
                    Close
                  </Button>{" "}
                  <Button color="primary" type="submit" className="ml-auto">
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default EmployeeStatuses;
