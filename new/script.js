// rotating circle
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
  )
  .join("");

// const text = document.querySelector(".text p");
// text.innerHTML = [...text.innerText]
//   .map(
//     (char, i) => `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
//   )
//   .join("");
