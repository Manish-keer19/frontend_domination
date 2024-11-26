let path = ` M 20 200 Q 750 0 1490 200`;

let finalpath = ` M 20 200 Q 750 0 1490 200`;

let string  = document.querySelector("#string");


string.addEventListener("mousemove",(dets)=>{

     console.log(dets.y)
    gsap.to("svg path",{
        attr:{d: `M 20 200 Q 750 ${dets.y} 1490 200`},
         duration : 1.7,
         ease: "elastic.out(1,0.3)",
    })
})

string.addEventListener("mousemove",(dets)=>{

     console.log(dets.y)
    gsap.to("svg path",{
        attr:{d:finalpath },
         duration : 0.3,
         ease: "elastic.out(1,0.3)",
    })
})

