'use strict';

angular.module('codeApp')
  .controller('MainCtrl', function ($scope, $http) {


      $scope.addEmail = function(){
          console.log($scope.email);
          var url = "https://api.e2ma.net/1406836/members/add";
          $http.defaults.headers.common.Authorization = "Basic ";
          $http.defaults.headers.post = {'Access-Control-Allow-Origin': 'http://localhost:9000'};
          $http.post(url,{'email':$scope.email, "group_ids":[2069364]});
      }
    });
