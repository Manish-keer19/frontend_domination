let tl = gsap.timeline()

tl.from("#nav h2",{
    y:-100,
    opacity:0,
    duration:0.6,
})

tl.from("#nav-part2 h3",{
    y:-100,
    opacity:0,
    duration:0.4,
    stagger:0.2,
})

tl.from("h1",{
    x:-1000,
    duration:.9,
    stagger:0.3,
    opacity:0,
})

tl.from("img",{
    x:1000,
    duration:1,
    stagger:0.3,
     rotate:40,

})