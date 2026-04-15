(() => {
  if (window.__heroCarouselStarted) return;
  window.__heroCarouselStarted = true;

  function initHeroCarousel() {
    const root = document.getElementById("heroCarousel");
    if (!root) return;

    const raw = Array.from(
      root.querySelectorAll(".hero-slide, .slide, img")
    );

    const slides = raw.filter((el) => {
      if (el.tagName !== "IMG") return true;
      return el.complete ? el.naturalWidth > 0 : true;
    });

    if (slides.length < 2) {
      console.warn("Carousel: moins de 2 slides valides.");
      return;
    }

    // base visuelle forcée (même si CSS incomplet)
    slides.forEach((s) => {
      s.style.position = "absolute";
      s.style.inset = "0";
      s.style.width = "100%";
      s.style.height = "100%";
      if (s.tagName === "IMG") s.style.objectFit = "cover";
      s.style.transition = "opacity 900ms ease";
      s.style.opacity = "0";
      s.style.zIndex = "0";
      s.classList.remove("active");
    });

    let index = 0;
    slides[0].style.opacity = "1";
    slides[0].style.zIndex = "1";
    slides[0].classList.add("active");

    setInterval(() => {
      slides[index].style.opacity = "0";
      slides[index].style.zIndex = "0";
      slides[index].classList.remove("active");

      index = (index + 1) % slides.length;

      slides[index].style.opacity = "1";
      slides[index].style.zIndex = "1";
      slides[index].classList.add("active");
    }, 4000);
  }

  window.addEventListener("load", initHeroCarousel);
})();
