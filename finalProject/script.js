let tl = gsap.timeline();
function loaderAnimation() {
  let cntelem = document.querySelector("#counter");
  // console.log(cntelem);

  tl.from("#loader .line h1", {
    y: 1000,
    duration: 0.9,
    stagger: 0.2,
  });

  let cnt = 0;
  tl.from("#loader .h5s", {
    opacity: 0,
    duration: 0.1,
    onestart: function () {
      let cnt = 0;
      let interval = setInterval(() => {
        if (cnt == 100) {
          clearInterval(interval);
        } else {
          cnt++;
          cntelem.textContent = cnt;
        }
      }, 30);
    },
  });
  tl.to("#loader", {
    duration: 0.3,
    delay: 2,
    opacity: 0,

    oncompleted: () => {
      document.querySelector("#loader").style.display = "none";
    },
  });
  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    duration: 0.7,
  });
}

function page1Animation() {
  tl.from(".hero h1", {
    opacity: 1,
    y: 200,
    duration: 0.6,
    stagger: 0.2,
  });
  Shery.makeMagnet("#nav-part3 h5", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

function cursonAnimation(){
    //   cursor movements logic
    // document.querySelector("#")
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#crsr", {
      top: dets.y,
      left: dets.x,
    });
  });

 
}

loaderAnimation();
page1Animation();
cursonAnimation();