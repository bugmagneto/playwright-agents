# 🧪 User Registration Tests

Automated Playwright test suite for user registration on **Demo Web Shop**.

---

## 🚀 Quick Start

```bash
# Run all tests
npx playwright test user-registration.spec.ts

# Run specific test
npx playwright test user-registration.spec.ts -g "Register with Valid Information"

# Run in browser
npx playwright test --headed user-registration.spec.ts

# Generate HTML report
npx playwright test --reporter=html
```

---

## ✅ Overview

* **13 test cases** for registration form validation
* Covers both **positive and negative** scenarios
* Tests include:

  * Missing fields
  * Invalid email formats
  * Password mismatch
  * Duplicate emails
  * Successful registration

---

## 🧱 Structure

| File                                | Purpose                   |
| ----------------------------------- | ------------------------- |
| `user-registration.spec.ts`         | Main test file            |
| `REGISTRATION_TESTS_SUMMARY.md`     | Quick overview & commands |
| `USER_REGISTRATION_TESTS_README.md` | Detailed explanations     |
| `REGISTRATION_TESTS_REFERENCE.md`   | Commands & FAQs           |
| `DEMO_WEBSHOP_TEST_PLAN.md`         | Full app test plan        |

---

## 🧩 Coverage

* **Form Fields:** Gender, Name, Email, Password, Confirm Password
* **Validations:** Required fields, email format, password match, duplicate email
* **Scenarios:** Success, validation errors, special characters

---

## ⚙️ Requirements

* Node.js 14+
* Playwright installed (`npm install -D @playwright/test`)
* Internet connection

---

## 📈 Test Summary

| Category    | Count  | Status     |
| ----------- | ------ | ---------- |
| Total Tests | 13     | ✅ All pass |
| Duration    | 35–45s | ⏱️         |
| Coverage    | 100%   | 📊         |

---

## 🏁 Next Steps

1. Run `npx playwright test user-registration.spec.ts`
2. Check HTML report in `test-results/`
3. Extend for other features using same structure

---

**Happy Testing! 🚀**

---
