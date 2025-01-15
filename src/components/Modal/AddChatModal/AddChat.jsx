import React, { useState } from "react";
import "./AddChat.scss";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useDispatch } from "react-redux";
import { addNewChatModalState, modalMsgUpdate, modalStateUpdate } from "../../../state/actions/modalAction";
import Input from "../../Input/Input";


const AddChat =()=>{

    const dispatch=useDispatch();
    const [chatMembers, setChatMembers]= useState([]);
    const [memberInput, setMemberInput]=useState('');
    const [chatName, setChatName]=useState('');

    const closeModal=()=>{
        dispatch(addNewChatModalState(false));
    }

    const handleMemberChange=(e)=>{
        setMemberInput(e.target.value);
    }

    const handleChatName=(e)=>{
        setChatName(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && memberInput.trim() !== "") {
          if(memberInput.length !==10){
            dispatch(modalMsgUpdate('Invalid Number','Number should be atleast 10 Digit!'))
            dispatch(modalStateUpdate(true));
            return;
          }
          setChatMembers((members)=> [...members, memberInput]);
          setMemberInput(""); 
        }
      };

    const clearMember=(member)=>{
        setChatMembers((members) => members.filter((m) => m !== member));
    }  

    return(
        <div className="newCharModalContainer">
            <div className="newChatModalWraper">
            <div className="newChatModalHeader">
                <h3>Create New Chat Room</h3>
                <div onClick={closeModal} className="modalClearContainer">
                  <ClearRoundedIcon />
                </div>
            </div>
            <div className="chatNameWrapper">
                <Input
                    placeholder='Enter Chat Name'
                    type='text'
                    value={chatName}
                    handleChange={handleChatName}
                />
                <Input
                    placeholder='Enter Member Number'
                    type='number'
                    handleKeyPress={handleKeyPress}
                    handleChange={handleMemberChange}
                    value={memberInput}
                />
                {
                    chatMembers.length > 0 &&
                    <div className="chatMembers">
                        {
                            chatMembers.map((member)=>(
                                <div className="membersWrapper">
                                    <p>{`${member.slice(0,2)}`+'...'+`${member.slice(-3)}`}  <ClearRoundedIcon className="memberClear" onClick={()=>clearMember(member)} /></p>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
            <div className="buttonContainer">
                <button>Submit</button>
            </div>
            </div>
        </div>
    );
}

export default AddChat;