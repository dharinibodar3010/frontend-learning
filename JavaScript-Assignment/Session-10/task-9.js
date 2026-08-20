/*Given this object: const movie = { title: 'Jawan', rating: 4.5, genre: 'Action' }, use object destructuring 
to extract title and rating into separate variables and log them as 'Movie: Jawan, Rating: 4.5'.*/

const movie = {
    title: "Jawan",
    rating: 4.5,
    genre: "Action"
};


// Object destructuring
const { title, rating } = movie;


console.log(`Movie: ${title}, Rating: ${rating}`);