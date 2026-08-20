/*Convert function constructor into class.*/

class Movie {


    constructor(title, genre) {

        this.title = title;
        this.genre = genre;

    }


    display() {

        console.log(`${this.title} - ${this.genre}`);

    }


}


const movie = new Movie(
    "Jawan",
    "Action"
);


movie.display();