let defaultState = {
  allStatement: [],
};

const PayrollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_STATEMENT_SUCCESSFULLY":
      return {
        ...state,
        allStatement: action.payload,
      };
    case "GET_INCREMENT_TYPE_SUCCESSFULLY":
      return {
        ...state,
        incrementType: action.payload,
      };
    case "GET_DEDUCTION_TYPE_SUCCESSFULLY":
      return {
        ...state,
        deductionType: action.payload,
      };
    default:
      return state;
  }
};

export default PayrollReducer;
