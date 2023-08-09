// rotating circle
// const text = document.querySelector(".text p");
// text.innerHTML = text.innerText
//   .split("")
//   .map(
//     (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
//   )
//   .join("");

// const text = document.querySelector(".text p");
// text.innerHTML = [...text.innerText]
//   .map(
//     (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
//   )
//   .join("");

// const text = document.getElementById("text");
// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
// const ele = document.querySelectorAll("span");
// for (var i = 1; i < ele.length; i++) {
//   ele[i].style.transform = "rotate(" + i * 16.5 + "deg)";
// }

const text = document.getElementById("text");
const chars = text.textContent.split("");

text.innerHTML = chars.map((char) => `<span>${char}</span>`).join("");

const spans = document.querySelectorAll("#text span");
spans.forEach((span, i) => {
  span.style.transform = `rotate(${(i + 1) * 16.5}deg)`;
});
