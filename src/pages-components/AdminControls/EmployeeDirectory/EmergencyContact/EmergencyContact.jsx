import React, { useEffect, useState } from "react";
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
  Label,
  FormGroup,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllDependentType,
  CreateDependent,
  disableDependentByID,
  enableDependentByID,
  UpdateDependentByID,
} from "../../../../actions";

import "./EmergencyContact.scss";

const EmergencyContact = () => {
  const [dependent, setDependent] = useState("");

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllDependentType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableDependentByID(data?.id_dependent_type));
    } else {
      dispatch(enableDependentByID(data?.id_dependent_type));
    }
  };

  const addDependent = () => {
    const data = {
      name_dependent_type: dependent,
    };
    if (dependent.length > 0) {
      dispatch(CreateDependent(data)).then(() => {
        dispatch(GetAllDependentType());
        setDependent("");
      });
    } else {
      alert("Input Field should not ne empty");
    }
  };

  const handleUpdateToggle = (data) => {
    setName(data.name_dependent_type);
    setId(data.id_dependent_type);

    updateToggle();
  };

  const updateDependent = (e) => {
    e.preventDefault();

    const data = {
      name_dependent_type: name,
    };
    if (name.length > 0) {
      dispatch(UpdateDependentByID(data, id)).then(() => {
        dispatch(GetAllDependentType());
      });
    } else {
      alert("Input Field should not ne empty");
    }
    updateToggle();
  };
  const { dependentData } = useSelector((state) => state.EmployeeReducer);
  return (
    <div id="emergencyContact">
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
            <h1 style={{ color: "#3A3D65" }}>Emergency Contact Relationship</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Emergency Contact Relationship </b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input
                    placeholder="Add New Item"
                    value={dependent}
                    onChange={(e) => setDependent(e.target.value)}
                  />
                  <InputGroupAddon
                    addonType="append"
                    onClick={addDependent}
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
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {dependentData?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_dependent_type}</span>
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
            <ModalHeader toggle={updateToggle}>Update Dependent</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDependent}>
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
export default EmergencyContact;
