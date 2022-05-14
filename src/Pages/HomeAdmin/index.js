import React from 'react';
const leng = [1,2,3,4,5,6,7,8,9,10]

const HomeAdmin = () => {
  const listCars = leng.map((item) => {
    return(
      <tr key={item}>
        <td className='text-center'>{item}</td>
        <td>User Email</td>
        <td>Car</td>
        <td>Start Rent</td>
        <td>Finish Rent</td>
        <td>Price</td>
        <td>Status</td>
      </tr>
    )
  })        

  return (
    <>
        <div className='bg-gray-100 full-body-height flex flex-col'>
          <div className='text-sm py-3 px-5'>
            <span className='font-bold'>Dashboard > </span>
            <span className='font-bold text-gray-500'>Dashboard</span>
          </div>
          <div className='text-lg font-bold py-3 px-5'>
            Dashboard
          </div>
          <div className='flex flex-row'>
            <div className='bg-blue-500 my-3 ml-5 mr-3 w-fit'>&nbsp;</div>
            <p className='my-3 font-bold text-sm'>List Order</p>
          </div>
          <div className='py-3 px-5 w-full'>
            <table className="table-auto w-full bg-white">
              <thead>
                <tr className='bg-cyan-400'>
                  <td className='font-bold text-center'>No</td>
                  <td className='font-bold'>User Email</td>
                  <td className='font-bold'>Car</td>
                  <td className='font-bold'>Start Rent</td>
                  <td className='font-bold'>Finish Rent</td>
                  <td className='font-bold'>Price</td>
                  <td className='font-bold'>Status</td>
                </tr>
              </thead>
              <tbody>
              {listCars}                
              </tbody>
            </table>
          </div>
          <div className='flex flex-row px-6 gap-5'>
            <div className='flex flex-col'>
              <span>List</span>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <select className="form-select block w-fit py-1 text-base font-normal text-gray-300
                    bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                    transition ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option value=''>10</option>
                      <option value="10">One</option>
                      <option value="20">Two</option>
                      <option value="30">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-64'>
              <span>Jump to Pages</span>
              <div className="flex justify-start">
                <div className="mb-3 xl:w-96 flex flex-row">
                  <select className="form-select block w-fit py-1 text-base font-normal text-gray-300
                    bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300
                    transition ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option value=''>1</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                  </select>
                  <button className='bg-blue-700 px-2 text-white'>
                    Go
                  </button>
                </div>
              </div>
            </div>
            <div className=' flex flex-col w-full '>
              <span className=''>&nbsp;</span>
              <div className='flex flex-row justify-end'>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>{'<<'}</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>1</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>2</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>3</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>...</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>9</button>
                <button className='bg-white border-2 px-2 rounded hover:bg-slate-200'>{'>>'}</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HomeAdmin