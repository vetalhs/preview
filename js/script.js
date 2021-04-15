"use strict";

let numberOfFilms;


function start(){

    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms(){
    for(let i = 0; i < numberOfFilms; i++){

        const a = prompt('Один из последних просмотренных фильмов','');
        const b = prompt('На сколько оцените его?','');
    
        if(a != null && b != null && a != '' && b != '' && a.length <= 50){
            personalMovieDB.movies[a] = b;
        } else{
                i--;
                }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (numberOfFilms < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30){
        alert('Вы класический зритель');
    } else if (numberOfFilms>30){
        alert('Вы киноман');
    } else {alert('Произошла ошибка');}
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYuorGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Какой ваш любимый жанр под номером ${i}`);
    }
}
writeYuorGenres();
