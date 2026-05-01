# What is CSS?
- CSS stands for Cascading Style Sheets
- CSS is used to add style and design to web pages (colors, layout, fonts, spacing, etc.)
# What is Cascading?
- Cascading means priority system of CSS rules — when multiple styles are applied to the same element, the browser decides which one to use.
- Styles are applied based on priority (top → bottom / high → low importance)

**Example priority:**
- Inline CSS (highest)
- Internal CSS
- External CSS
- Browser default (lowest)

- So, cascading is not step-by-step styling, it is about which style wins (priority system)

# Types of CSS
1. Inline CSS
- Written inside HTML tag

**Example:**
- <p style="color: red;">Hello</p>

2. Internal CSS
- Written inside <style> tag in <head>
**Example:**
- <style>
  p { color: blue; }
  </style>

3. External CSS
- Written in separate .css file

**Example:**
- <link rel="stylesheet" href="style.css">

# What is CSS Selector?
- CSS Selector is used to select (target) HTML elements to apply styles

# Types of CSS Selectors
1. Simple Selectors
- Element selector → p, h1
- Universal selector → *
- ID selector → #id
- Class selector → .class

2. Combinator Selectors
- Descendant selector (space) → div p
- Child selector (>) → div > p
- Adjacent sibling (+) → h1 + p
- General sibling (~) → h1 ~ p

3. Attribute Selector
- Select elements using attributes
**Example:**
input[type="text"]

4. Pseudo-class Selector
- Used for special states
**Example:**
a:hover

5. Pseudo-element Selector
- Used to style specific part of element
**Example:**
p::first-letter

6. Grouping Selector
- Apply same style to multiple elements
**Example:**
h1, p, div

# Final Short Definition (Exam Ready)
- CSS → Used to style web pages
- Cascading → Priority system of CSS
- Selector → Used to target HTML elements