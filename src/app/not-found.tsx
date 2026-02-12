import Link from 'next/link'
import React from 'react'

function globalNotFound() {
    return (
        <main className=" w-screen h-screen bg-gray-950 flex justify-center items-center m-0 p-0 overflow-hidden">
            <div className=' text-white flex flex-col justify-center items-center relative'>
                <div className='text-[21rem] font-bold '>
                    <span className='text-blue-400 relative left-11 italic'>4</span>
                    <span className='text-destructive '>0</span>
                    <span className='text-green-400 relative -left-20 italic'>4</span>
                </div>
                <div className=' z-10 flex flex-col justify-center items-center  relative -top-32'>
                    <h1 className='italic text-2xl font-semibold'>
                        Sorry, This page does not found
                    </h1>
                    <Link
                        href={"/"}
                        className='mt-20 text-2xl capitalize font-bold hover:text-gray-400'
                    >return to home</Link>
                </div>
            </div>
        </main>
    )
}

export default globalNotFound