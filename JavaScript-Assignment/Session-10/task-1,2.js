/*Create a function formatWelcomeMessage(userName, followers) that returns a string like 'Hello Rahul, 
you have 1200 followers!' using template literals. Call this function with your own name and any follower 
count, then log the result.*/

function formatWelcomeMessage(userName, followers) {

    return `Hello ${userName}, you have ${followers} followers!`;

}

let message = formatWelcomeMessage("Dharini", 1200);

console.log(message);