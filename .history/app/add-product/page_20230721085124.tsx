import React from 'react'
import Addproduct from '../components/Addproduct'
import { Product } from '@prisma/client'
import { prisma } from '@/prismadb'
import { redirect } from "next/navigation";




async function addCart (formData: FormData) {
    "use server"
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

    await prisma.product.create({
    data: { name, description, imageUrl, price,  },
  });

    redirect("/")
    


}



function page() {
    
  return (
    <div className="flex flex-col">
        <h1 className="items-center justify-center flex">Add List of Product</h1>
        <form  action={addCart}   className="flex flex-col max-w-2xl md:max-w-full mx-auto md:min-w-[600px] lg:min-w-[700px] sm:min-w-[400px] p-5 gap-3" >
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
               <Addproduct       />

        </form>

    </div>
  )
}

export default page