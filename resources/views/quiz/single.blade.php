@extends('layout.master')

@section('content')

<div class="question">

	<h1>{{$quiz->name}}</h1>
	<p>{{$quiz->desc}}</p>
	<p>Quiz master: {{$quiz->user_id}}</p>
	<p>Created at: {{$quiz->created_at}}<p>
	<h2>Questions (Total {{count($quiz->questions)}})</h2>

	@foreach($quiz->questions as $question)

		<h3>{{$question->title}}</h3>
		<p>Time limit: {{$question->time_limit}}</p>

		<h2>Answers (Total {{count($question->answers)}})</h2>

		@foreach($question->answers as $answer)
			<label>
				{{$answer->text}}
				<input type="radio" name="q-{{$question->id}}" value="{{$answer->value}}">
			</label>

		@endforeach

	@endforeach

</div><!-- .question -->

@stop