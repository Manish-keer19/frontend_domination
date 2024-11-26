import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Butoon({elem="Get Started"}) {
  return (
    <div>

        <div className="button bg-white text-black w-[9vw] text-center rounded-lg p-1 flex items-center justify-around  ">
              {elem} 
              <MdOutlineSubdirectoryArrowRight/>
        </div>
    </div>
  )
}

export default Butoon