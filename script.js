//custom cursor
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    left: e.clientX - 10 + "px",
    top: e.clientY - 10 + "px",
  });
});

const h4s = document.querySelectorAll("#nav h4");
h4s.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 3,
      border: "1px solid #fff",
      backgroundColor: "transparent",
    });

    // crsr.style.scale = 3;
    // crsr.style.border = "1px solid #fff";
    // crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 1,
      border: "1px solid #95c11e",
      backgroundColor: "#95c11e",
    });
    // crsr.style.scale = 1;
    // crsr.style.border = "1px solid #95c11e";
    // crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "#main",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "#main",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,

  scrollTrigger: {
    trigger: "#about-us",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

// gsap.from(".card", {
//   scale: 0.8,
//   opacity: 0,
//   duration: 0.5,
//   // by using this each element will come after another
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "#main",
//     // markers: true,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 2,
//   },
// });

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "#main",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page-4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page-4 h1",
    scroller: "#main",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
