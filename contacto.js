const form = document.getElementById("contactoForm");
const msg = document.getElementById("contactMsg");

function i18nText(key, fallback) {
  return window.__i18n?.t?.(key, fallback) ?? fallback;
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const subject = document.getElementById("subject")?.value.trim();
  const message = document.getElementById("message")?.value.trim();

  if (!name || !email || !subject || !message) {
    msg.textContent = i18nText("contacto.form.error", "Merci de remplir tous les champs.");
    return;
  }

  msg.textContent = i18nText("contacto.form.success", "Message envoyé. Nous te répondrons rapidement.");
  form.reset();
});
