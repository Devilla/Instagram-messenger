webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(107);\n__webpack_require__(108);\n__webpack_require__(109);\n\nvar app = angular.module('top.nemanja.instagram-chat', ['ui.router', 'zInfiniteScroll']);\n\napp.config(function($stateProvider, $urlRouterProvider) {\n\t$urlRouterProvider.otherwise(\"/loader\");\n\n\t$stateProvider\n\t\t.state('loader', {\n\t\t\turl: \"/loader\",\n\t\t\tcontroller: \"LoaderController\"\n\t\t})\n\t\t.state('login', {\n\t\t\turl: \"/login\",\n\t\t\ttemplateUrl: \"/templates/login.html\",\n\t\t\tcontroller: \"LoginController\"\n\t\t})\n\t\t.state('app', {\n\t\t\turl: \"/app\",\n\t\t\tcontroller: \"AppController\",\n\t\t\tabstract: true,\n\t\t\ttemplateUrl: \"/templates/app.html\"\n\t\t})\n\t\t.state('app.inbox', {\n\t\t\turl: \"/inbox\",\n\t\t\tcontroller: \"InboxController\",\n\t\t\ttemplateUrl: '/templates/inbox.html',\n\t\t})\n\t\t.state('app.thread', {\n\t\t\turl: \"/thread/:id\",\n\t\t\tcontroller: \"ThreadController\",\n\t\t\ttemplateUrl: '/templates/thread.html',\n\t\t});\n});\n\n__webpack_require__(110)(app);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2FwcC5qcz8wZGU4Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCIuL2Nzcy9zaWduaW4uY3NzXCIpO1xucmVxdWlyZShcIi4vY3NzL2NoYXQuY3NzXCIpO1xucmVxdWlyZShcIi4vY3NzL3RoZW1lLmNzc1wiKTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0b3AubmVtYW5qYS5pbnN0YWdyYW0tY2hhdCcsIFsndWkucm91dGVyJywgJ3pJbmZpbml0ZVNjcm9sbCddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvbG9hZGVyXCIpO1xuXG5cdCRzdGF0ZVByb3ZpZGVyXG5cdFx0LnN0YXRlKCdsb2FkZXInLCB7XG5cdFx0XHR1cmw6IFwiL2xvYWRlclwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJMb2FkZXJDb250cm9sbGVyXCJcblx0XHR9KVxuXHRcdC5zdGF0ZSgnbG9naW4nLCB7XG5cdFx0XHR1cmw6IFwiL2xvZ2luXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL2xvZ2luLmh0bWxcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwiTG9naW5Db250cm9sbGVyXCJcblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwJywge1xuXHRcdFx0dXJsOiBcIi9hcHBcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwiQXBwQ29udHJvbGxlclwiLFxuXHRcdFx0YWJzdHJhY3Q6IHRydWUsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL2FwcC5odG1sXCJcblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwLmluYm94Jywge1xuXHRcdFx0dXJsOiBcIi9pbmJveFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJJbmJveENvbnRyb2xsZXJcIixcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9pbmJveC5odG1sJyxcblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwLnRocmVhZCcsIHtcblx0XHRcdHVybDogXCIvdGhyZWFkLzppZFwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJUaHJlYWRDb250cm9sbGVyXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvdGhyZWFkLmh0bWwnLFxuXHRcdH0pO1xufSk7XG5cbnJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzXCIpKGFwcCk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///106\n");

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Nzcy9zaWduaW4uY3NzP2JjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3NyYy9jc3Mvc2lnbmluLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///107\n");

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Nzcy9jaGF0LmNzcz9iMmNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9zcmMvY3NzL2NoYXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///108\n");

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Nzcy90aGVtZS5jc3M/NjQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2Nzcy90aGVtZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///109\n");

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function(app) {\n\t__webpack_require__(111)(app);\n\t__webpack_require__(112)(app);\n\t__webpack_require__(113)(app);\n\t__webpack_require__(114)(app);\n\t__webpack_require__(115)(app);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzPzY0NGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcblx0cmVxdWlyZShcIi4vbG9hZGVyXCIpKGFwcCk7XG5cdHJlcXVpcmUoXCIuL2FwcFwiKShhcHApO1xuXHRyZXF1aXJlKFwiLi9sb2dpblwiKShhcHApO1xuXHRyZXF1aXJlKFwiLi9pbmJveFwiKShhcHApO1xuXHRyZXF1aXJlKFwiLi90aHJlYWRcIikoYXBwKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///110\n");

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.controller(\"LoaderController\", function(user, $state) {\n\t\t$(\".splash\").show();\n\t\tuser.checkStatus().then(() => {\n\t\t\tif(user.isAuthenticated()){\n\t\t\t\t$state.go(\"app.inbox\");\n\t\t\t} else {\n\t\t\t\tif(localStorage.getItem(\"username\") !== null && localStorage.getItem(\"password\") !== null){\n\t\t\t\t\tuser.login(localStorage.getItem(\"username\"), localStorage.getItem(\"password\")).then(function(result){\n\t\t\t\t\t\tif(result){\n\t\t\t\t\t\t\t$state.go(\"app.inbox\");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t$state.go(\"login\");\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\tlocalStorage.clear();\n\t\t\t\t\t$state.go(\"login\");\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTExLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2xvYWRlci5qcz9kNDNhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKSB7XG5cdGFwcC5jb250cm9sbGVyKFwiTG9hZGVyQ29udHJvbGxlclwiLCBmdW5jdGlvbih1c2VyLCAkc3RhdGUpIHtcblx0XHQkKFwiLnNwbGFzaFwiKS5zaG93KCk7XG5cdFx0dXNlci5jaGVja1N0YXR1cygpLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYodXNlci5pc0F1dGhlbnRpY2F0ZWQoKSl7XG5cdFx0XHRcdCRzdGF0ZS5nbyhcImFwcC5pbmJveFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikgIT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXNzd29yZFwiKSAhPT0gbnVsbCl7XG5cdFx0XHRcdFx0dXNlci5sb2dpbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhc3N3b3JkXCIpKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG5cdFx0XHRcdFx0XHRpZihyZXN1bHQpe1xuXHRcdFx0XHRcdFx0XHQkc3RhdGUuZ28oXCJhcHAuaW5ib3hcIik7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQkc3RhdGUuZ28oXCJsb2dpblwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHRcdFx0XHQkc3RhdGUuZ28oXCJsb2dpblwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2xvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///111\n");

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.controller(\"AppController\", function(user, $state, $scope) {\n\t\t$(\".splash\").hide();\n\n\t\t$scope.goToInbox = function(){\n\t\t\t$state.go(\"app.inbox\");\n\t\t}\n\n\t\tuser.checkStatus().then(() => {\n\t\t\tif(!user.isAuthenticated()){\n\t\t\t\t$state.go(\"loader\");\n\t\t\t}\n\t\t});\n\t});\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2FwcC5qcz8wNWNkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKSB7XG5cdGFwcC5jb250cm9sbGVyKFwiQXBwQ29udHJvbGxlclwiLCBmdW5jdGlvbih1c2VyLCAkc3RhdGUsICRzY29wZSkge1xuXHRcdCQoXCIuc3BsYXNoXCIpLmhpZGUoKTtcblxuXHRcdCRzY29wZS5nb1RvSW5ib3ggPSBmdW5jdGlvbigpe1xuXHRcdFx0JHN0YXRlLmdvKFwiYXBwLmluYm94XCIpO1xuXHRcdH1cblxuXHRcdHVzZXIuY2hlY2tTdGF0dXMoKS50aGVuKCgpID0+IHtcblx0XHRcdGlmKCF1c2VyLmlzQXV0aGVudGljYXRlZCgpKXtcblx0XHRcdFx0JHN0YXRlLmdvKFwibG9hZGVyXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9zcmMvY29udHJvbGxlcnMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///112\n");

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.directive('myEnter', function () {\n\t\treturn function (scope, element, attrs) {\n\t\t\telement.bind(\"keydown keypress\", function (event) {\n\t\t\t\tif(event.which === 13) {\n\t\t\t\t\tscope.$apply(function (){\n\t\t\t\t\t\tscope.$eval(attrs.myEnter);\n\t\t\t\t\t});\n\n\t\t\t\t\tevent.preventDefault();\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\t});\n\n\tapp.directive('logout', function (user, $state) {\n\t\treturn {\n\t\t\trestrict: \"EA\",\n\t\t\tlink: function (scope, element, attrs) {\n\t\t\t\telement.bind('click', function (event) {\n\t\t\t\t\tuser.logout().then(function(){\n\t\t\t\t\t\t$state.go(\"login\", {}, {reload: true});\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\t});\n\n\tapp.factory(\"user\", function($rootScope, $interval, $http, $rootScope){\n\t\tvar user = {\n\t\t\tstatus: undefined,\n\t\t\tuser: undefined,\n\n\t\t\tautoStatusChecker: function(){\n\t\t\t\tuser.checkStatus();\n\t\t\t\t$interval(user.checkStatus, 5000);\n\t\t\t},\n\t\t\tcheckStatus: function(){\n\t\t\t\tvar promise = new Promise(function(resolve, reject){\n\t\t\t\t\t$http.get(\"/instagram/status\").then(function(data){\n\t\t\t\t\t\tif(data.data.status !== user.status || JSON.stringify(data.data.user) !== JSON.stringify(user.user)){\n\t\t\t\t\t\t\tuser.status = data.data.status;\n\t\t\t\t\t\t\tuser.user = data.data.user;\n\n\t\t\t\t\t\t\tif(user.status == \"ok\"){\n\t\t\t\t\t\t\t\tif($rootScope.users == undefined){\n\t\t\t\t\t\t\t\t\t$rootScope.users = {};\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t$rootScope.users[user.user.id] = user.user;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t$rootScope.$broadcast(\"userChanged\");\n\n\t\t\t\t\t\t\tresolve(user);\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tresolve(false);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t});\n\n\t\t\t\treturn promise;\n\t\t\t},\n\n\t\t\tisAuthenticated: function(){\n\t\t\t\treturn user.status == \"ok\";\n\t\t\t},\n\n\t\t\tlogin: function(username, password){\n\t\t\t\tvar promise = new Promise(function(resolve, reject){\n\t\t\t\t\t$http.post(\"/instagram/login\", $.param({username: username, password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(data){\n\t\t\t\t\t\tresolve(data.data.status == \"ok\");\n\t\t\t\t\t\tuser.checkStatus();\n\t\t\t\t\t});\n\t\t\t\t});\n\n\t\t\t\treturn promise;\n\t\t\t},\n\t\t\tlogout: function(){\n\t\t\t\tlocalStorage.clear();\n\n\t\t\t\tvar promise = new Promise(function(resolve, reject){\n\t\t\t\t\t$http.get(\"/instagram/logout\").then(function(data){\n\t\t\t\t\t\tuser.checkStatus();\n\t\t\t\t\t\tresolve();\n\t\t\t\t\t});\n\t\t\t\t});\n\n\t\t\t\treturn promise;\n\t\t\t}\n\t\t};\n\n\t\tuser.autoStatusChecker();\n\n\t\treturn user;\n\t})\n\n\tapp.controller(\"LoginController\", function($scope, user, $state) {\n\t\t$(\".splash\").hide();\n\n\t\t$scope.login = function(){\n\t\t\tuser.login($scope.username, $scope.password).then(function(result){\n\t\t\t\tif(result){\n\t\t\t\t\tif($scope.remember){\n\t\t\t\t\t\tlocalStorage.setItem(\"username\", $scope.username);\n\t\t\t\t\t\tlocalStorage.setItem(\"password\", $scope.password);\n\t\t\t\t\t}\n\t\t\t\t\t$state.go(\"app.inbox\");\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\talert(\"Bad login! \");\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2xvZ2luLmpzPzc2MzMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcblx0YXBwLmRpcmVjdGl2ZSgnbXlFbnRlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0ZWxlbWVudC5iaW5kKFwia2V5ZG93biBrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0aWYoZXZlbnQud2hpY2ggPT09IDEzKSB7XG5cdFx0XHRcdFx0c2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpe1xuXHRcdFx0XHRcdFx0c2NvcGUuJGV2YWwoYXR0cnMubXlFbnRlcik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9KTtcblxuXHRhcHAuZGlyZWN0aXZlKCdsb2dvdXQnLCBmdW5jdGlvbiAodXNlciwgJHN0YXRlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlc3RyaWN0OiBcIkVBXCIsXG5cdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRcdGVsZW1lbnQuYmluZCgnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0XHR1c2VyLmxvZ291dCgpLnRoZW4oZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdCRzdGF0ZS5nbyhcImxvZ2luXCIsIHt9LCB7cmVsb2FkOiB0cnVlfSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xuXG5cdGFwcC5mYWN0b3J5KFwidXNlclwiLCBmdW5jdGlvbigkcm9vdFNjb3BlLCAkaW50ZXJ2YWwsICRodHRwLCAkcm9vdFNjb3BlKXtcblx0XHR2YXIgdXNlciA9IHtcblx0XHRcdHN0YXR1czogdW5kZWZpbmVkLFxuXHRcdFx0dXNlcjogdW5kZWZpbmVkLFxuXG5cdFx0XHRhdXRvU3RhdHVzQ2hlY2tlcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0dXNlci5jaGVja1N0YXR1cygpO1xuXHRcdFx0XHQkaW50ZXJ2YWwodXNlci5jaGVja1N0YXR1cywgNTAwMCk7XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tTdGF0dXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0XHRcdFx0XHQkaHR0cC5nZXQoXCIvaW5zdGFncmFtL3N0YXR1c1wiKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdFx0aWYoZGF0YS5kYXRhLnN0YXR1cyAhPT0gdXNlci5zdGF0dXMgfHwgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXIpICE9PSBKU09OLnN0cmluZ2lmeSh1c2VyLnVzZXIpKXtcblx0XHRcdFx0XHRcdFx0dXNlci5zdGF0dXMgPSBkYXRhLmRhdGEuc3RhdHVzO1xuXHRcdFx0XHRcdFx0XHR1c2VyLnVzZXIgPSBkYXRhLmRhdGEudXNlcjtcblxuXHRcdFx0XHRcdFx0XHRpZih1c2VyLnN0YXR1cyA9PSBcIm9rXCIpe1xuXHRcdFx0XHRcdFx0XHRcdGlmKCRyb290U2NvcGUudXNlcnMgPT0gdW5kZWZpbmVkKXtcblx0XHRcdFx0XHRcdFx0XHRcdCRyb290U2NvcGUudXNlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQkcm9vdFNjb3BlLnVzZXJzW3VzZXIudXNlci5pZF0gPSB1c2VyLnVzZXI7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJ1c2VyQ2hhbmdlZFwiKTtcblxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKHVzZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHR9LFxuXG5cdFx0XHRpc0F1dGhlbnRpY2F0ZWQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHJldHVybiB1c2VyLnN0YXR1cyA9PSBcIm9rXCI7XG5cdFx0XHR9LFxuXG5cdFx0XHRsb2dpbjogZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcblx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuXHRcdFx0XHRcdCRodHRwLnBvc3QoXCIvaW5zdGFncmFtL2xvZ2luXCIsICQucGFyYW0oe3VzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSksIHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfX0pLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKGRhdGEuZGF0YS5zdGF0dXMgPT0gXCJva1wiKTtcblx0XHRcdFx0XHRcdHVzZXIuY2hlY2tTdGF0dXMoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHR9LFxuXHRcdFx0bG9nb3V0OiBmdW5jdGlvbigpe1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG5cdFx0XHRcdFx0JGh0dHAuZ2V0KFwiL2luc3RhZ3JhbS9sb2dvdXRcIikudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHRcdHVzZXIuY2hlY2tTdGF0dXMoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHVzZXIuYXV0b1N0YXR1c0NoZWNrZXIoKTtcblxuXHRcdHJldHVybiB1c2VyO1xuXHR9KVxuXG5cdGFwcC5jb250cm9sbGVyKFwiTG9naW5Db250cm9sbGVyXCIsIGZ1bmN0aW9uKCRzY29wZSwgdXNlciwgJHN0YXRlKSB7XG5cdFx0JChcIi5zcGxhc2hcIikuaGlkZSgpO1xuXG5cdFx0JHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKXtcblx0XHRcdHVzZXIubG9naW4oJHNjb3BlLnVzZXJuYW1lLCAkc2NvcGUucGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcblx0XHRcdFx0aWYocmVzdWx0KXtcblx0XHRcdFx0XHRpZigkc2NvcGUucmVtZW1iZXIpe1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCAkc2NvcGUudXNlcm5hbWUpO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwYXNzd29yZFwiLCAkc2NvcGUucGFzc3dvcmQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkc3RhdGUuZ28oXCJhcHAuaW5ib3hcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWxlcnQoXCJCYWQgbG9naW4hIFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0fSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3NyYy9jb250cm9sbGVycy9sb2dpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///113\n");

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.controller(\"InboxController\", function(user, $http, $scope, $state, $rootScope) {\n\t\t$scope.threads = [];\n\n\t\tsetTimeout(() => {\n\t\t\t$scope.loaded = true;\n\t\t}, 500);\n\n\t\t$scope.cursor = null;\n\n\t\t$scope.goToThread = function(thread){\n\t\t\t$state.go(\"app.thread\", {id: thread.id});\n\t\t}\n\n\t\tfunction sync(threads){\n\t\t\tif($rootScope.users == undefined){\n\t\t\t\t$rootScope.users = {};\n\t\t\t}\n\n\t\t\tthreads.forEach((thread) => {\n\t\t\t\tthread.accounts.forEach((account) => {\n\t\t\t\t\t$rootScope.users[account.id] = account;\n\t\t\t\t});\n\t\t\t});\n\n\t\t}\n\n\t\t$scope.loadMore = function(){\n\t\t\tif($scope.loaded && !$scope.end){\n\t\t\t\t$scope.loaded = false;\n\n\t\t\t\t$http.get(\"/instagram/threads/\"+$scope.cursor).then(function(data){\n\t\t\t\t\t$scope.threads = $scope.threads.concat(data.data.threads);\n\n\t\t\t\t\tsync($scope.threads)\n\n\t\t\t\t\tif($scope.cursor == data.data.cursor){\n\t\t\t\t\t\t$scope.end = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t$scope.cursor = data.data.cursor;\n\t\t\t\t\t$scope.loaded = true;\n\t\t\t\t})\n\t\t\t}\n\t\t}\n\n\t\t$scope.showFullName = function(thread){\n\t\t\treturn thread.threadType == \"private\" && thread.accounts.length == 1 && thread.accounts[0].fullName != \"\";\n\t\t}\n\n\t\t$scope.fullNameList = function(thread){\n\t\t\tif(thread.accounts.length > 1){\n\t\t\t\tvar accounts = thread.accounts.map((account) => {\n\t\t\t\t\tif(account.fullName == \"\"){\n\t\t\t\t\t\taccount.fullName = account.username;\n\t\t\t\t\t}\n\n\t\t\t\t\treturn account;\n\t\t\t\t});\n\n\t\t\t\taccounts = accounts.filter((account, key) => {\n\t\t\t\t\treturn key < 4;\n\t\t\t\t});\n\n\t\t\t\taccounts = accounts.map((account) => {\n\t\t\t\t\treturn account.fullName;\n\t\t\t\t})\n\n\t\t\t\treturn \"(\"+accounts.join(\", \")+((thread.accounts.length > accounts.length)?\"...\":\"\")+\")\";\n\t\t\t} else {\n\t\t\t\treturn \"\";\n\t\t\t}\n\t\t}\n\n\t\tuser.checkStatus().then(function() {\n\t\t\tif(user.isAuthenticated()){\n\t\t\t\t$http.get(\"/instagram/threads\").then(function(data){\n\t\t\t\t\t$scope.threads = data.data.threads;\n\n\t\t\t\t\t$scope.cursor = data.data.cursor;\n\n\t\t\t\t\tsync($scope.threads)\n\t\t\t\t})\n\t\t\t}\n\t\t});\n\t});\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2luYm94LmpzP2MyNzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcblx0YXBwLmNvbnRyb2xsZXIoXCJJbmJveENvbnRyb2xsZXJcIiwgZnVuY3Rpb24odXNlciwgJGh0dHAsICRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlKSB7XG5cdFx0JHNjb3BlLnRocmVhZHMgPSBbXTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JHNjb3BlLmxvYWRlZCA9IHRydWU7XG5cdFx0fSwgNTAwKTtcblxuXHRcdCRzY29wZS5jdXJzb3IgPSBudWxsO1xuXG5cdFx0JHNjb3BlLmdvVG9UaHJlYWQgPSBmdW5jdGlvbih0aHJlYWQpe1xuXHRcdFx0JHN0YXRlLmdvKFwiYXBwLnRocmVhZFwiLCB7aWQ6IHRocmVhZC5pZH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHN5bmModGhyZWFkcyl7XG5cdFx0XHRpZigkcm9vdFNjb3BlLnVzZXJzID09IHVuZGVmaW5lZCl7XG5cdFx0XHRcdCRyb290U2NvcGUudXNlcnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0dGhyZWFkcy5mb3JFYWNoKCh0aHJlYWQpID0+IHtcblx0XHRcdFx0dGhyZWFkLmFjY291bnRzLmZvckVhY2goKGFjY291bnQpID0+IHtcblx0XHRcdFx0XHQkcm9vdFNjb3BlLnVzZXJzW2FjY291bnQuaWRdID0gYWNjb3VudDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHRcdCRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZigkc2NvcGUubG9hZGVkICYmICEkc2NvcGUuZW5kKXtcblx0XHRcdFx0JHNjb3BlLmxvYWRlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdCRodHRwLmdldChcIi9pbnN0YWdyYW0vdGhyZWFkcy9cIiskc2NvcGUuY3Vyc29yKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdCRzY29wZS50aHJlYWRzID0gJHNjb3BlLnRocmVhZHMuY29uY2F0KGRhdGEuZGF0YS50aHJlYWRzKTtcblxuXHRcdFx0XHRcdHN5bmMoJHNjb3BlLnRocmVhZHMpXG5cblx0XHRcdFx0XHRpZigkc2NvcGUuY3Vyc29yID09IGRhdGEuZGF0YS5jdXJzb3Ipe1xuXHRcdFx0XHRcdFx0JHNjb3BlLmVuZCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0JHNjb3BlLmN1cnNvciA9IGRhdGEuZGF0YS5jdXJzb3I7XG5cdFx0XHRcdFx0JHNjb3BlLmxvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0JHNjb3BlLnNob3dGdWxsTmFtZSA9IGZ1bmN0aW9uKHRocmVhZCl7XG5cdFx0XHRyZXR1cm4gdGhyZWFkLnRocmVhZFR5cGUgPT0gXCJwcml2YXRlXCIgJiYgdGhyZWFkLmFjY291bnRzLmxlbmd0aCA9PSAxICYmIHRocmVhZC5hY2NvdW50c1swXS5mdWxsTmFtZSAhPSBcIlwiO1xuXHRcdH1cblxuXHRcdCRzY29wZS5mdWxsTmFtZUxpc3QgPSBmdW5jdGlvbih0aHJlYWQpe1xuXHRcdFx0aWYodGhyZWFkLmFjY291bnRzLmxlbmd0aCA+IDEpe1xuXHRcdFx0XHR2YXIgYWNjb3VudHMgPSB0aHJlYWQuYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiB7XG5cdFx0XHRcdFx0aWYoYWNjb3VudC5mdWxsTmFtZSA9PSBcIlwiKXtcblx0XHRcdFx0XHRcdGFjY291bnQuZnVsbE5hbWUgPSBhY2NvdW50LnVzZXJuYW1lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBhY2NvdW50O1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRhY2NvdW50cyA9IGFjY291bnRzLmZpbHRlcigoYWNjb3VudCwga2V5KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGtleSA8IDQ7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGFjY291bnRzID0gYWNjb3VudHMubWFwKChhY2NvdW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGFjY291bnQuZnVsbE5hbWU7XG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0cmV0dXJuIFwiKFwiK2FjY291bnRzLmpvaW4oXCIsIFwiKSsoKHRocmVhZC5hY2NvdW50cy5sZW5ndGggPiBhY2NvdW50cy5sZW5ndGgpP1wiLi4uXCI6XCJcIikrXCIpXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR1c2VyLmNoZWNrU3RhdHVzKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdGlmKHVzZXIuaXNBdXRoZW50aWNhdGVkKCkpe1xuXHRcdFx0XHQkaHR0cC5nZXQoXCIvaW5zdGFncmFtL3RocmVhZHNcIikudGhlbihmdW5jdGlvbihkYXRhKXtcblx0XHRcdFx0XHQkc2NvcGUudGhyZWFkcyA9IGRhdGEuZGF0YS50aHJlYWRzO1xuXG5cdFx0XHRcdFx0JHNjb3BlLmN1cnNvciA9IGRhdGEuZGF0YS5jdXJzb3I7XG5cblx0XHRcdFx0XHRzeW5jKCRzY29wZS50aHJlYWRzKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9zcmMvY29udHJvbGxlcnMvaW5ib3guanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///114\n");

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.filter('reverse', function() {\n\t\treturn function(items) {\n\t\t\treturn items.slice().reverse();\n\t\t};\n\t});\n\n\tapp.controller(\"ThreadController\", function(user, $http, $scope, $stateParams, $rootScope, $timeout) {\n\t\t$scope.thread = [];\n\n\t\tvar oldLast;\n\n\t\t$scope.$watch('thread', function() {\n\t\t\tif(oldLast == undefined || oldLast != $scope.thread[0]){\n\t\t\t\toldLast = $scope.thread[0]\n\n\t\t\t\t$timeout(function(){\n\t\t\t\t\t$(\".scroll-container\").animate({ scrollTop: $(\".scroll-container\").prop(\"scrollHeight\") }, \"slow\");\n\t\t\t\t}, 0);\n\t\t\t}\n\t\t});\n\n\t\tsetTimeout(() => {\n\t\t\t$scope.loaded = true;\n\t\t}, 500);\n\n\t\t$scope.cursor = null;\n\n\t\t$scope.getName = function(id){\n\t\t\treturn $rootScope.users[id].fullName || $rootScope.users[id].username || \"unknown\";\n\t\t}\n\n\t\t$scope.getPhoto = function(id){\n\t\t\treturn $rootScope.users[id].picture;\n\t\t}\n\n\t\t$scope.loadMore = function(){\n\t\t\tif($scope.loaded && !$scope.end){\n\t\t\t\t$scope.loaded = false;\n\n\t\t\t\t$http.get(\"/instagram/messagess/\"+$stateParams.id+\"/\"+$scope.cursor).then(function(data){\n\t\t\t\t\tvar oldHeight = $(\".scroll-container\").prop(\"scrollHeight\");\n\n\t\t\t\t\t$scope.thread = $scope.thread.concat(data.data.messagess);\n\n\t\t\t\t\t$timeout(function(){\n\t\t\t\t\t\tvar newHeight = $(\".scroll-container\").prop(\"scrollHeight\");\n\n\t\t\t\t\t\t$(\".scroll-container\").scrollTop(newHeight - oldHeight);\n\t\t\t\t\t}, 0);\n\n\t\t\t\t\tif($scope.cursor == data.data.cursor){\n\t\t\t\t\t\t$scope.end = true;\n\t\t\t\t\t}\n\n\t\t\t\t\t$scope.cursor = data.data.cursor;\n\t\t\t\t\t$scope.loaded = true;\n\t\t\t\t})\n\t\t\t}\n\t\t}\n\n\t\tuser.checkStatus().then(function() {\n\t\t\tif(user.isAuthenticated()){\n\t\t\t\t$http.get(\"/instagram/messagess/\"+$stateParams.id).then(function(data){\n\t\t\t\t\t$scope.thread = data.data.messagess;\n\n\t\t\t\t\t$scope.cursor = data.data.cursor;\n\t\t\t\t\tconsole.log($scope.thread);\n\t\t\t\t})\n\t\t\t}\n\t\t});\n\t});\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL3RocmVhZC5qcz81OWJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXBwKSB7XG5cdGFwcC5maWx0ZXIoJ3JldmVyc2UnLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oaXRlbXMpIHtcblx0XHRcdHJldHVybiBpdGVtcy5zbGljZSgpLnJldmVyc2UoKTtcblx0XHR9O1xuXHR9KTtcblxuXHRhcHAuY29udHJvbGxlcihcIlRocmVhZENvbnRyb2xsZXJcIiwgZnVuY3Rpb24odXNlciwgJGh0dHAsICRzY29wZSwgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuXHRcdCRzY29wZS50aHJlYWQgPSBbXTtcblxuXHRcdHZhciBvbGRMYXN0O1xuXG5cdFx0JHNjb3BlLiR3YXRjaCgndGhyZWFkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZihvbGRMYXN0ID09IHVuZGVmaW5lZCB8fCBvbGRMYXN0ICE9ICRzY29wZS50aHJlYWRbMF0pe1xuXHRcdFx0XHRvbGRMYXN0ID0gJHNjb3BlLnRocmVhZFswXVxuXG5cdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0JChcIi5zY3JvbGwtY29udGFpbmVyXCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIuc2Nyb2xsLWNvbnRhaW5lclwiKS5wcm9wKFwic2Nyb2xsSGVpZ2h0XCIpIH0sIFwic2xvd1wiKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCRzY29wZS5sb2FkZWQgPSB0cnVlO1xuXHRcdH0sIDUwMCk7XG5cblx0XHQkc2NvcGUuY3Vyc29yID0gbnVsbDtcblxuXHRcdCRzY29wZS5nZXROYW1lID0gZnVuY3Rpb24oaWQpe1xuXHRcdFx0cmV0dXJuICRyb290U2NvcGUudXNlcnNbaWRdLmZ1bGxOYW1lIHx8ICRyb290U2NvcGUudXNlcnNbaWRdLnVzZXJuYW1lIHx8IFwidW5rbm93blwiO1xuXHRcdH1cblxuXHRcdCRzY29wZS5nZXRQaG90byA9IGZ1bmN0aW9uKGlkKXtcblx0XHRcdHJldHVybiAkcm9vdFNjb3BlLnVzZXJzW2lkXS5waWN0dXJlO1xuXHRcdH1cblxuXHRcdCRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZigkc2NvcGUubG9hZGVkICYmICEkc2NvcGUuZW5kKXtcblx0XHRcdFx0JHNjb3BlLmxvYWRlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdCRodHRwLmdldChcIi9pbnN0YWdyYW0vbWVzc2FnZXNzL1wiKyRzdGF0ZVBhcmFtcy5pZCtcIi9cIiskc2NvcGUuY3Vyc29yKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRcdHZhciBvbGRIZWlnaHQgPSAkKFwiLnNjcm9sbC1jb250YWluZXJcIikucHJvcChcInNjcm9sbEhlaWdodFwiKTtcblxuXHRcdFx0XHRcdCRzY29wZS50aHJlYWQgPSAkc2NvcGUudGhyZWFkLmNvbmNhdChkYXRhLmRhdGEubWVzc2FnZXNzKTtcblxuXHRcdFx0XHRcdCR0aW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR2YXIgbmV3SGVpZ2h0ID0gJChcIi5zY3JvbGwtY29udGFpbmVyXCIpLnByb3AoXCJzY3JvbGxIZWlnaHRcIik7XG5cblx0XHRcdFx0XHRcdCQoXCIuc2Nyb2xsLWNvbnRhaW5lclwiKS5zY3JvbGxUb3AobmV3SGVpZ2h0IC0gb2xkSGVpZ2h0KTtcblx0XHRcdFx0XHR9LCAwKTtcblxuXHRcdFx0XHRcdGlmKCRzY29wZS5jdXJzb3IgPT0gZGF0YS5kYXRhLmN1cnNvcil7XG5cdFx0XHRcdFx0XHQkc2NvcGUuZW5kID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQkc2NvcGUuY3Vyc29yID0gZGF0YS5kYXRhLmN1cnNvcjtcblx0XHRcdFx0XHQkc2NvcGUubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHR1c2VyLmNoZWNrU3RhdHVzKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdGlmKHVzZXIuaXNBdXRoZW50aWNhdGVkKCkpe1xuXHRcdFx0XHQkaHR0cC5nZXQoXCIvaW5zdGFncmFtL21lc3NhZ2Vzcy9cIiskc3RhdGVQYXJhbXMuaWQpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG5cdFx0XHRcdFx0JHNjb3BlLnRocmVhZCA9IGRhdGEuZGF0YS5tZXNzYWdlc3M7XG5cblx0XHRcdFx0XHQkc2NvcGUuY3Vyc29yID0gZGF0YS5kYXRhLmN1cnNvcjtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUudGhyZWFkKTtcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL3RocmVhZC5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///115\n");

/***/ })

},[106]);