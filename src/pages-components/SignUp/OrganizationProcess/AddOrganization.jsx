import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Label, FormGroup, Input, Button, Form } from "reactstrap";
import Select from "react-select";
import {
  getAllCountries,
  getAllStates,
  SignUpUser,
  postUnitLocation,
} from "../../../actions";
import CreatableSelect from "./MyCreatableSelect";
import "./AddOrganization.scss";

const AddOrganization = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState();
  const [image, setImage] = useState();
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
    selectedId > 0 && dispatch(getAllStates(selectedId));
    console.log("effect", selectedId);
  }, [selectedId]); // eslint-disable-line react-hooks/exhaustive-deps

  const location = useLocation();
  const paramData = location?.state?.data;
  console.log("paramData", paramData);

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        // console.log("base url", baseURL);
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e) => {
    getBase64(e.target.files[0])
      .then((result) => {
        // const str = result.replaceAll("data:image/png;base64,", "");
        console.log("base url", result);
        setImage(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeData = (options) => {
    setSelectedId(options?.value);
    setSelectedLabel(options?.label);
  };

  const addOrg = (values) => {
    const data = {
      employee_type_id: 1,
      first_name_employee_info: paramData.firstName,
      last_name_employee_info: paramData.lastName,
      personal_email_employee_info: paramData.personalEmail,
      official_email_employee_info: paramData.email,
      personal_mobile_employee_info: paramData.phone,
      father_fullname_employee_info: paramData.fatherName,
      dob_employee_info: paramData.datePicker,
      gender_employee_info: paramData.Gender.label,
      cnic_number_employee_info: paramData.cnicNumber,
      marital_status: paramData.Marital.label,
      name_organization: values.orgName,
      legal_name_organization: values.orgLegalName,
      name_owner_organization: values.ownerName,
      code_organization: values.orgCode,
      ntn_organization: values.ntnNumber,
      url_website_organization: values.website,
      url_logo_organization: image,
      phone_organization: values.phoneNumber,
      email_organization: values.email,
    };
    console.log("dsafhaaaaaaaaaa", data);

    dispatch(SignUpUser(data, values))
      .then((a) => {
        console.log("aaaaaaaaaaa", a);
        const locationData = {
          organization_id: a.organization.id_organization,
          state_id: values.state.value,
          name_division: values.divisionName,
          name_district: values.districtName,
          name_tehsil: values.tehsilName,
          name_city: values.tehsilName,
          name_location: values.locationName,
          code_location: values.locationCode,
          address1_location: values.address1Location,
          address2_location: values.address2Location,
          postal_code_location: values.postalCodeLocation,
          note_location: values.noteLocation,
        };
        dispatch(postUnitLocation(locationData)).then((a) =>
          history.push("/Login")
        );
      })
      .catch((e) => {
        alert(e);
      });
  };

  const { countriesData } = useSelector((state) => state.CompanyReducer);
  const { statesData } = useSelector((state) => state.CompanyReducer);
  // console.log("organizationData", organizationData);
  const optionCountry = [
    countriesData?.map((pdes) => {
      var value = pdes.id_country;
      var label = pdes.name_country;
      return { value, label };
    }),
  ];
  const optionState = [
    statesData?.map((pdes) => {
      var value = pdes.id_state;
      var label = pdes.name_state;
      return { value, label };
    }),
  ];

  const initialValues = {
    orgName: "",
    orgLegalName: "",
    ownerName: "",
    orgCode: "",
    ntnNumber: "",
    website: "",
    // logo: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    divisionName: "",
    districtName: "",
    tehsilName: "",
    cityName: "",
    locationName: "",
    locationCode: "",
    address1Location: "",
    address2Location: "",
    postalCodeLocation: "",
    noteLocation: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.orgName) {
      errors.orgName = "Please Enter Organization Name";
    }
    if (!values.orgLegalName) {
      errors.orgLegalName = "Please Enter Organization Legal Name";
    }
    if (!values.ownerName) {
      errors.ownerName = "Please Enter Owner Name";
    }
    if (!values.orgCode) {
      errors.orgCode = "Please Enter Organization Code";
    }
    if (!values.ntnNumber) {
      errors.ntnNumber = "Please Enter Organization NTN#";
    }
    if (!values.website) {
      errors.website = "Please Enter Website";
    }
    // if (!values.logo) {
    //   errors.logo = "Please Select Logo";
    // }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Please Enter Phone Number";
    }
    if (!values.email) {
      errors.email = "Please Enter Email";
    }
    if (!values.country) {
      errors.country = "Please Select Country";
    }
    if (!values.state) {
      errors.state = "Please Select State";
    }
    if (!values.divisionName) {
      errors.divisionName = "Please Enter Division Name";
    }
    if (!values.districtName) {
      errors.districtName = "Please Enter District Name";
    }
    if (!values.tehsilName) {
      errors.tehsilName = "Please Enter Tehsil Name";
    }
    if (!values.cityName) {
      errors.cityName = "Please Enter City Name";
    }
    if (!values.locationName) {
      errors.locationName = "Please Enter Location";
    }
    if (!values.locationCode) {
      errors.locationCode = "Please Enter Location Code";
    }
    if (!values.address1Location) {
      errors.address1Location = "Please Enter Address1 Location";
    }
    if (!values.address2Location) {
      errors.address2Location = "Please Enter Address2 Location";
    }
    if (!values.postalCodeLocation) {
      errors.postalCodeLocation = "Please Enter Postal Code Location";
    }
    if (!values.noteLocation) {
      errors.noteLocation = "Please Enter Note Location";
    }

    return errors;
  };

  console.log("selectedOptions", selectedId);
  console.log("selectedLabel", selectedLabel);
  return (
    <div id="organization">
      <div className="addOrganization mb-1 d-flex align-items-center justify-content-center p-5">
        {/* <div className="app-page-title--first text-center">
          <div
            className="app-page-title--iconbox d-70"
            style={{ visibility: "hidden" }}
          >
            <div className="d-70 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={["far", "building"]}
                style={{ fontSize: "20px", color: "#3C44B1" }}
                className="display-2"
              />
            </div>
          </div>
          <div className="app-page-title--heading text-center">
            <h1 style={{ color: "#3A3D65" }}>Create Your First Organization</h1>
          </div>
        </div> */}
        <span className="text-center">
          <h1 className="display-4 mb-1 font-weight-bold">
            Create Your First Organization
          </h1>
          {/* <p
            className="font-size-lg mb-0 text-black-50"
            style={{ visibility: "hidden" }}
          >
            Start using our tools right away! Create an account today!
          </p> */}
        </span>
      </div>

      <div className="p-5">
        <div className="pt-3 tableContainer1 m-1">
          <div className="card-header pr-2">
            <div className="card-header--title">
              <b>Create Your First Organization</b>
            </div>
          </div>
          <div className="divider mt-5 mb-4" />
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={addOrg}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                setFieldValue,
                setFieldTouched,
              } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <Row className="p-5">
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Organization Name</Label>
                        <Input
                          type="text"
                          name="orgName"
                          onChange={handleChange}
                          placeholder="Enter name..."
                          // touched={touched.orgName}
                          value={values.orgName}
                          onBlur={handleBlur}
                          error={errors.orgName}
                        />
                        {errors.orgName && touched.orgName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.orgName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Legal Organization Name</Label>
                        <Input
                          type="text"
                          placeholder="Enter name..."
                          name="orgLegalName"
                          onChange={handleChange}
                          // touched={touched.orgLegalName}
                          value={values.orgLegalName}
                          onBlur={handleBlur}
                          error={errors.orgLegalName}
                        />
                        {errors.orgLegalName && touched.orgLegalName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.orgLegalName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Owner Name</Label>
                        <Input
                          type="text"
                          name="ownerName"
                          onChange={handleChange}
                          placeholder="Enter name..."
                          // touched={touched.ownerName}
                          value={values.ownerName}
                          onBlur={handleBlur}
                          error={errors.ownerName}
                        />
                        {errors.ownerName && touched.ownerName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                            className={"formikError"}
                          >
                            {errors.ownerName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Code</Label>
                        <Input
                          type="text"
                          placeholder="Add code..."
                          name="orgCode"
                          onChange={handleChange}
                          // touched={touched.orgCode}
                          value={values.orgCode}
                          onBlur={handleBlur}
                          error={errors.orgCode}
                        />
                        {errors.orgCode && touched.orgCode && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.orgCode}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">NTN#</Label>
                        <Input
                          type="text"
                          placeholder="Add NTN#..."
                          name="ntnNumber"
                          onChange={handleChange}
                          // touched={touched.ntnNumber}
                          value={values.ntnNumber}
                          onBlur={handleBlur}
                          error={errors.ntnNumber}
                        />
                        {errors.ntnNumber && touched.ntnNumber && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.ntnNumber}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Website</Label>
                        <Input
                          type="text"
                          placeholder="Add Website..."
                          name="website"
                          onChange={handleChange}
                          // touched={touched.website}
                          value={values.website}
                          onBlur={handleBlur}
                          error={errors.website}
                        />
                        {errors.website && touched.website && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.website}
                          </div>
                        )}
                      </FormGroup>
                    </Col>

                    <Col md="6">
                      <FormGroup>
                        <Label for="">Phone No</Label>
                        <Input
                          type="number"
                          placeholder="Add Phone No..."
                          name="phoneNumber"
                          onChange={handleChange}
                          // touched={touched.phoneNumber}
                          value={values.phoneNumber}
                          onBlur={handleBlur}
                          error={errors.phoneNumber}
                        />
                        {errors.phoneNumber && touched.phoneNumber && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.phoneNumber}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Email Address</Label>
                        <Input
                          type="email"
                          placeholder="Add Email Address..."
                          name="email"
                          onChange={handleChange}
                          // touched={touched.email}
                          value={values.email}
                          onBlur={handleBlur}
                          error={errors.email}
                        />
                        {errors.email && touched.email && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Company Logo</Label>
                        <br />
                        <Input
                          type="file"
                          name="logo"
                          onChange={(e) => {
                            handleFileInputChange(e);
                            // handleChange(e);
                          }}
                          // touched={touched.logo}
                          // value={values.logo}
                          // onBlur={handleBlur}
                          // error={errors.logo}
                        />
                        {/* {errors.logo && touched.logo && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.logo}
                          </div>
                        )} */}
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <h1 className="location">Location</h1>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Country</Label>
                        {/* <Label for="">Country</Label>
                        <Select
                          options={optionCountry[0]}
                          closeMenuOnSelect={true}
                          onChange={handleChangeData}
                        /> */}
                        <Select
                          label="country"
                          options={optionCountry[0]}
                          isClearable
                          placeholder={"Country"}
                          // touched={touched.country}
                          onChange={(value) => {
                            setFieldValue("country", value);
                            handleChangeData(value);
                          }}
                          onBlur={handleBlur}
                          value={values.country}
                          error={errors.country}
                        />
                        {errors.country && touched.country && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.country}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Province / State</Label>
                        <CreatableSelect
                          label="state"
                          //options={options}
                          options={optionState[0]}
                          isClearable
                          placeholder={"State"}
                          onChange={setFieldValue}
                          onBlur={setFieldTouched}
                          // touched={touched.state}
                          value={values.state}
                          error={errors.state}
                        />
                        {errors.state && touched.state && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.state}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Division Name</Label>
                        <Input
                          type="text"
                          placeholder={"Division Name"}
                          name="divisionName"
                          onChange={handleChange}
                          // touched={touched.divisionName}
                          value={values.divisionName}
                          onBlur={handleBlur}
                          error={errors.divisionName}
                        />
                        {errors.divisionName && touched.divisionName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.divisionName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">District Name</Label>
                        <Input
                          type="text"
                          placeholder={"District Name"}
                          name="districtName"
                          onChange={handleChange}
                          // touched={touched.districtName}
                          value={values.districtName}
                          onBlur={handleBlur}
                          error={errors.districtName}
                        />
                        {errors.districtName && touched.districtName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.districtName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Tehsil Name</Label>
                        <Input
                          type="text"
                          placeholder={"Tehsil Name"}
                          name="tehsilName"
                          onChange={handleChange}
                          // touched={touched.tehsilName}
                          value={values.tehsilName}
                          onBlur={handleBlur}
                          error={errors.tehsilName}
                        />
                        {errors.tehsilName && touched.tehsilName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.tehsilName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">City Name</Label>
                        <Input
                          type="text"
                          placeholder={"City Name"}
                          name="cityName"
                          onChange={handleChange}
                          // touched={touched.cityName}
                          value={values.cityName}
                          onBlur={handleBlur}
                          error={errors.cityName}
                        />
                        {errors.cityName && touched.cityName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.cityName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Location</Label>
                        <Input
                          type="text"
                          placeholder={"Location"}
                          name="locationName"
                          onChange={handleChange}
                          // touched={touched.locationName}
                          value={values.locationName}
                          onBlur={handleBlur}
                          error={errors.locationName}
                        />
                        {errors.locationName && touched.locationName && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.locationName}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Location Code</Label>
                        <Input
                          type="text"
                          placeholder={"Location Code"}
                          name="locationCode"
                          onChange={handleChange}
                          // touched={touched.locationCode}
                          value={values.locationCode}
                          onBlur={handleBlur}
                          error={errors.locationCode}
                        />
                        {errors.locationCode && touched.locationCode && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.locationCode}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Address1 Location</Label>
                        <Input
                          type="text"
                          placeholder={"Address1 Location"}
                          name="address1Location"
                          onChange={handleChange}
                          // touched={touched.address1Location}
                          value={values.address1Location}
                          onBlur={handleBlur}
                          error={errors.address1Location}
                        />
                        {errors.address1Location && touched.address1Location && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.address1Location}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Address2 Location</Label>
                        <Input
                          type="text"
                          placeholder={"Address2 Location"}
                          name="address2Location"
                          onChange={handleChange}
                          // touched={touched.address2Location}
                          value={values.address2Location}
                          onBlur={handleBlur}
                          error={errors.address2Location}
                        />
                        {errors.address2Location && touched.address2Location && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.address2Location}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label for="">Postal Code Location</Label>
                        <Input
                          type="text"
                          placeholder={"Postal Code Location"}
                          name="postalCodeLocation"
                          onChange={handleChange}
                          // touched={touched.postalCodeLocation}
                          value={values.postalCodeLocation}
                          onBlur={handleBlur}
                          error={errors.postalCodeLocation}
                        />
                        {errors.postalCodeLocation &&
                          touched.postalCodeLocation && (
                            <div
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "0.5rem",
                              }}
                            >
                              {errors.postalCodeLocation}
                            </div>
                          )}
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label for="">Description</Label>
                        <Input
                          type="textarea"
                          placeholder={"description"}
                          name="noteLocation"
                          onChange={handleChange}
                          // touched={touched.noteLocation}
                          value={values.noteLocation}
                          onBlur={handleBlur}
                          error={errors.noteLocation}
                        />
                        {errors.noteLocation && touched.noteLocation && (
                          <div
                            style={{
                              color: "red",
                              fontSize: "14px",
                              marginTop: "0.5rem",
                            }}
                          >
                            {errors.noteLocation}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="divider my-5" />
                  <div className="p-4 pb-2 px-5 d-flex align-items-center justify-content-end">
                    <Button color="primary1" type="submit" className="ml-auto">
                      Save
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default AddOrganization;
