angular.module('starter')
.controller('mainController', function($scope, $ionicPopup){

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

  function getItemPopup(item){
    $scope.data = {};
    $scope.data.newTask = "";

    $ionicPopup.show({
      title: "Nova Tarefa",
      scope: $scope,
      template: "<input type='text' placeholder='Tarefa' autofocus='true' ng-model='data.newTask'>",
      buttons: [
        {text: "Ok",
        onTap: function(e){
          item.nome = $scope.data.newTask;
          tasks.add(item);
        }},
        {text: "Cancel"}
      ]
    });
  };

  $scope.onItemAdd = function(){
    var item = {
      nome: "",
      finalizada: false
    };
    getItemPopup(item);
  };

});
