import React from 'react'

const NewsLetter = () => {
  return (
        <div className="max-w-[1520] m-auto text-white px-4 bg-[#24262b]">
            <div className="mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1>Need Advice on how to improve your flow?</h1>
                    <p>Sign up to join our newsletter and stay up to date</p>
                </div>
                <div className="my-4">
                        <div className="flex flex-col sm:flex-row items-center justiy-betwen w-full">
                            <input className='p-3 py-2 flex w-full rounded-md text-black' type="email " placeholder='email' name="" id="" />
                            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-6 my-4 ">Notify me</button>
                        </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ex necessitatibus adipisci assumenda sapiente tenetur.
                </p>
            </div>
        </div>
        )
}

export default NewsLetter