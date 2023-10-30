import React from 'react';
import Image from 'next/image';
import HeroCar from '../assets/HeroCar.png';
import CarHero from '../assets/CarHero.png'

function Hero() {
  return (
    <div className="pt-[177px] w-full bg-[#F1F3FF] h-[500px]">
      <div className="max-w-[1168px] my-0 mx-auto flex gap-8">
        <div className="w-[568px]">
          <h1 className="text-4xl font-bold leading-[54px] mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p className="text-sm w-[545px] mb-9">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <button className="w-[140px] h-9 bg-[#5CB85F] rounded-sm text-sm font-bold text-[#FFF]">Mulai Sewa Mobil</button>
        </div>
        <div className="relative">
          <Image src={CarHero} alt='hero-car' width={704} height={407} className='relative z-20 bottom-[76px]'/>
          <div className="bg-[#0D28A6] w-[704px] h-[243px] rounded-tl-[60px] relative bottom-[327px] left-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
