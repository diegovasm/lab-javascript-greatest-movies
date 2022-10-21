// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){

    let array;
    if(!moviesArray){

        array = moviesArray.map(() => directorArray);
    }else{
        array = moviesArray.map(directorArray => directorArray.director);
    }

    return array;

}   

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let tempReturn, countSpielbergArray, countDramaMovie = 0;
    let spielbergArray;

    spielbergArray = moviesArray.filter(spielbergArray => spielbergArray.director == "Steven Spielberg"
     && spielbergArray.genre.includes("Drama"));

    countSpielbergArray = spielbergArray.length;

    

    if(!(moviesArray || moviesArray.length)){

        tempReturn = 0;

    }else if(countSpielbergArray){
        
        tempReturn = countSpielbergArray;

    }else if(countSpielbergArray == 0){
            
        tempReturn = countSpielbergArray;


    }else if(countSpielbergArray == 2){

        tempReturn = countSpielbergArray;

    }else{
        
        
        tempReturn = 4;

    }
    
    return tempReturn;

}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    let scoresAverage = 0; 
    let tempData = 0;  
  
    if(!moviesArray){
  
        tempData = 0;
  
    }else {

        scoresAverage = moviesArray.reduce(function(score, current){

            return (score+current.score);
        
        },0);

        tempData = scoresAverage/moviesArray.length.toFixed(2);
        
        
    }

    return tempData;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaArray = [];
    let averageDrama;

    if(!moviesArray){
      averageDrama = 0;
    }else{
      
      dramaArray = moviesArray.filter((movies => movies.genre == "Drama"),0);
      
      averageDrama = dramaArray.reduce(function(initial, currentDrama){
        
          return initial + currentDrama.score;
      },0);
      
    }
    
    return (averageDrama/dramaArray.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArray;

    if(!moviesArray){

        newArray = [];
    }else{

        newArray = moviesArray.slice();
        newArray.sort(function(a, b){

            if(a.year < b.year) return -1;
            if(a.year > b.year) return 1;
            if(a.year === b.year) return 0;

        })
        newArray.sort(function(a,b){

            if(a.year === b.year){
                if(a.title < b.title) return -1;
                if(a.title > b.title) return 1;
            }
        })
    }

    return newArray;
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let orderedArray = moviesArray.slice();
    let stringArray = [];
    
    if(!moviesArray){

        stringArray = [];
    }else{

        orderedArray.sort(function(a,b){


            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;

        })

        for(let i = 0; i < 20; i++){

            stringArray.push(orderedArray[i].title);

        }

    }

    return stringArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
