import React from 'react'

import "./ChatMessages.scss";
import Input from '../Input/Input';
import Avatar from 'react-avatar';

const ChatMessages = () => {

  

  return (
    <div className='messagesContainer'>
      <div className='messagesHeader'>
        <Avatar
            name="Chat Room"
            color="#6256CA"
            fgColor="white"
            size="2rem"
            textSizeRatio="12rem"
            textMarginRatio="0.12"
            round="true"
            src=""
            className="avatar"
          />
      </div>
      <div classname='messagesWrapper'>

      </div>
      <div className='messageInputWrapper'>
        <Input
          placeholder='Type you message here..'
        />
      </div>
    </div>
  )
}

export default ChatMessages