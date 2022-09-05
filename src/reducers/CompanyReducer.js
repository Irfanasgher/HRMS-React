// import { getAllCompanyData } from "../actions";

let defaultState = {
  path_name: null,
  companies: [],
};

export const CompanyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "COMPANY_LIST_FETCHED_SUCCESSFUL":
      return {
        ...state,
        company: action.payload,
        path_name: "/Company",
      };
    case "COMPANY_LIST_POSTED_SUCCESSFUL":
      return {
        ...state,
        companyData: action.payload,
      };
    case "GET_ALL_LOCATION_SUCCESSFUL":
      return {
        ...state,
        companyLocation: action.payload,
      };
    case "PARENT_DESIGNATION_FETCHED_SUCCESSFUL":
      return {
        ...state,
        parentDesignation: action.payload,
      };
    case "PARENT_DESIGNATION_POSTED_SUCCESSFUL":
      return {
        ...state,
        parentDesignationPost: action.payload,
      };
    case "GET_ALL_DESIGNATION_TYPES_FETCHED_SUCCESSFUL":
      return {
        ...state,
        getAllDesignationTypes: action.payload,
      };
    case "UNIT_POSTED_SUCCESSFUL":
      return {
        ...state,
        unitDetails: action.payload,
      };    
    case "POLICY_POSTED_SUCCESSFUL":
      return {
        ...state,
        policyDetails: action.payload,
      };
    case "COMPANY_ALL_LIST_POSTED_SUCCESSFUL":
      return {
        ...state,
        getAllCompanyListData: action.payload,
      };
    case "LOCATION_POSTED_SUCCESSFUL":
      return {
        ...state,
        locationData: action.payload,
      };
    case "GET_ALL_COUNTRIES_FETCHED_SUCCESSFUL":
      return {
        ...state,
        countriesData: action.payload,
      };
    case "GET_ALL_STATES_FETCHED_SUCCESSFUL":
      return {
        ...state,
        statesData: action.payload,
      };
    case "POST_LOCATION_POSTED_SUCCESSFUL":
      return {
        ...state,
        locationData: action.payload,
      };
    case "GET_ALL_UNITS_FETCHED_SUCCESSFUL":
      return {
        ...state,
        units: action.payload,
      };
    case "DEPARTMENT_POSTED_SUCCESSFUL":
      return {
        ...state,
        departmentData: action.payload,
      };
    case "DEPARTMENT_CREATED_SUCCESSFUL":
      return {
        ...state,
        departmentLocation: action.payload,
      };

    case "GET_ALL_DEPARTMENTS_FETCHED_SUCCESSFUL":
      return {
        ...state,
        parentDepartmentId: action.payload[0].parent_deparment_id,
      };
    case "GET_ALL_MAPPING_DEPARTMENTS_SUCCESSFUL":
      return {
        ...state,
        mappingDepartment: action.payload,
      };

    case "GET_ALL_DEPARTMENTS_SUCCESSFUL":
      return {
        ...state,
        getDepartmentData: action.payload,
      };
    case "GET_ALL_ADMIN_DEPARTMENTS_SUCCESSFUL":
      return {
        ...state,
        departmentAdminData: action.payload,
      };
    case "GET_ALL_DESIGNATION_TYPES_FOR_DROP_DOWN_SUCCESSFULLY":
      return {
        ...state,
        designationDropDown: action.payload,
      };

    case "GET_ALL_DESIGNATION_TYPES_BY_COMPANYID_SUCCESSFULLY":
      return {
        ...state,
        designationByCompanyId: action.payload,
      };

    case "DESIGNATION_DEFINATION_CREATED_SUCCESSFULLY":
      return {
        ...state,
        designationDefCreatedSuccess: action.payload,
      };
    case "FAILED":
      return {
        ...state,
        alertt: alert("no list available"),
      };

    default:
      return state;
  }
};
