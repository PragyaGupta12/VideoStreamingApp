import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomNames } from '../Utils/helper';

export const LiveChat = () => {

  const dispatch = useDispatch()
  const chatMessages = useSelector(store=>store.chat.messages)
  useEffect(()=>{    
    const i = setInterval(()=>{
      //API Polling here we can have the fetch logic and convert it in json
      dispatch(addMessage({
        name:generateRandomNames(),
        message:'message from the user'
      }))
    },2000) //every 2s the API call will be done to check for new data

    return()=>{
      clearInterval(i)
    }
  },[])

  return (
    <div className='ml-2 w-full h-[455px] border border-black flex flex-col-reverse'>
      {
         //overflow-y-scroll removed this cuz scroll is not needed (check chatSlice)
        chatMessages.map((chat,index)=>{
          return <ChatMessage key={index} name={chat.name} message={chat.message}/>
        })
      }
    </div>
  )
}

export default LiveChat;