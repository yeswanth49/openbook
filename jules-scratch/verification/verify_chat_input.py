
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:3000")

    # Wait for the chat input to be visible
    page.wait_for_selector('textarea[aria-label="Message input"]')

    # Type a message into the chat input
    page.fill('textarea[aria-label="Message input"]', "Hello, world!")

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
