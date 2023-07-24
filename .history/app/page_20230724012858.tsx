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
    b()

  }, [messages])
  

  return (
    <div className=" min-h-screen max-w-7xl mx-auto  flex shadow-2xl flex-col p-5 bg-gray-900  ">
      
      {messages.map(m => (
        <div key={m.id} className="p-2 gap-2    ">
          <p className="p-1 shadow-xl  ">{m.role}</p>
          <p className="p-3  border-shadow-2xl bg-zinc-950 text-white">{m.content}</p>
          
        </div>
        
      ))}

      <div ref={messageRef} >  </div>
      
      

      <form onSubmit={handleSubmit} className="p-4 z-10 bg-black boder-2 w-[75%] mx-auto fixed items-center bottom-0  shadow-2xl flex gap-3"     >
        
          <textarea
          rows={2}
            value={input}
            onChange={handleInputChange}
            className="flex w-full  p-4 mt-1 rounded-md bottom-0 outline-none border-none"
            placeholder='Send Message'
          />
        
        <button className="block bg-green-600 p-2 border-2" type="submit">Send</button>
      </form>
    </div>
  )
}