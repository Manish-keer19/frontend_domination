gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        markers:true,
        scroller:"body",
        start:"top 2%",
        end:"top -100%",
        scrub:2,
        pin:true,

    }
})