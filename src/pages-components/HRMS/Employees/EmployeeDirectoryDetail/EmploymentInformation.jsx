import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
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
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCompanyList,
  getAllCompanyData,
  GetAllocationType,
  GetAllFindBenefitGroupList,
  UpdateEmpAllocation,
} from "../../../../actions";

import "./index.css";

const EmploymentInformation = ({ data, employeeId }) => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);

  const [companyId, setCompanyId] = useState(null);
  const [locationId, setLocationId] = useState(null);

  const [departmentId, setDepartmentId] = useState(null);
  const [updatedDepartmentId, setUpdatedDepartmentId] = useState(null);
  const [designationId, setDesignationId] = useState(null);
  const [updatedDesignationId, setUpdatedDesignationId] = useState(null);
  const [salary, setSalary] = useState("");
  const [updatedSalaryId, setUpdatedSalaryId] = useState(null);
  const [gradeLabel, setGradeLabel] = useState("");
  const [updatedGradeId, setUpdatedGradeId] = useState(null);

  const [allocationData1, setAllocationData1] = useState([]);

  console.log("dataaaaaaaa", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCompanyList());
    dispatch(GetAllFindBenefitGroupList());
    dispatch(GetAllocationType());
    companyId && dispatch(getAllCompanyData(companyId));
  }, [companyId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleUpdateToggle = (data) => {
    setAllocationData1(data[4]?.empInfo?.employee_allocations);
    setSalary(data[5]?.salary?.value_employee_allocation);

    updateToggle();
  };

  const updateEmploymentInformation = (e) => {
    e.preventDefault();

    const departmentData = {
      value_employee_allocation: departmentId,
    };
    if (departmentId > 0) {
      dispatch(
        UpdateEmpAllocation(departmentData, updatedDepartmentId, employeeId)
      );
    }

    const designationData = {
      value_employee_allocation: designationId,
    };
    if (designationId > 0) {
      dispatch(
        UpdateEmpAllocation(designationData, updatedDesignationId, employeeId)
      );
    }

    const salaryData = {
      value_employee_allocation: salary,
    };
    if (salary.length > 0) {
      dispatch(UpdateEmpAllocation(salaryData, updatedSalaryId, employeeId));
    }

    const gradeData = {
      value_employee_allocation: gradeLabel,
    };
    if (gradeLabel.length > 0) {
      dispatch(UpdateEmpAllocation(gradeData, updatedGradeId, employeeId));
    }

    updateToggle();
  };

  const { companyData, gradeData, allocationData } = useSelector(
    (state) => state.EmployeeReducer
  );

  const { getAllCompanyListData } = useSelector(
    (state) => state.CompanyReducer
  );

  const companyList = companyData?.map((cd) => {
    return {
      value: cd.id_company,
      label: cd.name_company,
    };
  });
  const locationList = getAllCompanyListData?.locations?.map((rs) => {
    return {
      value: rs.id_location,
      label: rs.name_location,
    };
  });

  let departmentList = [];

  getAllCompanyListData?.locations?.forEach((pdes) => {
    if (pdes.id_location === locationId) {
      pdes?.mapping_department_locaitons?.forEach((data) => {
        departmentList.push({
          value: data.department.id_department,
          label: data.department.name_department,
        });
      });
    }
  });

  const designationList = getAllCompanyListData?.mapping_designation_company?.map(
    (rs) => {
      return {
        value: rs.designation_defination.id_designation,
        label: rs.designation_defination.name_designation,
      };
    }
  );

  const gradeList = gradeData?.map((gd) => {
    return {
      value: gd.id_policy_group,
      label: gd.grade_policy_group,
    };
  });

  const handleCompanyId = (options) => {
    setCompanyId(options.value);
  };

  const handleLocationId = (options) => {
    setLocationId(options.value);
  };

  const handleDepartmentId = (options, type) => {
    setDepartmentId(options.value);

    let res = allocationData.filter((ar) => {
      return ar.name_allocation === type;
    });

    if (res.length > 0) {
      let res1 = allocationData1.filter((data) => {
        return data.allocation_type_id === res[0].id_allocation;
      });
      setUpdatedDepartmentId(res1[0].id_employee_allocation);
    }
  };

  const handleDesignationId = (options, type) => {
    setDesignationId(options.value);

    let res = allocationData.filter((ar) => {
      return ar.name_allocation === type;
    });

    if (res.length > 0) {
      let res1 = allocationData1.filter((data) => {
        return data.allocation_type_id === res[0].id_allocation;
      });
      setUpdatedDesignationId(res1[0].id_employee_allocation);
    }
  };

  const handleSalaryId = (options, type) => {
    let res = allocationData.filter((ar) => {
      return ar.name_allocation === type;
    });

    if (res.length > 0) {
      let res1 = allocationData1.filter((data) => {
        return data.allocation_type_id === res[0].id_allocation;
      });
      if (res1.length > 0) {
        setUpdatedSalaryId(res1[0].id_employee_allocation);
      }
    }
  };

  const handleGradeId = (options, type) => {
    setGradeLabel(options.label);

    let res = allocationData.filter((ar) => {
      return ar.name_allocation === type;
    });
    console.log("handleGradeId", res);
    if (res.length > 0) {
      let res1 = allocationData1.filter((data) => {
        return data.allocation_type_id === res[0].id_allocation;
      });
      if (res1.length > 0) {
        setUpdatedGradeId(res1[0].id_employee_allocation);
      }
    }
  };
  console.log("zaidiiiiii", allocationData1);
  console.log("setCompanyId", companyId);
  console.log("locationId", locationId);
  console.log("setDepartmentId", departmentId);
  console.log("Designation", designationId);
  console.log("Grade", gradeLabel);
  return (
    <div className="wizard-steps horizontal">
      <Modal
        zIndex={2000}
        size="xl"
        centered
        scrollable
        isOpen={updateModal}
        toggle={updateToggle}
      >
        <ModalHeader toggle={updateToggle}>
          Update Employment Information
        </ModalHeader>
        <ModalBody>
          <form onSubmit={updateEmploymentInformation}>
            <Container>
              <div className="py-4">
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold">Company</Label>
                      <Select
                        options={companyList}
                        closeMenuOnSelect={true}
                        onChange={handleCompanyId}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold">Location</Label>
                      <Select
                        options={locationList}
                        closeMenuOnSelect={true}
                        onChange={handleLocationId}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold">Department</Label>
                      <Select
                        options={departmentList}
                        closeMenuOnSelect={true}
                        onChange={(value) => {
                          handleDepartmentId(value, "department");
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold">Designation</Label>
                      <Select
                        options={designationList}
                        closeMenuOnSelect={true}
                        onChange={(value) => {
                          handleDesignationId(value, "designation");
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
                        onBlur={(e) => {
                          handleSalaryId(e.target.value, "salary");
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label className="font-weight-bold">Grade</Label>
                      <Select
                        options={gradeList}
                        closeMenuOnSelect={true}
                        onChange={(value) => {
                          handleGradeId(value, "grade");
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
      <Form className="d-flex flex-column">
        <Row className="p-5">
          <Col md="12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="information"></div>
              <div
                className="editContainer"
                onClick={() => handleUpdateToggle(data)}
              >
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["fas", "edit"]} color={"#3b3e66"} />
                </span>
              </div>
            </div>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Company</Label>
              <Input
                type="email"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0
                    ? data[1]?.department?.mapping_department_locaitons[0]
                        ?.location?.company_defination?.name_company
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Location</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0
                    ? data[1]?.department?.mapping_department_locaitons[0]
                        ?.location?.name_location
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Department</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0 ? data[1]?.department?.name_department : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <Label for="">Parent Department </Label>
            <Input
              type="text"
              style={{ cursor: "pointer" }}
              readOnly
              defaultValue={
                data?.length > 0
                  ? data[1]?.department?.parent_deparment?.name_department
                  : ""
              }
            />
          </Col>

          <Col md="6">
            <FormGroup>
              <Label for="">Designation</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0 ? data[0]?.designation?.name_designation : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Basic Salary</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0
                    ? data[5]?.salary?.value_employee_allocation
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Joining Date</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0
                    ? data[4]?.empInfo?.joining_date_employee_info
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Employee Code</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0 ? data[4]?.empInfo?.code_employee_info : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Grade</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                defaultValue={
                  data?.length > 0
                    ? data[2]?.grade?.value_employee_allocation
                    : ""
                }
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="">Employee Type</Label>
              <Input
                type="text"
                style={{ cursor: "pointer" }}
                readOnly
                value={
                  data?.length > 0
                    ? data[4]?.empInfo?.employee_type?.name_employee_type
                    : ""
                }
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default EmploymentInformation;
