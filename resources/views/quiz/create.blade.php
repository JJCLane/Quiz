@extends('layout.master')

@section('content')

<template id="quiz">

	<div class="question">

		<form>

			<label class="question__label">Quiz name</label>
			<input type="text" class="question__input question__input--quiz-title" v-bind:class="{ 'error': !titleLength }" v-model="quiz.name" v-on:keyup="checkQuizName" />
	
			<question v-if='titleLength'></question>

		</form>

	</div><!-- .question -->

</template>

<template id="quiz-question">

	<button id="add-question" v-on:click.prevent="addQuestion">Add question</button>

	<div v-if="questionType">
		<button v-on:click.prevent="typeSelected(1)">Multi</button>
		<button v-on:click.prevent="typeSelected(2)">Text</text>
	</div>

	<div v-if="addQuestionBtn">
		<button v-on:click.prevent="addAnswer">Add answer</button>
	</div>

	<component v-for="answer in answers" :is="currentAnswerType">
	 
	</component>

</template>

<template id="quiz-answer-input">

	<div class="answer-input">

		<br>

		<h2>Add text answer</h2>

		<input type="text" v-model="textAnswerInput" />

		<button v-on:click.prevent="submitTextQ">Submit</button>

	</div>

</template>

<template id="quiz-answer-multi">

	<div class="answer-input">

		<br>

		<h2>Add multi answer</h2>

		<input type="text" />

		<label>Correct Answer</label>
		<input type="checkbox" v-model="textAnswerCorrect" />

		<button>Submit</button>

	</div>

</template>


<quiz v-bind:quiz.sync="quiz">

</quiz>

@stop