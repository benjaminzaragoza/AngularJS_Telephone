angular.module('routerApp').controller('Controller', function ($scope) {

    $scope.chartOptions = {
        dataSource: [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ],
        series: { argumentField: 'fruit', valueField: 'total' }
    };
})