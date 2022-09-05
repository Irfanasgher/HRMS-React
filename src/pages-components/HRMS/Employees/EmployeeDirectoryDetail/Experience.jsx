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
import { UpdateEmpWorkExperience } from "../../../../actions";

const Experience = ({ data, employeeId }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [yearStarted, setYearStarted] = useState("");
  const [yearEnded, setYearEnded] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");

  console.log("id", id);

  const dispatch = useDispatch();

  const handleUpdateToggle = (data) => {
    setName(data?.company__work_experience);
    const startDate = data?.year_started_work_experience;
    const startedData = startDate?.split("T");
    setYearStarted(startedData[0]);
    const endDate = data?.year_ended_work_experience;
    const endedData = endDate?.split("T");
    setYearEnded(endedData[0]);
    setDesignation(data?.position__work_experience);
    setSalary(data?.salary__work_experience);
    setId(data?.id_work_experience);

    updateToggle();
  };

  const updateExperience = (e) => {
    e.preventDefault();

    const data = {
      company__work_experience: name,
      year_started_work_experience: yearStarted,
      year_ended_work_experience: yearEnded,
      position__work_experience: designation,
      salary__work_experience: salary,
    };
    if (
      name.length > 0 &&
      yearStarted.length > 0 &&
      yearEnded.length > 0 &&
      designation.length > 0 &&
      salary > 0
    ) {
      dispatch(UpdateEmpWorkExperience(data, id, employeeId));
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
            <th className="text-left p-3 pl-4">Company</th>
            {/* <th className="text-center p-3">Period</th> */}
            <th className="text-center p-3">Year Started</th>
            <th className="text-center p-3">Year Ended</th>
            <th className="text-center p-3">Designation </th>
            <th className="text-center p-3">Salary </th>
            <th className="text-center p-3">Action </th>
          </tr>
        </thead>
        <tbody>
          {data?.work_experiences?.map((data, key) => {
            const startDate = data?.year_started_work_experience;
            const startedData = startDate?.split("T");
            // console.log("startedData", startedData[0].length);
            const endDate = data?.year_ended_work_experience;
            const endedData = endDate?.split("T");
            return (
              <tr key={key}>
                <td className="text-left pl-4">
                  <span>{data.company__work_experience}</span>
                </td>
                {/* <td className="text-center">
                  <span>2 Year</span>
                </td> */}
                <td className="text-center">
                  <span>
                    {data?.year_started_work_experience && startedData[0]}
                  </span>
                </td>
                <td className="text-center">
                  <span>
                    {data?.year_ended_work_experience && endedData[0]}
                  </span>
                </td>
                <td className="text-center">
                  <span>{data.position__work_experience}</span>
                </td>
                <td className="text-center">
                  <span>{data.salary__work_experience}</span>
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
        <ModalHeader toggle={updateToggle}>Update Experience</ModalHeader>
        <ModalBody>
          <form onSubmit={updateExperience}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Company Name
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
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Year Started
                      </Label>
                      <Input
                        type="date"
                        value={yearStarted}
                        onChange={(e) => {
                          setYearStarted(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Year Ended
                      </Label>
                      <Input
                        type="date"
                        value={yearEnded}
                        onChange={(e) => {
                          setYearEnded(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Position
                      </Label>
                      <Input
                        type="text"
                        value={designation}
                        onChange={(e) => {
                          setDesignation(e.target.value);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold" for="">
                        Salary
                      </Label>
                      <Input
                        type="text"
                        value={salary}
                        onChange={(e) => {
                          setSalary(e.target.value);
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
export default Experience;
