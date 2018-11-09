angular.module('routerApp')
	.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout',
		function ($http, $cookieStore, $rootScope, $timeout) {
		    var service = {};

		    //Login function - checks the username and password against the fetched username and password
		    service.Login = function (username, password, fetchedUsername, fetchedPassword, callback) {
		        var response = { success: username === fetchedUsername && password === fetchedPassword };
		        if (!response.success) {
		            response.error = "Username or password incorrect";
		        }
		        callback(response);
		    };

		    //Sets the credentials in the global rootscope.
		    service.SetCredentials = function (username, password) {
		        var authdata = username + ":" + password;

		        $rootScope.globals = {
		            currentUser: {
		                username: username,
		                authdata: authdata
		            }
		        };

		        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
		        $cookieStore.put('globals', $rootScope.globals);
		    };

		    //Clears the credentials.
		    service.ClearCredentials = function () {
		        $rootScope.globals = {};
		        $cookieStore.remove('globals');
		        $http.defaults.headers.common['Authorization'] = 'Basic ';
		    };

		    return service;

		}]);