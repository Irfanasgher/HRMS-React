const defaultState = {
    employeeData: []
};

export const DashboardReducers = (state = defaultState, action) => {
    switch (action.type){
        case "DASHBOARD_DETAILS":
            return {
               ...state
            };
        default:
            return state;
    }
};

