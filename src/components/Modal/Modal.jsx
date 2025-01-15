import React from "react";

import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { modalStateUpdate } from "../../state/actions/modalAction";

const Modal = () => {

    const dispatch=useDispatch()
    const mainMsg = useSelector((state) => state.modalReducer.mainMsg);
    const secMsg = useSelector((state)=> state.modalReducer.secMsg);
    

  return (
    <div className="modalContainer">
      <div className="modalWrapper">
        <div className="modalMainMsgContainer">
            <p
              style={{ color: mainMsg.includes('Success') ? 'green' : 'red' }}
            >{mainMsg}</p>
        </div>
        <div className="modalSecMsgContainer">
            <p>{secMsg}</p>
        </div>
        <div className="buttonContainer">
            <button onClick={()=> dispatch(modalStateUpdate(false))}>Okay !</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
