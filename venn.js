gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  markers: true,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-animate",
    pin: true, // pin the trigger element while active
    start: "20px top", // when the top of the trigger hits the top of the viewport
    end: "+=600%", // end after scrolling 500px beyond the start
    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.1, max: 0.4 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0, // wait 0.2 seconds from the last scroll event before doing the snapping
      //ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});

// add animations and labels to the timeline
tl.to("#c-2", { alpha: 0.2 }, "1")
  .to("#c-3", { alpha: 0.2 }, "1")
  .addLabel("stop1")
  .to("#c-1", { alpha: 0.2 }, "2")
  .to("#c-2", { alpha: 1 }, "2")
  .addLabel("stop2")
  .to("#c-3", { alpha: 1 }, "3")
  .to("#c-2", { alpha: 0.2 }, "3")
  .addLabel("stop3")
  .to("#c-1", { alpha: 1 }, "4")
  .to("#c-2", { alpha: 1 }, "4")
  .addLabel("stop4")
  .to("#c-1", { alpha: 1 }, "5")
  .to("#c-2", { alpha: 1 }, "5");
