import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Collapse,
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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  getAllPoliciesForDropDown,
  CreateMappingPolicyGroup,
  GetAllPolicyGroup,
} from "../../../../actions";

const LivePreviewExample = (props) => {
  const [accordionIndex, setAccordionIndex] = useState(0);

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [id, setId] = useState();
  const [selectedPolicy, setSelectedPolicy] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPoliciesForDropDown());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { dropDownPolicies } = useSelector((state) => state.PolicyReducer);

  const toggleAccordion = (tab) => {
    setAccordionIndex(tab);
  };

  const handleAddToggle = (data) => {
    setId(data.id_policy_group);

    addModalToggle();
  };

  const handlPolicy = (options) => {
    let arr = [];

    for (let i = 0; i < options.length; i++) {
      arr.push(options[i].value);
    }

    // console.log("options", options);
    setSelectedPolicy(arr);

    console.log("arr", arr);
  };

  const planList = [
    dropDownPolicies?.map((pdes) => {
      var value = pdes.id_policy;
      var label = pdes.name_policy;
      return { value, label };
    }),
  ];

  const handleAddDesignation = () => {
    const data = {
      policy_group_id: id,
      policy_id: selectedPolicy,
    };
    // console.log("dataaaaaaaaaaa", data);
    if (selectedPolicy.length > 0) {
      dispatch(CreateMappingPolicyGroup(data)).then(() => {
        dispatch(GetAllPolicyGroup());
      });
    } else {
      alert("Please Select Plan");
    }
    addModalToggle();
  };

  console.log("selectedPolicy", selectedPolicy);
  // console.log("plansssssssss props", this.props.data);
  return (
    <>
      <div className="accordion mb-5">
        {props.data?.map((data, key) => {
          return (
            <Card
              key={key}
              style={{ borderRadius: "0" }}
              className={clsx("card-box", {
                "panel-open": accordionIndex === key,
              })}
            >
              <Card style={{ borderRadius: "0" }}>
                <CardHeader>
                  <div className="panel-title">
                    <div className="accordion-toggle">
                      <Button
                        color="link"
                        size="lg"
                        className="d-flex align-items-center justify-content-between"
                        onClick={() => toggleAccordion(key)}
                        aria-expanded={accordionIndex === key}
                      >
                        <span>{data.name_policy_group}</span>
                        <FontAwesomeIcon
                          icon={["fas", "angle-up"]}
                          className="font-size-xl accordion-icon"
                        />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <Collapse isOpen={accordionIndex === key}>
                  <div className="p-4">
                    {data.mapping_policy_groups.map((data, key) => {
                      // console.log("hiiiiiii", data);
                      return (
                        <div className="d-flex align-items-center" key={key}>
                          <p className="editing">{data.policy.name_policy}</p>
                        </div>
                      );
                    })}
                    {/* <div className="d-flex align-items-center">
                        <p className="editing" style={{ width: "40px" }}>
                          v)
                        </p>
                        <p className="editing" style={{ width: "150px" }}>
                          Loan Plan
                        </p>
                      </div> */}
                    <Button
                      color="primary"
                      style={{ marginTop: "10px" }}
                      onClick={() => handleAddToggle(data)}
                    >
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label">Add Policy</span>
                    </Button>
                  </div>
                </Collapse>
              </Card>
            </Card>
          );
        })}
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="lg"
        >
          <ModalHeader toggle={addModalToggle}>Add Policy</ModalHeader>
          <ModalBody>
            <Form>
              <Row className="p-3">
                <Col md="12">
                  <FormGroup>
                    <Label for="">Policy Types</Label>
                    <Select
                      options={planList[0]}
                      // closeMenuOnSelect={true}
                      isMulti={true}
                      onChange={handlPolicy}
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
    </>
  );
};
export default LivePreviewExample;
