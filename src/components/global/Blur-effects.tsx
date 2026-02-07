import React from 'react'

function BlurEffects() {
    return (
        <>
            {/* Background with blur effects */}
            <div className='w-screen h-screen overflow-hidden absolute top-0 left-0 z-0 pointer-events-none '>
                <div className="absolute inset-0 overflow-hidden z-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/3 right-1/4 w-lg h-lg bg-emerald-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/2 w-md h-md bg-teal-600/20 rounded-full blur-3xl"></div>
                </div>
                <div className="absolute top-1/2 left-150 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl"></div>
            </div>
        </>
    )
}

export default BlurEffects