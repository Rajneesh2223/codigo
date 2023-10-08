import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'



function footer() {
  return (
    <section >
        <div className='bg-white-300 h-[300px]'>
        <h1 className='text-center text-[25px] font-bold text-red-700 py-4 pb-4'>Lets have A Chat </h1>
        <ul className='flex  gap-10 justify-center'>
            <li className='border-r-2 pr-4' >
               
                <h1 className='font-bold text-[25px]'>Build</h1>
                <h3 className=''>Help You Build Something</h3>
            </li>
            <li  className='border-r-2 pr-4'>
            <h1 className='font-bold text-[25px] '>Co-Incubate</h1>
                <h3 className=''>Customise A solution For Your Business</h3>
            </li>
            <li  className='border-r-2 pr-4'>
            <h1 className='font-bold text-[25px] '>Customise</h1>
                <h3 className=''>Help You Build Something</h3>
            </li>
            <li  className='border-r-2 pr-4'>
            <h1 className='font-bold text-[25px] '>Organise</h1>
                <h3 className=''>Organise A Learning Session With Us</h3>
            </li>
             <li className='border-r-2 pr-4'>
            <h1 className='font-bold text-[25px] '>Tech For Hire</h1>
                <h3 className=''>Hire Experienced teach  talents</h3>
            </li>
        </ul>
        <ul className='flex justify-center gap-20 py-8'>
            <li className="text-black-500 text-4xl"><FaFacebookF/></li>
            <li className="text-black-500 text-4xl"><BsTwitter/></li>
            <li className="text-black-500 text-4xl"><FiInstagram/></li>

        </ul>
        <h1 className='text-center'> Copyright © Codigo - Mobile App Developer Singapore </h1>
        <h1 className='text-center'>+65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970</h1>
        </div>
    </section>
  )
}

export default footer