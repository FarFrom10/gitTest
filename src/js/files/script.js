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

for (let i = 0; i < 2; i++) {

	const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
	const movieRate = prompt('На сколько оцените его?', '');

	if (lastMovie != null && movieRate != null && lastMovie.length != '' && movieRate.length != '' && lastMovie.length < 50 && movieRate.length < 50) {
		personalMovieDB.movies[lastMovie] = movieRate;
		console.log('done');
	} else {
		i--;
		console.log('error');
	}

};

if (personalMovieDB.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);