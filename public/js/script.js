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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJzY3JpcHQuanMiLCJkZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2FnZTogbG9nKCdpbnNpZGUgY29vbEZ1bmMnLCB0aGlzLCBhcmd1bWVudHMpO1xuLy8gcGF1bGlyaXNoLmNvbS8yMDA5L2xvZy1hLWxpZ2h0d2VpZ2h0LXdyYXBwZXItZm9yLWNvbnNvbGVsb2cvXG53aW5kb3cubG9nID0gZnVuY3Rpb24gZigpeyBsb2cuaGlzdG9yeSA9IGxvZy5oaXN0b3J5IHx8IFtdOyBsb2cuaGlzdG9yeS5wdXNoKGFyZ3VtZW50cyk7IGlmKHRoaXMuY29uc29sZSkgeyB2YXIgYXJncyA9IGFyZ3VtZW50cywgbmV3YXJyOyBhcmdzLmNhbGxlZSA9IGFyZ3MuY2FsbGVlLmNhbGxlcjsgbmV3YXJyID0gW10uc2xpY2UuY2FsbChhcmdzKTsgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ29iamVjdCcpIGxvZy5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBuZXdhcnIpOyBlbHNlIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIG5ld2Fycik7fX07XG5cbi8vIG1ha2UgaXQgc2FmZSB0byB1c2UgY29uc29sZS5sb2cgYWx3YXlzXG4oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mb3IodmFyIGM9XCJhc3NlcnQsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsZ3JvdXBDb2xsYXBzZWQsZ3JvdXBFbmQsaW5mbyxsb2csbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZUVuZCx0aW1lLHRpbWVFbmQsdHJhY2Usd2FyblwiLnNwbGl0KFwiLFwiKSxkOyEhKGQ9Yy5wb3AoKSk7KXthW2RdPWFbZF18fGI7fX0pXG4oZnVuY3Rpb24oKXt0cnl7Y29uc29sZS5sb2coKTtyZXR1cm4gd2luZG93LmNvbnNvbGU7fWNhdGNoKGEpe3JldHVybiAod2luZG93LmNvbnNvbGU9e30pO319KCkpO1xuXG5cbi8vIHBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZSwgaW5zdGVhZCBvZiBzZXBhcmF0ZSwgc2xvd2VyIHNjcmlwdCBmaWxlcy5cblxuIiwiLy8gUXVpeiBvYmplY3RcbnZhciBBbnN3ZXJNdWx0aSA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6LWFuc3dlci1tdWx0aScsXG5cdHByb3BzOiBbJ3F1aXonXSxcblx0ZGF0YSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0XG5cdH1cbn0pO1xuXG52YXIgQW5zd2VyVGV4dCA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6LWFuc3dlci1pbnB1dCcsXG5cdHByb3BzOiBbJ3F1aXonXSxcblx0ZGF0YSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0XG5cdH1cbn0pO1xuXG4vLyBRdWl6IG9iamVjdFxudmFyIFF1ZXN0aW9uID0gVnVlLmV4dGVuZCh7XG5cdHRlbXBsYXRlOiAnI3F1aXotcXVlc3Rpb24nLFxuXHRwcm9wczogWydxdWl6J10sXG5cdGNvbXBvbmVudHM6IHtcblx0XHQncXVlc3Rpb25UZXh0JzogQW5zd2VyVGV4dCxcblx0XHQncXVlc3Rpb25NdWx0aSc6IEFuc3dlck11bHRpXG5cdH0sXG5cdGRhdGEgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cXVlc3Rpb25UeXBlQXJyOiB7XG5cdFx0XHRcdDE6ICdxdWVzdGlvbk11bHRpJyxcblx0XHRcdFx0MjogJ3F1ZXN0aW9uVGV4dCcsXG5cdFx0XHR9LFxuXHRcdFx0J3F1ZXN0aW9uVHlwZSc6IGZhbHNlLFxuXHRcdFx0J2N1cnJlbnRBbnN3ZXJUeXBlJzogJydcblx0XHR9O1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YWRkUXVlc3Rpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5xdWVzdGlvblR5cGUgPSB0cnVlO1xuXHRcdH0sXG5cdFx0dHlwZVNlbGVjdGVkOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnF1ZXN0aW9uVHlwZUFyclt0eXBlXSk7XG5cdFx0XHQgdGhpcy5jdXJyZW50QW5zd2VyVHlwZSA9IHRoaXMucXVlc3Rpb25UeXBlQXJyW3R5cGVdO1xuXHRcdH1cblx0fVxufSk7XG5cbi8vIFF1aXogb2JqZWN0XG52YXIgUXVpeiA9IFZ1ZS5leHRlbmQoe1xuXHR0ZW1wbGF0ZTogJyNxdWl6Jyxcblx0cHJvcHM6IFsncXVpeiddLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0J3F1ZXN0aW9uJzogUXVlc3Rpb25cblx0fSxcblx0ZGF0YSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQndGl0bGVMZW5ndGgnOiBudWxsXG5cdFx0fTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNoZWNrUXVpek5hbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5xdWl6Lm5hbWUubGVuZ3RoID4gNSkge1xuXHRcdFx0XHR0aGlzLnRpdGxlTGVuZ3RoID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLnRpdGxlTGVuZ3RoID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gcmVnaXN0ZXIgdGhlIGdyaWQgY29tcG9uZW50XG5cblxuLy8gQXBwIFxudmFyIGFwcCA9IG5ldyBWdWUoe1xuXHRlbDogJyNhcHAnLFxuXHRjb21wb25lbnRzOiB7XG5cdFx0J3F1aXonOiBRdWl6LFxuXHR9LFxuXHRkYXRhIDoge1xuXHRcdHF1aXo6IHtcblx0XHRcdCduYW1lJzogJycsXG5cdFx0XHQnZGF0ZSc6ICcnLFxuXHRcdFx0J3NvbWV0aGluZyc6ICcnXG5cdFx0fVxuXHR9XG59KTtcbiIsIiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
