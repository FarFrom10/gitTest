// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Строгий режим работает по умолчанию, насколько я понял
"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const answerLastMovie = prompt('Один из последних просмотренных фильмов?', ''),
	answerMovieRate = +prompt('На сколько оцените его?', ''),
	answerLastMovieCopy = prompt('Один из последних просмотренных фильмов?', ''),
	answerMovieRateCopy = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[answerLastMovie] = answerMovieRate;
personalMovieDB.movies[answerLastMovieCopy] = answerMovieRateCopy;

console.log(personalMovieDB);