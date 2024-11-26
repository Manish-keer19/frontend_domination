function locomotivejs() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}


function singleh1animation(){
    
// for first elem animation for first h1

let h1text = document.querySelector("#firsth1").textContent
// console.log(h1text);

let h1elem =  h1text.split("");
// console.log(h1elem);

let clutter = "";

h1elem.forEach((elem)=>{
    // console.log(elem)
    clutter+= `<span>${elem}</span>` 
})
console.log(clutter);

document.querySelector("#firsth1").innerHTML = clutter;


gsap.to("#page2  h1 span ",{
    color:"#e3e3c4",
    stagger:.6,
    scrollTrigger:{
        trigger:"#page2 h1 span",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 80%",
        scrub:1,
    }
})

}

function multipleh1animation(){
    
// for multiple elem:

let allh1 = document.querySelectorAll("h1");

allh1.forEach((elem) => {
  let clutter = "";
  let h1text = elem.textContent;
  // console.log(h1text)
  let spltext = h1text.split("");
  // console.log(spltext);
  spltext.forEach((e) => {
    clutter += `<span>${e}</span>`;
  });
  // console.log(clutter);

  elem.innerHTML = clutter;
});



}

function gsapanimation(){
    gsap.to("#page2  h1 span ", {
        color: "#e3e3c4",
        stagger: 0.4,
      
        scrollTrigger: {
          trigger: "#page2 h1 span",
          scroller: "#main",
          markers: true,
          start: "top 20%",
          end: "top 80%",
          scrub: 4,
          // pin:true,
        },
      });
}

locomotivejs();
multipleh1animation();
gsapanimation();