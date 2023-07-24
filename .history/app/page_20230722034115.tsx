'use client'

import { useChat } from 'ai/react'
import { useRef } from 'react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api"
  })
  const messageRef = useRef(null)
  const b = () => {
    messageRef.current?.scrollIntoview()
    

  }
  

  return (
    <div className=" min-h-screen  flex shadow-2xl flex-col p-5 max-w-lg md:max-w-3xl lg:max-w-7xl mx-auto">
      
      {messages.map(m => (
        <div key={m.id} className="p-5 bg-grey-500    flex-1 ">
          {m.role}: {m.content}
        </div>
      ))}
      
      

      <form onSubmit={handleSubmit} className="p-5 boder-2  fixed items-center bottom-0  shadow-2xl bg-zinc-900 text-white  flex-1 flex gap-3"     >
        <label className="w-full">
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full flex-1 p-5 bottom-0 outline-none border-none bg-gray-200 text-white"
            placeholder='Send Message'
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}