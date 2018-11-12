angular.module('routerApp').controller('column2Controller', function ($scope, $stateParams) {

    //Segons telefon passat agafem les dades
    $scope.phone = $stateParams.telefonoSeleccionat;

    // Segons telefon passat agafem conjunt de imatges
    $scope.setImage = function setImage(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };

});
