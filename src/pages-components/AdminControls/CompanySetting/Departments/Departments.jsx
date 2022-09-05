import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";
import Switch from "rc-switch";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminDepartments,
  getAllDepartments,
  UpdateDepartmentByID,
  enableDepartmentByID,
  disableDepartmentByID,
  postDepartment,
} from "../../../../actions";
import "./Departments.scss";

const Departments = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [desiName, setDesiName] = useState("");
  const [desiCode, setDesiCode] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [department, setDepartment] = useState("");
  const [code, setCode] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdminDepartments());
    dispatch(getAllDepartments());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { departmentAdminData, getDepartmentData } = useSelector(
    (state) => state.CompanyReducer
  );

  const handleUpdateToggle = (data) => {
    setDepartment(data.details.name_department);
    setCode(data.details.code_department);
    setId(data.details.id_department);

    updateToggle();
  };

  const updateDepartment = (e) => {
    e.preventDefault();

    const data = {
      name_department: department,
      code_department: code,
    };
    if (department.length > 0 && code.length > 0) {
      dispatch(UpdateDepartmentByID(data, id)).then(() => {
        dispatch(getAllAdminDepartments());
      });
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.details?.is_enable_department === true) {
      dispatch(disableDepartmentByID(data?.details?.id_department)).then(() => {
        dispatch(getAllAdminDepartments());
      });
    } else {
      dispatch(enableDepartmentByID(data?.details?.id_department)).then(() => {
        dispatch(getAllAdminDepartments());
      });
    }
  };

  const handleChangeData = (options) => {
    setSelectedId(options.value);
  };

  const handleAddDepartment = () => {
    const data = {
      parent_deparment_id: selectedId,
      name_department: desiName,
      code_department: desiCode,
    };
    if (desiName.length > 0 && desiCode.length > 0) {
      dispatch(postDepartment(data)).then(() => {
        dispatch(getAllAdminDepartments());
      });
    } else {
      alert("All fields must be filled");
    }

    addModalToggle();
  };

  const parentDepartment = [
    getDepartmentData?.map((pdes) => {
      var value = pdes.id_department;
      var label = pdes.name_department;
      return { value, label };
    }),
  ];

  return (
    <div id="departments">
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
            <h1 style={{ color: "#3A3D65" }}>Departments</h1>
          </div>
        </div>
        <Button
          color="primary"
          onClick={() => {
            dispatch(getAllDepartments());
            addModalToggle();
          }}
        >
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={["fas", "plus"]} />
          </span>
          <span className="btn-wrapper--label">Add New</span>
        </Button>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="lg"
        >
          <ModalHeader toggle={addModalToggle}>Add New Department</ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Name</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setDesiName(e.target.value);
                      }}
                      placeholder="Graphic Designer"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Code</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setDesiCode(e.target.value);
                      }}
                      placeholder="450640"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Parent Department</Label>
                    <Select
                      options={parentDepartment[0]}
                      closeMenuOnSelect={true}
                      onChange={handleChangeData}
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
                onClick={handleAddDepartment}
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
        <div className="pt-3 pb-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Departments </b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Departments</th>
                <th className="text-center p-3">Parent Departments</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">People</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {departmentAdminData?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.details.name_department}</span>
                    </td>
                    <td className="text-center">
                      {data.details?.parent_deparment?.name_department ? (
                        <span>
                          {data.details?.parent_deparment?.name_department}
                        </span>
                      ) : (
                        <span>N / A</span>
                      )}
                    </td>
                    <td className="text-center">
                      <span>{data.details.code_department}</span>
                    </td>

                    <td className="text-center">
                      <span>{data.count}</span>
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
                            checked={data?.details?.is_enable_department}
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
            <ModalHeader toggle={updateToggle}>Update Department</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDepartment}>
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
                            value={department}
                            onChange={(e) => {
                              setDepartment(e.target.value);
                            }}
                            placeholder="Enter Name..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Code
                          </Label>
                          <Input
                            type="text"
                            name=""
                            value={code}
                            onChange={(e) => {
                              setCode(e.target.value);
                            }}
                            placeholder="Code..."
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
export default Departments;
