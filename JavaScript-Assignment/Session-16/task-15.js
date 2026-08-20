/*Use one-liner alternative using map() and reduce() to calculate total transaction amount.*/

const transactions = [

    {
        amount: 500
    },

    {
        amount: 1000
    },

    {
        amount: 1500
    }

];


const totalSpent = transactions
    .map(transaction => transaction.amount)
    .reduce((total, amount) => total + amount, 0);


console.log(totalSpent);