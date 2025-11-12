// Comprehensive User Registration Test Documentation
// This file documents all the registration test scenarios created for the Demo Web Shop

/**
 * USER REGISTRATION TEST SUITE
 * 
 * File: user-registration.spec.ts
 * Location: tests/user-registration.spec.ts
 * 
 * This test suite covers 12 comprehensive test scenarios for user registration
 * functionality on the Tricentis Demo Web Shop application.
 * 
 * Test Scenarios:
 * ==============
 * 
 * 1. Access Registration Page
 *    - Verifies that the registration page loads correctly
 *    - Confirms all form sections are visible (Personal Details, Password)
 *    - Verifies all required fields are present and visible
 *    - Expected to PASS - Page loads with all elements
 * 
 * 2. Register with Valid Information
 *    - Tests successful registration with all correct data
 *    - Creates a new account with Male gender
 *    - Uses dynamically generated unique email (timestamp-based)
 *    - Confirms successful registration with completion message
 *    - Verifies user is logged in after registration
 *    - Expected to PASS - Account created and user logged in
 * 
 * 3. Register with Missing First Name
 *    - Tests form validation for required First Name field
 *    - Leaves First Name empty while filling other fields
 *    - Should trigger validation error
 *    - Form should not submit
 *    - Expected to PASS - Validation error appears
 * 
 * 4. Register with Missing Last Name
 *    - Tests form validation for required Last Name field
 *    - Leaves Last Name empty
 *    - Should trigger validation error
 *    - Expected to PASS - Validation error appears
 * 
 * 5. Register with Missing Email
 *    - Tests form validation for required Email field
 *    - Leaves Email empty
 *    - Should trigger validation error
 *    - Expected to PASS - Validation error appears
 * 
 * 6. Register with Password Mismatch
 *    - Tests password confirmation validation
 *    - Enters "Test@1234" in Password field
 *    - Enters "Test@5678" (different) in Confirm Password field
 *    - Should trigger password mismatch error
 *    - Form should not submit
 *    - Expected to PASS - Mismatch validation error appears
 * 
 * 7. Register with Invalid Email Format (No @ symbol)
 *    - Tests email format validation
 *    - Enters "invalidemail" (missing @ and domain)
 *    - Should trigger email format validation error
 *    - Form should not submit
 *    - Expected to PASS - Email format error appears
 * 
 * 8. Register with Another Invalid Email Format (Missing TLD)
 *    - Tests email validation with partial email
 *    - Enters "test@invalid" (missing top-level domain)
 *    - Should trigger email validation error
 *    - Uses Female gender to test both gender options
 *    - Expected to PASS - Email validation error appears
 * 
 * 9. Duplicate Email Registration
 *    - Tests system behavior when registering with existing email
 *    - First registers account with unique email
 *    - Then attempts to register second account with same email
 *    - Should trigger "email already exists" error
 *    - Includes logout between registration attempts
 *    - Expected to PASS - Duplicate email error appears
 * 
 * 10. Register with Female Gender
 *     - Tests registration with Female gender option selected
 *     - Verifies both Male and Female options work
 *     - Creates account with Female gender
 *     - Confirms successful registration
 *     - Expected to PASS - Account created with Female gender
 * 
 * 11. Register with Missing Password Field
 *     - Tests validation for empty Password field
 *     - Fills Confirm Password but leaves Password empty
 *     - Should trigger validation error
 *     - Form should not submit
 *     - Expected to PASS - Password field validation error appears
 * 
 * 12. Register with Missing Confirm Password Field
 *     - Tests validation for empty Confirm Password field
 *     - Fills Password but leaves Confirm Password empty
 *     - Should trigger validation error
 *     - Form should not submit
 *     - Expected to PASS - Confirm password validation error appears
 * 
 * 13. Register with Special Characters in Name Fields
 *     - Tests that special characters are accepted in name fields
 *     - Uses "Jean-Pierre" (with hyphen) as first name
 *     - Uses "O'Brien" (with apostrophe) as last name
 *     - System should accept special characters
 *     - Expected to PASS - Special characters accepted, account created
 * 
 * 
 * TEST EXECUTION GUIDELINES
 * =========================
 * 
 * Prerequisites:
 * - Clear browser cache and cookies before running tests
 * - Ensure JavaScript is enabled
 * - Test environment must have internet access to demowebshop.tricentis.com
 * 
 * Running the Tests:
 * - Run all tests: npx playwright test user-registration.spec.ts
 * - Run specific test: npx playwright test user-registration.spec.ts -g "Register with Valid Information"
 * - Run in headed mode: npx playwright test --headed user-registration.spec.ts
 * - Run with verbose output: npx playwright test --reporter=verbose user-registration.spec.ts
 * 
 * Test Data:
 * - Email addresses are generated dynamically using timestamp (Date.now())
 * - This ensures unique emails for each test run
 * - Passwords used: "Test@1234", "SecurePass@123", "Password@123"
 * - Names: "John Doe", "Jane Smith", "Jean-Pierre O'Brien"
 * 
 * Expected Results Summary:
 * ========================
 * 
 * POSITIVE TESTS (should pass/succeed):
 * - Access Registration Page (1)
 * - Register with Valid Information (2)
 * - Register with Female Gender (10)
 * - Register with Special Characters in Name Fields (13)
 * 
 * NEGATIVE TESTS (should show validation errors):
 * - Register with Missing First Name (3)
 * - Register with Missing Last Name (4)
 * - Register with Missing Email (5)
 * - Register with Password Mismatch (6)
 * - Register with Invalid Email Format (7)
 * - Register with Another Invalid Email Format (8)
 * - Duplicate Email Registration (9)
 * - Register with Missing Password Field (11)
 * - Register with Missing Confirm Password Field (12)
 * 
 * 
 * LOCATOR STRATEGY
 * ================
 * 
 * All tests use accessible locators from Playwright's getByRole API:
 * - page.getByRole('radio', { name: 'Male' }) - Gender selection
 * - page.getByRole('textbox', { name: 'First name:' }) - Form inputs
 * - page.getByRole('button', { name: 'Register' }) - Register button
 * - page.getByRole('heading', { name: 'Register' }) - Page heading
 * 
 * Error Detection:
 * - Uses generic error selector: [class*="error"], [role="alert"]
 * - Checks for error count > 0 to confirm validation errors appeared
 * 
 * 
 * ASSERTIONS USED
 * ===============
 * 
 * toBeVisible() - Verifies element is visible on page
 * toBeChecked() - Verifies radio button is selected
 * toContainText() - Verifies text content in elements
 * not.toBeVisible() - Verifies element is hidden or removed
 * 
 * 
 * POTENTIAL ISSUES & TROUBLESHOOTING
 * ==================================
 * 
 * 1. Test fails due to email already exists:
 *    - Solution: The duplicate email test uses timestamped emails
 *    - If error persists, clear browser data or use different timestamp
 * 
 * 2. Validation errors not appearing:
 *    - Ensure JavaScript is enabled in browser
 *    - Check if form has validation library loaded
 *    - Verify error messages use [class*="error"] selector
 * 
 * 3. Test timeout on registration:
 *    - Server may be slow, increase timeout if needed
 *    - Check server status at https://demowebshop.tricentis.com
 * 
 * 4. Gender radio buttons not clickable:
 *    - Ensure exact: true is used for gender matching
 *    - Alternative: Use nth-child selector if needed
 * 
 * 
 * BEST PRACTICES APPLIED
 * ======================
 * 
 * ✓ Uses meaningful test names describing what is being tested
 * ✓ Tests are independent and can run in any order
 * ✓ Each test clears and sets up its own state
 * ✓ Uses dynamic email generation to avoid conflicts
 * ✓ Uses accessible locators (getByRole) for reliability
 * ✓ Validates user-facing outcomes (success messages, logged-in state)
 * ✓ Tests both positive and negative scenarios
 * ✓ No hardcoded waits (waitForTimeout) - uses assertions instead
 * ✓ Clear comments before each test step
 * ✓ Comprehensive error checking with locator arrays
 * 
 * 
 * COVERAGE ANALYSIS
 * =================
 * 
 * Form Elements Tested:
 * ✓ Gender selection (Male/Female)
 * ✓ First Name field
 * ✓ Last Name field
 * ✓ Email field
 * ✓ Password field
 * ✓ Confirm Password field
 * ✓ Register button
 * 
 * Validation Rules Tested:
 * ✓ Required field validation (First Name, Last Name, Email, Password, Confirm Password)
 * ✓ Email format validation
 * ✓ Password match validation
 * ✓ Duplicate email detection
 * ✓ Special character acceptance in names
 * 
 * User Scenarios Tested:
 * ✓ Happy path - successful registration
 * ✓ Form validation - missing required fields
 * ✓ Email validation - invalid formats
 * ✓ Password validation - mismatch between password fields
 * ✓ Duplicate account prevention
 * ✓ Gender option selection
 * ✓ Special character handling
 * 
 * 
 * MAINTENANCE NOTES
 * =================
 * 
 * - If registration page URL changes, update all page.goto() calls
 * - If form fields are renamed, update all getByRole() locators
 * - If success message text changes, update assertion text
 * - If validation message structure changes, update error selector logic
 * - Monitor email uniqueness strategy if timestamps conflict
 * 
 */
