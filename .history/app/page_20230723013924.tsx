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
    <div className=" min-h-screen  flex shadow-2xl flex-col p-5 max-w-lg bg-gray-900 md:max-w-3xl lg:max-w-7xl mx-auto">
      
      {messages.map(m => (
        <div key={m.id} className="p-5 bg-zinc-900  text-white   flex-1 ">
          {m.role}: {m.content}
        </div>
      ))}

      <div ref={messageRef} >  </div>
      
      

      <form onSubmit={handleSubmit} className="p-5 boder-2 w-full fixed items-center bottom-0  shadow-2xl flex-1 flex gap-3"     >
        
          <input
            value={input}
            onChange={handleInputChange}
            className="flex-1 p-5 mt-1 rounded-md bottom-0 outline-none border-none"
            placeholder='Send Message'
          />
        
        <button type="submit">Send</button>
      </form>
    </div>
  )
}