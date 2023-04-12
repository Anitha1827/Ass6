class Movie{
constructor(title, studio,rating){
    this.title = title;
    this.studio = studio;
    this.rating = rating || 'PG' ;
}
showmovie(){
    return `Movie deatil is ${this.title},${this.studio},${this.rating}`;
}
movieObj(){
    return ( {
         title:this.title,
         studio:this.studio,
         rating:this.rating
    })
}
getPG(array){
let data = array.filter(array=>array.rating == "PG");
console.log(data.map(a=>a.tit));
   
}
}
var movies = new Movie("Casino Royale","Eon Productions");
console.log(movies.showmovie());

let movie1 = new Movie("yajamana","Orian Mall","PG5");
let movie2 = new Movie("KGF","Sampige","PG20");
let movie3 = new Movie("Dia","XYZ","PG25");
let array = []
array.push(movie1.movieObj());
array.push(movie2.movieObj());
array.push(movie3.movieObj());
console.log(array)
