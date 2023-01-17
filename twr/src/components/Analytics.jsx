import React from 'react'
import Laptop from '../assets/a.jpg'

function Analytics(){
    return(
        <div className='w-full bg-white py-16 px-4 h-100 text-black' >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
                <img src={Laptop} alt='/' className='mx-auto w-full h-[350px] object-cover md:w-[500px] md:h-[350px]' />
                <div className='py-5 px-3 justify-center w-full h-full flex flex-col ' >
                    <p className='text-[#00d9fa]' >DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold text-2xl py-2 ' >Manage Data analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea facilis modi commodi. Hic explicabo blanditiis impedit facilis itaque ad nobis vero, optio soluta officiis, distinctio id repudiandae aut doloremque exercitationem.</p>
                    <button className='py-3 bg-black w-full md:w-[200px] text-white rounded-md mt-3 mx-auto md:mx-0' >Get started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics