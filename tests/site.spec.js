const { test, expect } = require("@playwright/test");

test("navigation anchors remain visible below the sticky header", async ({ page }) => {
  await page.goto("/");

  for (const target of ["maison", "interieurs", "exterieurs", "infos", "contact"]) {
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
  await expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i += 1) {
    const slider = sliders.nth(i);
    const activeCaption = slider.locator(".media-slide.is-active figcaption strong");
    const initial = await activeCaption.textContent();
    await slider.locator('.slider-button[data-dir="1"]').click();
    await expect(activeCaption).not.toHaveText(initial || "");
  }
});

test("hero title and primary CTA are visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".hero-title-intro")).toBeVisible();
  await expect(page.locator(".hero-title-accent")).toBeVisible();
  await expect(page.locator(".button-primary")).toBeVisible();
});
