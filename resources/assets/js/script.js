// Quiz object
var AnswerMulti = Vue.extend({
	template: '#quiz-answer-multi',
	props: ['quiz'],
	data : function() {
		return {
			
		};
	},
	methods: {
		
	}
});

var AnswerText = Vue.extend({
	template: '#quiz-answer-input',
	props: ['quiz'],
	data : function() {
		return {
			
		};
	},
	methods: {
		
	}
});

// Quiz object
var Question = Vue.extend({
	template: '#quiz-question',
	props: ['quiz'],
	components: {
		'questionText': AnswerText,
		'questionMulti': AnswerMulti
	},
	data : function() {
		return {
			questionTypeArr: {
				1: 'questionMulti',
				2: 'questionText',
			},
			'questionType': false,
			'currentAnswerType': ''
		};
	},
	methods: {
		addQuestion: function() {
			this.questionType = true;
		},
		typeSelected: function(type) {
			console.log(this.questionTypeArr[type]);
			 this.currentAnswerType = this.questionTypeArr[type];
		}
	}
});

// Quiz object
var Quiz = Vue.extend({
	template: '#quiz',
	props: ['quiz'],
	components: {
		'question': Question
	},
	data : function() {
		return {
			'titleLength': null
		};
	},
	methods: {
		checkQuizName: function() {
			if(this.quiz.name.length > 5) {
				this.titleLength = true;
			}
			else {
				this.titleLength = false;
			}
		}
	}
});

// register the grid component


// App 
var app = new Vue({
	el: '#app',
	components: {
		'quiz': Quiz,
	},
	data : {
		quiz: {
			'name': '',
			'date': '',
			'something': ''
		}
	}
});
