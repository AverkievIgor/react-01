import {getAuthUserData} from "./Auth-Reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}

export const InitializedSuccess = () => ({type: INITIALIZED_SUCCESS});
/*Thunk*/
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somthingelse())
    //dispatch(somthingelse())
    Promise.all([promise])
        .then(() => {
            dispatch(InitializedSuccess());
        })

}


/*------------*/
export default appReducer;