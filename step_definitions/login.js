const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

let browser;
let page;

Given('I am on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  page.goto('https://front.serverest.dev/login');
});

When('I type my {string} and {string}', async function (email, password) {
  await page.locator('[data-testid="email"]').fill(email)
  await page.locator('[data-testid="senha"]').fill(password)
  await page.locator('[data-testid="entrar"]').click()
});

Then('I have a successful login', async function () {
  await expect(page.locator('h1')).toContainText('Serverest Store');
});

Then('I have a failed login', async function () {
  await expect(page.locator('.alert-dismissible')).toContainText('Email e/ou senha inválidos');
});

