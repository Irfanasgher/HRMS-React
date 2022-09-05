const defaultState = {
    
    supportEmail: '',
    emailSenderEmail: '',
    replyToEmail: '',
};

const GeneralSettingReducer = (state = defaultState, action) => {
    switch (action.type){
        case "General":
            return action.payload
        default:
            return state;
    }
};

export default GeneralSettingReducer;
