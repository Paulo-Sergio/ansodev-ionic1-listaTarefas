angular.module('starter')
.controller('mainController', function($scope){

  var tasks = new getTasks();

  $scope.lista = tasks.items;

  $scope.onMarkTask = function(item){
    item.finalizada = !item.finalizada;
  };

});
