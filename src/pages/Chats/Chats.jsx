import React from 'react'

import "./Chats.scss"
import ChatsCollection from '../../components/ChatsCollections/ChatsCollection'
import ChatMessages from '../../components/ChatMessages/ChatMessages'
const Chats = () => {
  return (
    <div className='chatsContainer'>
      <ChatsCollection/>
      <ChatMessages/>
    </div>
  )
}

export default Chats