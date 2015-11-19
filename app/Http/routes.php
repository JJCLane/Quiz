<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/quiz/create', function() {
	return view('quiz.create');
});

Route::get('/quiz/{id}', array(
	'uses' => 'QuizController@index'
));

Route::get('/question/create', function() {
	return view('question.create');
});
