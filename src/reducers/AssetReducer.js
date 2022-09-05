let defaultState = {
  asset: [],
};

const AssetReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_ASSET_TYPE_SUCCESSFULLY":
      return {
        ...state,
        assetType: action.payload,
      };
    case "GET_ALL_ASSET_SUCCESSFULLY":
      return {
        ...state,
        assets: action.payload,
      };

    default:
      return state;
  }
};

export default AssetReducer;
