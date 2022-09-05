let defaultState = {
  attendance: [],
};

const AttendanceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_TIME_SLOT_SUCCESSFULLY":
      return {
        ...state,
        attendance: action.payload,
      };

    default:
      return state;
  }
};

export default AttendanceReducer;
