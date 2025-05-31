//script for animation words
 const words = ["Products", "Teams", "Skills"];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1500;

  let wordIndex = 0;
  let charIndex = 0;
  const typedSpan = document.querySelector(".headingTyped");
  const cursor = document.querySelector(".typed-cursor");

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed + 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if(words.length) setTimeout(type, delayBetweenWords);
  });