require("./css/signin.css");
require("./css/chat.css");
require("./css/theme.css");

var app = angular.module('top.nemanja.instagram-chat', ['ui.router', 'zInfiniteScroll']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/loader");

	$stateProvider
		.state('loader', {
			url: "/loader",
			controller: "LoaderController"
		})
		.state('login', {
			url: "/login",
			templateUrl: "/templates/login.html",
			controller: "LoginController"
		})
		.state('app', {
			url: "/app",
			controller: "AppController",
			abstract: true,
			templateUrl: "/templates/app.html"
		})
		.state('app.inbox', {
			url: "/inbox",
			controller: "InboxController",
			templateUrl: '/templates/inbox.html',
		})
		.state('app.thread', {
			url: "/thread/:id",
			controller: "ThreadController",
			templateUrl: '/templates/thread.html',
		});
});

require("./controllers")(app);

