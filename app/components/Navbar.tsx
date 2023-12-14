'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full bg-[#F1F3FF] py-6 fixed z-50">
      <div className="flex items-center justify-between max-w-[328px] mx-auto lg:max-w-[1168px]">
        <div className="w-[100px] h-[34px] bg-[#0D28A6]"></div>
        <div>
          <Bars3Icon className="w-6 h-6 lg:hidden" onClick={() => setMenu(true)} />
        </div>
        <div
          className={
            menu
              ? 'w-[50%] bg-[#FFF] fixed top-0 right-0 bottom-0 z-20 pt-[34px] pl-4 pr-6 duration-300'
              : 'w-[50%] bg-[#FFF] fixed top-0 right-0 bottom-0 z-20 pt-[34px] pl-4 pr-6 translate-x-[100%] duration-300 lg:translate-x-0 lg:w-[440px] lg:bg-[#F1F3FF] lg:static lg:p-0'
          }
        >
          <div className="flex items-center justify-between mb-[18px] lg:hidden">
            <h1 className="text-sm font-bold">BCR</h1>
            <div>
              <XMarkIcon className="w-6 h-6" onClick={() => setMenu(false)} />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-between">
            <Link href={'#'} className="text-sm">
              Our Services
            </Link>
            <Link href={'#'} className="text-sm">
              Why Us
            </Link>
            <Link href={'#'} className="text-sm">
              Testimony
            </Link>
            <Link href={'#'} className="text-sm">
              FAQ
            </Link>
            <button className="w-[81px] h-9 bg-[#5CB85F] rounded-sm text-sm font-bold text-[#FFF]">Register</button>
          </div>
        </div>
      </div>
      <div className={menu ? 'bg-[#000] opacity-60 fixed top-0 left-0 right-0 bottom-0 z-10' : 'hidden'}></div>
    </div>
  );
}

export default Navbar;
