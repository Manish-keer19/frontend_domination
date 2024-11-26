gsap.from(" #page1 #circle", {
  rotate: 720,
  scale: 1,
  duration: 1.6,
});
gsap.from(" #page2 #circle", {
  rotate: 720,
  duration: 1.6,
  scale: 1,

  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body",
    markers: true,
    start: "10%",
    end: "40%",
    // scrub: true,
  },
});
gsap.from(" #page3 #circle", {
  rotate: 720,
  scale: 1,
  duration: 1.6,
});
