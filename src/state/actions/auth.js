import * as api from "../../api/index.js";
import { END_LOADNG, LOGIN, LOGOUT, MAINMSGUPDATE, START_LOADING } from "../../constants/constants.js";
import { modalMsgUpdate, modalStateUpdate } from "./modalAction.js";


export const userRegistration=(formData, navigate )=> async (dispatch) =>{
    try {
        dispatch({
            type: START_LOADING
        });
        const {data}=await api.userRegister(formData);

        dispatch({
            type:END_LOADNG
        });

        if(data.res=="Success"){
            // Logic for if user is successfully registered
            dispatch(modalMsgUpdate(data.res, data.message));
            dispatch(modalStateUpdate(true));
            
        }else{
            // Logic for if user is not registered
        }
    } catch (error) {
        // console.error(`Error while user registration`, error);
        console.log(error);
        dispatch({
            type:END_LOADNG
        });
        dispatch(modalMsgUpdate('Error while user registration !', error.response.data.message.errorResponse.errmsg));
        dispatch(modalStateUpdate(true));
    }
}

export const userLogin=(formData, navigate)=> async (dispatch)=>{
    try {
        dispatch({
            type:START_LOADING
        });

        const {data}= await api.userSignIn(formData);  
        
        dispatch({
            type: END_LOADNG
        });

        if(data.res=="Success"){
            localStorage.setItem("token", data.user.token);
            localStorage.setItem("userDetails",JSON.stringify(data.user.details));
            dispatch({
                type:LOGIN,
            })
            navigate("/chats");
        }

    } catch (error) {
        console.log(error.message);
        
        dispatch({
            type:END_LOADNG
        });
        dispatch(modalMsgUpdate('Error while user login !', error.message));
        dispatch(modalStateUpdate(true));
    }
}

export const userLogout=(token, navigate)=>async(dispatch)=>{
    try {
        dispatch({
            type:START_LOADING
        });

        const {data}=await api.userSignOut({token});

        dispatch({
            type: END_LOADNG
        });

        if(data.res=="Success"){
            localStorage.clear('token');
            localStorage.clear('userDetails');
            dispatch({
                type:LOGOUT,
            })
            navigate("/");
        }else{
            dispatch(modalStateUpdate(true));
            dispatch(modalMsgUpdate('Something Went Wrong !'))
        }

        
    } catch (error) {
        dispatch({
            type:END_LOADNG
        });
        dispatch(modalStateUpdate(true));
        dispatch(modalMsgUpdate('Something Went Wrong !'))
    }
}