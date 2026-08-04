function getBadge(followers){

    return followers >= 1000 
    ? "Verified Creator ⭐" 
    : "Regular User";

}

console.log(getBadge(1200));
console.log(getBadge(500));