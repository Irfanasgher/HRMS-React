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
  getAllDesignation,
  // getAllParentDesignation,
  getAllDesignationType,
  UpdateAdminDesignationByID,
  enableAdminDesignation,
  disableAdminDesignation,
  postDesignationDetail,
} from "../../../../actions";
import "./Designations.scss";

const Designations = () => {
  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [desiName, setDesiName] = useState("");
  const [desiCode, setDesiCode] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTypeId, setSelectedTypeId] = useState();

  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [designation, setDesignation] = useState("");
  const [code, setCode] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDesignation());
    // dispatch(getAllParentDesignation());
    dispatch(getAllDesignationType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { designationData } = useSelector((state) => state.DesignationReducer);
  const { getAllDesignationTypes } = useSelector(
    (state) => state.CompanyReducer
  );

  const handleUpdateToggle = (data) => {
    setDesignation(data.details.name_designation);
    setCode(data.details.code_designation);
    setId(data.details.id_designation);

    updateToggle();
  };

  const updateDesignation = (e) => {
    e.preventDefault();

    const data = {
      name_designation: designation,
      code_designation: code,
    };
    if (designation.length > 0 && code.length > 0) {
      dispatch(UpdateAdminDesignationByID(data, id));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.details?.is_enable_designation === true) {
      dispatch(disableAdminDesignation(data?.details?.id_designation));
    } else {
      dispatch(enableAdminDesignation(data?.details?.id_designation));
    }
  };

  const handleChangeData = (options) => {
    setSelectedId(options.value);
  };

  const handleTypeChangeData = (options) => {
    setSelectedTypeId(options.value);
  };

  const handleAddDesignation = () => {
    const data = {
      parent_designation_id: selectedId,
      designation_type_id: selectedTypeId,
      name_designation: desiName,
      code_designation: desiCode,
    };
    if (selectedTypeId > 0 && desiName.length > 0 && desiCode.length > 0) {
      dispatch(postDesignationDetail(data));
    } else {
      alert("All fields must be filled");
    }
    addModalToggle();
  };

  const parentDesignation1 = designationData?.map((pdes) => {
    return {
      value: pdes.details.id_designation,
      label: pdes.details.name_designation,
    };
  });

  const designationTypes = [
    getAllDesignationTypes?.map((pdes) => {
      var value = pdes.id_designation_type;
      var label = pdes.name_designation_type;
      return { value, label };
    }),
  ];

  return (
    <div id="designations">
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
            <h1 style={{ color: "#3A3D65" }}>Designations</h1>
          </div>
        </div>
        <Button color="primary" onClick={addModalToggle}>
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
          <ModalHeader toggle={addModalToggle}>
            Add New Designations
          </ModalHeader>
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
                    <Label for="">Parent Designations</Label>
                    <Select
                      options={parentDesignation1}
                      closeMenuOnSelect={true}
                      onChange={handleChangeData}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Designation Types</Label>
                    <Select
                      options={designationTypes[0]}
                      closeMenuOnSelect={true}
                      onChange={handleTypeChangeData}
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
                onClick={handleAddDesignation}
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
              <b>Designations </b>
            </div>
          </div>
          <Table responsive className="table-alternate-spaced text-nowrap mb-0">
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Designations</th>
                <th className="text-center p-3">Parents Designation</th>
                <th className="text-center p-3">Code</th>
                <th className="text-center p-3">People</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {designationData?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.details.name_designation}</span>
                    </td>
                    <td className="text-center">
                      {data.details?.parent_designation?.name_designation ? (
                        <span>
                          {data.details?.parent_designation?.name_designation}
                        </span>
                      ) : (
                        <span>N / A</span>
                      )}
                    </td>
                    <td className="text-center">
                      <span>{data.details.code_designation}</span>
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
                            checked={data?.details?.is_enable_designation}
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
            <ModalHeader toggle={updateToggle}>Update Designation</ModalHeader>
            <ModalBody>
              <form onSubmit={updateDesignation}>
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
                            value={designation}
                            onChange={(e) => {
                              setDesignation(e.target.value);
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
export default Designations;
