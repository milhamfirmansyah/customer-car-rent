import React, { useState } from 'react';

function FilterCar({ name, category, price, click }: any) {

  return (
    <div className="w-[1047px] h-[106px] bg-[#FFF] shadow-md mx-auto rounded-lg translate-y-[-40px] pl-[28px] pr-[20px] pt-[17px] pb-[31px] flex justify-between items-end">
      {/* Nama Mobil */}
      <div>
        <label htmlFor="name" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
          Nama Mobil
        </label>
        <br />
        <input
          type="search"
          id="name"
          onChange={name}
          placeholder="ketik nama/tipe mobil"
          className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light placeholder:text-[#8A8A8A] text-xs"
        />
      </div>

      {/* Kategori */}
      <div>
        <label htmlFor="kategori" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
          Kategori
        </label>
        <br />
        <select name="" id="kategori" onChange={category} className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm text-xs text-[#8A8A8A]">
          <option value="">Masukan Kapasitas Mobil</option>
          <option value="small">2 - 4 orang</option>
          <option value="medium">4 - 6 orang</option>
          <option value="large">6 - 8 orang</option>
        </select>
      </div>

      {/* Harga */}
      <div>
        <label htmlFor="harga" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
          Harga
        </label>
        <br />
        <select name="" id="harga" onChange={price} className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm text-xs text-[#8A8A8A]">
          <option value="">Masukan Harga Sewa per Hari</option>
          <option value="">&lt; Rp. 400.000</option>
          <option value="">Rp. 400.000 - Rp. 600.000</option>
          <option value="">&gt; Rp. 600.000</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label htmlFor="status" className="text-xs leading-[18px] font-light text-[#3C3C3C] mb-1">
          Status
        </label>
        <br />
        <input
          type="search"
          id="status"
          placeholder="status"
          className="w-[208px] h-9 py-[9px] px-3 outline-none border border-[#CCC] rounded-sm placeholder:text-xs placeholder:leading-[18px] placeholder:font-light placeholder:text-[#8A8A8A] text-xs"
        />
      </div>
      <button onClick={click} className="w-[92px] h-9 bg-[#5CB85F] rounded-sm text-sm text-[#FFF] font-bold">
        Cari
      </button>
    </div>
  );
}

export default FilterCar;
