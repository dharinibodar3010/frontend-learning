/*Write an arrow function called getFollowersSummary that takes any number of follower counts 
(using rest operator), sums them, and returns: Total followers: 1200*/

const getFollowersSummary = (...followers) => {

    let total = 0;

    for(let count of followers) {
        total += count;
    }

    return `Total followers: ${total}`;

};


console.log(getFollowersSummary(500, 300, 400));