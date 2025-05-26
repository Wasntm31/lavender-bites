<!-- script.js -->
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent! We'll be in touch soon.");
      form.reset();
    });
  }
});
