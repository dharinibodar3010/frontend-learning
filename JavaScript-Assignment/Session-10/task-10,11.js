/*You have two arrays:

const cricketFans = ['Virat', 'Rohit']; 
const footballFans = ['Messi', 'Ronaldo'];

Use the spread operator to combine both arrays into a single array called allFans and log the result.*/

const cricketFans = ["Virat", "Rohit"];

const footballFans = ["Messi", "Ronaldo"];


// Spread operator
const allFans = [...cricketFans, ...footballFans];


console.log(allFans);