let defaultState = {
  user_email: null,
  user_fname: null,
  user_lname: null,
  path_name: null,
  organizations: [],
};

const OrganizationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SUCCESSFUL":
      return {
        ...state,
        organizationData: action.payload,
        path_name: "/dashboard",
      };

    case "ORGANIZATION_LIST_FETCHED_SUCCESSFUL":
      return {
        ...state,
        organizations: action.payload,
      };
    case "SINGLE_ORGANIZATION__SUCCESSFUL":
      return {
        ...state,
        singleOrganization: action.payload,
      };
    case "CREATED_CUSTOM_VALUE_SUCCESSFULLY":
      return {
        ...state,
        customData: action.payload,
      };
    case "GET_ALL_CUSTOM_FIELD":
      return {
        ...state,
        customFieldData: action.payload,
      };
    case "GET_ALL_CUSTOM_FIELD_NAMES":
      return {
        ...state,
        customFieldNamesData: action.payload,
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

export default OrganizationReducer;
