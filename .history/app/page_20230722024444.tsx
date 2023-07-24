'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api"
  })

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="max-w-lg md:max-w-2xl lg:max-w-7xl p-5"     >
        <label>
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
            className="w-full p-5 outline-none border-none bg-zinc-950 text-white"
            placeholder='Send Message'
          />
        </label>
      </form>
    </div>
  )
}