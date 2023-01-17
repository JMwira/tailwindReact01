import React from 'react'
import Typed from 'react-typed'
function Hero(){
    return(
        <div className='text-white max-w-[800px] mt-[-96px] p-5 h-screen w-full mx-auto text-center flex flex-col justify-center ' >
            <h2 className='text-l font-bold uppercase text-[#00df9a] ' >Growing with data analytics</h2>
            <h1 className='md:text-7xl sm:text-6xl text-5xl font-bold py-2 ' >Grow with data</h1>
            <div className='flex justify-center items-center' >
            <h2 className='font-bold md:text-5xl sm:4xl text-xl pr-5 ' >Fast, Flexible financing for </h2>
            <Typed className='text-gray-400 font-bold md:text-5xl sm:4xl text-xl '  strings={['BTB', 'BTC', 'SAAS']} typeSpeed={120} backSpeed={130} loop />
            </div>
            <h2 className='text-gray-500 text-xl m-5 font-bold ' >monitor your data analytics to increase for BTB, BTC, & SAAS platforms</h2>
            <button className='bg-[#00df9a] w-[200px] justify-center items-center mx-auto py-2 rounded-md' >Get started</button>
        </div>
    )
}

export default Hero