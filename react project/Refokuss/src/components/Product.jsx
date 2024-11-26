import React from 'react'
import Butoon from './Butoon'

function Product({val}) {
  return (
    <>
    <div className='w-full m-0 hover:bg-blue-900'>
    <div className='text-white w-[80vw]  m-auto p-5 flex items-center justify-between gap-10 '>
      <h1 className='text-6xl'>{val.title}</h1>
      <div className="part-2 flex flex-col gap-5">
        <p className='w-[250px]'>{val.description} </p>
        <div className='flex gap-3'>

        {val.live &&  <Butoon elem= {"Live Website"}/>}
        {val.case &&  <Butoon elem= {"Case Study"}/>}
    
        </div>
      </div>
      
     </div>
    </div>
    </>
  )
}

export default Product