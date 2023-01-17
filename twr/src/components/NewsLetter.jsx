import React from 'react'
import Typed from 'react-typed'
function NewsLetter(){
    return(
        <div className='bg-black w-full grid py-20 h-auto text-white px-[60px] justify-center text-center ' >
            <h1 className='font-bold text-2xl' >Want tips and tricks to optimize your flow?</h1>
            <Typed className='text-gray-500' strings={['Sign up to our newsletter and stay up o date','if yes']} typeSpeed={120} backSpeed={50} loop/>
            <form className='' >
                <input type="email" placeholder='your email here' className='p-2 my-2 rounded-md md:w-[75%] w-full' />
                <button className='bg-[#00df9a] text-white py-2 rounded-md shadow-md px-3 mx-2' >Notify Me</button>
            </form>
            <p className='text-gray-500' >We care about the protection of your data. Read our <p className='px-3 text-[#00df9a]' >Privacy policy</p></p>
        </div>
    )
}
export default NewsLetter