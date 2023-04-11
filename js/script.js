console.log(gsap.version);

// document.getElementById("ss1").addEventListener("mouseover", function () {
//   gsap.to("#ss1", { delay: 0, x: 350, y: 250, scaleX: 2, scaleY: 2 });
// });
// document.getElementById("ss1").addEventListener("mouseout", function () {
//   gsap.to("#ss1", { delay: 0, x: 0, y: 0, scaleX: 1, scaleY: 1 });
// });

// console.log(document.getElementsByClassName("img_hover"));
// for (let i = 0; i < document.getElementsByClassName("img_hover").length; i++) {
//   document
//     .getElementsByClassName("img_hover")
//     [i].addEventListener("mouseenter", function () {
//       gsap.to(".img_hover", { delay: 0, x: 350, y: 250, scaleX: 2, scaleY: 2 });
//     });
//   document
//     .getElementsByClassName("img_hover")
//     [i].addEventListener("mouseleave", function () {
//       gsap.to(".img_hover", { delay: 0, x: 0, y: 0, scaleX: 1, scaleY: 1 });
//     });
// }

function imageEnlarge(e, ...args) {
  //   event.preventDefault();
  console.log(e);
  console.log(`#${e.target.id}`);
  console.log(args);
  document
    .querySelector(`#${e.target.id}`)
    .addEventListener("mouseenter", function () {
      gsap.to(`#${e.target.id}`, {
        delay: 0,
        x: 350,
        y: 250,
        z: 99999,
        scaleX: 2,
        scaleY: 2,
      });
    });
  document
    .querySelector(`#${e.target.id}`)
    .addEventListener("mouseleave", function () {
      gsap.to(`#${e.target.id}`, {
        delay: 0,
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        z: 1,
      });
    });
}

//-------------------------------------------------
// tween
gsap.to(`.box`, 5, {
  delay: 1,
  rotate: 2880,
  skewX: 10,
  backgroundColor: "green",
  color: "white",
  ease: "power1.in",
});

gsap.to(`#c1`, 5, {
  delay: 1,
  x: 200,
  repeat: -1,
});

gsap.from(`#c2`, 5, {
  delay: 1,
  x: 500,
  repeat: -1,
});

gsap.fromTo(
  `#c3`,
  5,
  {
    x: 10,
  },
  {
    delay: 1,
    x: 200,
    repeat: -1,
  }
);

//-------------------------------------------------
// timeline
let t1 = gsap.timeline({
  defaults: { duration: 1, ease: "power1.in", yoyo: true, repeat: 1 },
});

t1.to(
  `.box_1`,
  5,
  {
    rotate: 300,
    backgroundColor: "red",
  },
  "<0.25"
);

//-------------------------------------------------
// animation control methods
