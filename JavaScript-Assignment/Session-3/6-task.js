function isEligibleForDiscount(totalAmount){

    return totalAmount >= 500;

}

console.log(isEligibleForDiscount(300));
console.log(isEligibleForDiscount(700));