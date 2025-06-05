("use strict")

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll('.fill');

  bars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 300); // delay to let the DOM settle
  });
});

