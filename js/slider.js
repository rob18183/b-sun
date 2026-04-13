function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function imageMarkup(image, sizes, eager = false) {
  const srcset = image.variants
    .map((width) => `assets/images/responsive/${image.key}-${width}.webp ${width}w`)
    .join(", ");
  const fallbackWidth = image.variants[image.variants.length - 1];

  return `
    <img
      src="assets/images/responsive/${image.key}-${fallbackWidth}.webp"
      srcset="${srcset}"
      sizes="${escapeHtml(sizes)}"
      alt="${escapeHtml(image.alt)}"
      width="${image.width}"
      height="${image.height}"
      loading="${eager ? "eager" : "lazy"}"
      decoding="async"
    />
  `;
}

function slideMarkup(slide, index, sizes, image) {
  return `
    <figure class="media-slide${index === 0 ? " is-active" : ""}" data-slide-index="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
      ${imageMarkup(image, sizes, index === 0)}
      <figcaption>
        <strong>${escapeHtml(slide.title)}</strong>
        <span>${escapeHtml(slide.text)}</span>
      </figcaption>
    </figure>
  `;
}

export class SliderGallery {
  constructor(root, gallery, images) {
    this.root = root;
    this.gallery = gallery;
    this.images = images;
    this.index = 0;
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  render() {
    const sizes = this.root.dataset.imageSizes || "(max-width: 1080px) 100vw, 58vw";
    const slides = this.gallery.slides
      .map((slide, index) =>
        slideMarkup(slide, index, sizes, {
          ...this.images[slide.image],
          key: slide.image
        })
      )
      .join("");
    const dots = this.gallery.slides
      .map(
        (slide, index) => `
          <button
            class="slider-dot${index === 0 ? " is-active" : ""}"
            type="button"
            aria-label="Voir ${escapeHtml(slide.title)}"
            data-slide="${index}"
            aria-pressed="${index === 0 ? "true" : "false"}"
          ></button>
        `
      )
      .join("");

    this.root.innerHTML = `
      <div class="media-slider-track" tabindex="0" aria-roledescription="carrousel">
        ${slides}
      </div>
      <div class="media-slider-controls">
        <button class="slider-button" type="button" data-dir="-1" aria-label="Image précédente">Précédent</button>
        <div class="slider-dots" aria-label="${escapeHtml(this.gallery.label)}">
          ${dots}
        </div>
        <button class="slider-button" type="button" data-dir="1" aria-label="Image suivante">Suivant</button>
      </div>
      <p class="slider-status" aria-live="polite"></p>
    `;

    this.track = this.root.querySelector(".media-slider-track");
    this.slides = Array.from(this.root.querySelectorAll(".media-slide"));
    this.dots = Array.from(this.root.querySelectorAll(".slider-dot"));
    this.status = this.root.querySelector(".slider-status");

    this.root.querySelectorAll(".slider-button").forEach((button) => {
      button.addEventListener("click", () => {
        this.goTo((this.index + Number(button.dataset.dir) + this.slides.length) % this.slides.length);
      });
    });

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.goTo(index);
      });
    });

    this.track.addEventListener("keydown", this.handleKeydown);
    this.goTo(0);
  }

  goTo(index) {
    this.index = index;
    this.slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    this.dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });

    const currentSlide = this.gallery.slides[index];
    this.status.textContent = `${currentSlide.title} (${index + 1}/${this.slides.length})`;
  }

  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.goTo((this.index - 1 + this.slides.length) % this.slides.length);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.goTo((this.index + 1) % this.slides.length);
    }
  }
}

export function initSliders(content) {
  document.querySelectorAll("[data-slider]").forEach((root) => {
    const galleryId = root.dataset.slider;
    const gallery = content.galleries[galleryId];
    if (!gallery) {
      return;
    }

    const slider = new SliderGallery(root, gallery, content.images);
    slider.render();
  });
}
