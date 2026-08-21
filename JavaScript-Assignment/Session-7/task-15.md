# Event Flow in the DOM

## Question

**Briefly explain (in 2-3 sentences) what event flow is in the DOM, and
give one example of how event bubbling could affect a shopping cart app
like Flipkart.**

## Answer

**Event Flow** is the order in which an event travels through the DOM.
It has three phases:

1.  **Capturing Phase**
2.  **Target Phase**
3.  **Bubbling Phase**

### Example

In a Flipkart shopping cart app, when a user clicks the **"Add to
Cart"** button inside a product card, the click event first runs on the
button and then bubbles up to the parent product card. If the parent
card also has a click event (such as opening the product details page),
both events may execute unless event bubbling is stopped using
`event.stopPropagation()`.
