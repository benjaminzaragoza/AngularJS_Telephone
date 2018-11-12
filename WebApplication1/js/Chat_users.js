angular.module('routerApp').controller('chat1', function ($scope) {
    var imagePath = 'views/img/user.png';
    var telefone = 'views/img/phone.svg';

    //.config(function($mdIconProvider) {
    //    $mdIconProvider
    //      .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
    //})

    $scope.phones = [
      {
          type: 'Home',
          number: '(555) 251-1234',
          options: {
              face: telefone
          }
      },
      {
          type: 'Cell',
          number: '(555) 786-9841',
          options: {
              face: telefone,
              avatarIcon: true
          }
      },
      {
          type: 'Office',
          number: '(555) 314-1592',
          options: {
              face: imagePath
          }
      },
      {
          type: 'Offset',
          number: '(555) 192-2010',
          options: {
              face: telefone
          }
      }
    ];
    $scope.todos = [
      {
          face: imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face: imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face: imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face: imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
      {
          face: imagePath,
          what: 'Brunch this weekend?',
          who: 'Min Li Chan',
          when: '3:08PM',
          notes: " I'll be in your neighborhood doing errands"
      },
    ];
});
