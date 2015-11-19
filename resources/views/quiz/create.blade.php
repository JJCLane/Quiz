@extends('layout.master')

@section('content')

<div class="question">

	<form>

		<label class="question__label">Quiz name</label>
		<input type="text" name="quiz_name" class="question__input question__input--quiz-title" />

		<button id="add-question">Add question</button>

		<div class="question__content">

		</div><!-- .question__content -->

	</form>

	<div class="question__add">

	</div><!-- .question__add -->

</div><!-- .question -->

@stop