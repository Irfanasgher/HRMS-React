let defaultState = {
  user_email: null,
  user_fname: null,
  user_lname: null,
  path_name: null,
  policies: [],
  enable_policy: null,
  disable_policy: null,
  policyCreatedData: null,
  policyUpdateSuccess: null,
};

const PolicyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_POLICY_TYPES_SUCCESSFULLY":
      return {
        ...state,
        policies: action.payload,
      };
    case "GET_ALL_POLICY_FOR_DROPDOWN_SUCCESSFULLY":
      return {
        ...state,
        dropDownPolicies: action.payload,
      };
    case "GET_ALL_POLICY_BY_COMPANY_ID_SUCCESSFULLY":
      return {
        ...state,
        companyIdPolicies: action.payload,
      };
    case "GET_ALL_ENABLE_POLICY_TYPES_SUCCESSFULLY":
      return {
        ...state,
        enablePolicies: action.payload,
      };

    case "POLICY_CREATED_SUCCESSFULLY":
      return {
        ...state,
        policyCreatedData: action.payload,
      };
    case "MAPPING_POLICY_CREATED_SUCCESSFULLY":
      return {
        ...state,
        mappingPolicyData: action.payload,
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

export default PolicyReducer;
