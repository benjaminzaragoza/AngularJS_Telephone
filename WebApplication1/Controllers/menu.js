angular.module('routerApp').controller('menu', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildToggler('left');

    $scope.menu = [
      { 'name': 'Home', 'icon': 'home', state: 'home'},
      { 'name': 'Admin users', 'icon': 'face', state: 'about' },
      { 'name': 'Formulari', 'icon': 'description', state: 'form' },
      { 'name': 'Formulari 2', 'icon': 'description', state: 'form2' },
      { 'name': 'Grafic', 'icon': 'graphic_eq', state: 'grafic' },
      { 'name': 'List', 'icon': 'list', state: 'list' },
    ];
    
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
          .then(function () {
              $log.debug("close LEFT is done");
          });
    };

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                  $log.debug("toggle " + navID + " is done");
              });
        }
    }
})
