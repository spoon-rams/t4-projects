document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".count");
  const letters = document.querySelectorAll(".letter-reveal span");
  const duration = 1000; // 1 second
  const steps = 30;

  // Animate numbers
  numbers.forEach((number) => {
    const isCurrency = number.textContent.trim().startsWith("$");
    const targetValue = parseInt(number.dataset.value, 10);
    const increment = Math.ceil(targetValue / steps);
    const interval = Math.floor(duration / steps);
    let current = 0;

    const counter = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(counter);
      }
      number.textContent = isCurrency ? `$${current.toLocaleString()}` : current;
    }, interval);
  });

  // Animate text (letter-by-letter)
  letters.forEach((span) => {
    const text = span.textContent;
    span.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
  });
});
