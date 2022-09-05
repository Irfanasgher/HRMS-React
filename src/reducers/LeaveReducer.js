let defaultState = {
  leaveType: [],
};

const LeaveReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_LEAVE_TYPE_SUCCESSFULLY":
      return {
        ...state,
        leaveType: action.payload,
      };
    case "GET_ALL_LEAVE_BANK_SUCCESSFULLY":
      return {
        ...state,
        leaveBank: action.payload,
      };

    default:
      return state;
  }
};

export default LeaveReducer;
