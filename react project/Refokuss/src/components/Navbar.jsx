import React from 'react'
import Butoon from './Butoon'

function Navbar() {
    return (
        <>
        
        <div className='max-w-screen-xl  p-5 m-auto text-white flex items-center gap-10 justify-between font-["Satoshi"]  border-b-2 border-zinc-600 '>

            <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="img" />
            <div className="nav-part-2 flex  items-center justify-between gap-10 ">
                {["Home", "Work", "Culture", "", "News"].map((item, index) => (
                    item.length==0? (<span key={index}
                     className='w-0.5 h-7  bg-zinc-400'></span>):(
                        <a key={index} className=' flex items-center gap-0.5 justify-center'>
    
                            {index===1 && (<span  style={{boxShadow:'0 0 0.25em #00FF19' }}  className='inline-block w-2 h-2  bg-red-400 rounded-full'> </span>)}
                        {item}
                        
                        </a>)
                   
                ))}
        </div>
           <div className="nav-part-3">
          <Butoon/>
           </div>


        </div >
       
        </>

    )
}

export default Navbar