let defaultState = {
  roll: [],
};

const RollReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ROLL_TYPE_SUCCESSFULLY":
      return {
        ...state,
        roll: action.payload,
      };
    case "GET_ALL_PERMISSIONS_SUCCESSFULLY":
      return {
        ...state,
        permissions: action.payload,
      };
    default:
      return state;
  }
};

export default RollReducer;
