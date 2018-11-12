angular.module('routerApp').controller('micontrolador', function ($scope) {
    $scope.titulo = "Todo Usuaris";
    $scope.nuevo = true;
    $scope.generos = [{ id: 1, genero: 'Masculi' }, { id: 2, genero: 'Femeni' }];
    $scope.amigos = [
      { nombre: 'Jose', edad: 25, genero: 'Masculi' },
      { nombre: 'Angela', edad: 21, genero: 'Femeni' },
      { nombre: 'Marinsan', edad: 29, genero: 'Masculi' },
      { nombre: 'Paco', edad: 29, genero: 'Masculi' }
    ];

    $scope.guardar = function (x) {
        if ($scope.nuevo) {
            $scope.amigos.unshift(x);
        }
        else {
            $scope.new = {};
            $scope.nuevo = true;
        }
    };

    $scope.cancel = function () {
        $scope.nuevo = true;
        $scope.new = {};
    }

    $scope.borrar = function (x) {
        var i = $scope.amigos.indexOf(x);
        $scope.amigos.splice(i, 1);
        $scope.new = {};
        $scope.nuevo = true;
    }

    $scope.editar = function (x) {
        $scope.new = x;
        $scope.nuevo = false;
        angular.element('#nombre').focus();
    }
});