import React from 'react'
import { NavbarUser } from '../../Components'
import imgCarBg from '../../Assets/img/img_car.png'

const Home = () => {
  return (
    <div className='bg-cyan-100'>
      <NavbarUser />
      <div className='grid grid-cols-2'>
        <div className='container p-10'>
          <div className='flex flex-col justify-center h-full'>
            <div className='text-2xl font-bold'>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </div>
            <p className='py-5'>
                Selamat datang di Binar Car Rental. 
                Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div>
              <button className='group bg-emerald-500 rounded-md p-2 text-white hover:bg-emerald-800'>
                <span className='text-sm group-hover:text-gray-300'>Mulai Sewa Mobil</span>
              </button>
            </div>
          </div>
        </div>
        <div className='container'>
          <img className='w-full h-full' src={imgCarBg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home