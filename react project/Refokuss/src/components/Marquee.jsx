import React from 'react'

function Marquee({images}) {
  return (
    <>
      <div  className='w-full flex gap-14 whitespace-nowrap overflow-hidden'>
        {images.map((item,i)=><img className='flex-shrink-0 w-[10vw]' key={i} src={item}></img>)}
        {images.map((item,i)=><img className='flex-shrink-0 w-[10vw]' key={i} src={item}></img>)}
    </div>
    </>
  )
}

export default Marquee
