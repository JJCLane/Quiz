// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


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
	props: ['questions'],
	data : function() {
		return {
			textAnswerInput: ''
		};
	},
	methods: {
		submitTextQ: function() {
			this.questions.push({
				text: this.textAnswerInput,
				correct: true,
				value: 1
			});
			console.log(this.questions);
		}
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
			'answers': [],
			'questionType': false,
			'addQuestionBtn': false,
			'currentAnswerType': '',
			'currentId': 1
		};
	},
	methods: {
		addQuestion: function() {
			this.questionType = true;
		},
		typeSelected: function(type) {
			this.answers = [];
			this.addQuestionBtn = true;
			console.log(this.questionTypeArr[type]);
			this.currentAnswerType = this.questionTypeArr[type];
		},
		addAnswer: function() {
			this.answers.push({id: this.currentId});
			this.currentId++;
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
			'something': '',
			'questions': [
			]
		}
	}
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJzY3JpcHQuanMiLCJkZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25IQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2FnZTogbG9nKCdpbnNpZGUgY29vbEZ1bmMnLCB0aGlzLCBhcmd1bWVudHMpO1xuLy8gcGF1bGlyaXNoLmNvbS8yMDA5L2xvZy1hLWxpZ2h0d2VpZ2h0LXdyYXBwZXItZm9yLWNvbnNvbGVsb2cvXG53aW5kb3cubG9nID0gZnVuY3Rpb24gZigpeyBsb2cuaGlzdG9yeSA9IGxvZy5oaXN0b3J5IHx8IFtdOyBsb2cuaGlzdG9yeS5wdXNoKGFyZ3VtZW50cyk7IGlmKHRoaXMuY29uc29sZSkgeyB2YXIgYXJncyA9IGFyZ3VtZW50cywgbmV3YXJyOyBhcmdzLmNhbGxlZSA9IGFyZ3MuY2FsbGVlLmNhbGxlcjsgbmV3YXJyID0gW10uc2xpY2UuY2FsbChhcmdzKTsgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ29iamVjdCcpIGxvZy5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBuZXdhcnIpOyBlbHNlIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIG5ld2Fycik7fX07XG5cbi8vIG1ha2UgaXQgc2FmZSB0byB1c2UgY29uc29sZS5sb2cgYWx3YXlzXG4oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mb3IodmFyIGM9XCJhc3NlcnQsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsZ3JvdXBDb2xsYXBzZWQsZ3JvdXBFbmQsaW5mbyxsb2csbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZUVuZCx0aW1lLHRpbWVFbmQsdHJhY2Usd2FyblwiLnNwbGl0KFwiLFwiKSxkOyEhKGQ9Yy5wb3AoKSk7KXthW2RdPWFbZF18fGI7fX0pXG4oZnVuY3Rpb24oKXt0cnl7Y29uc29sZS5sb2coKTtyZXR1cm4gd2luZG93LmNvbnNvbGU7fWNhdGNoKGEpe3JldHVybiAod2luZG93LmNvbnNvbGU9e30pO319KCkpO1xuXG5cbi8vIHBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZSwgaW5zdGVhZCBvZiBzZXBhcmF0ZSwgc2xvd2VyIHNjcmlwdCBmaWxlcy5cblxuIiwiLy8gUXVpeiBvYmplY3RcbnZhciBBbnN3ZXJNdWx0aSA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6LWFuc3dlci1tdWx0aScsXG5cdHByb3BzOiBbJ3F1aXonXSxcblx0ZGF0YSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0XG5cdH1cbn0pO1xuXG52YXIgQW5zd2VyVGV4dCA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6LWFuc3dlci1pbnB1dCcsXG5cdHByb3BzOiBbJ3F1ZXN0aW9ucyddLFxuXHRkYXRhIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHRBbnN3ZXJJbnB1dDogJydcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0c3VibWl0VGV4dFE6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5xdWVzdGlvbnMucHVzaCh7XG5cdFx0XHRcdHRleHQ6IHRoaXMudGV4dEFuc3dlcklucHV0LFxuXHRcdFx0XHRjb3JyZWN0OiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogMVxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnF1ZXN0aW9ucyk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gUXVpeiBvYmplY3RcbnZhciBRdWVzdGlvbiA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6LXF1ZXN0aW9uJyxcblx0cHJvcHM6IFsncXVpeiddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0J3F1ZXN0aW9uVGV4dCc6IEFuc3dlclRleHQsXG5cdFx0J3F1ZXN0aW9uTXVsdGknOiBBbnN3ZXJNdWx0aVxuXHR9LFxuXHRkYXRhIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHF1ZXN0aW9uVHlwZUFycjoge1xuXHRcdFx0XHQxOiAncXVlc3Rpb25NdWx0aScsXG5cdFx0XHRcdDI6ICdxdWVzdGlvblRleHQnLFxuXHRcdFx0fSxcblx0XHRcdCdhbnN3ZXJzJzogW10sXG5cdFx0XHQncXVlc3Rpb25UeXBlJzogZmFsc2UsXG5cdFx0XHQnYWRkUXVlc3Rpb25CdG4nOiBmYWxzZSxcblx0XHRcdCdjdXJyZW50QW5zd2VyVHlwZSc6ICcnLFxuXHRcdFx0J2N1cnJlbnRJZCc6IDFcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YWRkUXVlc3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5xdWVzdGlvblR5cGUgPSB0cnVlO1xuXHRcdH0sXG5cdFx0dHlwZVNlbGVjdGVkOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHR0aGlzLmFuc3dlcnMgPSBbXTtcblx0XHRcdHRoaXMuYWRkUXVlc3Rpb25CdG4gPSB0cnVlO1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5xdWVzdGlvblR5cGVBcnJbdHlwZV0pO1xuXHRcdFx0dGhpcy5jdXJyZW50QW5zd2VyVHlwZSA9IHRoaXMucXVlc3Rpb25UeXBlQXJyW3R5cGVdO1xuXHRcdH0sXG5cdFx0YWRkQW5zd2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYW5zd2Vycy5wdXNoKHtpZDogdGhpcy5jdXJyZW50SWR9KTtcblx0XHRcdHRoaXMuY3VycmVudElkKys7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gUXVpeiBvYmplY3RcbnZhciBRdWl6ID0gVnVlLmV4dGVuZCh7XG5cdHRlbXBsYXRlOiAnI3F1aXonLFxuXHRwcm9wczogWydxdWl6J10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHQncXVlc3Rpb24nOiBRdWVzdGlvblxuXHR9LFxuXHRkYXRhIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdCd0aXRsZUxlbmd0aCc6IG51bGxcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Y2hlY2tRdWl6TmFtZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnF1aXoubmFtZS5sZW5ndGggPiA1KSB7XG5cdFx0XHRcdHRoaXMudGl0bGVMZW5ndGggPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMudGl0bGVMZW5ndGggPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG4vLyByZWdpc3RlciB0aGUgZ3JpZCBjb21wb25lbnRcblxuXG4vLyBBcHAgXG52YXIgYXBwID0gbmV3IFZ1ZSh7XG5cdGVsOiAnI2FwcCcsXG5cdGNvbXBvbmVudHM6IHtcblx0XHQncXVpeic6IFF1aXosXG5cdH0sXG5cdGRhdGEgOiB7XG5cdFx0cXVpejoge1xuXHRcdFx0J25hbWUnOiAnJyxcblx0XHRcdCdkYXRlJzogJycsXG5cdFx0XHQnc29tZXRoaW5nJzogJycsXG5cdFx0XHQncXVlc3Rpb25zJzogW1xuXHRcdFx0XVxuXHRcdH1cblx0fVxufSk7XG4iLCIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
