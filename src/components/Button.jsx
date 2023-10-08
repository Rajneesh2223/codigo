import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-600 text-white font-[Poppins] py-2 px-6  md:ml-8 hover:bg-red-400  rounded-full
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button