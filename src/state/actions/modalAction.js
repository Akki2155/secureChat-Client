import { MAINMSGUPDATE, MODALSTATEUPDATE, NEWCHATMEMBER, NEWCHATMODALSTATE, NEWCHATNAME, SECMSGUPDATE } from "../../constants/constants"

export const modalMsgUpdate=(msgHeading, msg)=>async(dispatch)=>{
    dispatch({
        type:MAINMSGUPDATE,
        payload:{
            mainMsg:msgHeading,
            secMsg:msg
        }
    });
};

export const modalStateUpdate=(state)=>async(dispatch)=>{    
    dispatch({
        type:MODALSTATEUPDATE,
        payload:state
    });
};

export const addNewChatModalState=(state)=>async(dispatch)=>{
    dispatch({
        type:NEWCHATMODALSTATE,
        payload:state
    });
};

export const addNewChat=(state)=>async(dispatch)=>{
    dispatch({
        type:NEWCHATNAME,
        payload:state
    });
};

export const addNewMember=(state)=>async(dispatch)=>{
    dispatch({
        type:NEWCHATMEMBER,
        payload:state
    });
};