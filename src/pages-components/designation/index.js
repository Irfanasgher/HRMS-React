import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Card, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Switch from "rc-switch";

import {
  findAllDesignation,
  enableDesignation,
  disableDesignation,
  createDesignation,
  UpdateDesignationTypeByID,
} from "../../actions";

export default function Designation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllDesignation());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { designation } = useSelector((state) => state.DesignationReducer);

  // console.log("designation", designation);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [modal3, setModal3] = useState(false);
  const toggle3 = () => {
    setModal3(!modal3);
  };

  const [designationName, setDesignationName] = useState("");
  const [designationNote, setDesignationNote] = useState("");

  const [designationNameEdit, setDesignationNameEdit] = useState("");
  const [designationNoteEdit, setDesignationNoteEdit] = useState("");

  const [
    designationIdToUpdateDesignation,
    setdesignationIdToUpdateDesignation,
  ] = useState("");

  const toggleEditDesignationButton = (name, designation, id) => {
    setDesignationNameEdit(name);
    setDesignationNoteEdit(designation);
    setdesignationIdToUpdateDesignation(id);
  };

  const addDesignation = () => {
    const data = {
      name_designation_type: designationName,
      note_designation_type: designationNote,
    };
    if (
      data.name_designation_type.length > 0 &&
      data.note_designation_type.length > 0
    ) {
      dispatch(createDesignation(data));
    } else alert("please fill the fields first");
  };

  const updateDesignation = () => {
    // console.log("sss", designationNameEdit);

    const data = {
      name_designation_type: designationNameEdit,
      note_designation_type: designationNoteEdit,
    };

    dispatch(UpdateDesignationTypeByID(data, designationIdToUpdateDesignation));
  };

  const enableOrDisableDesignation = (id, isChecked) => {
    if (isChecked === false) {
      dispatch(enableDesignation(id));
    } else {
      dispatch(disableDesignation(id));
    }
  };

  return (
    <>
      {/*haseeb open */}

      <div className="px-5 pt-5">
        <Card className="d-block d-md-flex text-center text-md-left card-box p-4 align-items-center bg-secondary justify-content-between flex-row">
          <div className="d-block d-md-flex align-items-center">
            <Button
              href="#/"
              size="sm"
              className="m-2"
              onClick={toggle2}
              color="primary"
            >
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label">Create Designation</span>
            </Button>
          </div>
          {/*Model dialog enabled on  "Create Designation" button will start from here*/}
          <Modal
            zIndex={2000}
            centered
            scrollable
            isOpen={modal2}
            toggle={toggle2}
          >
            <ModalHeader toggle={toggle2}> Create Designation</ModalHeader>
            <ModalBody>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addDesignation();
                }}
              >
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Designation Name
                          </Label>
                          <Input
                            type="text"
                            name=""
                            id=""
                            onChange={(e) => {
                              setDesignationName(e.target.value);
                            }}
                            placeholder="Enter designation name..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Designation Note
                          </Label>
                          <Input
                            type="textarea"
                            name=""
                            id=""
                            onChange={(e) => {
                              setDesignationNote(e.target.value);
                            }}
                            placeholder="Add details about your designation"
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
                    onClick={toggle2}
                  >
                    Close
                  </Button>{" "}
                  <Button
                    color="primary"
                    type="submit"
                    className="ml-auto"
                    onClick={toggle2}
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </Modal>

          {/*Model dialog enabled on  "Create Designation" button is ending  here*/}
          <div></div>
        </Card>
      </div>

      {/*Model dialog enabled on  "Edit Designation" button will start from here*/}

      <Modal zIndex={2000} centered scrollable isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>Edit Designation</ModalHeader>
        <ModalBody>
          <form
            onSubmit={() => {
              updateDesignation();
            }}
          >
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Designation Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        value={designationNameEdit}
                        onChange={(e) => {
                          setDesignationNameEdit(e.target.value);
                        }}
                        placeholder="Enter designation name..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Designation Note
                      </Label>
                      <Input
                        type="textarea"
                        name=""
                        id=""
                        value={designationNoteEdit}
                        onChange={(e) => {
                          setDesignationNoteEdit(e.target.value);
                        }}
                        placeholder="Add details about your designation"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="divider mt-5 mb-4" />

            <ModalFooter>
              <Button color="link" className="btn-link-dark" onClick={toggle3}>
                Close
              </Button>{" "}
              <Button
                color="primary"
                type="submit"
                className="ml-auto"
                onClick={toggle3}
              >
                Submit
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>

      {/*Model dialog enabled on  "Edit Designation" button is ending here*/}

      <Card className="p-4 shadow-xxl mb-5">
        <div className="table-responsive-md">
          <Table className="table-alternate-spaced">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>

                <th scope="col">name_designation_type</th>
                <th scope="col">note_designation_type</th>

                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {designation &&
                designation.map((des, ind) => {
                  return (
                    <tr key={ind}>
                      <td className="text-center text-black-50">
                        <span>{des.id_designation_type}</span>
                      </td>

                      <td>
                        <span>{des.name_designation_type}</span>
                      </td>
                      <td className="font-size-lg font-weight-bold">
                        <span>{des.note_designation_type}</span>
                      </td>

                      <td className="text-right">
                        <Button
                          color="neutral-first"
                          className="rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40 "
                          onClick={() => {
                            toggleEditDesignationButton(
                              des.name_designation_type,
                              des.note_designation_type,
                              des.id_designation_type
                            );
                            toggle3();
                          }}
                        >
                          Edit Designation
                        </Button>

                        <div className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <Switch
                            className="switch-small"
                            checked={des.is_enable_designation_type}
                            onClick={() => {
                              enableOrDisableDesignation(
                                des.id_designation_type,
                                des.is_enable_designation_type
                              );
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
}
