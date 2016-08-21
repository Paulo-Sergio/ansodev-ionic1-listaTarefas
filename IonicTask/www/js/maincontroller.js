angular.module('starter')
.controller('mainController', function($scope){

  var tasks = new getTasks();

  $scope.lista = tasks.items;
  $scope.showMarked = false;
  $scope.removeStatus = false;

  $scope.onMarkTask = function(item){
    item.finalizada = !item.finalizada;
  };

  $scope.onHideItem = function(item){
    return item.finalizada && !$scope.showMarked;
  };

  $scope.onItemRemove = function(item){
    tasks.remove(item);
  };

  $scope.onClickRemove = function(){
    $scope.removeStatus = !$scope.removeStatus;
  };

});
