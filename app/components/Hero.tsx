import React from 'react';
import car from '../assets/CarHero.png';
import Image from 'next/image';

function Hero() {
  return (
    <div className="pt-[82px] bg-[#F1F3FF] w-full lg:pt-[144px]">
      <div className="flex flex-col max-w-[328px] mx-auto lg:flex-row lg:max-w-[1168px]">
        <div className='lg:w-[600px]'>
          <h1 className="text-4xl leading-[150%] font-bold pt-2 my-4 lg:w-[568px]">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p className="text-sm mb-9 lg:w-[550px]">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <button className="w-[140px] h-9 bg-[#5CB85F] text-sm font-bold text-[#FFF] rounded-sm mb-6 lg:mb-[87px]">Mulai Sewa Mobil</button>
        </div>
        <div className="h-[199px] relative lg:h-auto">
          <Image src={car} alt="car" className="min-w-[344px] z-40 absolute top-0 right-[-16px] lg:right-[-704px] lg:min-w-[704px] lg:top-[-52px]" />
          <div className="w-[344px] h-[119px] bg-[#0D28A6] absolute bottom-0 z-0 rounded-tl-[60px] lg:left-0 lg:w-[704px] lg:h-[243px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
