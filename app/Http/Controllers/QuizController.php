<?php

namespace App\Http\Controllers;

class QuizController extends Controller
{
    public function index($id)
    {
        $quiz = \App\Quiz::find($id)->with('questions.answers')->firstOrFail();

        return $this->makeResponse('quiz.single', array('quiz' => $quiz));
    }
}