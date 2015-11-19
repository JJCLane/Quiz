// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMuanMiLCJzY3JpcHQuanMiLCJkZXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUNBQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2FnZTogbG9nKCdpbnNpZGUgY29vbEZ1bmMnLCB0aGlzLCBhcmd1bWVudHMpO1xuLy8gcGF1bGlyaXNoLmNvbS8yMDA5L2xvZy1hLWxpZ2h0d2VpZ2h0LXdyYXBwZXItZm9yLWNvbnNvbGVsb2cvXG53aW5kb3cubG9nID0gZnVuY3Rpb24gZigpeyBsb2cuaGlzdG9yeSA9IGxvZy5oaXN0b3J5IHx8IFtdOyBsb2cuaGlzdG9yeS5wdXNoKGFyZ3VtZW50cyk7IGlmKHRoaXMuY29uc29sZSkgeyB2YXIgYXJncyA9IGFyZ3VtZW50cywgbmV3YXJyOyBhcmdzLmNhbGxlZSA9IGFyZ3MuY2FsbGVlLmNhbGxlcjsgbmV3YXJyID0gW10uc2xpY2UuY2FsbChhcmdzKTsgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ29iamVjdCcpIGxvZy5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBuZXdhcnIpOyBlbHNlIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIG5ld2Fycik7fX07XG5cbi8vIG1ha2UgaXQgc2FmZSB0byB1c2UgY29uc29sZS5sb2cgYWx3YXlzXG4oZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mb3IodmFyIGM9XCJhc3NlcnQsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsZ3JvdXBDb2xsYXBzZWQsZ3JvdXBFbmQsaW5mbyxsb2csbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZUVuZCx0aW1lLHRpbWVFbmQsdHJhY2Usd2FyblwiLnNwbGl0KFwiLFwiKSxkOyEhKGQ9Yy5wb3AoKSk7KXthW2RdPWFbZF18fGI7fX0pXG4oZnVuY3Rpb24oKXt0cnl7Y29uc29sZS5sb2coKTtyZXR1cm4gd2luZG93LmNvbnNvbGU7fWNhdGNoKGEpe3JldHVybiAod2luZG93LmNvbnNvbGU9e30pO319KCkpO1xuXG5cbi8vIHBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZSwgaW5zdGVhZCBvZiBzZXBhcmF0ZSwgc2xvd2VyIHNjcmlwdCBmaWxlcy5cblxuIiwiIiwiIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
