import { prisma } from '@/prismadb'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)
 

export const runtime = 'edge'
 
export async function POST(req: Request) {
  
  const { messages } = await req.json()
 
  
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
  })
  
  const stream = OpenAIStream(response , {
    onCompletion: async (completion: string) => {
      const d = await prisma.message.create({
        data: {
          answer: completion,
          question: messages,

        }
      })
    }
  })
  
  return new StreamingTextResponse(stream)
}