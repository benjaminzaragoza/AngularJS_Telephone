angular.module('routerApp').controller('scotchController', function ($scope) {

    $scope.datos = {};

    $scope.datos.message = 'test';
    $scope.datos.message2 = 'test 2';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});