import React, { useState } from 'react';

import "./Chat.scss";

const Chat = () => {

    const [chatMessage, setChatMessage]=useState('Red zone most important sector of the time zone and bla bla bla');
    const [chatTitle, setChatTitle]=useState('Red Zone');

  return (
    <div className='chatConatiner'>
        <h3>{chatTitle}</h3>
        <p>{chatMessage.length >50 ? `${chatMessage.slice(0,50)}` +'...': `${chatMessage + '...'}`}</p>
    </div>
  )
}

export default Chat