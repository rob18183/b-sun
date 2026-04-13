import content from "../data/site-content.js";
import { initSliders } from "./slider.js";

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function imagePath(key, width) {
  return `assets/images/responsive/${key}-${width}.webp`;
}

function renderFacts() {
  const container = document.querySelector("[data-facts]");
  content.facts.forEach((item) => {
    container.appendChild(createElement("p", "", item));
  });
}

function renderSectionCopy() {
  document.querySelectorAll("[data-copy]").forEach((container) => {
    const section = content.sectionCopy[container.dataset.copy];
    if (!section) {
      return;
    }

    const heading = createElement("h2", "", section.title);
    container.appendChild(heading);

    section.paragraphs?.forEach((paragraph) => {
      container.appendChild(createElement("p", "", paragraph));
    });

    if (section.accent) {
      container.appendChild(createElement("p", "location-line", section.accent));
    }

    if (section.features) {
      const list = createElement("ul", "feature-list");
      section.features.forEach((feature) => {
        list.appendChild(createElement("li", "", feature));
      });
      container.appendChild(list);
    }

    if (section.rooms) {
      const roomList = createElement("div", "mini-room-list");
      section.rooms.forEach((room) => {
        const item = createElement("article", "mini-room");
        item.appendChild(createElement("h3", "", room.title));
        item.appendChild(createElement("p", "", room.text));
        roomList.appendChild(item);
      });
      container.appendChild(roomList);
    }
  });
}

function renderSummaryCards() {
  const grid = document.querySelector("[data-summary-grid]");
  content.summaryCards.forEach((card) => {
    const image = content.images[card.image];
    const figure = createElement("figure", "summary-card");
    const img = document.createElement("img");
    const fallbackWidth = image.variants[image.variants.length - 1];
    img.src = imagePath(card.image, fallbackWidth);
    img.srcset = image.variants.map((width) => `${imagePath(card.image, width)} ${width}w`).join(", ");
    img.sizes = "(max-width: 720px) calc(50vw - 24px), 24vw";
    img.alt = image.alt;
    img.width = image.width;
    img.height = image.height;
    img.loading = "lazy";
    img.decoding = "async";
    figure.appendChild(img);
    figure.appendChild(createElement("figcaption", "", card.caption));
    grid.appendChild(figure);
  });
}

function renderPracticalCards() {
  const grid = document.querySelector("[data-practical-grid]");
  content.practical.forEach((item) => {
    const card = createElement("article", "practical-item");
    card.appendChild(createElement("span", "", item.label));
    card.appendChild(createElement("h3", "", item.title));
    if (item.text) {
      card.appendChild(createElement("p", "", item.text));
    }
    grid.appendChild(card);
  });
}

function renderTravelSection() {
  const mapCard = document.querySelector("[data-map-card]");
  mapCard.innerHTML = `
    <span class="travel-eyebrow">Accès rapide</span>
    <h3>${content.travel.locationName}</h3>
    <p>Maison calme entre village, plages et grandes excursions sur la Côte d’Azur.</p>
    <div class="travel-notes">
      ${content.travel.notes.map((note) => `<p>${note}</p>`).join("")}
    </div>
    <div class="travel-actions">
      <a class="button button-primary" href="${content.travel.mapUrl}" target="_blank" rel="noreferrer">${content.travel.mapLabel}</a>
      <a class="button button-secondary" href="${content.travel.secondaryMapUrl}" target="_blank" rel="noreferrer">${content.travel.secondaryMapLabel}</a>
    </div>
  `;

  const listCard = document.querySelector("[data-travel-list]");
  const list = createElement("div", "journey-list");
  content.travel.journeys.forEach((journey) => {
    const item = createElement("article", "journey-item");
    item.appendChild(createElement("h3", "", journey.title));
    item.appendChild(createElement("p", "", journey.detail));
    list.appendChild(item);
  });
  listCard.appendChild(list);
}

function emailAddress(owner) {
  return `${owner.user.join(owner.join)}@${owner.domain.join(".")}`;
}

function phoneNumber(phone) {
  return phone.parts.join("");
}

function renderContactFlow() {
  const root = document.querySelector("[data-contact-flow]");
  const recipients = content.contact.owners.map(emailAddress);
  const details = content.contact.owners
    .map((owner) => {
      const email = emailAddress(owner);
      return `
        <a href="mailto:${email}">${owner.name} • ${email}</a>
      `;
    })
    .join("");

  root.innerHTML = `
    <p class="contact-intro">${content.contact.intro}</p>
    <form class="contact-form">
      <label>
        Votre nom
        <input type="text" name="name" autocomplete="name" placeholder="Nom" />
      </label>
      <label>
        Votre e-mail
        <input type="email" name="email" autocomplete="email" placeholder="adresse@email.com" />
      </label>
      <label>
        Téléphone (optionnel)
        <input type="tel" name="phone" autocomplete="tel" placeholder="+32 ..." />
      </label>
      <label>
        Votre message
        <textarea name="message" rows="4" placeholder="Dates souhaitées, nombre de voyageurs, question..."></textarea>
      </label>
      <div class="contact-actions">
        <button class="button button-primary" type="submit">${content.contact.submitLabel}</button>
        <button class="button button-secondary" type="button" data-reveal-contact aria-expanded="false">${content.contact.revealLabel}</button>
      </div>
    </form>
    <button class="contact-fallback-link" type="button" data-direct-email>${content.contact.fallbackLabel}</button>
    <div class="contact-details" data-contact-details hidden></div>
    <p class="contact-note" data-contact-note></p>
  `;

  const form = root.querySelector(".contact-form");
  const revealButton = root.querySelector("[data-reveal-contact]");
  const directButton = root.querySelector("[data-direct-email]");
  const detailsBox = root.querySelector("[data-contact-details]");
  const note = root.querySelector("[data-contact-note]");
  let detailsReady = false;

  const ensureDetails = () => {
    if (detailsReady) {
      return;
    }

    detailsBox.innerHTML = `
      ${details}
      <a href="tel:${phoneNumber(content.contact.phone)}">${content.contact.phone.label}</a>
    `;
    detailsReady = true;
  };

  revealButton.addEventListener("click", () => {
    const expanded = revealButton.getAttribute("aria-expanded") === "true";
    if (!expanded) {
      ensureDetails();
    }
    revealButton.setAttribute("aria-expanded", String(!expanded));
    revealButton.textContent = expanded ? content.contact.revealLabel : content.contact.hideLabel;
    detailsBox.hidden = expanded;
  });

  directButton.addEventListener("click", () => {
    window.location.href = `mailto:${recipients.join(",")}?subject=${encodeURIComponent("Demande Maison B-Sun")}`;
    note.textContent = "Votre application e-mail doit s’ouvrir pour un message direct.";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const body = [
      name ? `Nom: ${name}` : "",
      email ? `E-mail: ${email}` : "",
      phone ? `Téléphone: ${phone}` : "",
      "",
      message || "Bonjour, je souhaite obtenir plus d'informations sur la Maison B-Sun."
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent("Demande Maison B-Sun");
    const mailto = `mailto:${recipients.join(",")}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    note.textContent = "Votre application e-mail doit s’ouvrir avec le message prérempli.";
    ensureDetails();
    detailsBox.hidden = false;
    revealButton.setAttribute("aria-expanded", "true");
    revealButton.textContent = content.contact.hideLabel;
  });
}

renderFacts();
renderSectionCopy();
renderSummaryCards();
renderPracticalCards();
renderTravelSection();
renderContactFlow();
initSliders(content);
