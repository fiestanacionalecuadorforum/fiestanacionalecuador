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
    "nav.about": "Informations de l'evenement",
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
    "nav.arrival": "Comment venir",

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

    "about.title": "Informations de l'evenement",
    "about.text": "Le Festival Tricolor rassemble traditions, danses, artisanat, musique live et saveurs typiques de l’Équateur. Cette version est conçue pour être facilement personnalisable.",

    "program.title": "Programme",
    "program.day1.title": "Jour 1",
    "program.day1.text": "Ouverture, concerts folkloriques, parade d’accueil.",
    "program.day2.title": "Jour 2",
    "program.day2.text": "Ateliers culturels, gastronomie, concours artistiques.",
    "program.day3.title": "Jour 3",
    "program.day3.text": "Danse traditionnelle, remise de prix, clôture festive.",

    "culture.title": "Culture",
    "kids.title": "Zone enfant",
    "kids.text": "Un espace pense pour les familles avec jeux, ateliers et animations adaptees aux enfants tout au long de la journee.",
    "kids.item1.title": "Ateliers creatifs",
    "kids.item1.text": "Peinture, coloriage et activites manuelles inspirees de la culture equatorienne.",
    "kids.item2.title": "Jeux et mouvement",
    "kids.item2.text": "Mini jeux, danse et espaces ludiques pour profiter du festival en toute securite.",
    "kids.item3.title": "Espace famille",
    "kids.item3.text": "Un coin repos pour parents et enfants avec une ambiance conviviale et festive.",
    
    "food.title": "Gastronomie",
    "drinks.title": "Nourriture et boissons",
    "drinks.text": "Un parcours gourmand pour decouvrir les saveurs du festival avec plats traditionnels, douceurs et boissons rafraichissantes.",
    "drinks.item1.title": "Specialites salees",
    "drinks.item1.text": "Empanadas, hornado et autres recettes typiques preparees sur place.",
    "drinks.item2.title": "Boissons festives",
    "drinks.item2.text": "Jus, sodas et boissons traditionnelles pour accompagner chaque moment du festival.",
    "drinks.item3.title": "Pause sucree",
    "drinks.item3.text": "Desserts et gourmandises a partager entre amis ou en famille.",
    "arrival.title": "Comment venir",
    "arrival.text": "Le festival se tient a Vila Olimpica, Barcelona. Vous pouvez arriver facilement en metro, en bus, en velo ou en voiture selon votre point de depart.",
    "arrival.item1.title": "Metro",
    "arrival.item1.text": "Descendez a la station Ciutadella Vila Olimpica et rejoignez le site en quelques minutes a pied.",
    "arrival.item2.title": "Bus et velo",
    "arrival.item2.text": "Plusieurs lignes de bus desservent la zone et des stations de velo sont disponibles a proximite.",
    "arrival.item3.title": "Voiture",
    "arrival.item3.text": "Des parkings publics se trouvent autour de Vila Olimpica, mais les transports en commun restent recommandes.",
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
    "nav.about": "Informacion del evento",
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
    "nav.arrival": "Como llegar",

    "hero.subtitle": "Un evento vibrante para celebrar la cultura ecuatoriana.",

    "aparte.date": "1 de agosto 2026",
    "aparte.venue": "Vila Olímpica, Barcelona",
    "aparte.card1": "Fiesta",
    "aparte.card2": "Artistas",
    "aparte.card3": "Entradas",
    "aparte.cta": "Únete a la fiesta",

    "about.title": "Informacion del evento",
    "about.text": "El Festival Tricolor reúne tradiciones, danzas, artesanía, música en vivo y sabores típicos de Ecuador. Esta versión está diseñada para ser fácilmente personalizable.",

    "program.title": "Programa",
    "program.day1.title": "Día 1",
    "program.day1.text": "Apertura, conciertos folklóricos, desfile de bienvenida.",
    "program.day2.title": "Día 2",
    "program.day2.text": "Talleres culturales, gastronomía, concursos artísticos.",
    "program.day3.title": "Día 3",
    "program.day3.text": "Danza tradicional, entrega de premios, clausura festiva.",

    "culture.title": "Cultura",
    "kids.title": "Zona infantil",
    "kids.text": "Un espacio pensado para las familias con juegos, talleres y actividades adaptadas a los ninos durante todo el dia.",
    "kids.item1.title": "Talleres creativos",
    "kids.item1.text": "Pintura, coloreado y actividades manuales inspiradas en la cultura ecuatoriana.",
    "kids.item2.title": "Juegos y movimiento",
    "kids.item2.text": "Mini juegos, baile y espacios ludicos para disfrutar del festival con total seguridad.",
    "kids.item3.title": "Espacio familiar",
    "kids.item3.text": "Una zona de descanso para padres e hijos con un ambiente acogedor y festivo.",

    "food.title": "Gastronomía",
    "drinks.title": "Comida y bebida",
    "drinks.text": "Un recorrido gastronomico para descubrir los sabores del festival con platos tradicionales, dulces y bebidas refrescantes.",
    "drinks.item1.title": "Especialidades saladas",
    "drinks.item1.text": "Empanadas, hornado y otras recetas tipicas preparadas en el momento.",
    "drinks.item2.title": "Bebidas festivas",
    "drinks.item2.text": "Zumos, refrescos y bebidas tradicionales para acompanar cada momento del festival.",
    "drinks.item3.title": "Pausa dulce",
    "drinks.item3.text": "Postres y antojos para compartir entre amigos o en familia.",
    "arrival.title": "Como llegar",
    "arrival.text": "El festival se celebra en Vila Olimpica, Barcelona. Puedes llegar facilmente en metro, bus, bicicleta o coche segun tu punto de salida.",
    "arrival.item1.title": "Metro",
    "arrival.item1.text": "Baja en la estacion Ciutadella Vila Olimpica y llega al recinto en pocos minutos a pie.",
    "arrival.item2.title": "Bus y bicicleta",
    "arrival.item2.text": "Varias lineas de bus llegan a la zona y hay estaciones de bicicleta cerca del festival.",
    "arrival.item3.title": "Coche",
    "arrival.item3.text": "Hay parkings publicos alrededor de Vila Olimpica, aunque recomendamos el transporte publico.",
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
    "nav.about": "Informacio de l'esdeveniment",
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
    "nav.arrival": "Com arribar",

    "hero.subtitle": "Un evento vibrant per celebrar la cultura equatoriana.",

    "aparte.date": "1 d'agost, 2026",
    "aparte.venue": "Vila Olímpica, Barcelona",
    "aparte.card1": "Festa",
    "aparte.card2": "Artistes",
    "aparte.card3": "Entrades",
    "aparte.cta": "Uneix-te a la festa",

    "about.title": "Informacio de l'esdeveniment",
    "about.text": "El Festival Tricolor reuneix tradicions, dances, artesania, música en directe i sabors típics d'Equador. Aquesta versió està dissenyada per ser fàcilment personalitzable.",

    "program.title": "Programa",
    "program.day1.title": "Dia 1",
    "program.day1.text": "Obertura, concerts folklòrics, desfilada de benvinguda.",
    "program.day2.title": "Dia 2",
    "program.day2.text": "Tallers culturals, gastronomia, concursos artístics.",
    "program.day3.title": "Dia 3",
    "program.day3.text": "Dansa tradicional, entrega de premis, tancament festiu.",

    "culture.title": "Cultura",
    "kids.title": "Zona infantil",
    "kids.text": "Un espai pensat per a les families amb jocs, tallers i activitats adaptades als infants durant tot el dia.",
    "kids.item1.title": "Tallers creatius",
    "kids.item1.text": "Pintura, acoloriment i activitats manuals inspirades en la cultura equatoriana.",
    "kids.item2.title": "Jocs i moviment",
    "kids.item2.text": "Mini jocs, ball i espais ludics per gaudir del festival amb total seguretat.",
    "kids.item3.title": "Espai familiar",
    "kids.item3.text": "Una zona de descans per a pares i infants amb un ambient acollidor i festiu.",

    "food.title": "Gastronomia",
    "drinks.title": "Menjar i beguda",
    "drinks.text": "Un recorregut gastronomic per descobrir els sabors del festival amb plats tradicionals, dolcos i begudes refrescants.",
    "drinks.item1.title": "Especialitats salades",
    "drinks.item1.text": "Empanades, hornado i altres receptes tipiques preparades al moment.",
    "drinks.item2.title": "Begudes festives",
    "drinks.item2.text": "Sucs, refrescos i begudes tradicionals per acompanyar cada moment del festival.",
    "drinks.item3.title": "Pausa dolca",
    "drinks.item3.text": "Postres i capricis per compartir amb amics o en familia.",
    "arrival.title": "Com arribar",
    "arrival.text": "El festival se celebra a Vila Olimpica, Barcelona. Hi pots arribar facilment en metro, bus, bicicleta o cotxe segons el teu punt de sortida.",
    "arrival.item1.title": "Metro",
    "arrival.item1.text": "Baixa a l'estacio Ciutadella Vila Olimpica i arriba al recinte en pocs minuts a peu.",
    "arrival.item2.title": "Bus i bicicleta",
    "arrival.item2.text": "Diverses linies de bus arriben a la zona i hi ha estacions de bicicleta a prop del festival.",
    "arrival.item3.title": "Cotxe",
    "arrival.item3.text": "Hi ha parkings publics al voltant de Vila Olimpica, tot i que recomanem el transport public.",
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
    "nav.about": "Event information",
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
    "nav.arrival": "How to get there",
    "about.title": "Event information",
    "about.text": "Tricolor Festival brings together traditions, dances, crafts, live music and typical flavors of Ecuador. This version is designed to be easily customizable.",

    "program.title": "Program",
    "program.day1.title": "Day 1",
    "program.day1.text": "Opening, folk concerts, welcome parade.",
    "program.day2.title": "Day 2",
    "program.day2.text": "Cultural workshops, gastronomy, artistic contests.",
    "program.day3.title": "Day 3",
    "program.day3.text": "Traditional dance, prize ceremony, festive closing.",

    "culture.title": "Culture",
    "kids.title": "Kids area",
    "kids.text": "A dedicated family area with games, workshops and activities designed for children throughout the day.",
    "kids.item1.title": "Creative workshops",
    "kids.item1.text": "Painting, coloring and hands-on activities inspired by Ecuadorian culture.",
    "kids.item2.title": "Games and movement",
    "kids.item2.text": "Mini games, dance and playful spaces to enjoy the festival safely.",
    "kids.item3.title": "Family space",
    "kids.item3.text": "A relaxing corner for parents and children with a warm and festive atmosphere.",

    "food.title": "Gastronomy",
    "drinks.title": "Food and drinks",
    "drinks.text": "A tasty route through the festival with traditional dishes, sweets and refreshing drinks.",
    "drinks.item1.title": "Savory specialties",
    "drinks.item1.text": "Empanadas, hornado and other typical recipes freshly prepared on site.",
    "drinks.item2.title": "Festive drinks",
    "drinks.item2.text": "Juices, soft drinks and traditional beverages to accompany every festival moment.",
    "drinks.item3.title": "Sweet break",
    "drinks.item3.text": "Desserts and treats to share with friends or family.",
    "arrival.title": "How to get there",
    "arrival.text": "The festival takes place in Vila Olimpica, Barcelona. You can easily get there by metro, bus, bike or car depending on your starting point.",
    "arrival.item1.title": "Metro",
    "arrival.item1.text": "Get off at Ciutadella Vila Olimpica station and reach the venue within a few minutes on foot.",
    "arrival.item2.title": "Bus and bike",
    "arrival.item2.text": "Several bus lines serve the area and bike stations are available near the festival.",
    "arrival.item3.title": "Car",
    "arrival.item3.text": "Public parking is available around Vila Olimpica, although public transport is recommended.",
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
