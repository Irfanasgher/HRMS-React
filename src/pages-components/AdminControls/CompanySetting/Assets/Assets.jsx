import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  Button,
  Input,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Container,
  Form,
} from "reactstrap";
import { Link } from "react-router-dom";
import Switch from "rc-switch";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllAssetType,
  getAllAsset,
  createAsset,
  GetAllCompanyList,
  UpdateAssetDetailByID,
  enableAssetDetailByID,
  disableAssetDetailByID,
} from "../../../../actions";

import "./Assets.scss";

const Assets = () => {
  const [updateModal, setUpdateModal] = useState(false);
  const updateToggle = () => setUpdateModal(!updateModal);
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState();
  const [assetValue, setAssetValue] = useState();
  const [id, setId] = useState();

  const [addModal, setAddModal] = useState(false);
  const addModalToggle = () => setAddModal(!addModal);
  const [assetName, setAssetName] = useState("");
  const [addSerialNumber, setAddSerialNumber] = useState("");
  const [note, setNote] = useState("");
  const [value, setValue] = useState("");
  const [assetTypeId, setAssetTypeId] = useState(null);
  const [companyId, setCompanyId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAsset());
    dispatch(getAllAssetType());
    dispatch(GetAllCompanyList());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { assets, assetType } = useSelector((state) => state.AssetReducer);
  const { companyData } = useSelector((state) => state.EmployeeReducer);

  const assetTypeList = assetType?.map((pdes) => {
    return {
      value: pdes.id_asset_type,
      label: pdes.name_asset_type,
    };
  });

  const handleAssetTypeList = (options) => {
    setAssetTypeId(options.value);
  };

  const companyList = companyData?.map((cd) => {
    return {
      value: cd.id_company,
      label: cd.name_company,
    };
  });

  const handleCompanyList = (options) => {
    setCompanyId(options.value);
  };

  const handleAddLeaveBank = () => {
    const data = {
      asset_type_id: assetTypeId,
      company_id: companyId,
      name_asset: assetName,
      serial_number_asset: addSerialNumber,
      detail_asset: note,
      value_asset: value,
    };

    if (
      assetTypeId > 0 &&
      companyId > 0 &&
      assetName.length > 0 &&
      addSerialNumber.length > 0 &&
      note.length > 0 &&
      value.length > 0
    ) {
      dispatch(createAsset(data));
    } else {
      alert("Please Fill All Fields");
    }

    addModalToggle();
  };

  const handleUpdateToggle = (data) => {
    setName(data.name_asset);
    setSerialNumber(data.serial_number_asset);
    setAssetValue(data.value_asset);
    setId(data.id_asset);

    updateToggle();
  };

  const updateDepartment = (e) => {
    e.preventDefault();

    const data = {
      name_asset: name,
      serial_number_asset: serialNumber,
      value_asset: assetValue,
    };
    if (name.length > 0 && serialNumber > 0 && assetValue > 0) {
      dispatch(UpdateAssetDetailByID(data, id));
    } else {
      alert("All fields must be filled");
    }
    updateToggle();
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableAssetDetailByID(data?.id_asset));
    } else {
      dispatch(enableAssetDetailByID(data?.id_asset));
    }
  };

  console.log("asset", assets);

  return (
    <div id="assets">
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
            <h1 style={{ color: "#3A3D65" }}>Assets</h1>
          </div>
        </div>
        <div>
          <Button color="primary" onClick={addModalToggle}>
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={["fas", "plus"]} />
            </span>
            <span className="btn-wrapper--label ml-5">Add New Asset</span>
          </Button>
          <br />
          <br />
          <Link to="/dashboard/AssetCategory">
            <Button color="primary">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "plus"]} />
              </span>
              <span className="btn-wrapper--label ml-3">
                Add Asset Category
              </span>
            </Button>
          </Link>
        </div>
        <Modal
          zIndex={2000}
          centered
          scrollable
          isOpen={addModal}
          toggle={addModalToggle}
          size="xl"
        >
          <ModalHeader toggle={addModalToggle}>Add New Asset</ModalHeader>
          <ModalBody>
            <Form onSubmit={console.log("Data of upload")}>
              <Row className="p-3">
                <Col md="6">
                  <FormGroup>
                    <Label for="">Name</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setAssetName(e.target.value);
                      }}
                      placeholder="Enter Name..."
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Serial Number</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setAddSerialNumber(e.target.value);
                      }}
                      placeholder="4506"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Note</Label>
                    <Input
                      type="text"
                      onChange={(e) => {
                        setNote(e.target.value);
                      }}
                      placeholder="Note"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Price</Label>
                    <Input
                      type="number"
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                      placeholder="4"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Asset Type</Label>
                    <Select
                      options={assetTypeList}
                      closeMenuOnSelect={true}
                      onChange={handleAssetTypeList}
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="">Company</Label>
                    <Select
                      options={companyList}
                      closeMenuOnSelect={true}
                      onChange={handleCompanyList}
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
                onClick={handleAddLeaveBank}
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
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Assets </b>
            </div>
          </div>
          <div className="divider" />
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Serial#</th>
                <th className="text-center p-3">Price</th>
                <th className="text-center p-3">Asset Type</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {assets?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_asset}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.serial_number_asset}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.value_asset}</span>
                    </td>
                    <td className="text-center">
                      <span>{data.asset_type.name_asset_type}</span>
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
            <ModalHeader toggle={updateToggle}>Update Asset</ModalHeader>
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
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            placeholder="Enter Name..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Serial#
                          </Label>
                          <Input
                            type="number"
                            name=""
                            value={serialNumber}
                            onChange={(e) => {
                              setSerialNumber(e.target.value);
                            }}
                            placeholder="Serial #..."
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <Label className="font-weight-bold" for="">
                            Price
                          </Label>
                          <Input
                            type="number"
                            name=""
                            value={assetValue}
                            onChange={(e) => {
                              setAssetValue(e.target.value);
                            }}
                            placeholder="Value..."
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
export default Assets;
