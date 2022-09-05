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
import { UpdateEmpEducation } from "../../../../actions";

const Education = ({ data, employeeId }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [institute, setInstitute] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  console.log("id", id);

  const dispatch = useDispatch();

  const handleUpdateToggle = (data) => {
    setInstitute(data?.institute_name_education);
    setMajor(data?.major_education);
    setYear(data?.year_started_education);
    setId(data?.id_education);

    updateToggle();
  };

  const updateEducation = (e) => {
    e.preventDefault();

    const data = {
      institute_name_education: institute,
      major_education: major,
      year_started_education: year,
    };
    if (institute.length > 0 && major.length > 0 && year.length > 0) {
      dispatch(UpdateEmpEducation(data, id, employeeId));
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
            <th className="text-left p-3 pl-4">Title</th>
            <th className="text-center p-3">Institute / University</th>
            <th className="text-center p-3">Majors </th>
            <th className="text-center p-3">Year</th>
            <th className="text-center p-3">Action </th>
          </tr>
        </thead>
        <tbody>
          {data?.eductations?.map((data, key) => {
            return (
              <tr key={key}>
                <td className="text-left pl-4">
                  <span>{data.degree.name_degree}</span>
                </td>
                <td className="text-center">
                  <span>{data.institute_name_education}</span>
                </td>
                <td className="text-center">
                  <span>{data.major_education}</span>
                </td>
                <td className="text-center">
                  <span>{data.year_started_education}</span>
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
        size="xl"
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateToggle}
      >
        <ModalHeader toggle={updateToggle}>Update Education</ModalHeader>
        <ModalBody>
          <form onSubmit={updateEducation}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Institute
                      </Label>
                      <Input
                        type="text"
                        value={institute}
                        onChange={(e) => {
                          setInstitute(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Majors
                      </Label>
                      <Input
                        type="text"
                        value={major}
                        onChange={(e) => {
                          setMajor(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Year
                      </Label>
                      <Input
                        type="date"
                        value={year}
                        onChange={(e) => {
                          setYear(e.target.value);
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
export default Education;
