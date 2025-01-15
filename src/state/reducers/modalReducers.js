import {
  MAINMSGUPDATE,
  SECMSGUPDATE,
  MODALSTATEUPDATE,
  NEWCHATNAME,
  NEWCHATMEMBER,
  NEWCHATMODALSTATE,
} from "../../constants/constants";

const intialState = {
  isModalActive: false,
  isNewChatModalActive: false,
  mainMsg: "",
  secMsg: "",
  newChatName: "",
  newChatMembers: [],
};

export const modalReducer = (state = intialState, action) => {
  switch (action.type) {
    case MODALSTATEUPDATE:
      return { ...state, isModalActive: action.payload };
    case NEWCHATMODALSTATE:
      return { ...state, isNewChatModalActive: action.payload };
    case MAINMSGUPDATE:
      return {
        ...state,
        mainMsg: action.payload.mainMsg,
        secMsg: action.payload.secMsg,
      };
    case NEWCHATNAME:
      return {
        ...state,
        newChatName: action.payload,
      };
    case NEWCHATMEMBER:
      return {
        ...state,
        newChatMembers: [...intialState.newChatMembers, action.payload],
      };

    default:
      return state;
  }
};
