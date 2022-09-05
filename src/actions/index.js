// import API from "../apis/jsonPlaceholder";
import config from "../config/config";
// import lodash from "lodash";
import axios from "axios";
// import Cookies from "js-cookie";

// -------------------------Login USER Actions---------------------------------

export const loginUser = (payload) => {
  // console.log(payload.history);
  // console.log("loginUser action called");
  return async function (dispatch) {
    return await axios
      .post(
        `${config.BASEURLEMPLOYEE}/api/employee_info/login`,
        payload,
        config.hd,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        localStorage.setItem("auth-token", data.authToken);
        localStorage.setItem("userData", JSON.stringify(data));
        dispatch(loginUserSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginUserFail({ msg: "ERROR" }));
      });
  };
};

export const loginUserSuccess = (data) => {
  // console.log("Login Data", data.details);
  return {
    type: "SUCCESSFUL",
    payload: data,
  };
};

export const loginUserFail = (msg) => {
  return {
    type: "FAILED",
    payload: msg,
  };
};

// -----------------------------------End-----------------------------------

// -------------------------SignUp USER Actions---------------------------------

export const SignUpUser = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(
        `${config.BASEURLEMPLOYEE}/api/employee_info/signUp`,
        payload,
        config.hd,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginUserFail({ msg: "ERROR" }));
      });
  };
};

// -----------------------------------End-----------------------------------

// ---------------------------------Add Organization-----------------------------

export const addOrganization = (payload, values) => {
  // console.log("Add Organization Called");
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/organization_defination/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // const locationData = {
        //   organization_id: data.id_organization,
        //   state_id: values.state.value,
        //   name_division: values.divisionName,
        //   name_district: values.districtName,
        //   name_tehsil: values.tehsilName,
        //   name_city: values.tehsilName,
        //   name_location: values.locationName,
        //   code_location: values.locationCode,
        //   address1_location: values.address1Location,
        //   address2_location: values.address2Location,
        //   postal_code_location: values.postalCodeLocation,
        //   note_location: values.noteLocation,
        // };
        // dispatch(postUnitLocation(locationData));
        // if (Cookies.get('ARRAffinity') != undefined) {
        alert("Organization added");
        dispatch(getOrganizationList());
        return data;
        // }
      })
      .catch((err) => {
        console.log(err);
        dispatch(addOrganizationFailure({ msg: "ERROR" }));
      });
  };
};

export const addOrganizationFailure = (msg) => {
  return {
    type: "FAILED",
    payload: msg,
  };
};

// -----------------------End-----------------------------------------------

//--------------------------------Create Custom Values-------------------------------//

export const createCustomValues = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/custom_value/`, payload, {
        withCredentials: true,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------End--------------------------------------//

//-----------------GET ALL custom field ---------------------------//

export const GetAllCustomField = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/custom_field/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllCustomFieldSuccess(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllCustomFieldSuccess = (data) => {
  return {
    type: "GET_ALL_CUSTOM_FIELD",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL custom field Names ---------------------------//

export const GetAllCustomFieldNames = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/custom_field/getNamesOfCustomField`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllCustomFieldNamesSuccess(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllCustomFieldNamesSuccess = (data) => {
  return {
    type: "GET_ALL_CUSTOM_FIELD_NAMES",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

// --------------------------Get Organization List--------------------------

export const getOrganizationList = () => {
  // console.log("Get Organization Called");
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/organization_defination/findAllOrganization`,
        config.hd,
        { withCredentials: true }
      )
      .then(({ data }) => {
        dispatch(getOrganizationSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getOrganizationSuccess = (data) => {
  return {
    type: "ORGANIZATION_LIST_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

export const getOrganizationFailure = (msg) => {
  return {
    type: "FAILED",
    payload: msg,
  };
};

//-------------------------------End----------------------------------------

// --------------------------Get Single Organization--------------------------

export const getSingleOrganization = (id) => {
  // console.log("Get Organization Called");
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/organization_defination/findById/${id}`,
        config.hd,
        { withCredentials: true }
      )
      .then(({ data }) => {
        dispatch(getSingleOrganizationSuccess(data));
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSingleOrganizationSuccess = (data) => {
  return {
    type: "SINGLE_ORGANIZATION__SUCCESSFUL",
    payload: data,
  };
};

//-------------------------------End----------------------------------------

//-----------------------------------Update Organization By ID---------------------------------//

export const UpdateOrganizationByID = (payload, id, emdID) => {
  return async function (dispatch) {
    // console.log("id", id);
    // console.log("payload", payload);
    return await axios
      .put(
        `${config.BASEURL}/api/organization_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getSingleOrganization(emdID));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Organization---------------------------//

export const enableOrganization = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/organization_defination/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )

      .then(() => {
        dispatch(getSingleOrganization(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Organization---------------------------//

export const disableOrganization = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/organization_defination/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getSingleOrganization(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//----------------------------GET ALL COMPANY DATA (FAN OUT) ---------------------------------

export const getAllCompanyData = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/company_defination/getAllDetailsOfCompany/${payload}`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        dispatch(getAllCompanyDataSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllCompanyDataSuccess = (data) => {
  // console.log("Succefully GET ALL Company");
  return {
    type: "COMPANY_ALL_LIST_POSTED_SUCCESSFUL",
    payload: data,
  };
};

//------------------------END ------------------------------------

//----------------------------Get Company Lists----------------------------

export const getCompanyList = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/company_defination/findByOrganizationId/${payload}`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        // console.log("data in getCompanyList", data);
        dispatch(getCompanyListSuccess(data));
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getCompanyListSuccess = (data) => {
  return {
    type: "COMPANY_LIST_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//------------------------END ------------------------------------

//----------------------------Add Company----------------------------

export const addCompany = (payload) => {
  // console.log("clicked: ", payload);
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/company_defination/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getCompanyList(data.organization_id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------END ------------------------------------

//-----------------------------------Update Company By ID---------------------------------//

export const UpdateCompanyByID = (payload, id, orgId) => {
  return async function (dispatch) {
    // console.log("id", id);
    // console.log("payload", payload);
    return await axios
      .put(
        `${config.BASEURL}/api/company_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getCompanyList(orgId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Company---------------------------//

export const enableCompany = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/company_defination/enableById/${payload}`, {
        withCredentials: true,
      })

      .then(() => {
        dispatch(getCompanyList(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Company---------------------------//

export const disableCompany = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/company_defination/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getCompanyList(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//---------------Get Parent designation------------------

export const getParentDesignation = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/designation_defination/findByCompanyId/${payload}`,
        { withCredentials: true }
      )
      .then(({ data }) => {
        dispatch(getParentDesignationSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getParentDesignationSuccess = (data) => {
  return {
    type: "PARENT_DESIGNATION_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//-------------- Mapping Designation in Company -------------

export const mappingDesignation = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/mapping_designation_company/`, payload, {
        withCredentials: true,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------END---------------------------------

//-------------- Post Designation in Company -------------

export const postDesignationDetail = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/designation_defination/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllDesignation());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------END---------------------------------

//--------------------------Create Unit in company ----------------------------
export const postUnitDetail = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/unit/`, payload, { withCredentials: true })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------END------------------------------------------

//-----------------------------Update UNIT---------------------------

export const UpdateUnitByID = (payload, id, comp) => {
  return async function (dispatch) {
    // console.log("id", id);
    // console.log("payload", payload);
    return await axios
      .put(`${config.BASEURL}/api/unit/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllCompanyData(comp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//-----------------------------CREATE UNIT LOCATION---------------------------

export const postUnitLocation = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/location/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------END -----------------------------------------

//-----------------------------GET ALL LOCATION BY COMPANY ID----------------------

export const getAllLocationByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/location/findBycompanyId/${payload}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // console.log("data in getAllLocationByCompanyId", data);
        dispatch(getAllLocationByCompanyIdSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllLocationByCompanyIdSuccess = (data) => {
  return {
    type: "GET_ALL_LOCATION_SUCCESSFUL",
    payload: data,
  };
};

//------------------------------END -----------------------------------------

//-----------------------------GET ALL UNITS BY COMPANY ID----------------------

export const getAllUnitsByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/unit/findBycompanyId/${payload}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // console.log("data in getAllUnitsByCompanyId", data);
        dispatch(getAllUnitsByCompanyIdSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllUnitsByCompanyIdSuccess = (data) => {
  return {
    type: "GET_ALL_UNITS_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//------------------------------END -----------------------------------------

//-----------------------------CREATE DEPARTMENT---------------------------

export const postDepartment = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/department_defination/`, payload, {
        withCredentials: true,
      })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------END -----------------------------------------

//-----------------------------CREATE DEPARTMENT---------------------------

export const createDepartmentLocation = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/mapping_department_locaiton/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Succefully added a Department");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------END -----------------------------------------

//-----------------------------GET ALL DEPARTMENTS--------------------------

export const getAllDepartments = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/department_defination/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllDepartmentsSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllDepartmentsSuccess = (data) => {
  return {
    type: "GET_ALL_DEPARTMENTS_SUCCESSFUL",
    payload: data,
  };
};
//------------------------------END-----------------------------------------

//-----------------------------GET ALL Admin DEPARTMENTS--------------------------

export const getAllAdminDepartments = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/department_defination/findDeptDetail`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllAdminDepartmentsSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllAdminDepartmentsSuccess = (data) => {
  return {
    type: "GET_ALL_ADMIN_DEPARTMENTS_SUCCESSFUL",
    payload: data,
  };
};
//------------------------------END-----------------------------------------

//-----------------------------GET ALL mapping DEPARTMENTS--------------------------

export const getAllMappingDepartmentsByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/mapping_department_locaiton/findByCompanyId/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        // console.log("784 line in action", data);
        dispatch(getAllMappingDepartmentsByCompanyIdSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllMappingDepartmentsByCompanyIdSuccess = (data) => {
  return {
    type: "GET_ALL_MAPPING_DEPARTMENTS_SUCCESSFUL",
    payload: data,
  };
};
//------------------------------END-----------------------------------------

//-----------------------------GET ALL DEPARTMENTS BY COMPANY ID---------------------------

export const getAllDepartmentsByCompanyId = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/department_defination/findByCompanyId/${1}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log("data in getAllDepartmentsByCompanyId", data);
        dispatch(getAllDepartmentsByCompanyIdSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllDepartmentsByCompanyIdSuccess = (data) => {
  return {
    type: "GET_ALL_DEPARTMENTS_FETCHED_SUCCESSFUL",
    payload: data,
  };
};
//------------------------------END-----------------------------------------

//------------------------------------enable Department---------------------------//

export const enableDepartment = (payload) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_department_locaiton/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Department---------------------------//

export const disableDepartment = (payload) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_department_locaiton/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------------------Update Department---------------------------

export const UpdateDepartmentByID = (payload, id, depart) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/department_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(depart));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Designation---------------------------//

export const enableDepartmentByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/department_defination/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Designation---------------------------//

export const disableDepartmentByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/department_defination/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------------------GET ALL COUNTRIES BY LOCATION----------------------

export const getAllCountries = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/country/findAllCountries`, {
        withCredentials: true,
      })

      .then(({ data }) => {
        dispatch(getAllCountriesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllCountriesSuccess = (data) => {
  return {
    type: "GET_ALL_COUNTRIES_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//=----------------------------END--------------------------------------------

//-----------------------POST LOCATION FORM-----------------------------------

export const postLocationForm = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/location/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Succefully added a Location");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------enable Location---------------------------//

export const enableLocation = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/location/enableById/${payload}`, {
        withCredentials: true,
      })

      .then(() => {
        id && dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Location---------------------------//

export const disableLocation = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/location/disableById/${payload}`, {
        withCredentials: true,
      })

      .then(({ data }) => {
        dispatch(disableLocationSuccess(data));
        id && dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const disableLocationSuccess = (data) => {
  // alert(data.message);
  return {
    type: "LOCATION_DISABLED_SUCCESSFULLY",
    payload: data,
  };
};

//------------------------------------END----------------------------------------//

//-----------------------------Update Location---------------------------

export const UpdateLocationtByID = (payload, id, comp) => {
  return async function (dispatch) {
    // console.log("id", id);
    // console.log("payload", payload);
    return await axios
      .put(`${config.BASEURL}/api/location/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllCompanyData(comp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//-----------------------All States by company id-----------------------------

export const getAllStates = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/state/findByCountryId/${payload}`, {
        withCredentials: true,
      })

      .then(({ data }) => {
        dispatch(getAllStatesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllStatesSuccess = (data) => {
  return {
    type: "GET_ALL_STATES_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//----------------------------END---------------------------------------------

// ----------------------------Add Policy ------------------------------------
export const postPolicyDetail = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/policy_defination/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Succefully added a Policy");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//--------------------------------------------------------Designation Start--------------------------------------------------//

//------------------------------------ Get all parent Designation-----------------------------------------//

export const getAllParentDesignation = () => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/designation_defination/getParentDesignation`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getAllParentDesignationSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllParentDesignationSuccessfully = (data) => {
  return {
    type: "GET_ALL_PARENT_DESIGNATION_SUCCESSFULLY",
    payload: data,
  };
};

//------------------------------------END------------------------------------------//

//-------------- Get all designation types ------------

export const getAllDesignationType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/designation_type/findAllDesignation`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllDesignationTypesSuccess(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllDesignationTypesSuccess = (data) => {
  return {
    type: "GET_ALL_DESIGNATION_TYPES_FETCHED_SUCCESSFUL",
    payload: data,
  };
};

//------------------------------------END------------------------------------------//

//------------------------------------ Get all Designation for drop down-----------------------------------------//

export const getAllDesignation = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/designation_defination/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllDesignationSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllDesignationSuccessfully = (data) => {
  return {
    type: "GET_ALL_DESIGNATION_SUCCESSFULLY",
    payload: data,
  };
};

//------------------------------------END------------------------------------------//

//-----------------------------------Update designation By ID---------------------------------//

export const UpdateAdminDesignationByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllDesignation());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Admin Designation---------------------------//

export const enableAdminDesignation = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllDesignation());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------disable Admin Designation-----------------------------------//

export const disableAdminDesignation = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllDesignation());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//-------------------------------------END---------------------------------------//

//------------------------------------enable Designation by Haseeb---------------------------//

export const enableDesignation = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/designation_type/enableById/${payload}`, {
        withCredentials: true,
      })

      .then(() => {
        dispatch(getAllDesignationType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------disable Designation by Haseeb-----------------------------------//

export const disableDesignation = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/designation_type/disableById/${payload}`, {
        withCredentials: true,
      })

      .then(() => {
        dispatch(getAllDesignationType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//-------------------------------------END---------------------------------------//

//--------------------------------Create Designation Type by Haseeb-------------------------------//

export const createDesignation = (payload) => {
  console.log("payload of createDesignation", payload);
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/designation_type/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Designation Created SuccessFully");
        dispatch(getAllDesignationType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------End--------------------------------------//

//-----------------------------------Update designation Type By ID by Haseeb---------------------------------//

export const UpdateDesignationTypeByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/designation_type/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllDesignationType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------Designation End-------------------------//

//--------------------------------------Policy start-----------------------------------------------//

//----------------------Find All Policies by Haseeb------------------------------------------//
export const findAllPolicies = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_type/getAllPolicies`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // console.log("data from findAllPolicies", data);
        // if (Cookies.get('ARRAffinity') !== undefined) {
        dispatch(getAllPolicyTypesSuccessfully(data));
        // }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllPolicyTypesSuccessfully = (data) => {
  return {
    type: "GET_ALL_POLICY_TYPES_SUCCESSFULLY",
    payload: data,
  };
};
//----------------------------------End------------------------------------------//

//----------------------Get all Policies drop down------------------------------------------//
export const getAllPoliciesForDropDown = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_defination/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllPoliciesForDropDownSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllPoliciesForDropDownSuccessfully = (data) => {
  return {
    type: "GET_ALL_POLICY_FOR_DROPDOWN_SUCCESSFULLY",
    payload: data,
  };
};
//----------------------------------End------------------------------------------//

//----------------------Get all policy by company id------------------------------------------//

export const getAllPolicyByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/mapping_company_policy/findByCompanyId/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getAllPolicyByCompanyIdSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllPolicyByCompanyIdSuccessfully = (data) => {
  return {
    type: "GET_ALL_POLICY_BY_COMPANY_ID_SUCCESSFULLY",
    payload: data,
  };
};
//----------------------------------End------------------------------------------//

//----------------------Find All Policies by Haseeb------------------------------------------//
export const findAllEnablePolicies = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_type/getAllEnablePolicies`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // console.log("data from findAllPolicies", data);
        // if (Cookies.get('ARRAffinity') !== undefined) {
        dispatch(getAllEnablePolicyTypesSuccessfully(data));
        // }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllEnablePolicyTypesSuccessfully = (data) => {
  return {
    type: "GET_ALL_ENABLE_POLICY_TYPES_SUCCESSFULLY",
    payload: data,
  };
};
//----------------------------------End------------------------------------------//

//------------------------------------enable Policy by Haseeb---------------------------//

export const enablePolicy = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/policy_type/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(findAllPolicies());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------disable Policy by Haseeb-----------------------------------//

export const disablePolicy = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/policy_type/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(findAllPolicies());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//-------------------------------------END---------------------------------------//

//--------------------------------Create Policy Type by Haseeb-------------------------------//

export const createPolicy = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/policy_type/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Policy Created SuccessFully");
        dispatch(findAllPolicies());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------End--------------------------------------//

//--------------------------------Create Mapping Policy-------------------------------//

export const createMappingPolicy = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/mapping_company_policy/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Policy Created SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//---------------------------------End--------------------------------------//

//-----------------------------------Update policy Type By ID by Haseeb---------------------------------//

export const UpdatePolicyTypeByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/policy_type/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(findAllPolicies());
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//-----------------------------------Update policy By ID---------------------------------//

export const UpdatePolicyByID = (payload, id, comp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/policy_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(comp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//-------------------------------Policy End--------------------------------//

//--------------GET ALL DESIGNATION TYPES FOR DROP-DOWN--------------------------//

export const GetAllDesignationTypesForDropDown = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/designation_type/dropDown`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // console.log("data from findAllPolicies", data);
        // if (Cookies.get('ARRAffinity') !== undefined) {
        dispatch(getAllDesignationTypesForDropDownSuccessfully(data));
        // }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllDesignationTypesForDropDownSuccessfully = (data) => {
  return {
    type: "GET_ALL_DESIGNATION_TYPES_FOR_DROP_DOWN_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL DESIGNATION BY COMPANYID ---------------------------//

export const GetAllDesignationByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/mapping_designation_company/findByCompanyId/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getAllDesignationByCompanyIdSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllDesignationByCompanyIdSuccessfully = (data) => {
  return {
    type: "GET_ALL_DESIGNATION_BY_COMPANYID_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//------------------------------------enable Policy by Haseeb---------------------------//

export const enableMappingDesignation = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_designation_company/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("Enable SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------disable Policy by Haseeb-----------------------------------//

export const disableMappingDesignation = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_designation_company/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        alert("Disable SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//-------------------------------------END---------------------------------------//

//----------------------create Designation Defination---------------------------------//

export const createDesignationDefination = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/designation_defination/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Designation defination Created SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------------------Update Designation---------------------------

export const UpdateDesignationByID = (payload, id, comp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(comp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Designation---------------------------//

export const enableDesignationD = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Designation---------------------------//

export const disableDesignationD = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURL}/api/designation_defination/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------enable MappingPolicy---------------------------//

export const enableMappingPolicy = (payload) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_company_policy/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable MappingPolicy---------------------------//

export const disableMappingPolicy = (payload) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURL}/api/mapping_company_policy/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------------------Update Designation---------------------------

export const UpdateAssetByID = (payload, id, comp) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllCompanyData(comp));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Designation---------------------------//

export const enableAssetByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Designation---------------------------//

export const disableAssetByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllCompanyData(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------GET ALL Plans---------------------------//

export const GetAllPlans = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_defination/getAllPlans`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllPlansSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllPlansSuccessfully = (data) => {
  return {
    type: "GET_ALL_PLANS_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create Plan---------------------------------//

export const addPlan = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/policy_defination/createPlan/`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Plan Created SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//----------------------create Plan---------------------------------//

export const addPolicy = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/policy_defination/createPolicy`, payload, {
        withCredentials: true,
      })
      .then(() => {
        alert("Policy Created SuccessFully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Policy Group---------------------------//

export const GetAllPolicyGroup = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_group/getAllPolicies`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllPolicyGroupSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllPolicyGroupSuccessfully = (data) => {
  return {
    type: "GET_ALL_POLICY_GROUP_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------Get all policy group by company id------------------------------------------//

export const getAllPolicyGroupByCompanyId = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURL}/api/mapping_policy_group/findByCompanyId/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getAllPolicyGroupByCompanyIdSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllPolicyGroupByCompanyIdSuccessfully = (data) => {
  return {
    type: "GET_ALL_POLICY_GROUP_BY_COMPANY_ID_SUCCESSFULLY",
    payload: data,
  };
};
//----------------------------------End------------------------------------------//

//----------------------create Policy Group---------------------------------//

export const createPolicyGroup = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/policy_group`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data.message && alert(data.message);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//----------------------create Policy Group---------------------------------//

export const CreateMappingPolicyGroup = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURL}/api/mapping_policy_group`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Employee ---------------------------//

export const GetAllEmployee = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/employee_info/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllEmployeeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllEmployeeSuccessfully = (data) => {
  return {
    type: "GET_ALL_EMPLOYEE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Employee Type---------------------------//

export const GetAllEmployeeType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/employee_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllEmployeeTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllEmployeeTypeSuccessfully = (data) => {
  return {
    type: "GET_ALL_EMPLOYEE_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create EmployeeType---------------------------------//

export const CreateEmployeeType = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLEMPLOYEE}/api/employee_type/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("EmployeeType Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//------------------------------------Update EmployeeType---------------------------//

export const UpdateEmployeeTypeByID = (payload, id) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_type/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        alert(data.message);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable EmployeeType---------------------------//

export const enableEmployeeTypeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_type/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetAllEmployeeType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable EmployeeType---------------------------//

export const disableEmployeeTypeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_type/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetAllEmployeeType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------GET ALL Employee Type ID---------------------------//

export const GetAllEmployeeTypeID = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/authentication_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllEmployeeTypeIDSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllEmployeeTypeIDSuccessfully = (data) => {
  return {
    type: "GET_ALL_EMPLOYEE_TYPE_ID_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL address type---------------------------//

export const GetAllAddressType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/address_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllAddressTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllAddressTypeSuccessfully = (data) => {
  return {
    type: "GET_ALL_ADDRESS_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Company List---------------------------//

export const GetAllCompanyList = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/company_defination/getCompanyList`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllCompanyListSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllCompanyListSuccessfully = (data) => {
  return {
    type: "GET_ALL_COMPANY_LIST_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL findBenefitGroup List---------------------------//

export const GetAllFindBenefitGroupList = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/policy_group/findBenefitGroup`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllFindBenefitGroupListSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllFindBenefitGroupListSuccessfully = (data) => {
  return {
    type: "GET_ALL_GRADE_LIST_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Grades List---------------------------//

export const GetGradeList = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/employee_allocation/getAllGrades`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetGradeListSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetGradeListSuccessfully = (data) => {
  return {
    type: "GET_ALL_GRADES_LIST_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create Degree---------------------------------//

export const CreateDegree = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLEMPLOYEE}/api/degree`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Degree Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Degree List---------------------------//

export const GetAllDegree = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/degree/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllDegreeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllDegreeSuccessfully = (data) => {
  return {
    type: "GET_ALL_DEGREE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//------------------------------------Update Degree---------------------------//

export const UpdateDegreeByID = (payload, id) => {
  return async function () {
    return await axios
      .put(`${config.BASEURLEMPLOYEE}/api/degree/updateById/${id}`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert(data.message);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Degree---------------------------//

export const enableDegreeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURLEMPLOYEE}/api/degree/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(GetAllDegree());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Degree---------------------------//

export const disableDegreeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURLEMPLOYEE}/api/degree/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(GetAllDegree());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//----------------------create Dependent---------------------------------//

export const CreateDependent = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLEMPLOYEE}/api/dependent_type`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Dependent Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Dependent Type List---------------------------//

export const GetAllDependentType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/dependent_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllDependentTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllDependentTypeSuccessfully = (data) => {
  return {
    type: "GET_ALL_DEPENDENT_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//------------------------------------Update Degree---------------------------//

export const UpdateDependentByID = (payload, id) => {
  return async function () {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/dependent_type/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        alert(data.message);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Dependent---------------------------//

export const enableDependentByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/dependent_type/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetAllDependentType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Dependent---------------------------//

export const disableDependentByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/dependent_type/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetAllDependentType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------GET Allocation Type List---------------------------//

export const GetAllocationType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/allocation_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetAllocationTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetAllocationTypeSuccessfully = (data) => {
  return {
    type: "GET_ALLOCATION_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create Employee---------------------------------//

export const createEmployee = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLEMPLOYEE}/api/employee_info/empFanIn`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Employee Added Successfully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------GET Employee List ---------------------------//

export const GetEmployeeList = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/employee_info/getEmpList`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(GetEmployeeListSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetEmployeeListSuccessfully = (data) => {
  return {
    type: "GET_EMPLOYEE_LIST_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//------------------------------------enableEmployeeList---------------------------//

export const enableEmployeeListByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_info/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetEmployeeList());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable EmployeeList---------------------------//

export const disableEmployeeListID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_info/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(GetEmployeeList());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------GET Employee List by Id ---------------------------//

export const GetEmployeeListById = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.BASEURLEMPLOYEE}/api/employee_info/findEmpDetail/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListByIdSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetEmployeeListByIdSuccessfully = (data) => {
  return {
    type: "GET_EMPLOYEE_LIST_BY_ID_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------------------Update Employee Info---------------------------

export const UpdateEmployeeByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_info/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(id));
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update emp work experience---------------------------

export const UpdateEmpWorkExperience = (payload, id, emp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/work_experiance/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(emp));
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update emp Address---------------------------

export const UpdateEmpAddress = (payload, id, emp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_address/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(emp));
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update employee allocation by id---------------------------

export const UpdateEmpAllocation = (payload, id, emp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_allocation/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(emp));
        // alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update emp Education---------------------------

export const UpdateEmpEducation = (payload, id, emp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/education/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(emp));
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update emp Dependent ---------------------------

export const UpdateEmpDependent = (payload, id, emp) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_dependent/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(GetEmployeeListById(emp));
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//----------------------create Regular Shift---------------------------------//

export const createRegularShift = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLATTENDANCE}/api/regular_shift/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Shift Added Successfully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//------------------------------------enable Regular Shift---------------------------//

export const enableRegularShiftByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/regular_shift/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getTimeSlotShift());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Regular Shift---------------------------//

export const disableRegularShiftByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/regular_shift/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getTimeSlotShift());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//----------------------create Seasonal Shift---------------------------------//

export const createSeasonalShift = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLATTENDANCE}/api/seasonal_shift/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Shift Added Successfully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------------------Update Shift Break Bank---------------------------

export const UpdateShiftBreakBank = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/break_bank/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getTimeSlotShift());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update time slot By ID---------------------------

export const UpdateShiftTimeSlot = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/time_slot/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getTimeSlotShift());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update seasonal shift---------------------------

export const UpdateSeasonalShiftData = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/seasonal_shift/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getTimeSlotShift());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//-----------------------------Update Regular  shift---------------------------

export const UpdateRegularShiftData = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/regular_shift/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getTimeSlotShift());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//----------------------------------End------------------------------------------//

//------------------------------------enable Seasonal Shift---------------------------//

export const enableSeasonalShiftByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/seasonal_shift/enableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getTimeSlotShift());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Seasonal Shift---------------------------//

export const disableSeasonalShiftByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/seasonal_shift/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getTimeSlotShift());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------Get Time Slot Shift---------------------------//

export const getTimeSlotShift = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLATTENDANCE}/api/time_slot/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getTimeSlotShiftSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getTimeSlotShiftSuccessfully = (data) => {
  return {
    type: "GET_TIME_SLOT_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------Get All Asset Type---------------------------//

export const getAllAssetType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/asset_type/getAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllAssetTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllAssetTypeSuccessfully = (data) => {
  return {
    type: "GET_ALL_ASSET_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create Asset Type---------------------------------//

export const createAssetType = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/asset_type/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Asset Created Successfully");
        dispatch(getAllAssetType());
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//------------------------------------enable Asset Type---------------------------//

export const enableAssetTypeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_type/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllAssetType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Asset Type---------------------------//

export const disableAssetTypeByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_type/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllAssetType());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------Get All Asset ---------------------------//

export const getAllAsset = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURL}/api/asset_detail/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllAssetSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllAssetSuccessfully = (data) => {
  return {
    type: "GET_ALL_ASSET_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create Asset---------------------------------//

export const createAsset = (payload) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.BASEURL}/api/asset_detail/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        alert("Asset Created Successfully");
        dispatch(getAllAsset());
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------------------Update Designation---------------------------

export const UpdateAssetDetailByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/updateByid/${id}`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllAsset());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable Asset---------------------------//

export const enableAssetDetailByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllAsset());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable Asset---------------------------//

export const disableAssetDetailByID = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURL}/api/asset_detail/disableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllAsset());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//----------------------create employee leave---------------------------------//

export const createEmployeeLeave = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLEMPLOYEE}/api/employee_leave/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//----------------------get employee leave---------------------------------//

export const getEmployeeLeave = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLEMPLOYEE}/api/employee_leave/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getEmployeeLeaveSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getEmployeeLeaveSuccessfully = (data) => {
  return {
    type: "GET_EMPLOYEE_LEAVE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------------------Update employee leave---------------------------

export const UpdateEmployeeLeaveByID = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLEMPLOYEE}/api/employee_leave/updateById/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getEmployeeLeave());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//----------------------create leave type---------------------------------//

export const createLeaveType = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLATTENDANCE}/api/leave_type/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------Get All leave type ---------------------------//

export const getAllLeaveType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLATTENDANCE}/api/leave_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllLeaveTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllLeaveTypeSuccessfully = (data) => {
  return {
    type: "GET_ALL_LEAVE_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create leave Bank---------------------------------//

export const createLeaveBank = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLATTENDANCE}/api/leave_bank/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------Get All leave Bank ---------------------------//

export const getAllLeaveBank = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLATTENDANCE}/api/leave_bank/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllLeaveBankSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllLeaveBankSuccessfully = (data) => {
  return {
    type: "GET_ALL_LEAVE_BANK_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------------------Update LeaveBank---------------------------

export const UpdateLeaveBank = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/leave_bank/updateByid/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        dispatch(getAllLeaveBank());
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//----------------------------------End------------------------------------------//

//------------------------------------enable LeaveBank---------------------------//

export const enableLeaveBank = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(`${config.BASEURLATTENDANCE}/api/leave_bank/enableById/${payload}`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(getAllLeaveBank());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//------------------------------------disable LeaveBank---------------------------//

export const disableLeaveBank = (payload) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLATTENDANCE}/api/leave_bank/disableById/${payload}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(getAllLeaveBank());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------Get All leave Bank ---------------------------//

export const getAllStatement = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLPAYMENT}/api/period_payment/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getAllStatementSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getAllStatementSuccessfully = (data) => {
  return {
    type: "GET_ALL_STATEMENT_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------Get IncrementType ---------------------------//

export const getIncrementType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLPAYMENT}/api/increment_type/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getIncrementTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getIncrementTypeSuccessfully = (data) => {
  return {
    type: "GET_INCREMENT_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create leave Bank---------------------------------//

export const createIncrement = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLPAYMENT}/api/increments/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------Get getDeductionType ---------------------------//

export const getDeductionType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLPAYMENT}/api/deduction_type/findForDropDown`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getDeductionTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getDeductionTypeSuccessfully = (data) => {
  return {
    type: "GET_DEDUCTION_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create leave Bank---------------------------------//

export const createDeduction = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLPAYMENT}/api/deductions/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------------------Updated period payment---------------------------

export const UpdatedPeriodPayment = (payload, id) => {
  return async function (dispatch) {
    return await axios
      .put(
        `${config.BASEURLPAYMENT}/api/period_payment/update/${id}`,
        payload,
        {
          withCredentials: true,
        }
      )
      .then(() => {
        // alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//-----------------Get aLLRoll ---------------------------//

export const getALLRollType = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLRABC}/api/role/findAll`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getALLRollTypeSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getALLRollTypeSuccessfully = (data) => {
  return {
    type: "GET_ROLL_TYPE_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//

//----------------------create User Role---------------------------------//

export const createUserRole = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLRABC}/api/user_role/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//----------------------create New Role---------------------------------//

export const createNewRole = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLRABC}/api/role/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//----------------------create Permission Role---------------------------------//

export const createPermissionRole = (payload) => {
  return async function () {
    return await axios
      .post(`${config.BASEURLRABC}/api/permission_role/`, payload, {
        withCredentials: true,
      })
      .then(({ data }) => {
        data && alert("Created SuccessFully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
//-------------------------------- END -----------------------------------------//

//-----------------Get findAllPermissions ---------------------------//

export const getFindAllPermissions = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.BASEURLRABC}/api/permission_role/findAllPermissions`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        dispatch(getFindAllPermissionsSuccessfully(data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const getFindAllPermissionsSuccessfully = (data) => {
  return {
    type: "GET_ALL_PERMISSIONS_SUCCESSFULLY",
    payload: data,
  };
};

//-------------------------------- END -----------------------------------------//
