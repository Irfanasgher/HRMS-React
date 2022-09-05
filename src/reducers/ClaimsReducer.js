const defaultState = {
    warrantyClaimsDb: [],
    returnClaimsDb: [],
    shippingClaimsDb: [],
    allClaimsDb: [],

    filteredClaims: [],

    reasonGroups: [],
    reasonSubgroups: [],

    claimStatusesDb: [],
    uniqueStatuses: [],
    uniqueStatusesValues: [],

    sort: {
        column: null,
        direction: 'desc',
        },

    startDate: '',
    endDate: '',

    status: [0, 'All'],

    searchValue: ''
};

const ClaimsReducer = (state = defaultState, action, ) => {
    switch (action.type){
        case "GET_WARRANTY_CLAIMS":
            return {
                ...state,
                warrantyClaimsDb: [...action.warrantyClaims],
                filteredClaims: [...state.filteredClaims, ...action.warrantyClaims],
                allClaimsDb: [...state.allClaimsDb, ...action.warrantyClaims]
            }
        case "GET_RETURN_CLAIMS":
            return {
                ...state,
                returnClaimsDb: [...action.returnClaims],
                filteredClaims: [...state.filteredClaims, ...action.returnClaims],
                allClaimsDb: [...state.allClaimsDb, ...action.returnClaims]
            }
        case "GET_SHIPPING_CLAIMS":
            return {
                ...state,
                shippingClaimsDb: [...action.shippingClaims],
                filteredClaims: [...state.filteredClaims, ...action.shippingClaims],
                allClaimsDb: [...state.allClaimsDb, ...action.shippingClaims]
            }
        case "CLEAR_ALL_CLAIMS":
            return {
                ...state,
                warrantyClaimsDb: [],
                returnClaimsDb: [],
                shippingClaimsDb: [],
                allClaimsDb: [],
                filteredClaims: [],
            }
        case "GET_ALL_CLAIMS":
            return {
                ...state,
                allClaimsDb: [...action.allClaims],
                filteredClaims: [...action.allClaims],
            };
        case "GET_REASON_GROUPS":
            return {
                ...state,
                reasonGroups: [...action.payload],
            };
        case "GET_REASON_SUBGROUPS":
            return {
                ...state,
                reasonSubgroups: [...action.payload],
            };
        case 'GET_CLAIMSTATUSES':
            return {
                ...state,
                claimStatusesDb: [...action.claimStatusesDb],
                uniqueStatuses: [...state.uniqueStatuses, ...action.uniqueStatuses.filter(x => !state.uniqueStatuses.find(i => (i[0] === x[0])))],
                uniqueStatusesValues: [],
            };
        case 'RESET_DATE':
            return {
                ...state,
                startDate: '',
                endDate: '',
                filteredClaims: [...action.allClaimsDb]
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'FILTER_BY_DATE_STATUS':
            // console.log('uniterable error', action.filteredClaims)
            return {
                ...state,
                filteredClaims: [...action.filteredClaims],
                status: action.status
            };
        case 'SORTED_CLAIMS':
            return {
                ...state,
                filteredClaims: [...action.filteredClaims],
                sort: action.sort
            };
        case 'SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.searchValue,
                filteredClaims: [...action.filteredClaims],
            };
        default:
            return state;
    }
};

export default ClaimsReducer;
