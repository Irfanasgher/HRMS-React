let defaultState = {
  plans: [],
};

const PlanReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_PLANS_SUCCESSFULLY":
      return {
        ...state,
        plans: action.payload,
      };
    case "GET_ALL_POLICY_GROUP_SUCCESSFULLY":
      return {
        ...state,
        policyGroup: action.payload,
      };
    case "GET_ALL_POLICY_GROUP_BY_COMPANY_ID_SUCCESSFULLY":
      return {
        ...state,
        policyGroupByCompany: action.payload,
      };

    default:
      return state;
  }
};

export default PlanReducer;
