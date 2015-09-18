'use strict';

angular.module('codeApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
