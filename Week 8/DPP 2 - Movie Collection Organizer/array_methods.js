let actionMovies=["race","dabbang","pathan","fast & furious"];
let dramaMovies=["jab we met","Humsafar","Jafa","Hum tum","Raabta","kabhi khushi kabhi gam","kuch kuch hota hai"];
let movieYears=["2012","2022","2024","2023","2015"];

//mergeMovies
function mergeMovies()
{
    console.log(actionMovies.concat(dramaMovies));
    //console.log(mergeMovies1);
}
mergeMovies();

function sortMovies()
{
    console.log(actionMovies.sort());
}
sortMovies();

function sortYears()
{
    console.log(movieYears.sort((a,b)=>a-b));
}
sortYears();

function displayMovies()
{
    dramaMovies.forEach(element => {
        console.log(element);
    });
}
displayMovies();

//map
function getUppercaseMovies()
{
    console.log(dramaMovies.map((res)=>res.toUpperCase()));
}
getUppercaseMovies();

//filter
function getMoviesWithThe()
{
   console.log(dramaMovies.filter((res)=>res.includes("Hum")));
   //console.log(res);
}
getMoviesWithThe();

//reduce
function getTotalTitleLength()
{
    console.log(dramaMovies.reduce((sum,movie)=>sum+movie.length,0));
}
getTotalTitleLength();

//reduceRight
function getConcatenatedTitles()
{
  console.log(actionMovies.reduceRight((acc,mov)=> acc + ' ' + mov, '').trim());
}
getConcatenatedTitles();

//every
function checkAllMoviesContainE()
{
   console.log(actionMovies.every((movie)=> movie.toLowerCase().includes('e')));
}
checkAllMoviesContainE();

//some
function checkAnyMovieContainsE()
{
    console.log(actionMovies.some((movie)=> movie.toLowerCase().includes('e')));
}
checkAnyMovieContainsE();

//indexOf
function findMovieIndex()
{
    console.log(actionMovies.indexOf("pathan"));
}
findMovieIndex();

//lastIndexOf
function findLastMovieIndex()
{
    console.log(dramaMovies.lastIndexOf("Raabta"));
}
findLastMovieIndex();

//find
function findLongTitleMovie()
{
    console.log(dramaMovies.find((movie)=>movie.length>10));
}
findLongTitleMovie();

//findeIndex
function findLongTitleMovieIndex()
{
    console.log(dramaMovies.findIndex((movie)=>movie.length>10));
}
findLongTitleMovieIndex();

//includes
function checkMovieInclusion()
{
    console.log(actionMovies.includes("pathan"));
}
checkMovieInclusion();