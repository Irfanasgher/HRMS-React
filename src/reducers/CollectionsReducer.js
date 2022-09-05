const defaultState = {
    // smartCollections: [],
    // customCollections: [],
    shopifyCollections: [],
    savedCollections: [],
    dbImage: []
};

const CollectionsReducer = (state = defaultState, action, ) => {
    switch (action.type){
        case "GET_COLLECTIONS":
            return {
                // smartCollections: [...action.smartCollections],
                // customCollections: [...action.customCollections],
                shopifyCollections: [...action.shopifyCollections],
                savedCollections: [...action.savedCollections],
                dbImage: [...action.dbImage]
            };
        case 'SAVE_NEW_COLLECTION':
            return {
                ...state,
                savedCollections: [...state.savedCollections, action.newCollection]
            };
        case 'REMOVE_COLLECTION':
            return {
                ...state,
                savedCollections: [...action.updatedSavedCollections]
            }
        default:
            return state;
    }
};

export default CollectionsReducer;
