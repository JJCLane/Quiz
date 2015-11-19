<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);

        App\Quiz::create([
            'user_id' => 1,
            'name' => 'The awesome quiz',
            'desc' => 'Get ready to embark on the best quiz, OF YOUR LIFE!'
        ]);

        App\Question::create([
            'quiz_id' => 1,
            'question_type_id' => 1,
            'title' => 'Who wrote this wonderful Quiz?',
            'time_limit' => 10000
        ]);

        App\Answer::create([
            'question_id' => 1,
            'answer_type_id' => 1,
            'text' => 'Shane',
            'value' => 1,
            'correct' => true
        ]);

        App\Answer::create([
            'question_id' => 1,
            'answer_type_id' => 1,
            'text' => 'Bob',
            'value' => 1,
            'correct' => false
        ]);

        App\Answer::create([
            'question_id' => 1,
            'answer_type_id' => 1,
            'text' => 'Jordan',
            'value' => 1,
            'correct' => true
        ]);

        App\Answer::create([
            'question_id' => 1,
            'answer_type_id' => 1,
            'text' => 'Uncle Sam',
            'value' => 1,
            'correct' => false
        ]);

        Model::reguard();
    }
}
