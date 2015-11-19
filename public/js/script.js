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
	props: ['quiz'],
	data : function() {
		return {
			textAnswerInput: ''
		};
	},
	methods: {
		submitTextQ: function() {
			textAnswerInput = this.textAnswerInput;
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
			'something': ''
		}
	}
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJzY3JpcHQuanMiLCJkZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNhZ2U6IGxvZygnaW5zaWRlIGNvb2xGdW5jJywgdGhpcywgYXJndW1lbnRzKTtcbi8vIHBhdWxpcmlzaC5jb20vMjAwOS9sb2ctYS1saWdodHdlaWdodC13cmFwcGVyLWZvci1jb25zb2xlbG9nL1xud2luZG93LmxvZyA9IGZ1bmN0aW9uIGYoKXsgbG9nLmhpc3RvcnkgPSBsb2cuaGlzdG9yeSB8fCBbXTsgbG9nLmhpc3RvcnkucHVzaChhcmd1bWVudHMpOyBpZih0aGlzLmNvbnNvbGUpIHsgdmFyIGFyZ3MgPSBhcmd1bWVudHMsIG5ld2FycjsgYXJncy5jYWxsZWUgPSBhcmdzLmNhbGxlZS5jYWxsZXI7IG5ld2FyciA9IFtdLnNsaWNlLmNhbGwoYXJncyk7IGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09ICdvYmplY3QnKSBsb2cuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgbmV3YXJyKTsgZWxzZSBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBuZXdhcnIpO319O1xuXG4vLyBtYWtlIGl0IHNhZmUgdG8gdXNlIGNvbnNvbGUubG9nIGFsd2F5c1xuKGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9Zm9yKHZhciBjPVwiYXNzZXJ0LGNvdW50LGRlYnVnLGRpcixkaXJ4bWwsZXJyb3IsZXhjZXB0aW9uLGdyb3VwLGdyb3VwQ29sbGFwc2VkLGdyb3VwRW5kLGluZm8sbG9nLG1hcmtUaW1lbGluZSxwcm9maWxlLHByb2ZpbGVFbmQsdGltZSx0aW1lRW5kLHRyYWNlLHdhcm5cIi5zcGxpdChcIixcIiksZDshIShkPWMucG9wKCkpOyl7YVtkXT1hW2RdfHxiO319KVxuKGZ1bmN0aW9uKCl7dHJ5e2NvbnNvbGUubG9nKCk7cmV0dXJuIHdpbmRvdy5jb25zb2xlO31jYXRjaChhKXtyZXR1cm4gKHdpbmRvdy5jb25zb2xlPXt9KTt9fSgpKTtcblxuXG4vLyBwbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUsIGluc3RlYWQgb2Ygc2VwYXJhdGUsIHNsb3dlciBzY3JpcHQgZmlsZXMuXG5cbiIsIi8vIFF1aXogb2JqZWN0XG52YXIgQW5zd2VyTXVsdGkgPSBWdWUuZXh0ZW5kKHtcblx0dGVtcGxhdGU6ICcjcXVpei1hbnN3ZXItbXVsdGknLFxuXHRwcm9wczogWydxdWl6J10sXG5cdGRhdGEgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0XG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdFxuXHR9XG59KTtcblxudmFyIEFuc3dlclRleHQgPSBWdWUuZXh0ZW5kKHtcblx0dGVtcGxhdGU6ICcjcXVpei1hbnN3ZXItaW5wdXQnLFxuXHRwcm9wczogWydxdWl6J10sXG5cdGRhdGEgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dEFuc3dlcklucHV0OiAnJ1xuXHRcdH07XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRzdWJtaXRUZXh0UTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0ZXh0QW5zd2VySW5wdXQgPSB0aGlzLnRleHRBbnN3ZXJJbnB1dDtcblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBRdWl6IG9iamVjdFxudmFyIFF1ZXN0aW9uID0gVnVlLmV4dGVuZCh7XG5cdHRlbXBsYXRlOiAnI3F1aXotcXVlc3Rpb24nLFxuXHRwcm9wczogWydxdWl6J10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHQncXVlc3Rpb25UZXh0JzogQW5zd2VyVGV4dCxcblx0XHQncXVlc3Rpb25NdWx0aSc6IEFuc3dlck11bHRpXG5cdH0sXG5cdGRhdGEgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cXVlc3Rpb25UeXBlQXJyOiB7XG5cdFx0XHRcdDE6ICdxdWVzdGlvbk11bHRpJyxcblx0XHRcdFx0MjogJ3F1ZXN0aW9uVGV4dCcsXG5cdFx0XHR9LFxuXHRcdFx0J2Fuc3dlcnMnOiBbXSxcblx0XHRcdCdxdWVzdGlvblR5cGUnOiBmYWxzZSxcblx0XHRcdCdhZGRRdWVzdGlvbkJ0bic6IGZhbHNlLFxuXHRcdFx0J2N1cnJlbnRBbnN3ZXJUeXBlJzogJycsXG5cdFx0XHQnY3VycmVudElkJzogMVxuXHRcdH07XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRhZGRRdWVzdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uVHlwZSA9IHRydWU7XG5cdFx0fSxcblx0XHR0eXBlU2VsZWN0ZWQ6IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdHRoaXMuYW5zd2VycyA9IFtdO1xuXHRcdFx0dGhpcy5hZGRRdWVzdGlvbkJ0biA9IHRydWU7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnF1ZXN0aW9uVHlwZUFyclt0eXBlXSk7XG5cdFx0XHR0aGlzLmN1cnJlbnRBbnN3ZXJUeXBlID0gdGhpcy5xdWVzdGlvblR5cGVBcnJbdHlwZV07XG5cdFx0fSxcblx0XHRhZGRBbnN3ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5hbnN3ZXJzLnB1c2goe2lkOiB0aGlzLmN1cnJlbnRJZH0pO1xuXHRcdFx0dGhpcy5jdXJyZW50SWQrKztcblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBRdWl6IG9iamVjdFxudmFyIFF1aXogPSBWdWUuZXh0ZW5kKHtcblx0dGVtcGxhdGU6ICcjcXVpeicsXG5cdHByb3BzOiBbJ3F1aXonXSxcblx0Y29tcG9uZW50czoge1xuXHRcdCdxdWVzdGlvbic6IFF1ZXN0aW9uXG5cdH0sXG5cdGRhdGEgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0J3RpdGxlTGVuZ3RoJzogbnVsbFxuXHRcdH07XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRjaGVja1F1aXpOYW1lOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMucXVpei5uYW1lLmxlbmd0aCA+IDUpIHtcblx0XHRcdFx0dGhpcy50aXRsZUxlbmd0aCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy50aXRsZUxlbmd0aCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG5cbi8vIHJlZ2lzdGVyIHRoZSBncmlkIGNvbXBvbmVudFxuXG5cbi8vIEFwcCBcbnZhciBhcHAgPSBuZXcgVnVlKHtcblx0ZWw6ICcjYXBwJyxcblx0Y29tcG9uZW50czoge1xuXHRcdCdxdWl6JzogUXVpeixcblx0fSxcblx0ZGF0YSA6IHtcblx0XHRxdWl6OiB7XG5cdFx0XHQnbmFtZSc6ICcnLFxuXHRcdFx0J2RhdGUnOiAnJyxcblx0XHRcdCdzb21ldGhpbmcnOiAnJ1xuXHRcdH1cblx0fVxufSk7XG4iLCIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
