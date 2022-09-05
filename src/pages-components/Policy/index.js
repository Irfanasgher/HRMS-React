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
  findAllPolicies,
  enablePolicy,
  disablePolicy,
  createPolicy,
  UpdatePolicyTypeByID,
} from "../../actions";

export default function Policy() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllPolicies());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { policies } = useSelector((state) => state.PolicyReducer);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const [modal3, setModal3] = useState(false);
  const toggle3 = () => {
    setModal3(!modal3);
  };

  const [policyName, setPolicyName] = useState("");
  const [policyNote, setPolicyNote] = useState("");

  const [policyNameEdit, setPolicyNameEdit] = useState("");
  const [policyNoteEdit, setPolicyNoteEdit] = useState("");

  const [policyIdToUpdatePolicy, setpolicyIdToUpdatePolicy] = useState("");

  const toggleEditPolicyButton = (name, policy, id) => {
    setPolicyNameEdit(name);
    setPolicyNoteEdit(policy);
    setpolicyIdToUpdatePolicy(id);
  };

  const addPolicy = () => {
    const data = {
      name_policy_type: policyName,
      code_policy_type: policyNote,
    };
    if (data.name_policy_type.length > 0 && data.code_policy_type.length > 0) {
      dispatch(createPolicy(data));
    } else alert("please fill the fields first");
  };

  const updatePolicy = () => {
    // console.log("sss", policyNameEdit);

    const data = {
      name_policy_type: policyNameEdit,
      code_policy_type: policyNoteEdit,
    };

    dispatch(UpdatePolicyTypeByID(data, policyIdToUpdatePolicy));
  };

  const enableOrDisablePolicy = (id, isChecked) => {
    if (isChecked == false) {
      dispatch(enablePolicy(id));
    } else {
      dispatch(disablePolicy(id));
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
              <span className="btn-wrapper--label">Create Policy</span>
            </Button>
          </div>
          {/*Model dialog enabled on  "Create Policy" button will start from here*/}
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
                  addPolicy();
                }}
              >
                <Container>
                  <div className="py-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Policy Name
                          </Label>
                          <Input
                            type="text"
                            name=""
                            id=""
                            onChange={(e) => {
                              setPolicyName(e.target.value);
                            }}
                            placeholder="Enter policy name..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Policy Note
                          </Label>
                          <Input
                            type="textarea"
                            name=""
                            id=""
                            onChange={(e) => {
                              setPolicyNote(e.target.value);
                            }}
                            placeholder="Add details about your Policy"
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

          {/*Model dialog enabled on  "Create Policy" button is ending  here*/}
          <div></div>
        </Card>
      </div>

      {/*Model dialog enabled on  "Edit Policy" button will start from here*/}

      <Modal zIndex={2000} centered scrollable isOpen={modal3} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>Edit Policy</ModalHeader>
        <ModalBody>
          <form
            onSubmit={() => {
              updatePolicy();
            }}
          >
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Policy Name
                      </Label>
                      <Input
                        type="text"
                        name=""
                        id=""
                        value={policyNameEdit}
                        onChange={(e) => {
                          setPolicyNameEdit(e.target.value);
                        }}
                        placeholder="Enter designation name..."
                      />
                    </FormGroup>
                  </Col>
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Policy Note
                      </Label>
                      <Input
                        type="textarea"
                        name=""
                        id=""
                        value={policyNoteEdit}
                        onChange={(e) => {
                          setPolicyNoteEdit(e.target.value);
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

      {/*Model dialog enabled on  "Edit Policy" button is ending here*/}

      <Card className="p-4 shadow-xxl mb-5">
        <div className="table-responsive-md">
          <Table className="table-alternate-spaced">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>

                <th scope="col">name_policy_type</th>
                <th scope="col">code_policy_type</th>

                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {policies &&
                policies.map((pol, ind) => {
                  // console.log("pol", pol);
                  return (
                    <tr key={ind}>
                      <td className="text-center text-black-50">
                        <span>{pol.id_policy_type}</span>
                      </td>

                      <td>
                        <span>{pol.name_policy_type}</span>
                      </td>
                      <td className="font-size-lg font-weight-bold">
                        <span>{pol.code_policy_type}</span>
                      </td>

                      <td className="text-right">
                        <Button
                          color="neutral-first"
                          className="rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40 "
                          onClick={() => {
                            toggleEditPolicyButton(
                              pol.name_policy_type,
                              pol.code_policy_type,
                              pol.id_policy_type
                            );
                            toggle3();
                          }}
                        >
                          Edit Policy
                        </Button>

                        <div className="mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <Switch
                            className="switch-small"
                            checked={pol.is_enable_policy_type}
                            onClick={() => {
                              enableOrDisablePolicy(
                                pol.id_policy_type,
                                pol.is_enable_policy_type
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
