const { test, expect } = require("@playwright/test");

test("navigation anchors remain visible below sticky header", async ({ page }) => {
  await page.goto("/");

  for (const target of ["maison", "interieurs", "exterieurs", "infos", "localisation", "contact"]) {
    await page.locator(`header a[href="#${target}"]`).click();
    const headerBox = await page.locator(".site-header").boundingBox();
    const targetBox = await page.locator(`#${target}`).boundingBox();
    expect(targetBox).not.toBeNull();
    expect(headerBox).not.toBeNull();
    expect(targetBox.y).toBeGreaterThanOrEqual((headerBox?.height ?? 0) + 8);
  }
});

test("all media sliders can advance and update captions", async ({ page }) => {
  await page.goto("/");

  const sliders = page.locator("[data-slider]");
  const count = await sliders.count();
  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    const slider = sliders.nth(index);
    const activeCaption = slider.locator(".media-slide.is-active figcaption strong");
    const initial = (await activeCaption.textContent()) || "";
    await slider.locator('.slider-button[data-dir="1"]').click();
    await expect(activeCaption).not.toHaveText(initial);
  }
});

test("slider supports keyboard navigation", async ({ page }) => {
  await page.goto("/");
  const slider = page.locator('[data-slider="overview"]');
  const track = slider.locator(".media-slider-track");
  const activeCaption = slider.locator(".media-slide.is-active figcaption strong");
  const initial = (await activeCaption.textContent()) || "";

  await track.focus();
  await page.keyboard.press("ArrowRight");

  await expect(activeCaption).not.toHaveText(initial);
});

test("contact details stay hidden until user interaction", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("[data-contact-details]")).toBeHidden();
  await expect(page.locator("body")).not.toContainText("brigitte.leclercq.vdb@gmail.com");
  await expect(page.locator("body")).not.toContainText("Andre.vandenbauw@progesco.be");

  await page.locator("[data-reveal-contact]").click();
  await expect(page.locator("[data-contact-details]")).toBeVisible();
  await expect(page.locator("[data-contact-details]")).toContainText("brigitte.leclercq.vdb@gmail.com");
});

test("hero and travel section stay visible on mobile", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only check");
  await page.goto("/");

  await expect(page.locator(".hero-title-accent")).toBeVisible();
  await expect(page.locator(".button-primary").first()).toBeVisible();

  await page.locator('header a[href="#localisation"]').click();
  await expect(page.locator(".travel-card-map")).toBeVisible();
  await expect(page.locator(".journey-item").first()).toBeVisible();
});

test("key metadata and image accessibility hooks exist", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://rob18183.github.io/b-sun/"
  );
  await expect(page.locator('head meta[property="og:image"]')).toHaveAttribute(
    "content",
    /og-image\.jpg$/
  );

  const imagesWithoutAlt = await page.locator("img:not([alt])").count();
  expect(imagesWithoutAlt).toBe(0);
});
