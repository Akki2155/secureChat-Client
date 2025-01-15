import React, { useState } from 'react'
import Chat from '../Chat/Chat'

const ChatsContainer = () => {

    const [userChatRoom, setUserChatRoom]=useState([1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,])

  return (
    <div>
        {
            userChatRoom.map(()=>(
                <Chat/>
            ))
        }
    </div>
  )
}

export default ChatsContainer