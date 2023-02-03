// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Строгий режим работает по умолчанию, насколько я понял
"use strict";


const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
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
		}
	},
	detectPersonaLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 1; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre == null || genre === '') {
				console.log('Вы ввели некорректные данные/оставили строку пустой');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
			// Альтернативный метод
			// let genres = prompt(`Введите ваши любимые жанры через запятую (с пробелом)`).toLowerCase();
			// if (genres == null || genres === '') {
			// 	console.log('Вы ввели некорректные данные/оставили строку пустой');
			// 	i--;
			// } else {
			// 	personalMovieDB.genres = genres.split(', ');
			// 	personalMovieDB.genres.sort();
			// }
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonaLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);





// Функция для подсчета общего кол-ва свойств объекта с вложенными объектами

// function objectCounter(object) {
// 	let mainObject = Object.keys(object).length;
// 	let subObject = 0;
// 	for (let i in object) {
// 		if (typeof (object[i]) === 'object') {
// 			subObject += Object.keys(object[i]).length;
// 		}
// 	}
// 	let totalObject = mainObject + subObject;
// 	console.log(`Общее кол-во свойств внутри объекта - ${totalObject}`);
// }

// objectCounter(options);


// Функция копирования

// function copy(mainObj) {
// 	let objCopy = {};

// 	for (let key in mainObj) {
// 		objCopy[key] = mainObj[key];
// 	}

// 	return objCopy;
// }


