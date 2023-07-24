'use client'

import { useChat } from 'ai/react'
import { useEffect, useRef } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api"
  })
  const messageRef = useRef<HTMLInputElement>(null)
  const b = () => {
    messageRef.current?.scrollIntoView({behavior: 'smooth'})
    

  }
  useEffect(() => {
    b

  }, [messages])
  

  return (
    <div className=" min-h-screen max-w-7xl mx-auto  flex shadow-2xl flex-col p-5 bg-gray-900  ">
      
      {messages.map(m => (
        <div key={m.id} className="p-5 bg-zinc-900  text-white    ">
          {m.role}: {m.content}
        </div>
      ))}

      <div ref={messageRef} >  </div>
      
      

      <form onSubmit={handleSubmit} className="p-4 boder-2 w-[60%] fixed items-center bottom-0  shadow-2xl flex gap-3"     >
        
          <input
            value={input}
            onChange={handleInputChange}
            className="flex flex-1 p-6 mt-1 rounded-md bottom-0 outline-none border-none"
            placeholder='Send Message'
          />
        
        <button type="submit">Send</button>
      </form>
    </div>
  )
}