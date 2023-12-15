import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-[1047px] h-[106px] bg-[#FFF] shadow-md mx-auto rounded-lg translate-y-[-42px] pl-[28px] pr-[20px] pt-[17px] pb-[31px] flex justify-between items-end">

        {/* Nama Mobil */}
        <div>
          <label htmlFor="name" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
            Nama Mobil
          </label>
          <br />
          <input type="search" id="name" placeholder="ketik nama/tipe mobil" className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light text-xs" />
        </div>

        {/* Kategori */}
        <div>
          <label htmlFor="kategori" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
            Kategori
          </label>
          <br />
          <input type="search" id="kategori" placeholder="Masukkan Kapasitas Mobil" className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light text-xs" />
        </div>

        {/* Harga */}
        <div>
          <label htmlFor="harga" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
            Harga
          </label>
          <br />
          <input type="search" id="harga" placeholder="Masukkan Harga Sewa per Hari" className="w-[219px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light text-xs" />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
            Status
          </label>
          <br />
          <input type="search" id="status" placeholder="status" className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light text-xs" />
        </div>
        <button className="w-[92px] h-9 bg-[#5CB85F] rounded-sm text-sm text-[#FFF] font-bold">Cari</button>
      </div>
    </>
  );
}

export default page;
