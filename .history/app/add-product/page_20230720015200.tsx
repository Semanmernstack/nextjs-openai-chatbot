import React from 'react'

function page() {
  return (
    <div className="flex flex-col">
        <h1 className="items-center justify-center flex">Add List of Product</h1>
        <form className="flex flex-col max-w-2xl md:max-w-full mx-auto min-w-[400px] p-5 gap-3"  action="">
            <input type="text"
                required
                name="name"
                placeholder="name"
                className=" w-full p-2 hover:bg-gray-300 outline-none border-none bg-slate-500 "
             />
             <textarea 
                required
                name="description"
                placeholder="description"
                className="w-full p-2 hover:bg-gray-300 outline-none border-none bg-slate-500"
              />
              <input
                required
                type="url"
                name="imageUrl"
                placeholder="url"
                className="w-full p-2 hover:bg-gray-300 outline-none border-none  bg-slate-500"
              />
              <input 
                type="number"
                name="price"
                placeholder="Price of Product"
                required
                className="w-full p-2 hover:bg-gray-300 outline-none border-none bg-slate-500"

               />
               <button className="w-full p-2  hover:bg-gray-300  bg-orange-600">Add Product</button>

        </form>

    </div>
  )
}

export default page