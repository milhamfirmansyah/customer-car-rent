'use client';
import axios from 'axios';
import React, { useState } from 'react';
import useSWR from 'swr';
import FilterCar from './FilterCar';

function CarList() {
  const [name, setName] = useState('');

  const fetcher = async () => {
    const res = await axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}`);
    return res.data.cars;
  };

  const { data, error, isLoading, mutate } = useSWR('product', fetcher);
  if (error) return 'error';
  if (isLoading) return 'loading';

  console.log(data);

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = ()=>{
    mutate()
  }

  return (
    <>
      <FilterCar name={handleChangeName} click={()=>handleClick()} />
      <div className="max-w-[1047px] mx-auto flex flex-wrap justify-between gap-6">
        {data.map((item: any) => (
          <div className="w-[333px] p-6 shadow-list-car rounded-lg">
            <img src={item.image} alt="" className="w-[270px] h-[160px] mb-[47px]" />
            <p className="text-sm mb-2">{item.name}</p>
            <p className="text-base font-bold mb-2">Rp. {item.price} / hari</p>
            <p className="text-base font-bold mb-6">{item.category}</p>
            <button className="w-[285px] h-[48px] bg-[#5CB85F] rounded-sm text-sm text-[#FFF] font-bold">Pilih Mobil</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CarList;
