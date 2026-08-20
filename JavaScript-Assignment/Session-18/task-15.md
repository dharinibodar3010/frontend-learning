# Task 15

## Question:
Copy a real error message you get from your browser console (from any of the above tasks) and paste it into ChatGPT. Ask ChatGPT to explain what the error means and suggest how to fix it. Write down the explanation in your own words.

## Error Message:
TypeError: Cannot read properties of null (reading 'addEventListener')


## Explanation:

This error means that JavaScript is trying to use `addEventListener()` on an element that was not found in the HTML document.  
The value of that element is `null`, which means the browser could not find the required HTML element.  
This usually happens when the element ID or class name is incorrect, or when JavaScript runs before the HTML page is fully loaded.  

## Solution:

- Check that the HTML element ID or class name is correct.
- Make sure the JavaScript file loads after the HTML content.
- Use the `defer` attribute in the script tag to load JavaScript after HTML parsing.

Example:

```html
<script src="script.js" defer></script>