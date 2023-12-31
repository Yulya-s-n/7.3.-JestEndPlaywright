const { test, expect } = require("@playwright/test");
const { email, password, userInvalidPassword } = require("./user");


test("valid test", async ({ page }) => {
  
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL('https://netology.ru/profile');  
  await expect(page.locator('h2')).toHaveText('Моё обучение');
  await page.screenshot({ path: 'screenshot.png' });
});

test("invalid test", async ({ page }) => {
 
  await page.goto("https://netology.ru/?modal=sign_in");

  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(userInvalidPassword);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
  await page.screenshot({ path: 'screenshot.png' });
});
