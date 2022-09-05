let defaultState = {
  user_email: null,
  user_fname: null,
  user_lname: null,
  path_name: null,
  designation: [],
  enable_designation: null,
  disable_designation: null,
  designationCreatedData: null,
  designationUpdateSuccess: null,
};

const DesignationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_DESIGNATION_SUCCESSFULLY":
      return {
        ...state,
        designationData: action.payload,
      };
    case "GET_ALL_PARENT_DESIGNATION_SUCCESSFULLY":
      return {
        ...state,
        parentDesignation: action.payload,
      };

    case "GET_ALL_DESIGNATION_BY_COMPANYID_SUCCESSFULLY":
      return {
        ...state,
        designationByCompany: action.payload,
      };

    case "DESIGNATION_CREATED_SUCCESSFULLY":
      return {
        ...state,
        designationCreatedData: action.payload,
      };

    case "FAILED":
      return {
        ...state,
        user_email: "error@gmail.com",
      };

    default:
      return state;
  }
};

export default DesignationReducer;
