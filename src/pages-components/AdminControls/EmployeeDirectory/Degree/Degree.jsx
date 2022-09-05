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
  GetAllDegree,
  CreateDegree,
  disableDegreeByID,
  enableDegreeByID,
  UpdateDegreeByID,
} from "../../../../actions";

import "./Degree.scss";

const Degree = () => {
  const [degree, setDegree] = useState("");

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllDegree());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableDegreeByID(data?.id_degree));
    } else {
      dispatch(enableDegreeByID(data?.id_degree));
    }
  };

  const addDegree = () => {
    const data = {
      name_degree: degree,
    };
    if (degree.length > 0) {
      dispatch(CreateDegree(data)).then(() => {
        dispatch(GetAllDegree());
        setDegree("");
      });
    } else {
      alert("Input Field should not ne empty");
    }
  };

  const handleUpdateToggle = (data) => {
    setName(data.name_degree);
    setId(data.id_degree);

    updateToggle();
  };

  const updateDegree = (e) => {
    e.preventDefault();

    const data = {
      name_degree: name,
    };
    if (name.length > 0) {
      dispatch(UpdateDegreeByID(data, id)).then(() => {
        dispatch(GetAllDegree());
      });
    } else {
      alert("Input Field should not ne empty");
    }
    updateToggle();
  };

  const { degreeData } = useSelector((state) => state.EmployeeReducer);

  return (
    <div id="degree">
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
            <h1 style={{ color: "#3A3D65" }}>Degree</h1>
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
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Degree </b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input
                    placeholder="Add New Item"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <InputGroupAddon
                    addonType="append"
                    onClick={addDegree}
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
              {degreeData?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_degree}</span>
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
            <ModalHeader toggle={updateToggle}>Update Degree</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDegree}>
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
export default Degree;
