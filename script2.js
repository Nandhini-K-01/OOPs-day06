//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments,
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var m1 = new Movie ("Casino Royale", "Eon Productions", "PG13");

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
var m1 = new Movie ("Casino Royale", "Eon Productions");
console.log(m1)

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movie){
        var mov1 = [];
        for (var i=0; i<movie.length; i++){
        if (m1.rating === "PG"){
            mov1.append(m1) ;
        }
    }
        return mov1;
    }
}


//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var m1 = new Movie ("Casino Royale", "Eon Productions", "PG13");
