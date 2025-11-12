// spec: DEMO_WEBSHOP_TEST_PLAN.md
// seed: seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('User Registration', () => {
  test('Access Registration Page', async ({ page }) => {
    // 1. Navigate to https://demowebshop.tricentis.com/register
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Verify page loads with registration form
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Register' })).toBeVisible();
    
    // Verify "Your Personal Details" section is visible
    await expect(page.getByText('Your Personal Details')).toBeVisible();
    
    // Verify "Your Password" section is visible
    await expect(page.getByText('Your Password')).toBeVisible();
    
    // Verify all required fields are present
    await expect(page.getByRole('textbox', { name: 'First name:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Last name:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password:', exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Confirm password:' })).toBeVisible();
  });

  test('Register with Valid Information', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Select gender: "Male"
    await page.getByRole('radio', { name: 'Male', exact: true }).click();

    // 3. Enter First name: "John"
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');

    // 4. Enter Last name: "Doe"
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');

    // 5. Enter Email (unique email for this test)
    const uniqueEmail = `johndoe.test.${Date.now()}@example.com`;
    await page.getByRole('textbox', { name: 'Email:' }).fill(uniqueEmail);

    // 6. Enter Password: "Test@1234"
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');

    // 7. Enter Confirm password: "Test@1234"
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 8. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 9. Verify registration succeeds
    // Success message should appear
    await expect(page.getByText('Your registration completed')).toBeVisible();
    
    // User should be logged in (email appears in header instead of Register link)
    await expect(page.getByRole('link', { name: uniqueEmail })).toBeVisible();
    
    // Should not show Register/Login links anymore
    await expect(page.getByRole('link', { name: /^Register$/ })).not.toBeVisible();
  });

  test('Register with Missing First Name', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Leave "First name" field empty (don't fill it)
    // Select gender
    await page.getByRole('radio', { name: 'Male', exact: true }).click();

    // 3. Fill in all other required fields correctly
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 4. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 5. Verify validation error appears
    // Should stay on registration page
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    
    // Should show validation error message
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Missing Last Name', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Leave "Last name" field empty
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    // Skip Last name
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 3. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 4. Verify validation error appears
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Missing Email', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Leave "Email" field empty
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    // Skip Email
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 3. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 4. Verify validation error appears
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Password Mismatch', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in personal details correctly
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);

    // 3. Enter Password: "Test@1234"
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');

    // 4. Enter Confirm password: "Test@5678" (different)
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@5678');

    // 5. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 6. Verify validation error appears
    // User should remain on registration page
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    
    // Error message should indicate password mismatch
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Invalid Email Format', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in personal details
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');

    // 3. Enter Email: "invalidemail" (missing @domain)
    await page.getByRole('textbox', { name: 'Email:' }).fill('invalidemail');

    // 4. Fill in password fields
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 5. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 6. Verify validation error appears
    // User should remain on registration page
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    
    // Should show validation error for invalid email
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Another Invalid Email Format', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in personal details
    await page.getByRole('radio', { name: 'Female', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('Jane');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Smith');

    // 3. Enter Email with invalid format: "test@invalid" (missing TLD)
    await page.getByRole('textbox', { name: 'Email:' }).fill('test@invalid');

    // 4. Fill in password fields
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 5. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 6. Verify validation error appears
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Duplicate Email Registration', async ({ page }) => {
    // First registration - create an account
    const duplicateEmail = `duplicate.test.${Date.now()}@example.com`;
    
    // 1. Register an account with email
    await page.goto('https://demowebshop.tricentis.com/register');
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email:' }).fill(duplicateEmail);
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');
    await page.getByRole('button', { name: 'Register' }).click();

    // 2. Verify registration succeeds
    await expect(page.getByText('Your registration completed')).toBeVisible();

    // 3. Logout
    await page.getByRole('link', { name: 'Log out' }).click();

    // 4. Attempt to register again with the same email
    await page.goto('https://demowebshop.tricentis.com/register');
    await page.getByRole('radio', { name: 'Female', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('Jane');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Smith');
    
    // 5. Fill in with same email as before
    await page.getByRole('textbox', { name: 'Email:' }).fill(duplicateEmail);
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Password@123');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Password@123');
    await page.getByRole('button', { name: 'Register' }).click();

    // 6. Verify error message appears
    // User should remain on registration page
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    
    // Should show error about email already existing
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Female Gender', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Select gender: "Female"
    await page.getByRole('radio', { name: 'Female', exact: true }).click();

    // 3. Enter First name
    await page.getByRole('textbox', { name: 'First name:' }).fill('Jane');

    // 4. Enter Last name
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Smith');

    // 5. Enter Email
    const uniqueEmail = `janesmith.test.${Date.now()}@example.com`;
    await page.getByRole('textbox', { name: 'Email:' }).fill(uniqueEmail);

    // 6. Enter Password
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('SecurePass@123');

    // 7. Enter Confirm password
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('SecurePass@123');

    // 8. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 9. Verify registration succeeds
    await expect(page.getByText('Your registration completed')).toBeVisible();
    await expect(page.getByRole('link', { name: uniqueEmail })).toBeVisible();
  });

  test('Register with Missing Password Field', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in personal details
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);

    // 3. Leave password field empty
    // Only fill confirm password
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 4. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 5. Verify validation error appears
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Missing Confirm Password Field', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in personal details
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill('John');
    await page.getByRole('textbox', { name: 'Last name:' }).fill('Doe');
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);

    // 3. Fill password but leave confirm password empty
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    // Don't fill confirm password field

    // 4. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 5. Verify validation error appears
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    const errorMessages = await page.locator('[class*="error"], [role="alert"]').all();
    expect(errorMessages.length).toBeGreaterThan(0);
  });

  test('Register with Special Characters in Name Fields', async ({ page }) => {
    // 1. Navigate to registration page
    await page.goto('https://demowebshop.tricentis.com/register');

    // 2. Fill in form with special characters in name
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByRole('textbox', { name: 'First name:' }).fill("Jean-Pierre");
    await page.getByRole('textbox', { name: 'Last name:' }).fill("O'Brien");
    await page.getByRole('textbox', { name: 'Email:' }).fill(`testuser.${Date.now()}@example.com`);
    await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('Test@1234');
    await page.getByRole('textbox', { name: 'Confirm password:' }).fill('Test@1234');

    // 3. Click Register button
    await page.getByRole('button', { name: 'Register' }).click();

    // 4. Verify registration succeeds (special characters should be accepted)
    await expect(page.getByText('Your registration completed')).toBeVisible();
  });
});
