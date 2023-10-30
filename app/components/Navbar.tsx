import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='w-full py-[25px] bg-[#F1F3FF] fixed'>
        <div className='max-w-[1168px] my-0 mx-auto flex items-center justify-between'>
            <div className='bg-[#0D28A6] w-[100px] h-[34px]'></div>
            <div className='flex items-center gap-8'>
                <Link href={''} className='text-sm'>Our Service</Link>
                <Link href={''} className='text-sm'>Why Us</Link>
                <Link href={''} className='text-sm'>Testimonial</Link>
                <Link href={''} className='text-sm'>FAQ</Link>
                <button className='w-[81px] h-9 bg-[#5CB85F] rounded-sm text-sm font-bold text-[#FFF]'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar