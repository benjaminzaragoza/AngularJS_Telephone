var routerApp = angular.module('routerApp', ['ngAnimate', 'ui.router', 'core', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'dx', 'ngAria', 'ngCookies']);

routerApp.config(function ($stateProvider, $urlRouterProvider,$mdDateLocaleProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
         .state('login', {
           url: '/login',
           templateUrl: 'login.html',
           controller: 'LoginController as vm'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('home.list', {
                    // definim ruta per defecte
                    url: '/list',
                    views: {
                        // mostrem atraves de "column1Controller" columna 1 -> llista de telefons
                        'columnOne': {
                                // destriem la vista que volem mostrar
                                templateUrl: '/phone-list/phone-list.html',
                                controller: 'column1Controller'
                           },
                        // mostrem atraves de "column2Controller" columna 2 -> detalls telefon
                        'columnTwo': {
                                // destriem la vista que volem mostrar
                                templateUrl: '/phone-detail/phone-detail.html',
                                controller: 'column2Controller'

                            }
                    },
                    // Definim els parametres que volem passar , per als controladors
                    params: {
                        telefonoSeleccionat: null
                    }
                }
           )

        .state('home.chat', {
            url: '/chat',
            views: {
                'chat': {
                    templateUrl: 'chat.html',
                    controller: 'chat1'
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html',
            controller: 'micontrolador'
        })
        .state('form', {
            url: '/form',
            templateUrl: 'form.html'
        })
        .state('grafic', {
            url: '/grafic',
            templateUrl: 'grafic.html',
            controller: 'Controller'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'list.html',
            controller: 'list'
        })
        .state('form2', {
            url: '/form2',
            views: {
                '': {
                    templateUrl: 'form2.html'
                },
                controller: 'mainController'
            }
        });


    // Example of a Spanish localization.
    $mdDateLocaleProvider.days = ['Diumnege', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Disapte'];

    $mdDateLocaleProvider.months = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny','Juliol','Agost','Setembre', 'Octubre', 'Noviembre', 'Desembre'];
        $mdDateLocaleProvider.shortMonths = ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 
                                        'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Des'];
        // Can change week display to start on Monday.
        $mdDateLocaleProvider.firstDayOfWeek = 1;

        $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
            return 'Semana ' + weekNumber;
        };
        $mdDateLocaleProvider.msgCalendar = 'Calendari';
        $mdDateLocaleProvider.msgOpenCalendar = 'Obri calendari';
    

});
routerApp.run(['$rootScope', '$location', '$cookieStore', '$http',
    function($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            console.log('Page refresh');
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                console.log('Do not go back');
                $location.path('/login');
            }
        });
    }
]);
routerApp.controller('DemoCtrl', function ($scope) {
      $scope.user = {
          name: 'John Doe',
          email: '',
          phone: '',
          address: 'Mountain View, CA',
          donation: 19.99
      };
});

routerApp.run(function ($rootScope, $location) {
    $rootScope.location = $location;
});

routerApp.controller('AppCtrl', function ($scope) {
    $scope.myDate = new Date();

    $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

})


//Controlador validacio
routerApp.controller('mainController', function ($scope) {

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function (isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert('our form is amazing');
        }

    };

});

// Controlador mostrar llista telefono i caracteristiques

// Controlador detalls telefono
routerApp.controller('mainController', function ($scope) {

    $scope.submitted = false;

    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        $scope.submitted = true;

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            alert('our form is amazing');
        }
        else {
            alert('ERROR');
        }

    };

});





