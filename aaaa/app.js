const maskedText = document.getElementById("maskedText");
const mask = document.getElementById("mask");

let isHovered = false;
let mouseX = 0;
let mouseY = 0;

maskedText.addEventListener("mouseenter", () => {
  isHovered = true;
});

maskedText.addEventListener("mouseleave", () => {
  isHovered = false;
});

function useMousePosition() {
  return { x: mouseX, y: mouseY };
}

mask.addEventListener("mousemove", (e) => {
  const rect = mask.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

function animateMask() {
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  gsap.timeline().to(mask, {
    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    WebkitMaskSize: `${size}px`,
    duration: 0.5,
    ease: "back.out(4)",
  });
}

gsap.ticker.add(animateMask);
