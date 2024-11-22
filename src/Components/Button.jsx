import React from 'react'

function Button(Props) {
  return (
    <div className='flex gap-5 bg-black w-[85%] mx-auto max-w-[900]'>
      <div className='bg-[#DB4444] h-10 w-4'></div>
      <h3 className='text-center pt-1 font-semibold text-lg text-[#DB4444]
'>{Props.text}</h3>
    </div>
  )
}

export default Button
