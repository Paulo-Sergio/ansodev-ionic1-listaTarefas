angular.module('starter')
.controller('mainController', function($scope, $ionicPopup, $ionicListDelegate){

  var tasks = new getTasks();

  $scope.lista = tasks.items;
  $scope.showMarked = false;
  $scope.removeStatus = false;

  $scope.onMarkTask = function(item){
    item.finalizada = !item.finalizada;
    tasks.save();
  };

  $scope.onHideItem = function(item){
    return item.finalizada && !$scope.showMarked;
  };

  $scope.onItemRemove = function(item){
    tasks.remove(item);
    tasks.save();
  };

  $scope.onClickRemove = function(){
    $scope.removeStatus = !$scope.removeStatus;
  };

  function getItemPopup(item, novo){
    $scope.data = {};
    $scope.data.newTask = item.nome;

    $ionicPopup.show({
      title: "Nova Tarefa",
      scope: $scope,
      template: "<input type='text' placeholder='Tarefa' autofocus='true' ng-model='data.newTask'>",
      buttons: [
        {text: "Ok",
        onTap: function(e){
          item.nome = $scope.data.newTask;
          if(novo){
            tasks.add(item);
          }
          tasks.save();
        }},
        {text: "Cancel"}
      ]
    });

    $ionicListDelegate.closeOptionButtons();
  };

  $scope.onItemAdd = function(){
    var item = {
      nome: "",
      finalizada: false
    };
    getItemPopup(item, true);
  };

  $scope.onItemEdit = function(item){
    getItemPopup(item, false);
  }

});
