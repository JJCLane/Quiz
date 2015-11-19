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

	<component :is="currentAnswerType">
	 
	</component>

</template>

<template id="quiz-answer-input">

	<br><br>

	<h2>Add text answer</h2>

	<input type="text" />

	<button>Sumbit</button>
	<button>Add another</button>

</template>

<template id="quiz-answer-multi">

	<br><br>

	<h2>Add multi answer</h2>

	<input type="text" />

	<button>Sumbit</button>
	<button>Add another</button>

</template>


<quiz v-bind:quiz.sync="quiz">

</quiz>

@stop