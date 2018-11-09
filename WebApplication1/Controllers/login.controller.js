angular.module('routerApp')
  .controller('LoginController', function ($scope, $state, $rootScope, AuthenticationService) {

      var vm = this;

      //Clear the credentials everytime.
      AuthenticationService.ClearCredentials();

      vm.logout = function () {

          $state.transitionTo('login');

      }
      // form login function
      vm.login = function (obj) {
          vm.loginObj = obj;

          //TODO: Fetch the username and password to match against.

          //If username and password match.
          //This is just a test username and password
          AuthenticationService.Login(vm.loginObj.username, vm.loginObj.password, 'benjaminzaragoza', 'alumne', function (response) {
              if (response.success) {
                  AuthenticationService.SetCredentials(vm.loginObj.username, vm.loginObj.password);
                  console.log("Success");
                  $state.transitionTo('home');
              } else {
                  vm.loginError = true;
                  vm.error = response.error;
              }
          });
      };

      // reset form function
      vm.reset = function () {
          vm.loginObj.username = "";
          vm.loginObj.password = "";
          vm.error = "";
          vm.loginError = false;
      };

  });