/* 

Create an object constructor for movies that includes properties for title,
director, writer, release date, and motion picture rating. Include a trailer() method
that prints “[movie name], written by [writer] and directed by [director],
will be released on [release date].” Include an audience() method that
prints “For audiences above the age of 16.” if the rating is R, “For audiences
above the age of 12.” if the rating is PG-13, “Parental guidance suggested” if
the rating is PG, and “For general audiences.” if the rating is G.

*/

// Movie Constructor here

var Movie = function(title, director, writer, released, rating) {
    this.title = title;
    this.director = director;
    this.writer = writer;
    this.released = released;
    this.rating = rating;

    // trailer method

    this.trailer = function() {
        document.write(title + '. Written by: ' + writer + ' and directed by: ' + director + ', will be released on: ' + released + '.');
    }

    // audience method

    this.audience = function() {
        switch(rating) {
            case 'R':
            document.write('For audiences above the age of 16.');
            break
            case 'PG-13':
            document.write('For audiences above the age of 12.');
            break
            case 'PG':
            document.write('Parental guidance suggested');
            break
            case 'G':
            document.write('For general audiences.');
            break     
        };
    }; 
};

// test case:

var theImitationGame = new Movie('The Imitation Game', 'Morten Tyldum', 'Graham Moore & Andrew Hodges', 'December 25th 2014', 'PG-13');