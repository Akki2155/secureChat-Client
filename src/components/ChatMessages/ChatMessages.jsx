import React from 'react'

import "./ChatMessages.scss";
import Input from '../Input/Input';
import Avatar from 'react-avatar';

const ChatMessages = () => {

  const messages=[{
    sender:"Akash",
    msg:"Hello first message",
    timestamp:1740570399,
  },
  {
    sender:"Sudhanshu",
    msg:"Hello second message",
    timestamp:1740570399,
  },
  {
    sender:"Sudhanshu",
    msg:"Hello third message",
    timestamp:1740570399,
  },
  {
    sender:"Akash",
    msg:"Hello fourth message shakdfhkahdis fidasidh fiasbdki ashdfiahsif hiahefihaiefhiahwefiawiefhiawhefaiefiaheifhaiefhirhfihrf",
    timestamp:1740653247,
  },
  {
    sender:"Sudhanshu",
    msg:"Hello fifth message kahkfhashdfkhashdfihaehf; oahefh; ehrfoefohserhgdfkbvbdbcisdakdsbkadfabdckadbvkbadiveribivurvburbvur",
    timestamp:1740653247,
  },
  {
    sender:"Akash",
    msg:"Hello sixth message",
    timestamp:1740739647,
  },
  {
    sender:"Akash",
    msg:"Hello seventh message",
    timestamp:1740739647,
  },
  {
    sender:"Sudhanshu",
    msg:"Hello Eight message",
    timestamp:1740739647,
  }
]

  const formatDate=(timestamp)=>{
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12; // Convert 24-hour to 12-hour format
    hours = hours ? hours : 12; // If hour is 0, make it 12
  
    return `${hours}:${minutes} ${ampm}`;
  }

  const getDateLabel = (timestamp) => {
    const messageDate = new Date(timestamp * 1000);
    const today = new Date();
    const todayStart = new Date(today.setHours(0, 0, 0, 0));
    const yesterdayStart = new Date(todayStart);
    yesterdayStart.setDate(yesterdayStart.getDate() - 1);
  
    if (messageDate >= todayStart) {
      return "Today";
    } else if (messageDate >= yesterdayStart) {
      return "Yesterday";
    } else {
      return messageDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };
  

  const groupMessagesByDate = (messages) => {
    const groupedMessages = {};
  
    messages.forEach((message) => {
      const dateKey = getDateLabel(message.timestamp);
  
      if (!groupedMessages[dateKey]) {
        groupedMessages[dateKey] = [];
      }
      groupedMessages[dateKey].push(message);
    });
  
  
    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className='messagesContainer'>
      <div className='messagesHeader'>
        <Avatar
            name="Red Zone"
            color="#6256CA"
            fgColor="white"
            size="2rem"
            textSizeRatio="12rem"
            textMarginRatio="0.12"
            round="true"
            src=""
            className="avatar"
          />
          <span className='charNameContainer'>Red Zone</span>
      </div>
      <div className='messagesWrapper'>
      {Object.keys(groupedMessages).map((dateKey, index) => (
        <div key={index}>
          <div className='dateWrapper'>
            <span>{dateKey}</span>
          </div>
          {groupedMessages[dateKey].map((obj, index) => (
            <div key={index} className='msgContainer'>
              <div className={obj.sender === 'Akash' ? 'ownMsg' : 'otherMsg'}>
                <div className='msgWrapper'>
                  <span>{obj.msg}</span>
                </div>
                <div className='msgMetaWrapper'>
                  <span>{obj.sender === 'Akash' ? 'You' : obj.sender}</span>
                  <span>{formatDate(obj.timestamp)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      </div>
      <div className='messageInputWrapper'>
        <Input
          placeholder='Type you message here..'
        />
        <button className="sendButton">
          <span className="arrowIcon"></span>
          <span className="arrowIcon rotate"></span>
        </button>
      </div>
    </div>
  )
}

export default ChatMessages