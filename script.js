const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const langSelect = document.getElementById("langSelect");

menuBtn?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

const navDropdown = document.querySelector(".nav-dropdown");
const navDropdownToggle = document.querySelector(".nav-dropdown-toggle");

navDropdownToggle?.addEventListener("click", (e) => {
  e.preventDefault();
  const isOpen = navDropdown.classList.toggle("open");
  navDropdownToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
  if (!navDropdown || !navDropdownToggle) return;
  if (navDropdown.contains(e.target)) return;
  navDropdown.classList.remove("open");
  navDropdownToggle.setAttribute("aria-expanded", "false");
});

let heroIntervalId = null;

function initHeroCarousel() {
  const slides = Array.from(document.querySelectorAll("#heroCarousel .hero-slide"));
  if (slides.length < 2) return;

  // reset état
  slides.forEach((s, i) => s.classList.toggle("active", i === 0));

  let index = 0;

  if (heroIntervalId) clearInterval(heroIntervalId);
  heroIntervalId = setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

window.addEventListener("load", initHeroCarousel);

const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.program": "Festival",
    "nav.artists": "Artistes",
    "nav.culture": "Culture",
    "nav.food": "Gastronomie",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "nav.tickets": "Tickets",
    "nav.contactoPage": "Contacto",
    "nav.stand": "Réserve ton stand",
    "nav.kids": "Zone enfant",
    "nav.drinks": "Nourriture et boissons",

    "hero.eyebrow": "CULTURA · GASTRONOMÍA · ARTE · MÚSICA",
    "hero.titleHtml": "Festival <span>Tricolor</span>",
    "hero.subtitle": "Un événement vibrant pour célébrer la culture équatorienne.",
    "hero.cta": "Entrada",

    "aparte.date": "1 Août 2026",
    "aparte.venue": "Vila Olímpica, Barcelona",
    "aparte.card1": "Fiesta",
    "aparte.card2": "Artistes",
    "aparte.card3": "Entrées",
    "aparte.cta": "Rejoins la fête",

    "about.title": "À propos",
    "about.text": "Le Festival Tricolor rassemble traditions, danses, artisanat, musique live et saveurs typiques de l’Équateur. Cette version est conçue pour être facilement personnalisable.",

    "program.title": "Programme",
    "program.day1.title": "Jour 1",
    "program.day1.text": "Ouverture, concerts folkloriques, parade d’accueil.",
    "program.day2.title": "Jour 2",
    "program.day2.text": "Ateliers culturels, gastronomie, concours artistiques.",
    "program.day3.title": "Jour 3",
    "program.day3.text": "Danse traditionnelle, remise de prix, clôture festive.",

    "culture.title": "Culture",
    
    "food.title": "Gastronomie",
    "food.item1.title": "Empanadas",
    "food.item1.text": "Classiques salées et sucrées.",
    "food.item2.title": "Hornado",
    "food.item2.text": "Saveur traditionnelle des Andes.",
    "food.item3.title": "Encebollado",
    "food.item3.text": "Spécialité côtière incontournable.",

    "gallery.title": "Galerie",
    
    "contact.title": "Contact",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",

    "tickets.heroTitle": "Tickets",
    "tickets.heroSubtitle": "Réserve ta place en quelques clics.",
    "tickets.chooseTitle": "Choisis ton billet",
    "tickets.general.title": "General",
    "tickets.general.desc": "Accès journée",
    "tickets.vip.title": "VIP",
    "tickets.vip.desc": "Zone premium + boisson",
    "tickets.family.title": "Pack Famille",
    "tickets.family.desc": "2 adultes + 2 enfants",
    "tickets.form.title": "Réservation",
    "tickets.form.generalLabel": "Billets General (10 €)",
    "tickets.form.vipLabel": "Billets VIP (25 €)",
    "tickets.form.familyLabel": "Pack Famille (30 €)",
    "tickets.form.fullName": "Nom complet",
    "tickets.form.email": "Email",
    "tickets.form.total": "Total",
    "tickets.form.submit": "Confirmer la réservation",
    "tickets.form.success": "Réservation enregistrée. Tu recevras un email de confirmation.",
    "tickets.form.errorNoTickets": "Merci de sélectionner au moins 1 billet.",

    "contacto.heroTitle": "Contacto",
    "contacto.heroSubtitle": "Nous répondons à toutes tes questions.",
    "contacto.infoTitle": "Informations",
    "contacto.info.email": "Email: contacto@festivaltricolor.com",
    "contacto.info.phone": "Téléphone: +34 600 000 000",
    "contacto.info.address": "Adresse: Barcelona, España",
    "contacto.info.hours": "Horaires: Lun–Ven, 10:00–18:00",
    "contacto.formTitle": "Écris-nous",
    "contacto.form.name": "Nom complet",
    "contacto.form.email": "Email",
    "contacto.form.subject": "Sujet",
    "contacto.form.message": "Message",
    "contacto.form.submit": "Envoyer",
    "contacto.form.success": "Message envoyé. Nous te répondrons rapidement.",
    "contacto.form.error": "Merci de remplir tous les champs.",

    "cookies.bannerText": "Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.",
    "cookies.policyLink": "Voir la politique de cookies",
    "cookies.accept": "Accepter",
    "cookies.reject": "Refuser",
    "cookies.manage": "Gérer les cookies",
    "cookies.page.title": "Politique de cookies",
    "cookies.page.intro": "Cette page explique l'utilisation des cookies sur le site Festival Tricolor.",
    "cookies.page.section1Title": "1. Cookies essentiels",
    "cookies.page.section1Text": "Ces cookies sont nécessaires au bon fonctionnement du site et ne peuvent pas être désactivés.",
    "cookies.page.section2Title": "2. Cookies de préférences",
    "cookies.page.section2Text": "Ils permettent de mémoriser certains choix utilisateur, comme la langue ou les préférences de consentement.",
    "cookies.page.section3Title": "3. Gestion du consentement",
    "cookies.page.section3Text": "Vous pouvez accepter ou refuser les cookies non essentiels via la bannière, puis modifier votre choix avec le bouton Gérer les cookies.",
    "cookies.page.backHome": "Retour à l'accueil",

    "footer.copy": "© Festival Tricolor 2026 — Tous droits réservés."
  },
  es: {
    "nav.about": "Sobre nosotros",
    "nav.program": "Festival",
    "nav.artists": "Artistas",
    "nav.culture": "Cultura",
    "nav.food": "Gastronomía",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.tickets": "Entradas",
    "nav.contactoPage": "Contacto",
    "nav.stand": "Reserva tu stand",
    "nav.kids": "Zona infantil",
    "nav.drinks": "Comida y bebida",

    "hero.subtitle": "Un evento vibrante para celebrar la cultura ecuatoriana.",

    "aparte.date": "1 de agosto 2026",
    "aparte.venue": "Vila Olímpica, Barcelona",
    "aparte.card1": "Fiesta",
    "aparte.card2": "Artistas",
    "aparte.card3": "Entradas",
    "aparte.cta": "Únete a la fiesta",

    "about.title": "Sobre nosotros",
    "about.text": "El Festival Tricolor reúne tradiciones, danzas, artesanía, música en vivo y sabores típicos de Ecuador. Esta versión está diseñada para ser fácilmente personalizable.",

    "program.title": "Programa",
    "program.day1.title": "Día 1",
    "program.day1.text": "Apertura, conciertos folklóricos, desfile de bienvenida.",
    "program.day2.title": "Día 2",
    "program.day2.text": "Talleres culturales, gastronomía, concursos artísticos.",
    "program.day3.title": "Día 3",
    "program.day3.text": "Danza tradicional, entrega de premios, clausura festiva.",

    "culture.title": "Cultura",

    "food.title": "Gastronomía",
    "food.item1.title": "Empanadas",
    "food.item1.text": "Clásicas saladas y dulces.",
    "food.item2.title": "Hornado",
    "food.item2.text": "Sabor tradicional de los Andes.",
    "food.item3.title": "Encebollado",
    "food.item3.text": "Especialidad costera imprescindible.",

    "gallery.title": "Galería",

    "contact.title": "Contacto",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",

    "tickets.heroTitle": "Entradas",
    "tickets.heroSubtitle": "Reserva tu plaza en pocos clics.",

    "footer.copy": "© Festival Tricolor 2026 — Todos los derechos reservados.",
    "tickets.chooseTitle": "Elige tu entrada",
    "tickets.general.title": "General",
    "tickets.general.desc": "Acceso diario",
    "tickets.vip.title": "VIP",
    "tickets.vip.desc": "Zona premium + bebida",
    "tickets.family.title": "Pack Familiar",
    "tickets.family.desc": "2 adultos + 2 niños",
    "tickets.form.title": "Reserva",
    "tickets.form.generalLabel": "Entradas General (10 €)",
    "tickets.form.vipLabel": "Entradas VIP (25 €)",
    "tickets.form.familyLabel": "Pack Familiar (30 €)",
    "tickets.form.fullName": "Nombre completo",
    "tickets.form.email": "Correo electrónico",
    "tickets.form.total": "Total",
    "tickets.form.submit": "Confirmar reserva",
    "tickets.form.success": "Reserva registrada. Recibirás un correo de confirmación.",
    "tickets.form.errorNoTickets": "Selecciona al menos 1 entrada.",

    "contacto.heroTitle": "Contacto",
    "contacto.heroSubtitle": "Respondemos a todas tus preguntas.",
    "contacto.infoTitle": "Información",
    "contacto.info.email": "Email: contacto@festivaltricolor.com",
    "contacto.info.phone": "Teléfono: +34 600 000 000",
    "contacto.info.address": "Dirección: Barcelona, España",
    "contacto.info.hours": "Horario: Lun–Vie, 10:00–18:00",
    "contacto.formTitle": "Escríbenos",
    "contacto.form.name": "Nombre completo",
    "contacto.form.email": "Correo electrónico",
    "contacto.form.subject": "Asunto",
    "contacto.form.message": "Mensaje",
    "contacto.form.submit": "Enviar",
    "contacto.form.success": "Mensaje enviado. Te responderemos pronto.",
    "contacto.form.error": "Por favor, completa todos los campos.",

    "cookies.bannerText": "Utilizamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar las cookies no esenciales.",
    "cookies.policyLink": "Ver la politica de cookies",
    "cookies.accept": "Aceptar",
    "cookies.reject": "Rechazar",
    "cookies.manage": "Gestionar cookies",
    "cookies.page.title": "Politica de cookies",
    "cookies.page.intro": "Esta pagina explica el uso de cookies en el sitio Festival Tricolor.",
    "cookies.page.section1Title": "1. Cookies esenciales",
    "cookies.page.section1Text": "Estas cookies son necesarias para el funcionamiento del sitio y no se pueden desactivar.",
    "cookies.page.section2Title": "2. Cookies de preferencias",
    "cookies.page.section2Text": "Permiten recordar algunas elecciones del usuario, como el idioma o las preferencias de consentimiento.",
    "cookies.page.section3Title": "3. Gestion del consentimiento",
    "cookies.page.section3Text": "Puedes aceptar o rechazar las cookies no esenciales desde la banda de cookies y cambiar tu decision con el boton Gestionar cookies.",
    "cookies.page.backHome": "Volver al inicio",
  },
  ca: {
    "nav.about": "Sobre nosaltres",
    "nav.program": "Festival",
    "nav.artists": "Artistes",
    "nav.culture": "Cultura",
    "nav.food": "Gastronomia",
    "nav.gallery": "Galeria",
    "nav.contact": "Contacte",
    "nav.tickets": "Entrades",
    "nav.contactoPage": "Contacte",
    "nav.kids": "Zona infantil",
    "nav.drinks": "Menjar i beguda",

    "hero.subtitle": "Un evento vibrant per celebrar la cultura equatoriana.",

    "aparte.date": "1 d'agost, 2026",
    "aparte.venue": "Vila Olímpica, Barcelona",
    "aparte.card1": "Festa",
    "aparte.card2": "Artistes",
    "aparte.card3": "Entrades",
    "aparte.cta": "Uneix-te a la festa",

    "about.title": "Sobre nosaltres",
    "about.text": "El Festival Tricolor reuneix tradicions, dances, artesania, música en directe i sabors típics d'Equador. Aquesta versió està dissenyada per ser fàcilment personalitzable.",

    "program.title": "Programa",
    "program.day1.title": "Dia 1",
    "program.day1.text": "Obertura, concerts folklòrics, desfilada de benvinguda.",
    "program.day2.title": "Dia 2",
    "program.day2.text": "Tallers culturals, gastronomia, concursos artístics.",
    "program.day3.title": "Dia 3",
    "program.day3.text": "Dansa tradicional, entrega de premis, tancament festiu.",

    "culture.title": "Cultura",

    "food.title": "Gastronomia",
    "food.item1.title": "Empanadas",
    "food.item1.text": "Clàssiques salades i dolces.",
    "food.item2.title": "Hornado",
    "food.item2.text": "Sabor tradicional dels Andes.",
    "food.item3.title": "Encebollado",
    "food.item3.text": "Especialitat costanera imprescindible.",

    "footer.copy": "© Festival Tricolor 2026 — Tots els drets reservats.",

    "gallery.title": "Galeria",

    "contact.title": "Contacte",

    "contact.title": "Contacte",
    "contact.name": "Nom",
    "contact.email": "Correu electrònic",
    "contact.message": "Missatge",
    "contact.send": "Enviar",

    "nav.stand": "Reserva la teva parada",

    "tickets.heroTitle": "Entrades",
    "tickets.heroSubtitle": "Reserva la teva plaça en pocs clics.",
    "tickets.chooseTitle": "Tria la teva entrada",
    "tickets.general.title": "General",
    "tickets.general.desc": "Accés diari",
    "tickets.vip.title": "VIP",
    "tickets.vip.desc": "Zona premium + beguda",
    "tickets.family.title": "Pack Familiar",
    "tickets.family.desc": "2 adults + 2 nens",
    "tickets.form.title": "Reserva",
    "tickets.form.generalLabel": "Entrades General (10 €)",
    "tickets.form.vipLabel": "Entrades VIP (25 €)",
    "tickets.form.familyLabel": "Pack Familiar (30 €)",
    "tickets.form.fullName": "Nom complet",
    "tickets.form.email": "Correu electrònic",
    "tickets.form.total": "Total",
    "tickets.form.submit": "Confirmar reserva",
    "tickets.form.success": "Reserva registrada. Rebràs un correu de confirmació.",
    "tickets.form.errorNoTickets": "Selecciona almenys 1 entrada.",
    "contacto.form.submit": "Enviar",
    "contacto.form.success": "Missatge enviat. Et respondrem aviat.",
    "contacto.form.error": "Si us plau, omple tots els camps.",

    "cookies.bannerText": "Utilitzem cookies per millorar la teva experiencia. Pots acceptar o rebutjar les cookies no essencials.",
    "cookies.policyLink": "Veure la politica de cookies",
    "cookies.accept": "Acceptar",
    "cookies.reject": "Rebutjar",
    "cookies.manage": "Gestionar cookies",
    "cookies.page.title": "Politica de cookies",
    "cookies.page.intro": "Aquesta pagina explica l'us de cookies al lloc Festival Tricolor.",
    "cookies.page.section1Title": "1. Cookies essencials",
    "cookies.page.section1Text": "Aquestes cookies son necessaries per al funcionament del lloc i no es poden desactivar.",
    "cookies.page.section2Title": "2. Cookies de preferencies",
    "cookies.page.section2Text": "Permeten recordar algunes eleccions d'usuari, com la llengua o les preferencies de consentiment.",
    "cookies.page.section3Title": "3. Gestio del consentiment",
    "cookies.page.section3Text": "Pots acceptar o rebutjar les cookies no essencials des de la banda de cookies i canviar la teva decisio amb el boto Gestionar cookies.",
    "cookies.page.backHome": "Tornar a l'inici",
  },
  en: {
    "nav.about": "About",
    "nav.program": "Festival",
    "nav.artists": "Artists",
    "nav.culture": "Culture",
    "nav.food": "Gastronomy",
    "nav.gallery": "Gallery",

    "hero.subtitle": "A vibrant event to celebrate Ecuadorian culture.",

  "aparte.date": "August 1 2026",
  "aparte.venue": "Vila Olímpica, Barcelona",
  "aparte.card1": "Fiesta",
  "aparte.card2": "Artists",
  "aparte.card3": "Tickets",
  "aparte.cta": "Join the party",

    "nav.contact": "Contact",
    "nav.tickets": "Tickets",
    "nav.contactoPage": "Contact",
    "nav.kids": "Kids area",
    "nav.drinks": "Food and drinks",
    "about.title": "About",
    "about.text": "Tricolor Festival brings together traditions, dances, crafts, live music and typical flavors of Ecuador. This version is designed to be easily customizable.",

    "program.title": "Program",
    "program.day1.title": "Day 1",
    "program.day1.text": "Opening, folk concerts, welcome parade.",
    "program.day2.title": "Day 2",
    "program.day2.text": "Cultural workshops, gastronomy, artistic contests.",
    "program.day3.title": "Day 3",
    "program.day3.text": "Traditional dance, prize ceremony, festive closing.",

    "culture.title": "Culture",

    "food.title": "Gastronomy",
    "food.item1.title": "Empanadas",
    "food.item1.text": "Classic savory and sweet.",
    "food.item2.title": "Hornado",
    "food.item2.text": "Traditional Andean flavor.",
    "food.item3.title": "Encebollado",
    "food.item3.text": "Essential coastal specialty.",

    "gallery.title": "Gallery",

    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",

    "nav.stand": "Book your stand",

    "tickets.heroTitle": "Tickets",
    "tickets.heroSubtitle": "Book your spot in a few clicks.",
    "tickets.chooseTitle": "Choose your ticket",
    "tickets.general.title": "General",
    "tickets.general.desc": "Day access",
    "tickets.vip.title": "VIP",
    "tickets.vip.desc": "Premium zone + drink",
    "tickets.family.title": "Family Pack",
    "tickets.family.desc": "2 adults + 2 children",
    "tickets.form.title": "Booking",
    "tickets.form.generalLabel": "General tickets (10 €)",
    "tickets.form.vipLabel": "VIP tickets (25 €)",
    "tickets.form.familyLabel": "Family Pack (30 €)",
    "tickets.form.fullName": "Full name",
    "tickets.form.email": "Email",
    "tickets.form.total": "Total",
    "tickets.form.submit": "Confirm booking",
    "tickets.form.success": "Booking saved. You will receive a confirmation email.",
    "tickets.form.errorNoTickets": "Please select at least 1 ticket.",
    "contacto.form.submit": "Send",
    "contacto.form.success": "Message sent. We will reply soon.",
    "contacto.form.error": "Please fill in all fields.",

    "cookies.bannerText": "We use cookies to improve your experience. You can accept or reject non-essential cookies.",
    "cookies.policyLink": "View the cookie policy",
    "cookies.accept": "Accept",
    "cookies.reject": "Reject",
    "cookies.manage": "Manage cookies",
    "cookies.page.title": "Cookie policy",
    "cookies.page.intro": "This page explains how cookies are used on the Festival Tricolor website.",
    "cookies.page.section1Title": "1. Essential cookies",
    "cookies.page.section1Text": "These cookies are necessary for the site to function and cannot be disabled.",
    "cookies.page.section2Title": "2. Preference cookies",
    "cookies.page.section2Text": "They allow us to remember user choices, such as language or consent preferences.",
    "cookies.page.section3Title": "3. Consent management",
    "cookies.page.section3Text": "You can accept or reject non-essential cookies from the cookie banner and change your choice with the Manage cookies button.",
    "cookies.page.backHome": "Back to home",
  }
};

function getCurrentLang() {
  const lang = localStorage.getItem("site_lang") || "fr";
  return translations[lang] ? lang : "fr";
}

function t(key, fallback = "") {
  const lang = getCurrentLang();
  return translations[lang]?.[key] ?? fallback;
}

window.__i18n = { t, getCurrentLang };

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    if (key.endsWith("Html")) el.innerHTML = value;
    else el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict[key];
    if (value) el.setAttribute("placeholder", value);
  });

  localStorage.setItem("site_lang", lang);
}

langSelect?.addEventListener("change", (e) => applyLanguage(e.target.value));

const savedLang = localStorage.getItem("site_lang") || "fr";
if (langSelect) langSelect.value = savedLang;
applyLanguage(savedLang);

(function initBackToTop() {
  const btn = document.createElement("button");
  btn.id = "backToTop";
  btn.type = "button";
  btn.setAttribute("aria-label", "Revenir en haut");
  btn.textContent = "↑";
  document.body.appendChild(btn);

  const toggleBtn = () => {
    if (window.scrollY > 260) btn.classList.add("show");
    else btn.classList.remove("show");
  };

  window.addEventListener("scroll", toggleBtn, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleBtn();
})();

(function initCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("cookieAccept");
  const rejectBtn = document.getElementById("cookieReject");
  const manageBtn = document.getElementById("cookieManage");
  if (!banner) return;

  const consentKey = "cookie_consent";
  const savedConsent = localStorage.getItem(consentKey);

  if (!savedConsent) {
    banner.hidden = false;
  }

  const saveConsent = (value) => {
    localStorage.setItem(consentKey, value);
    banner.hidden = true;
  };

  manageBtn?.addEventListener("click", () => {
    banner.hidden = false;
  });

  acceptBtn?.addEventListener("click", () => saveConsent("accepted"));
  rejectBtn?.addEventListener("click", () => saveConsent("rejected"));
})();
