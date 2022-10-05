import React from 'react'

function Button({text}) {
  return <button className='text-white bg-mainBlue md:px-8 md:py-4 md:text-[16px] text-[15px] py-2 px-3 button rounded-md'>
    {text}
  </button>
}

export default Button