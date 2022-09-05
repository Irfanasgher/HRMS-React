import React, { useState } from "react";
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
  FormGroup,
  Input,
  Container,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { UpdateEmpDependent } from "../../../../actions";

const Dependent = ({ data, employeeId }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("");

  console.log("id", id);

  const dispatch = useDispatch();

  const handleUpdateToggle = (data) => {
    setName(data?.fullname_employee_dependent);
    // setAddress(data?.is_same_address_employee_dependentn);
    setContact(data?.mobile_employee_dependent);
    setId(data?.id_employee_dependent);

    updateToggle();
  };

  const updateDependent = (e) => {
    e.preventDefault();

    const data = {
      fullname_employee_dependent: name,
      // is_same_address_employee_dependentn: address,
      mobile_employee_dependent: contact,
    };
    if (name.length > 0 && contact.length > 0) {
      dispatch(UpdateEmpDependent(data, id, employeeId));
    } else {
      alert("All fields must be filled");
    }
    console.log("function", data);
    updateToggle();
  };

  return (
    <>
      <Table responsive className="table-alternate-spaced text-nowrap mb-0">
        <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
          <tr>
            <th className="text-left p-3 pl-4">Name</th>
            <th className="text-center p-3">Relation</th>
            {/* <th className="text-center p-3">Address </th> */}
            <th className="text-center p-3">Contact#</th>
            <th className="text-center p-3">Action </th>
          </tr>
        </thead>
        <tbody>
          {data?.employee_dependents?.map((data, key) => {
            return (
              <tr key={key}>
                <td className="text-left pl-4">
                  <span>{data.fullname_employee_dependent}</span>
                </td>
                <td className="text-center">
                  <span>{data.dependent_type?.name_dependent_type}</span>
                </td>
                {/* <td className="text-center">
                  <span>{data.is_same_address_employee_dependent}</span>
                </td> */}
                <td className="text-center">
                  <span>{data.mobile_employee_dependent}</span>
                </td>
                <td className="text-center">
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal
        zIndex={2000}
        // size="xl"
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
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Address
                      </Label>
                      <Input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col> */}
                  <Col md="12">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Contact
                      </Label>
                      <Input
                        type="number"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                        }}
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
    </>
  );
};
export default Dependent;
