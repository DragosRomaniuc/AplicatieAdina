const INITIAL_STATE = {
    authSession: null,
    isAuth: true,
    userDinActiune: null
};

const authReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'LOG_IN':
            return { ...state, userDinActiune: action.user }
        default:
            return state;
    }
}




export default authReducer;

dispatch({
    type: 'LOG_IN',
    user: 'DRAGOS'
})