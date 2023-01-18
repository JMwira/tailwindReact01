import React from 'react'
import{
    BsFillPersonCheckFill,
    BsFillPersonDashFill,
    BsFillPersonFill} 
    from 'react-icons/bs'

function Cards(){
    return(
        <div className='w-full py-[7rem] px-10 bg-white' >
            <div className='max-w-[1100px] mx-auto grid md:grid-cols-3 gap-8' >
                <div className='w-full p-5 shadow-xl rounded-md flex flex-col hover:scale-105 duration-300 ' >
                    <BsFillPersonCheckFill className='text-lg mx-auto ' />
                    <h2 className='text-2xl font-bold text-center py-3' >Single User</h2>
                    <p className='text-center text-4xl font-bold' >$149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted user</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md text-black font-medium my-6 mx-auto px-6 py-3' >Start trial</button>
                </div>

                
                <div className='w-full p-5 shadow-xl bg-gray-100 rounded-md flex flex-col hover:scale-105 duration-300 ' >
                    <BsFillPersonCheckFill className='text-lg mx-auto ' />
                    <h2 className='text-2xl font-bold text-center py-3' >Single User</h2>
                    <p className='text-center text-4xl font-bold' >$149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted user</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='text-[#00df9a] rounded-md bg-black font-medium my-6 mx-auto px-6 py-3' >Start trial</button>
                </div>

                
                <div className='w-full p-5 shadow-xl rounded-md flex flex-col hover:scale-105 duration-300 ' >
                    <BsFillPersonCheckFill className='text-lg mx-auto ' />
                    <h2 className='text-2xl font-bold text-center py-3' >Single User</h2>
                    <p className='text-center text-4xl font-bold' >$149</p>
                    <div className='text-center font-medium' >
                        <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted user</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md text-black font-medium my-6 mx-auto px-6 py-3' >Start trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards