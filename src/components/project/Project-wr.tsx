import { MessageSquare } from 'lucide-react'
import React from 'react'

function ProjectWr() {
    return (
        <div className='w-full h-full flex justify-center items-center p-3'>
            <div className='flex flex-col justify-center items-center w-full h-fit space-y-6  text-center'>
                <h1 className='text-5xl md:text-6xl lg:text-8xl capitalize text-white flex flex-col sm:flex-row space-y-5 gap-3 font-bold leading-tight'>
                    Markiting
                    <span className='block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'> Website</span>
                </h1>
                <p className='text-gray-400 text-2xl text-center '>
                    this Website is only for ads and its not a true SAAS
                </p>
            </div>
        </div>
    )
}

export default ProjectWr