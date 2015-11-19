@extends('layout.master')

@section('content')

@if(Auth::check())
	<p>Login information: {{Auth::user()}}</p>
@endif
<ul>
	<li>Add quiz</li>
</ul>

@stop
