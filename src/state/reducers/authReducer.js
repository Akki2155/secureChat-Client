import { LOGIN, LOGOUT } from "../../constants/constants";

const intialState={
    isAuthenticated:false,
};

export const authReducer=(state=intialState, action)=>{
    switch(action.type){
        case LOGIN:
            return { ...state, isAuthenticated:true}
        case LOGOUT:
            return { ...state, isAuthenticated:false}
        default:
            return state;
    }
}