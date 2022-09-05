const defaultState = {
  employeeType: [],
};

const EmployeeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYEE_SUCCESSFULLY":
      return {
        ...state,
        employee: action.payload,
      };
    case "GET_EMPLOYEE_LEAVE_SUCCESSFULLY":
      return {
        ...state,
        employeeLeave: action.payload,
      };
    case "GET_ALL_EMPLOYEE_TYPE_SUCCESSFULLY":
      return {
        ...state,
        employeeType: action.payload,
      };
    case "GET_ALL_EMPLOYEE_TYPE_ID_SUCCESSFULLY":
      return {
        ...state,
        employeeTypeID: action.payload,
      };

    case "GET_ALL_ADDRESS_TYPE_SUCCESSFULLY":
      return {
        ...state,
        adddressType: action.payload,
      };
    case "GET_ALL_COMPANY_LIST_SUCCESSFULLY":
      return {
        ...state,
        companyData: action.payload,
      };
    case "GET_ALL_GRADE_LIST_SUCCESSFULLY":
      return {
        ...state,
        gradeData: action.payload,
      };
    case "GET_ALL_GRADES_LIST_SUCCESSFULLY":
      return {
        ...state,
        grades: action.payload,
      };

    case "GET_ALL_DEGREE_SUCCESSFULLY":
      return {
        ...state,
        degreeData: action.payload,
      };
    case "GET_ALL_DEPENDENT_SUCCESSFULLY":
      return {
        ...state,
        dependentData: action.payload,
      };
    case "GET_ALLOCATION_SUCCESSFULLY":
      return {
        ...state,
        allocationData: action.payload,
      };
    case "GET_EMPLOYEE_LIST_SUCCESSFULLY":
      return {
        ...state,
        employeeData: action.payload,
      };
    case "GET_EMPLOYEE_LIST_BY_ID_SUCCESSFULLY":
      return {
        ...state,
        singleEmployee: action.payload,
      };

    default:
      return state;
  }
};

export default EmployeeReducer;
