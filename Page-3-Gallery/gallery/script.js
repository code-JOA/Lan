var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

// top
tl.to(
  "#top",
  {
    top: "-50%",
  },
  "a"
);
// bottom
tl.to(
  "#bottom",
  {
    bottom: "-50%",
  },
  "a"
);

// top-h
tl.to(
  "#top-h",
  {
    top: "80%",
  },
  "a"
);
// bottom
tl.to(
  "#bottom-h",
  {
    bottom: "-80%",
  },
  "a"
);

// content
tl.to(
  "#content",
  {
    marginTop: "0%",
  },
  "a"
);

// black circle
document
  .querySelector("#aboutme")
  .addEventListener("mousemove", function (dets) {
    document.querySelector("#aboutme").style.transform = `translate(${
      dets.clientX * 0.02
    }px, ${dets.clientY * 0.02}px)`;
    document.querySelector("#aboutme").style.backgroundColor = "blue";
    document.querySelector("#aboutme").style.cursor = "pointer";
  });

document.querySelector("#aboutme").addEventListener("mouseleave", function () {
  document.querySelector("#aboutme").style.transform = `translate(0px, 0px)`;
  document.querySelector("#aboutme").style.cursor = "pointer";
  document.querySelector("#aboutme").style.backgroundColor = "#000";
});

// original circle
const text = document.getElementById("text3");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = document.querySelectorAll("span");
for (var i = 1; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 16.5 + "deg)";
}

// 2nd working rotating circle
// const text = document.getElementById("text3");
// const chars = text.textContent.split("");

// text.innerHTML = chars.map((char) => `<span>${char}</span>`).join("");

// const spans = document.querySelectorAll("#text3 span");
// spans.forEach((span, i) => {
//   span.style.transform = `rotate(${(i + 1) * 16.5}deg)`;
// });

// rotating circle 2nd code

// const textElements = document.querySelectorAll("#text3");

// textElements.forEach((text) => {
//   const chars = text.innerText.trim().split("");
//   const totalChars = chars.length;

//   text.innerHTML = chars
//     .map(
//       (char, i) =>
//         `<span style="transform:rotate(${
//           (360 / totalChars) * i
//         }deg) translateX(100px)">${char}</span>`
//     )
//     .join("");
// });
