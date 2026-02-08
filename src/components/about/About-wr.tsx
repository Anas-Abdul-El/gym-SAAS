import { Users } from 'lucide-react'
import React from 'react'

function AboutWr() {
    return (
        <div className='w-full h-130 flex flex-col justify-end'>
            <div className='w-full h-90 flex flex-col items-center space-y-6'>
                <div className="h-fit w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">Our Story</span>
                </div>
                <div className='text-center h-fit'>
                    <h1 className="text-5xl lg:text-7xl font-bold text-white">
                        Empowering Fitness
                        <span className="block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"> Around the World</span>
                    </h1>
                </div>
                <div className='w-9/10'>
                    <p className='text-gray-400 text-xl text-center mt-4'>We're on a mission to help gym owners focus on what matters most—helping people achieve their fitness goals. Founded by fitness enthusiasts and tech innovators.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutWr


