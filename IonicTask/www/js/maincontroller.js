angular.module('starter')
.controller('mainController', function($scope){

  var tasks = new getTasks();

  $scope.lista = tasks.items;

});
