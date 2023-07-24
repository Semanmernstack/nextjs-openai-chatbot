'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api"
  })

  return (
    <div className=" flex flex-col max-w-lg md:max-w-3xl lg:max-w-7xl mx-auto">
      
      {messages.map(m => (
        <div key={m.id} className="p-5 ">
          {m.role}: {m.content}
        </div>
      ))}
      

      <form onSubmit={handleSubmit} className="p-5  flex-1 flex gap-3"     >
        <label className="w-full">
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full flex-1 p-5 outline-none border-none bg-zinc-950 text-white"
            placeholder='Send Message'
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}