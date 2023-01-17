import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar(){
    const [Clicked, setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked(!Clicked);
    }
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white' >
            <h1 className='w-full text-3xl font-bold text-[#00df9a] uppercase' >React.</h1>
            <ul className='flex hidden md:flex' >
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div className='px-4 md:hidden '>
                {
                    !Clicked?<AiOutlineMenu size={20} onClick={handleClick} />:<AiOutlineClose size={20} onClick={handleClick} />
                }
            </div>
            <ul className={Clicked?'fixed left-0 top-[80px] w-full text-center h-auto p-5 uppercase bg-[#000300] md:hidden':'fixed left-[-100%] md:hidden'} >
                <li className='p-4 border-b border-b-gray-900'>Home</li>
                <li className='p-4 border-b border-b-gray-900'>Company</li>
                <li className='p-4 border-b border-b-gray-900'>Resources</li>
                <li className='p-4 border-b border-b-gray-900'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar