import React from 'react'

import "./Chatscollection.scss"
import CollectionHeader from '../CollectionHeader/CollectionHeader'
import Input from '../Input/Input'
import ChatsContainer from '../ChatsContainer/ChatsContainer'

const ChatsCollection = () => {
  return (
    <div className='collectionContainer'>
      <CollectionHeader/>
      <div className='chatSearchBar'>
        <Input
          placeholder="Seach Chat"
        />
      </div>
      <div className='chatsWrapper'>
        <ChatsContainer/>
      </div>
    </div>
  )
}

export default ChatsCollection