import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import Switch from "rc-switch";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAssetType,
  createAssetType,
  disableAssetTypeByID,
  enableAssetTypeByID,
} from "../../../../actions";

import "./AssetCategory.scss";

const AssetCategory = () => {
  const [assetData, setAssetData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAssetType());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { assetType } = useSelector((state) => state.AssetReducer);

  const addAsset = () => {
    const data = {
      name_asset_type: assetData,
    };
    if (assetData.length > 0) {
      dispatch(createAssetType(data));
    } else {
      alert("Please Fill Fields");
    }
  };

  const handleToggle = (data) => {
    if (data?.is_enable === true) {
      dispatch(disableAssetTypeByID(data?.id_asset_type));
    } else {
      dispatch(enableAssetTypeByID(data?.id_asset_type));
    }
  };

  console.log("asset", assetType);
  return (
    <div id="assetCategory">
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
            <h1 style={{ color: "#3A3D65" }}>Asset Category</h1>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="pt-3 tableContainer m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Asset Category</b>
            </div>
          </div>
          <div className="divider" />
          <div className="p-4">
            <Row>
              <Col md="4">
                <InputGroup>
                  <Input
                    placeholder="Add New Item"
                    onChange={(e) => setAssetData(e.target.value)}
                  />
                  <InputGroupAddon
                    addonType="append"
                    onClick={addAsset}
                    style={{ cursor: "pointer" }}
                  >
                    <InputGroupText>
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={["fas", "plus"]} />
                      </span>
                      <span className="btn-wrapper--label ml-2">Add</span>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <Table
            responsive
            className="table-alternate-spaced text-nowrap mb-0"
            style={{ marginBottom: "0" }}
          >
            <thead className="font-size-sm" style={{ background: "#F3F5FD" }}>
              <tr>
                <th className="text-left p-3 pl-4">Name</th>
                <th className="text-center p-3">Action </th>
              </tr>
            </thead>
            <tbody>
              {assetType?.map((data, key) => {
                return (
                  <tr key={key}>
                    <td className="text-left pl-4">
                      <span>{data.name_asset_type}</span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex align-items-center justify-content-center">
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
        </div>
      </div>
    </div>
  );
};
export default AssetCategory;
