"use client"
import { experimental_useFormStatus as useformStatus } from 'react-dom'

function Addproduct() {
    const { pending } = useformStatus()
  return (
    <div>
        <button className="bg-orange-800 hover:bg-slate-500 p-2 w-full rounded-full">
            {pending && "wait..."}
            {!pending && <h1   >Add to Cart</h1>  }
        </button>    
    </div>
  )
}

export default Addproduct