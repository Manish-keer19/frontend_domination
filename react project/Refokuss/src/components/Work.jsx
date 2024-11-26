import React from 'react'

function Work() {

    let  images = [
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
            top: "50%",
            left: "50%",
            isActive: true,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
            top: "56%",
            left: "44%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
            top: "45%",
            left: "56%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
            top: "60%",
            left: "53%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
            top: "43%",
            left: "40%",
            isActive: false,
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
            top: "65%",
            left: "55%",
            isActive: false,
        },
    ];
    return (
        <>
            <div className='w-full '>
                <div className='max-w-screen-xl w-full mx-auto relative text-center'>
                    <h1 className='text-[30vw]  text-white leading-none tracking-tight select-none'>Work</h1>
                    <div className=" images w-full h-full absolute top-0">
                      {images.map((item,index)=>{
                        return(
                            item.isActive&&  <img key={index} className= 'w-48 absolute rounded-lg ' style={{top:item.top , left:item.left}}  src={item.url} alt="img" />
                        )
                      })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work