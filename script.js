const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#request-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  const protocol = `PA-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
  message.textContent = `Solicitação enviada! Seu protocolo é ${protocol}.`;
  form.reset();
});

document.querySelector("#tracking-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = event.currentTarget.parentElement.querySelector(".tracking-message");
  message.textContent = "Protocolo localizado: sua solicitação está em análise.";
});
