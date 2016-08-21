angular.module('starter')
.controller('mainController', function($scope){

  var tasks = new getTasks();

  $scope.lista = tasks.items;

  $scope.showMarked = false;

  $scope.onMarkTask = function(item){
    item.finalizada = !item.finalizada;
  };

  $scope.onHideItem = function(item){
    return item.finalizada && !$scope.showMarked;
  };

});
