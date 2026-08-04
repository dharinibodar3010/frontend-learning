/*Use reduce() to calculate total Instagram likes.*/

const posts = [

    {
        likes: 200
    },

    {
        likes: 400
    },

    {
        likes: 300
    }

];


const totalLikes = posts.reduce((sum, post) => {

    return sum + post.likes;

}, 0);


console.log(totalLikes);