"use client"
import { experimental_useFormStatus as useformStatus } from 'react-dom'

function Addproduct() {
    const { pending } = useformStatus()
  return (
    <div>
        <button className="bg-blue-800 hover:bg-slate-500 p-2 rounded-full">
            {pending && "wait..."}
            {!pending && <h1 className="  w-full p-2  hover:bg-gray-300  bg-orange-600"    >Add to Cart</h1>  }
        </button>    
    </div>
  )
}

export default Addproduct