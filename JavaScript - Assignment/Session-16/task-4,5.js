/*Use the map() method to transform an array of Instagram post objects (each with a likes property) 
into a new array of just the like counts.*/

const posts = [

    {
        caption: "Post 1",
        likes: 120
    },

    {
        caption: "Post 2",
        likes: 250
    },

    {
        caption: "Post 3",
        likes: 500
    }

];


const likesCount = posts.map(post => post.likes);


console.log(likesCount);