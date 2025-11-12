# Tricentis Demo Web Shop - Comprehensive Test Plan

## Application Overview

The Tricentis Demo Web Shop is a feature-rich e-commerce platform built on nopCommerce that demonstrates a complete online shopping experience. The application serves as a testing reference for quality assurance professionals and includes robust functionality for product browsing, searching, and purchasing.

### Key Features:
- **Product Catalog Management**: Multiple product categories (Books, Computers, Electronics, Apparel & Shoes, Digital downloads, Jewelry, Gift Cards)
- **Product Discovery**: Search functionality, category browsing, product tags, and manufacturer filtering
- **User Accounts**: Customer registration, login, account management with order history and address management
- **Shopping Features**: Add to cart, wishlist management, quantity adjustment, and product comparison
- **Checkout Process**: Multi-step checkout flow including cart review, address entry, shipping selection, payment, and order confirmation
- **Product Information**: Detailed product pages with specifications, reviews, related products, and availability status
- **Customer Engagement**: Newsletter subscription, community polls, product reviews, and social media integration

---

## Test Scenarios

### 1. Homepage Navigation and Layout

#### 1.1 Verify Homepage Loads with All Key Elements
**Steps:**
1. Open browser and navigate to https://demowebshop.tricentis.com/
2. Wait for page to fully load
3. Verify the following elements are visible:
   - Tricentis Demo Web Shop logo/header
   - Navigation menu with category links (Books, Computers, Electronics, etc.)
   - Search bar with Search button
   - Register and Log in links
   - Shopping cart (0) counter
   - Wishlist (0) counter
   - Featured products section
   - Footer with information links

**Expected Results:**
- Page loads within 3 seconds
- All navigation elements are clickable
- Featured products are displayed with images and prices
- Shopping cart and wishlist counters display "0"
- No layout breaks or missing elements

**Assumptions:** Fresh state, no previously cached data, first-time visitor

---

#### 1.2 Verify Featured Products Display Correctly
**Steps:**
1. Navigate to homepage
2. Scroll to the "Featured products" section
3. Verify each product displays:
   - Product image
   - Product name as clickable link
   - Price in correct format (e.g., "$25.00")
   - Review count
   - "Add to cart" button
4. Count the number of featured products displayed

**Expected Results:**
- At least 6 featured products are visible
- All products have images, names, prices, and review counts
- All "Add to cart" buttons are functional
- Product names are clickable links to product detail pages

---

#### 1.3 Test Homepage Search Functionality
**Steps:**
1. Navigate to homepage
2. Click on the search box
3. Type "laptop" in the search field
4. Click the Search button
5. Verify results display

**Expected Results:**
- Search bar accepts text input
- Search returns relevant results
- Results page displays matching products
- Page title updates to reflect search

**Assumptions:** At least one product containing "laptop" exists in catalog

---

### 2. Product Catalog and Category Navigation

#### 2.1 Browse Product Categories
**Steps:**
1. Navigate to homepage
2. Click on "Computers" in the main navigation menu
3. Verify page loads and displays subcategories
4. Click on each subcategory (Desktops, Notebooks, Accessories)
5. Verify products are displayed for each category

**Expected Results:**
- "Computers" category page loads
- Subcategories are visible and clickable
- Each subcategory displays relevant products with images and prices
- Breadcrumb navigation shows correct path (Home > Computers > Subcategory)
- Page title updates to reflect current category

---

#### 2.2 Navigate Using Sidebar Categories
**Steps:**
1. Navigate to homepage
2. Locate the sidebar "Categories" section
3. Click on "Electronics"
4. Verify page navigates to Electronics category
5. Click on "Books" in the sidebar
6. Verify page navigates to Books category

**Expected Results:**
- Sidebar category links are functional
- Navigation updates page content correctly
- Products change based on selected category
- Active category is highlighted in sidebar

---

#### 2.3 Filter Products by Manufacturer
**Steps:**
1. Navigate to any product category page
2. Locate the "Manufacturers" section in sidebar
3. Click on "Tricentis" manufacturer filter
4. Verify products are filtered

**Expected Results:**
- Manufacturer filter is clickable
- Results are filtered to show only Tricentis products
- Page updates without full reload
- Filter can be cleared by clicking category again

---

### 3. Product Search and Discovery

#### 3.1 Perform Basic Search
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/search
2. In the "Search keyword" field, type "computer"
3. Click the "Search" button
4. Verify search results are displayed

**Expected Results:**
- Search page loads with input field
- Search accepts text input
- Results page displays products matching "computer"
- Results show product name, image, price, and reviews
- Number of results is reasonable (not 0, not excessive)

---

#### 3.2 Perform Advanced Search
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/search
2. Check the "Advanced search" checkbox
3. Verify additional search options appear (category, brand, price range, etc.)
4. Select "Electronics" category
5. Click Search button
6. Verify filtered results display

**Expected Results:**
- Advanced search checkbox is functional
- Additional filter options appear when checked
- Category filter works correctly
- Results are filtered based on selected criteria
- Can search by multiple criteria simultaneously

---

#### 3.3 Search with No Results
**Steps:**
1. Navigate to search page
2. Enter a non-existent product name (e.g., "xyznonexistentproduct12345")
3. Click Search button
4. Verify the no results message appears

**Expected Results:**
- Search completes without errors
- Clear message indicates no products found
- Search parameters are retained in search field
- User can modify search and try again

---

#### 3.4 Search with Special Characters
**Steps:**
1. Navigate to search page
2. Enter search term with special characters: "laptop & desktop"
3. Click Search button
4. Verify search handles special characters properly

**Expected Results:**
- Search accepts special characters without error
- Search processes correctly and returns valid results
- No JavaScript errors in console

---

### 4. Product Details and Information

#### 4.1 View Product Detail Page
**Steps:**
1. Navigate to homepage
2. Click on "14.1-inch Laptop" product
3. Verify product detail page loads with:
   - Product image
   - Product name
   - Description
   - Price
   - Availability status
   - Review count with link
   - Quantity selector
   - "Add to cart" button
   - Product specifications table
   - Related/recommended products
4. Verify breadcrumb navigation shows: Home > Computers > Notebooks > Product Name

**Expected Results:**
- Product detail page loads completely
- All product information is visible and accurate
- Product specifications are clearly displayed
- Images are visible and properly sized
- All buttons and links are functional
- Related products section shows 3+ products

---

#### 4.2 Verify Product Specifications Display
**Steps:**
1. Navigate to product detail page (14.1-inch Laptop)
2. Scroll to "Products specifications" section
3. Verify all specifications are displayed in a table format:
   - Screensize: 14.1''
   - CPU Type: Intel
   - Memory: 3 GB
   - Hardrive: 250 GB

**Expected Results:**
- Specifications table displays correctly
- All specification rows are visible
- Values match product information
- Table formatting is clear and readable

---

#### 4.3 View Product Reviews Section
**Steps:**
1. Navigate to product detail page
2. Click on review count link (e.g., "1466 review(s)")
3. Verify reviews page/section loads
4. Verify ability to add a new review

**Expected Results:**
- Review link is clickable
- Navigates to product reviews page
- Reviews are displayed with ratings and comments
- Option to submit new review is available
- Review form requires authentication for non-logged-in users

---

#### 4.4 Adjust Product Quantity
**Steps:**
1. Navigate to product detail page (14.1-inch Laptop)
2. Locate the "Qty:" field showing "1"
3. Click in the quantity field
4. Change quantity to "5"
5. Click "Add to cart" button
6. Verify cart updates

**Expected Results:**
- Quantity field accepts numeric input
- Can increase/decrease quantity
- "Add to cart" button works with modified quantity
- Cart counter updates to reflect added items

---

### 5. Shopping Cart Operations

#### 5.1 Empty Shopping Cart Display
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/cart (in fresh/logged-out state)
2. Verify cart page content

**Expected Results:**
- Shopping cart page loads
- Message "Your Shopping Cart is empty!" displays
- Checkout steps are visible but disabled (Cart, Address, Shipping, Payment, Confirm, Complete)
- Page title is "Shopping Cart"

---

#### 5.2 Add Single Product to Cart
**Steps:**
1. Navigate to product detail page (14.1-inch Laptop)
2. Set quantity to 1
3. Click "Add to cart" button
4. Verify success message or notification appears
5. Navigate to shopping cart page
6. Verify product appears in cart

**Expected Results:**
- Product successfully added to cart
- Cart counter in header updates to show (1)
- Product appears in cart with:
  - Product name (clickable)
  - Unit price ($1590.00)
  - Quantity (1)
  - Total price ($1590.00)
- Remove option is available

---

#### 5.3 Add Multiple Products to Cart
**Steps:**
1. Navigate to homepage
2. Click "Add to cart" for "$25 Virtual Gift Card"
3. Navigate to product detail for "Build your own computer"
4. Add with quantity 2
5. Navigate to shopping cart
6. Verify all products are listed

**Expected Results:**
- Multiple different products can be added to cart
- Cart displays all items with correct quantities and prices
- Cart subtotal is calculated correctly
- Each item shows remove option

---

#### 5.4 Modify Product Quantity in Cart
**Steps:**
1. Add "Build your own computer" (qty 1) to cart
2. Navigate to shopping cart
3. Change quantity from 1 to 3
4. Verify cart updates automatically or on save
5. Verify total price updates

**Expected Results:**
- Quantity field in cart is editable
- Cart updates quantity (automatic or on click of update button)
- Unit price remains the same
- Total price updates: $1200.00 x 3 = $3600.00
- Cart counter updates if applicable

---

#### 5.5 Remove Product from Cart
**Steps:**
1. Add 2 products to cart
2. Navigate to shopping cart
3. Click Remove button for one product
4. Verify product is removed from cart
5. Verify cart totals update

**Expected Results:**
- Remove button is available for each product
- Product is removed from cart immediately
- Cart is recalculated
- If cart becomes empty, empty message displays
- Cart counter updates in header

---

#### 5.6 Proceed to Checkout
**Steps:**
1. Add product to cart
2. Navigate to shopping cart page
3. Locate and click "Proceed to Checkout" button or similar
4. Verify checkout process begins

**Expected Results:**
- Proceed to Checkout button is visible and clickable
- Page navigates to checkout flow
- First step of checkout (Address or shipping) loads
- Page indicates step in process (e.g., "Step 1 of 5")

---

### 6. User Registration

#### 6.1 Access Registration Page
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/register
2. Verify page loads with registration form

**Expected Results:**
- Registration page title is "Register"
- Form displays with "Your Personal Details" section
- Form displays with "Your Password" section
- All required fields are marked with asterisk (*)
- Register button is present and clickable

---

#### 6.2 Register with Valid Information
**Steps:**
1. Navigate to registration page
2. Select gender: "Male" or "Female"
3. Enter First name: "John"
4. Enter Last name: "Doe"
5. Enter Email: "johndoe.test.uniqueid@example.com" (use unique email each test)
6. Enter Password: "Test@1234"
7. Enter Confirm password: "Test@1234"
8. Click Register button
9. Verify registration succeeds

**Expected Results:**
- Form accepts all input without validation errors
- Registration completes successfully
- User is logged in or redirected to login confirmation page
- Success message appears confirming registration
- New account can be used to login

**Assumptions:** Using unique email addresses to avoid duplicate account conflicts

---

#### 6.3 Register with Missing Required Fields
**Steps:**
1. Navigate to registration page
2. Leave "First name" field empty
3. Fill in all other required fields correctly
4. Click Register button
5. Verify validation error appears

**Expected Results:**
- Validation error message appears indicating missing First name
- Form does not submit
- User remains on registration page
- Error message is clear and indicates required field

---

#### 6.4 Register with Password Mismatch
**Steps:**
1. Navigate to registration page
2. Fill in personal details correctly
3. Enter Password: "Test@1234"
4. Enter Confirm password: "Test@5678" (different)
5. Click Register button
6. Verify validation error appears

**Expected Results:**
- Validation error appears indicating passwords don't match
- Form is not submitted
- User remains on registration page
- Error message clearly indicates password mismatch

---

#### 6.5 Register with Invalid Email Format
**Steps:**
1. Navigate to registration page
2. Fill in personal details
3. Enter Email: "invalidemail" (missing @domain)
4. Fill in password fields
5. Click Register button
6. Verify validation error appears

**Expected Results:**
- Email validation error appears
- Form is not submitted
- Error indicates valid email format required
- Field is highlighted or error message is displayed near field

---

#### 6.6 Duplicate Email Registration
**Steps:**
1. Register an account with email: "duplicate.test@example.com"
2. Verify registration succeeds
3. Attempt to register again with the same email: "duplicate.test@example.com"
4. Fill in different personal details but same email
5. Click Register button
6. Verify error message appears

**Expected Results:**
- System detects duplicate email
- Error message appears: "Email already exists"
- Form is not submitted
- User is informed account already exists with option to login instead

---

### 7. User Login

#### 7.1 Access Login Page
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/login
2. Verify page loads with login form

**Expected Results:**
- Login page title is "Welcome, Please Sign In!"
- Two sections visible: "New Customer" and "Returning Customer"
- Returning Customer section shows:
  - Email field
  - Password field
  - "Remember me?" checkbox
  - "Forgot password?" link
  - "Log in" button
- New Customer section shows Register button

---

#### 7.2 Login with Valid Credentials
**Steps:**
1. Register account with email: "validuser@example.com" and password: "Test@1234"
2. Logout or open new browser session
3. Navigate to login page
4. Enter Email: "validuser@example.com"
5. Enter Password: "Test@1234"
6. Click "Log in" button
7. Verify successful login

**Expected Results:**
- Login succeeds without errors
- User is redirected to homepage or customer account page
- Header navigation updates showing logged-in state
- Account menu or username appears in header
- Shopping cart and wishlist are now associated with account

---

#### 7.3 Login with Incorrect Password
**Steps:**
1. Navigate to login page
2. Enter Email: "validuser@example.com"
3. Enter Password: "WrongPassword123"
4. Click "Log in" button
5. Verify login fails with error

**Expected Results:**
- Login fails
- Error message appears: "Login was unsuccessful" or similar
- User remains on login page
- Form fields retain email address (except password)
- Password field is cleared for security

---

#### 7.4 Login with Non-existent Email
**Steps:**
1. Navigate to login page
2. Enter Email: "nonexistent@example.com"
3. Enter Password: "SomePassword123"
4. Click "Log in" button
5. Verify login fails with error

**Expected Results:**
- Login fails
- Error message appears
- User remains on login page
- No indication which field is incorrect (for security)

---

#### 7.5 Test Remember Me Checkbox
**Steps:**
1. Navigate to login page
2. Enter valid email and password
3. Check "Remember me?" checkbox
4. Click "Log in" button
5. Verify successful login
6. Close browser completely
7. Reopen browser and navigate to https://demowebshop.tricentis.com/
8. Verify user remains logged in (cookie/session persisted)

**Expected Results:**
- Remember me checkbox is selectable
- When checked, user session persists after browser close
- User is automatically logged in on return visit
- Or browser shows save password prompt

---

#### 7.6 Test Forgot Password Link
**Steps:**
1. Navigate to login page
2. Click "Forgot password?" link
3. Verify password recovery page loads

**Expected Results:**
- Link is clickable
- Navigates to password recovery page
- Page shows email input field for password reset
- Submit button is available

---

### 8. Product Wishlist

#### 8.1 View Empty Wishlist
**Steps:**
1. Navigate to https://demowebshop.tricentis.com/wishlist (in fresh/logged-out state)
2. Verify wishlist page content

**Expected Results:**
- Wishlist page loads
- Message "The wishlist is empty!" displays
- Wishlist counter in header shows (0)
- Navigation options available to browse products

---

#### 8.2 Add Product to Wishlist (Logged Out)
**Steps:**
1. Navigate to product detail page (14.1-inch Laptop)
2. Look for "Add to wishlist" or similar option/button
3. Click to add to wishlist
4. Verify action (may require login or create wishlist for session)

**Expected Results:**
- Wishlist button is present and clickable
- Either adds to wishlist (if session-based) or prompts to login
- Success message appears if added
- Wishlist counter updates if session-based

---

#### 8.3 Add Multiple Products to Wishlist (Logged In)
**Steps:**
1. Login to account
2. Navigate to product detail pages for different products
3. Click "Add to wishlist" for each product (add 3 different products)
4. Navigate to wishlist page
5. Verify all products appear

**Expected Results:**
- All products are successfully added to wishlist
- Wishlist page displays all added products
- Each product shows name, price, availability
- Option to move items to cart is available
- Option to remove items is available
- Wishlist counter shows correct count

---

#### 8.4 Move Item from Wishlist to Cart
**Steps:**
1. Add product to wishlist (logged in)
2. Navigate to wishlist page
3. Select product
4. Click "Add to cart" or similar button
5. Verify product moves to cart

**Expected Results:**
- Product is moved from wishlist to cart
- Product is removed from wishlist
- Cart counter updates
- Wishlist counter updates
- Success message confirms action

---

#### 8.5 Remove Product from Wishlist
**Steps:**
1. Add 2 products to wishlist
2. Navigate to wishlist page
3. Click Remove button for one product
4. Verify product is removed

**Expected Results:**
- Remove button is available for each product
- Product is removed from wishlist immediately
- Wishlist counter updates
- Remaining products are still displayed

---

### 9. Product Comparison

#### 9.1 Add Products to Compare List
**Steps:**
1. Navigate to product listing page or product detail
2. Click "Add to compare list" button on a product
3. Add 3-5 different products to compare list
4. Navigate to comparison page (https://demowebshop.tricentis.com/compareproducts)
5. Verify products display in comparison view

**Expected Results:**
- Compare buttons are available on products
- Products are successfully added to comparison list
- Comparison page displays selected products side-by-side
- Product details (specs, price, etc.) are visible for each product
- Columns are aligned for easy comparison

---

#### 9.2 Remove Product from Comparison
**Steps:**
1. Navigate to comparison page with 3+ products
2. Click Remove button for one product
3. Verify product is removed from comparison
4. Verify remaining products still display

**Expected Results:**
- Remove option is available
- Product is removed from comparison
- Comparison updates immediately
- Other products remain for comparison

---

### 10. Newsletter Subscription

#### 10.1 Subscribe to Newsletter (Valid Email)
**Steps:**
1. Navigate to homepage
2. Locate "Newsletter" section in sidebar
3. Enter email address: "subscriber@example.com"
4. Click "Subscribe" button
5. Verify subscription confirmation

**Expected Results:**
- Newsletter subscription field is visible on multiple pages
- Email field accepts valid email format
- Subscribe button is clickable
- Success message appears: "Newsletter subscription activated" or similar
- No error messages

---

#### 10.2 Subscribe with Invalid Email
**Steps:**
1. Navigate to homepage
2. Go to Newsletter section
3. Enter invalid email: "notanemail"
4. Click Subscribe button
5. Verify validation error

**Expected Results:**
- Validation error appears
- Form is not submitted
- Error message indicates valid email required
- Email field is highlighted or focused

---

#### 10.3 Subscribe with Empty Email Field
**Steps:**
1. Navigate to homepage
2. Go to Newsletter section
3. Leave email field empty
4. Click Subscribe button
5. Verify validation error

**Expected Results:**
- Validation error appears
- Form is not submitted
- Error indicates email is required

---

### 11. Community Poll

#### 11.1 Vote in Community Poll
**Steps:**
1. Navigate to homepage
2. Locate "Community poll" section
3. Verify poll question: "Do you like nopCommerce?"
4. Select radio button "Excellent"
5. Click "Vote" button
6. Verify vote is recorded

**Expected Results:**
- Poll is visible on homepage
- All radio options are selectable (Excellent, Good, Poor, Very bad)
- Vote button is clickable
- Success message appears after voting
- Poll results or confirmation message displays
- Cannot vote multiple times (or vote changes)

---

### 12. Product Tags Navigation

#### 12.1 Filter by Product Tag
**Steps:**
1. Navigate to homepage
2. Locate "Popular tags" section in sidebar
3. Click on tag "computer"
4. Verify products are filtered

**Expected Results:**
- Tag links are clickable
- Navigates to products with selected tag
- Products display with tag filter applied
- Products shown are relevant to tag selected
- Can click "View all" to see all tags

---

### 13. Contact Us

#### 13.1 Access Contact Form
**Steps:**
1. Navigate to footer
2. Click "Contact us" link
3. Verify contact page loads

**Expected Results:**
- Contact us page loads
- Contact form is visible with required fields
- Page title indicates contact information

---

#### 13.2 Submit Contact Form
**Steps:**
1. Navigate to contact page
2. Fill in form fields:
   - Email: "contactus@example.com"
   - Subject: "Test Inquiry"
   - Message: "This is a test message for the contact form"
3. Click Send/Submit button
4. Verify submission confirmation

**Expected Results:**
- Contact form accepts all input
- Form validation passes
- Submission succeeds
- Confirmation message appears
- User is redirected or notified of success

---

### 14. Navigation and Links

#### 14.1 Test Footer Information Links
**Steps:**
1. Navigate to homepage
2. Scroll to footer
3. Click each link in "Information" section:
   - Sitemap
   - Shipping & Returns
   - Privacy Notice
   - Conditions of Use
   - About us
   - Contact us
4. Verify each page loads correctly

**Expected Results:**
- All links are functional
- Each link navigates to correct page
- Pages load with appropriate content
- Page titles update correctly

---

#### 14.2 Test Footer Customer Service Links
**Steps:**
1. Navigate to homepage
2. Scroll to footer
3. Click each link in "Customer service" section:
   - Search
   - News
   - Blog
   - Recently viewed products
   - Compare products list
   - New products
4. Verify each page loads

**Expected Results:**
- All links are functional and clickable
- Pages load with appropriate content
- Navigation is correct
- User can return to previous page

---

#### 14.3 Test Footer My Account Links
**Steps:**
1. Login to account
2. Scroll to footer
3. Click each link in "My account" section:
   - My account
   - Orders
   - Addresses
   - Shopping cart
   - Wishlist
4. Verify each page loads with user data

**Expected Results:**
- All links are functional when logged in
- Links navigate to correct customer pages
- User's account information is displayed
- Pages show user-specific data

---

### 15. Search Box Functionality

#### 15.1 Test Search from Homepage
**Steps:**
1. Navigate to homepage
2. Locate search box in header
3. Type "book" in search box
4. Click Search button (or press Enter)
5. Verify results page loads

**Expected Results:**
- Search box is visible and accepts text input
- Search button is functional
- Results page shows products matching "book"
- Can search from any page using header search

---

#### 15.2 Test Search Auto-Complete/Suggestions
**Steps:**
1. Navigate to homepage
2. Click in search box
3. Begin typing "lappy"
4. Verify if auto-complete suggestions appear
5. Either select suggestion or complete typing

**Expected Results:**
- Search box accepts input
- If auto-complete exists, suggestions appear
- Can select suggestion or continue typing
- Search completes correctly

---

### 16. Edge Cases and Error Handling

#### 16.1 Navigate with Invalid URL
**Steps:**
1. In URL bar, navigate to: https://demowebshop.tricentis.com/invalid-page-12345
2. Verify page loads

**Expected Results:**
- Either shows 404 error page
- Or redirects to homepage
- Error message is user-friendly
- Links to navigate to valid pages are available

---

#### 16.2 Test Rapid Addition to Cart
**Steps:**
1. Navigate to product detail page
2. Rapidly click "Add to cart" button 5 times in succession
3. Verify cart behavior

**Expected Results:**
- Cart doesn't crash or error
- Either adds product 5 times or prevents duplicate rapid additions
- Cart counter updates correctly
- System handles rapid clicks gracefully

---

#### 16.3 Test with Large Quantity
**Steps:**
1. Navigate to product detail page
2. Change quantity to "999" or very large number
3. Click "Add to cart"
4. Verify system response

**Expected Results:**
- System either allows large quantity or shows validation error
- If validation error, message is clear
- Cart doesn't crash or error
- Quantity field has reasonable limit

---

#### 16.4 Test Session Timeout
**Steps:**
1. Login to account
2. Leave page idle for extended time (if session timeout configured)
3. Attempt to perform action (add to cart, submit form)
4. Verify system response

**Expected Results:**
- System either allows continued use
- Or redirects to login with message about session timeout
- User's cart is preserved
- Session timeout is handled gracefully

---

### 17. Performance and Load Testing

#### 17.1 Homepage Load Time
**Steps:**
1. Clear browser cache
2. Open DevTools Network tab
3. Navigate to https://demowebshop.tricentis.com/
4. Measure page load time
5. Record network requests and response times

**Expected Results:**
- Page loads in under 3-4 seconds
- All assets load successfully
- No 404 or failed requests
- Images load properly

---

#### 17.2 Product Listing Page Load
**Steps:**
1. Navigate to Computers category (multiple products)
2. Verify page renders with all products
3. Measure load time

**Expected Results:**
- Page loads within acceptable time
- All product images display
- Pagination works if multiple pages
- Filters don't cause page to freeze

---

### 18. Cross-Browser Compatibility (Suggested)

#### 18.1 Test on Chrome
**Steps:**
1. Use Google Chrome browser
2. Perform core workflows (browsing, searching, cart, checkout)
3. Verify functionality

**Expected Results:**
- All features work correctly in Chrome
- Page renders properly
- No JavaScript errors

---

#### 18.2 Test on Firefox
**Steps:**
1. Use Mozilla Firefox browser
2. Perform core workflows (browsing, searching, cart, checkout)
3. Verify functionality

**Expected Results:**
- All features work correctly in Firefox
- Page renders properly
- No JavaScript errors

---

#### 18.3 Test on Safari
**Steps:**
1. Use Safari browser
2. Perform core workflows
3. Verify functionality

**Expected Results:**
- All features work correctly in Safari
- Page renders properly
- No JavaScript errors

---

### 19. Mobile Responsiveness (Suggested)

#### 19.1 Test on Mobile Device (375px width)
**Steps:**
1. Open browser's developer tools
2. Toggle device toolbar/responsive design mode
3. Set viewport to mobile (375px width - iPhone size)
4. Navigate through key pages:
   - Homepage
   - Product listing
   - Product detail
   - Shopping cart
5. Verify layout and functionality

**Expected Results:**
- Layout adapts to mobile viewport
- All buttons are easily clickable (touch targets)
- Navigation is accessible on mobile
- Product images display properly
- Forms are usable on mobile

---

#### 19.2 Test on Tablet Device (768px width)
**Steps:**
1. Toggle responsive design mode
2. Set viewport to tablet (768px width - iPad size)
3. Navigate key pages
4. Verify layout and functionality

**Expected Results:**
- Layout adapts to tablet size
- Two-column or optimized layout displays
- All content is readable
- Forms are usable
- Navigation adapts appropriately

---

## Test Execution Notes

### Prerequisites for All Tests
- Clear browser cache and cookies before starting
- Use fresh test email addresses for registration to avoid duplicates
- Ensure JavaScript is enabled in browser
- Use valid email addresses that you have access to (for password recovery testing)

### Test Data Requirements
- Test email accounts (recommend using a pattern like: testuser.DDMMYYYY@example.com)
- Test passwords that meet requirements (if any)
- Various product categories to test browsing
- At least 2-3 products for wishlist and comparison testing

### Success Criteria
- All core workflows complete without errors
- No broken links or 404 errors
- Form validation works correctly
- Cart calculations are accurate
- User sessions persist appropriately
- No console JavaScript errors
- Page loads within acceptable time (under 4 seconds)

### Test Coverage Summary
- **Functional Testing**: 19 major scenario areas with 60+ individual test cases
- **Coverage Areas**: Navigation, Registration, Login, Product Browsing, Cart Management, Wishlist, Search, Forms, Links, and Edge Cases
- **User Types**: Unauthenticated users, new users, returning customers
- **Common Workflows**: Browse → Search → Select Product → Add to Cart → Checkout
- **Error Scenarios**: Invalid input, missing fields, duplicate accounts, failed login

